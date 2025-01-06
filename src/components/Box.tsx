import * as React from "react";
import { cn } from "@/lib/utils";

interface BoxProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const Box: React.FC<BoxProps> = ({ title, children, className }) => {

    return (
        <div className={cn("p-4 border rounded-lg shadow-md w-full", (className) ?? "")} >
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            {children}
        </div>
    );
};
