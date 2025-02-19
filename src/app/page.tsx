"use client";
import { useRef } from "react";
import Image from "next/image";
import { Ripple } from "~/components/magicui/ripple";
import { ShinyButton } from "~/components/magicui/shiny-button";
import { AnimatedShinyText } from "~/components/magicui/animated-shiny-text";

export default function HomePage() {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Convert to async function to use 'await'
  const handleButtonClick = async () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset audio to the beginning

      try {
        await audioRef.current.play(); // ✅ Await the play promise
      } catch (error) {
        console.error("Audio playback failed:", error); // Handle errors (e.g., autoplay restrictions)
      }
    }
  };

  return (
    <>
      {/* Centered Logo */}
      <Image
        src="/acmvit-logo.svg"
        alt="ACM VIT Logo"
        width={200}
        height={250}
        className="absolute left-1/2 top-4 z-40 -translate-x-1/2"
      />

      <div className="flex min-h-screen items-center justify-center">
        <div className="relative flex min-h-screen w-full max-w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          {/* Audio Element */}
          <audio ref={audioRef} src="/startup_sound.mp3" preload="auto" />

          {/* Button with Click Handler */}
          <ShinyButton
            className="flex rounded-full"
            onClick={handleButtonClick}
          >
            <svg
              width="96"
              height="96"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3601 6.64001C19.6185 7.8988 20.4754 9.50246 20.8224 11.2482C21.1694 12.994 20.991 14.8034 20.3098 16.4478C19.6285 18.0921 18.4749 19.4976 16.9949 20.4864C15.515 21.4752 13.775 22.0029 11.9951 22.0029C10.2152 22.0029 8.47527 21.4752 6.99529 20.4864C5.51532 19.4976 4.36176 18.0921 3.68049 16.4478C2.99921 14.8034 2.82081 12.994 3.16784 11.2482C3.51487 9.50246 4.37174 7.8988 5.63012 6.64001"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2V12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ShinyButton>

          <Ripple />

          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 text-white transition ease-out hover:text-red-600 hover:duration-300">
            <span>Click the power button to get started!</span>
          </AnimatedShinyText>

          <div className="absolute bottom-10 text-6xl font-bold text-pink-50">
            Organising Committee Selections-2025
          </div>
        </div>
      </div>
    </>
  );
}
