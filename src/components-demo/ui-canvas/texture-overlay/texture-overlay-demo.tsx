import * as React from "react";
import { TextureOverlay } from "@/components/ui-canvas/texture-overlay";


export const TextureOverlayDemo = () => {
    return (
        <div className="grid gap-8">
            {/* Modern Card with Glass Effect */}
            <TextureOverlay
                texture="glass"
                intensity="light"
                blendMode="screen"
                className="rounded-xl bg-gradient-to-br from-white/40 to-white/10 p-6 shadow-lg backdrop-blur"
            >
                <div className="text-2xl font-bold text-gray-800">Glass Morphism</div>
                <p className="mt-2 text-gray-600">
                    Modern glass effect with subtle texture
                </p>
            </TextureOverlay>

            {/* Interactive Holographic Card */}
            <TextureOverlay
                texture="holographic"
                intensity="medium"
                blendMode="soft-light"
                animate
                className="group rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-6 shadow-lg transition-all hover:shadow-xl"
            >
                <div className="text-2xl font-bold text-white">Holographic Effect</div>
                <p className="mt-2 text-white/90">
                    Hover to reveal the pure gradient underneath
                </p>
            </TextureOverlay>

            {/* Frosted Card */}
            <TextureOverlay
                texture="frost"
                intensity="medium"
                blendMode="soft-light"
                className="rounded-xl bg-white/30 p-6 shadow-lg backdrop-blur-sm"
            >
                <div className="text-2xl font-bold text-gray-800">Frosted Glass</div>
                <p className="mt-2 text-gray-600">
                    Frosted effect with crystalline texture
                </p>
            </TextureOverlay>

            {/* Paper Card */}
            <TextureOverlay
                texture="paper"
                intensity="medium"
                blendMode="multiply"
                className="rounded-xl bg-amber-50 p-6 shadow-lg"
            >
                <div className="text-2xl font-bold text-amber-900">Paper Texture</div>
                <p className="mt-2 text-amber-800">
                    Subtle paper texture for a natural feel
                </p>
            </TextureOverlay>

            {/* Grain Effect */}
            <TextureOverlay
                texture="grain"
                intensity="light"
                blendMode="overlay"
                className="rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 shadow-lg"
            >
                <div className="text-2xl font-bold text-white">Film Grain</div>
                <p className="mt-2 text-white/90">
                    Subtle grain effect for depth and character
                </p>
            </TextureOverlay>

            {/* Noise Effect */}
            <TextureOverlay
                texture="noise"
                intensity="light"
                blendMode="overlay"
                className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-lg"
            >
                <div className="text-2xl font-bold text-white">Noise Texture</div>
                <p className="mt-2 text-gray-300">
                    Digital noise pattern for modern aesthetics
                </p>
            </TextureOverlay>
        </div>
    );
}