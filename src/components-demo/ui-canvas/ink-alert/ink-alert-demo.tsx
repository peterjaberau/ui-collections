import * as React from "react";
import { Button } from "@/components/ui-shadcn/button";
import { InkAlert } from "@/components/ui-canvas/ink-alert";
import {useState} from "react";

type Alert = { id: number; variant: "default" | "destructive" | "success" | "warning"; duration?: number; position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"; };



export const InkAlertDemo = () => {
    const [alerts, setAlerts] = useState<Array<Alert>>([]);
    let nextId = 0;

    const addAlert = (
        variant: "default" | "destructive" | "success" | "warning",
        duration?: number,
        position: Alert["position"] = "top-right",
    ) => {
        setAlerts((prev) => [
            ...prev,
            { id: nextId++, variant, duration, position },
        ]);
    };

    const removeAlert = (id: number) => {
        setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    };

    return (
        <div className="z-50 space-y-8">
            <div className="flex flex-wrap gap-4">
                <div className="space-y-2">
                    <h3 className="font-medium">Top Positions</h3>
                    <div className="flex gap-2">
                        <Button onClick={() => addAlert("default", 5000, "top-left")}>
                            Top Left
                        </Button>
                        <Button onClick={() => addAlert("success", 5000, "top-center")}>
                            Top Center
                        </Button>
                        <Button onClick={() => addAlert("destructive", 5000, "top-right")}>
                            Top Right
                        </Button>
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="font-medium">Bottom Positions</h3>
                    <div className="flex gap-2">
                        <Button onClick={() => addAlert("warning", 5000, "bottom-left")}>
                            Bottom Left
                        </Button>
                        <Button onClick={() => addAlert("default", 5000, "bottom-center")}>
                            Bottom Center
                        </Button>
                        <Button onClick={() => addAlert("success", 5000, "bottom-right")}>
                            Bottom Right
                        </Button>
                    </div>
                </div>
            </div>

            {alerts.map(({ id, variant, duration, position }) => (
                <InkAlert
                    key={id}
                    variant={variant}
                    duration={duration}
                    position={position}
                    onClose={() => removeAlert(id)}
                >
                    <p className="text-lg font-medium">
                        {variant === "default" && "Information flows like ink"}
                        {variant === "destructive" && "Error spilled across the canvas"}
                        {variant === "success" && "Success painted in strokes"}
                        {variant === "warning" && "Warning drips with caution"}
                    </p>
                    <p className="text-sm opacity-90">
                        Click the X to watch it dissolve away.
                    </p>
                </InkAlert>
            ))}
        </div>
    );
}