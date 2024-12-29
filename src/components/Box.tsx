import * as React from "react";

interface BoxProps {
    title: string;
    children: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({ title, children }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            {children}
        </div>
    );
};