
import * as React from "react";
import { ScrollArea } from "@/components/ui-shadcn/scroll-area";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Search, Grid2x2, List } from "lucide-react";
import { useTheme } from "next-themes";
import { SketchInput } from "@/components/ui-canvas/sketch-input";
import {
    CanvasModal,
    CanvasModalContent,
    CanvasModalDescription,
    CanvasModalHeader,
    CanvasModalTitle,
} from "@/components/ui-canvas/canvas-modal";

export interface TextureItem {
    id: string;
    name: string;
    url: string;
    thumbnail: string;
    description?: string;
    tags?: string[];
    dimensions?: {
        width: number;
        height: number;
    };
    fileSize?: string;
}

export interface TextureBrowserProps {
    /** Array of texture items to display */
    textures: TextureItem[];
    /** Callback when a texture is selected */
    onSelect?: (texture: TextureItem) => void;
    /** Initial selected texture ID */
    defaultSelected?: string;
    /** Grid or list view mode */
    defaultViewMode?: "grid" | "list";
    /** Number of columns in grid view for different breakpoints */
    gridCols?: {
        default: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    /** Show texture details (dimensions, file size) */
    showDetails?: boolean;
    /** HTML div element props */
    className?: string;
    style?: React.CSSProperties;
}

export function TextureBrowser({
                                   textures,
                                   onSelect,
                                   defaultSelected,
                                   defaultViewMode = "grid",
                                   gridCols = {
                                       default: 2,
                                       md: 3,
                                       lg: 4,
                                   },
                                   showDetails = true,
                                   className,
                                   style,
                                   ...props
                               }: TextureBrowserProps) {
    const { theme } = useTheme();
    const [searchQuery, setSearchQuery] = React.useState("");
    const [selectedTexture, setSelectedTexture] = React.useState<string | null>(
        defaultSelected || null,
    );
    const [viewMode, setViewMode] = React.useState<"grid" | "list">(
        defaultViewMode,
    );
    const [previewTexture, setPreviewTexture] =
        React.useState<TextureItem | null>(null);

    const filteredTextures = React.useMemo(
        () =>
            textures.filter(
                (texture) =>
                    texture.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    texture.tags?.some((tag) =>
                        tag.toLowerCase().includes(searchQuery.toLowerCase()),
                    ) ||
                    texture.description
                        ?.toLowerCase()
                        .includes(searchQuery.toLowerCase()),
            ),
        [textures, searchQuery],
    );

    const handleTextureClick = React.useCallback(
        (texture: TextureItem) => {
            setSelectedTexture(texture.id);
            setPreviewTexture(texture);
            onSelect?.(texture);
        },
        [onSelect],
    );

    const gridColsClass = React.useMemo(() => {
        const cols = [];
        cols.push(`grid-cols-${gridCols.default}`);
        if (gridCols.sm) cols.push(`sm:grid-cols-${gridCols.sm}`);
        if (gridCols.md) cols.push(`md:grid-cols-${gridCols.md}`);
        if (gridCols.lg) cols.push(`lg:grid-cols-${gridCols.lg}`);
        if (gridCols.xl) cols.push(`xl:grid-cols-${gridCols.xl}`);
        return cols.join(" ");
    }, [gridCols]);

    return (
        <div
            className={cn(
                "relative flex flex-col gap-4 rounded-lg border p-4",
                "dark:bg-background dark:text-foreground",
                className,
            )}
            style={style}
            {...props}
        >
            <div className="border-b p-4 dark:border-gray-800">
                {/* Search and view controls */}
                <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 z-20 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <SketchInput
                            variant="ink"
                            className="pl-10"
                            placeholder="Search textures..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button
                        className={cn(
                            "rounded-md p-2 hover:bg-accent",
                            viewMode === "grid" && "bg-accent",
                        )}
                        onClick={() => setViewMode("grid")}
                    >
                        <Grid2x2 className="h-4 w-4" />
                    </button>
                    <button
                        className={cn(
                            "rounded-md p-2 hover:bg-accent",
                            viewMode === "list" && "bg-accent",
                        )}
                        onClick={() => setViewMode("list")}
                    >
                        <List className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Texture grid/list */}
            <ScrollArea className="h-[500px]">
                <div
                    className={cn(
                        viewMode === "grid"
                            ? `grid gap-4 ${gridColsClass}`
                            : "flex flex-col gap-4",
                    )}
                >
                    {filteredTextures.map((texture) => (
                        <div
                            key={texture.id}
                            className={cn(
                                "transition-all duration-200",
                                viewMode === "grid"
                                    ? [
                                        "aspect-square rounded-lg",
                                        "border-2 dark:border-gray-800",
                                        "hover:border-primary dark:hover:border-primary",
                                        selectedTexture === texture.id
                                            ? "border-primary dark:border-primary"
                                            : "border-transparent",
                                    ]
                                    : [
                                        "flex h-20 items-center gap-4",
                                        "rounded-lg border dark:border-gray-800",
                                        "hover:bg-accent dark:hover:bg-accent",
                                        "p-2",
                                        selectedTexture === texture.id &&
                                        "bg-accent dark:bg-accent",
                                    ],
                            )}
                            onClick={() => handleTextureClick(texture)}
                        >
                            {viewMode === "grid" ? (
                                <div className="relative aspect-square">
                                    <Image
                                        src={texture.thumbnail}
                                        alt={texture.name}
                                        fill
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                            ) : (
                                <>
                                    <div className="relative h-16 w-16">
                                        <Image
                                            src={texture.thumbnail}
                                            alt={texture.name}
                                            fill
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{texture.name}</h3>
                                        {showDetails && (
                                            <div className="mt-1 text-sm text-muted-foreground">
                                                {texture.dimensions && (
                                                    <p>
                                                        {texture.dimensions.width} x{" "}
                                                        {texture.dimensions.height}px
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </ScrollArea>

            {/* Full-screen preview */}
            <CanvasModal
                open={previewTexture !== null}
                onOpenChange={() => setPreviewTexture(null)}
            >
                <CanvasModalContent className="max-h-[90vh] max-w-[90vw] p-0 transition-all duration-300 animate-in fade-in-0 zoom-in-95">
                    {previewTexture && (
                        <div className="relative flex h-[85vh] w-full flex-col">
                            <div className="relative flex-1 overflow-hidden">
                                <Image
                                    src={previewTexture.url}
                                    alt={previewTexture.name}
                                    className="object-contain transition-transform duration-300 hover:scale-105"
                                    fill
                                    quality={100}
                                    priority
                                    sizes="(max-width: 768px) 100vw, 90vw"
                                />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 bg-background/80 p-4 backdrop-blur transition-transform duration-300 animate-in slide-in-from-bottom">
                                <CanvasModalHeader>
                                    <CanvasModalTitle>{previewTexture.name}</CanvasModalTitle>
                                    {previewTexture.description && (
                                        <CanvasModalDescription>
                                            {previewTexture.description}
                                        </CanvasModalDescription>
                                    )}
                                </CanvasModalHeader>
                                {showDetails && (
                                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                                        {previewTexture.dimensions && (
                                            <p>
                                                Dimensions: {previewTexture.dimensions.width} x{" "}
                                                {previewTexture.dimensions.height}px
                                            </p>
                                        )}
                                        {previewTexture.fileSize && (
                                            <p>Size: {previewTexture.fileSize}</p>
                                        )}
                                        {previewTexture.tags && previewTexture.tags.length > 0 && (
                                            <p>Tags: {previewTexture.tags.join(", ")}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </CanvasModalContent>
            </CanvasModal>
        </div>
    );
}
