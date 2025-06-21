'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

type PixelatedImageRevealProps = {
    defaultImg: string;
    revealImg: string;
    alt?: string;
    gridSize?: number;
    animationDuration?: number;
    className?: string;
    pixelColor?: string;
    staggerFrom?: 'random' | 'start' | 'end' | 'center' | 'edges';
    onReveal?: () => void;
    onHide?: () => void;
    disabled?: boolean;
};

export default function PixelatedImageReveal({
    defaultImg,
    revealImg,
    alt = '',
    gridSize = 7,
    animationDuration = 0.3,
    className = '',
    pixelColor = 'currentColor',
    staggerFrom = 'random',
    onReveal,
    onHide,
    disabled = false,
}: PixelatedImageRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const pixelGridRef = useRef<HTMLDivElement>(null);
    const activeCardRef = useRef<HTMLDivElement>(null);
    const isActiveRef = useRef(false);
    const pixelsRef = useRef<HTMLDivElement[]>([]);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);
    const isTouchDeviceRef = useRef(false);

    // Detect touch device once
    useEffect(() => {
        isTouchDeviceRef.current =
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            window.matchMedia('(pointer: coarse)').matches;
    }, []);

    // Create pixels grid
    const createPixelGrid = useCallback(() => {
        if (!pixelGridRef.current) return;

        // Clear existing pixels
        pixelsRef.current.forEach(pixel => pixel.remove());
        pixelsRef.current = [];

        const pixelSize = 100 / gridSize;
        const fragment = document.createDocumentFragment();

        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const pixel = document.createElement('div');
                pixel.className = 'pixelated-image-card__pixel';

                // Use CSS custom properties for better performance
                pixel.style.cssText = `
                    position: absolute;
                    width: ${pixelSize}%;
                    height: ${pixelSize}%;
                    left: ${col * pixelSize}%;
                    top: ${row * pixelSize}%;
                    background-color: ${pixelColor};
                    display: none;
                    will-change: display;
                `;

                pixelsRef.current.push(pixel);
                fragment.appendChild(pixel);
            }
        }

        pixelGridRef.current.appendChild(fragment);
    }, [gridSize, pixelColor]);

    // Animation function
    const animatePixels = useCallback((activate: boolean) => {
        if (disabled || !pixelsRef.current.length || !activeCardRef.current) return;

        const wasActive = isActiveRef.current;
        isActiveRef.current = activate;

        // Kill existing timeline
        if (timelineRef.current) {
            timelineRef.current.kill();
        }

        // Create new timeline
        const tl = gsap.timeline();
        timelineRef.current = tl;

        const totalPixels = pixelsRef.current.length;
        const staggerDuration = animationDuration / totalPixels;

        // Reset pixels
        gsap.set(pixelsRef.current, { display: 'none' });

        // Animate pixels appearing
        tl.to(pixelsRef.current, {
            display: 'block',
            duration: 0,
            stagger: {
                each: staggerDuration,
                from: staggerFrom,
            },
        })
            // Show/hide the reveal image
            .call(() => {
                if (activeCardRef.current) {
                    activeCardRef.current.style.display = activate ? 'block' : 'none';
                }
                // Call callbacks
                if (activate && !wasActive && onReveal) {
                    onReveal();
                } else if (!activate && wasActive && onHide) {
                    onHide();
                }
            }, [], animationDuration)
            // Animate pixels disappearing
            .to(pixelsRef.current, {
                display: 'none',
                duration: 0,
                stagger: {
                    each: staggerDuration,
                    from: staggerFrom,
                },
            }, animationDuration);

    }, [disabled, animationDuration, staggerFrom, onReveal, onHide]);

    // Event handlers
    const handleInteraction = useCallback(() => {
        if (isTouchDeviceRef.current) {
            animatePixels(!isActiveRef.current);
        }
    }, [animatePixels]);

    const handleMouseEnter = useCallback(() => {
        if (!isTouchDeviceRef.current && !isActiveRef.current) {
            animatePixels(true);
        }
    }, [animatePixels]);

    const handleMouseLeave = useCallback(() => {
        if (!isTouchDeviceRef.current && isActiveRef.current) {
            animatePixels(false);
        }
    }, [animatePixels]);

    // Setup component
    useEffect(() => {
        createPixelGrid();

        const container = containerRef.current;
        if (!container) return;

        // Add event listeners
        if (isTouchDeviceRef.current) {
            container.addEventListener('click', handleInteraction);
        } else {
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
        }

        // Cleanup
        return () => {
            if (container) {
                container.removeEventListener('click', handleInteraction);
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            }

            // Kill any running animations
            if (timelineRef.current) {
                timelineRef.current.kill();
            }

            // Clean up pixels
            pixelsRef.current.forEach(pixel => pixel.remove());
            pixelsRef.current = [];
        };
    }, [createPixelGrid, handleInteraction, handleMouseEnter, handleMouseLeave]);

    // Update pixel grid when dependencies change
    useEffect(() => {
        createPixelGrid();
    }, [createPixelGrid]);

    return (
        <div
            ref={containerRef}
            className={`relative w-full max-w-md aspect-square rounded-lg overflow-hidden bg-neutral-800 text-primary dark:bg-neutral-900 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                } ${className}`}
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-label={`Interactive image reveal: ${alt}`}
            onKeyDown={(e) => {
                if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    handleInteraction();
                }
            }}
        >
            {/* Default image */}
            <div className="absolute inset-0">
                <Image
                    src={defaultImg}
                    alt={alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* Reveal image */}
            <div
                ref={activeCardRef}
                className="absolute inset-0 hidden"
            >
                <Image
                    src={revealImg}
                    alt={alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* Pixel grid */}
            <div
                ref={pixelGridRef}
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
            />
        </div>
    );
}