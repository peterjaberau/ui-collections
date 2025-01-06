import * as React from "react";
import {useState} from "react";
import {SketchInput} from "@/components/ui-canvas/sketch-input";


export const SketchInputDemo = () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");

    return (
        <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Default Input</h3>
                <SketchInput
                    placeholder="Type something..."
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                    inkFlow
                />
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Brush Stroke Input</h3>
                <SketchInput
                    variant="brush"
                    placeholder="Paint your thoughts..."
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                    inkFlow
                />
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Error State</h3>
                <SketchInput
                    variant="ink"
                    state="error"
                    placeholder="Something's wrong..."
                    value={value3}
                    onChange={(e) => setValue3(e.target.value)}
                    inkFlow
                />
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Success State</h3>
                <SketchInput
                    variant="ink"
                    state="success"
                    placeholder="Perfect!"
                    value={value4}
                    onChange={(e) => setValue4(e.target.value)}
                    inkFlow
                />
            </div>
        </div>
    );
}