import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const CanvasModal = DialogPrimitive.Root;

const CanvasModalTrigger = DialogPrimitive.Trigger;

const CanvasModalPortal = DialogPrimitive.Portal;

const CanvasModalClose = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Close>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Close
        ref={ref}
        className={cn(
            "absolute right-6 top-6 rounded-full p-2.5",
            "bg-primary/5 hover:bg-primary/10",
            "shadow-sm hover:shadow-md",
            "transition-all duration-200 ease-in-out",
            "hover:scale-110 active:scale-95",
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2",
            "disabled:pointer-events-none",
            className,
        )}
        {...props}
    >
        <X className="h-4 w-4 transition-transform duration-200 ease-out hover:rotate-90" />
        <span className="sr-only">Close</span>
    </DialogPrimitive.Close>
));
CanvasModalClose.displayName = DialogPrimitive.Close.displayName;

const CanvasModalOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            "fixed inset-0 z-50 bg-gradient-to-br from-black/30 via-black/50 to-black/30 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className,
        )}
        {...props}
    />
));
CanvasModalOverlay.displayName = DialogPrimitive.Overlay.displayName;

const CanvasModalContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <CanvasModalPortal>
        <CanvasModalOverlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-8 duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-2xl",
                "bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-xl",
                "shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_2px_8px_rgba(0,0,0,0.1),0_4px_16px_rgba(0,0,0,0.1)]",
                "border border-primary/10",
                "before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-br before:from-primary/20 before:via-primary/10 before:to-primary/5 before:opacity-0 before:transition-opacity hover:before:opacity-100",
                "after:absolute after:inset-0 after:-z-20 after:rounded-2xl after:bg-gradient-to-br after:from-primary/20 after:via-background after:to-background after:blur-xl",
                className,
            )}
            {...props}
        >
            {children}
            <CanvasModalClose />
        </DialogPrimitive.Content>
    </CanvasModalPortal>
));
CanvasModalContent.displayName = DialogPrimitive.Content.displayName;

const CanvasModalHeader = ({
                               className,
                               ...props
                           }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex flex-col space-y-2 text-center sm:text-left",
            "relative pb-4",
            "after:absolute after:inset-x-0 after:bottom-0 after:h-px",
            "after:bg-gradient-to-r after:from-primary/5 after:via-primary/10 after:to-primary/5",
            className,
        )}
        {...props}
    />
);
CanvasModalHeader.displayName = "CanvasModalHeader";

const CanvasModalFooter = ({
                               className,
                               ...props
                           }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            className,
        )}
        {...props}
    />
);
CanvasModalFooter.displayName = "CanvasModalFooter";

const CanvasModalTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn(
            "text-xl font-semibold leading-none tracking-tight",
            "bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent",
            className,
        )}
        {...props}
    />
));
CanvasModalTitle.displayName = DialogPrimitive.Title.displayName;

const CanvasModalDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn(
            "text-sm text-muted-foreground/90",
            "leading-relaxed",
            className,
        )}
        {...props}
    />
));
CanvasModalDescription.displayName = DialogPrimitive.Description.displayName;

export {
    CanvasModal,
    CanvasModalPortal,
    CanvasModalOverlay,
    CanvasModalClose,
    CanvasModalTrigger,
    CanvasModalContent,
    CanvasModalHeader,
    CanvasModalFooter,
    CanvasModalTitle,
    CanvasModalDescription,
};
