'use client'
import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"

const AnimatedNumber = () => {
  const [num, setNum] = useState(60)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prev) => {
        if (prev >= 99) setDir(-1)
        if (prev <= 60) setDir(1)
        return prev + dir
      })
    }, 80)
    return () => clearInterval(interval)
  }, [dir])

  return <span>{num}%</span>
}

const Footer = () => {
  return (
    <div className="w-full bg-white dark:bg-black transition-colors duration-300">
      {/* Main Footer Card */}
      <div className="mx-auto mt-16 sm:mt-20 md:mt-24 lg:mt-120 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl lg:rounded-[40px] border border-black/10 dark:border-white/10 p-1 sm:p-1.5 lg:p-2 shadow-lg dark:shadow-2xl">
          <div className="relative mx-auto h-[280px] sm:h-[340px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-[38px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-[#ff4017] to-[#e63512] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
            
            {/* Top tagline */}
            <div className="text-center pt-6 sm:pt-8 md:pt-10 lg:pt-12">
              <p className="text-white font-medium opacity-95 tracking-wide text-sm sm:text-base md:text-lg animate-fade-in">
                Bringing simplicity to the future
              </p>
            </div>

            {/* Counter Badge */}
            <div className="flex justify-center w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 text-white font-medium hover:bg-white/20 transition-all duration-300 cursor-pointer group shadow-lg">
                <Sparkles className="w-4 h-4 text-yellow-300 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
                <span className="text-sm sm:text-base whitespace-nowrap">Next component in</span>
                <span className="font-mono font-bold text-green-300 text-sm sm:text-base">
                  <AnimatedNumber />
                </span>
              </div>
            </div>

            {/* Main half-cut background text */}
            <div className="absolute inset-x-0 -bottom-6 sm:-bottom-8 md:-bottom-12 lg:-bottom-16">
              {/* Stroked version */}
              <h1
                className="text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[180px] 2xl:text-[220px] font-black text-transparent select-none pointer-events-none leading-none"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                  filter: "drop-shadow(0 0 20px rgba(255,64,23,0.7))",
                }}
              >
                skiper/ui
              </h1>
              {/* Filled version with overlay */}
              <h1 className="absolute inset-x-0 bottom-0 text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[180px] 2xl:text-[220px] font-black text-white/80 select-none pointer-events-none mix-blend-overlay leading-none">
                skiper/ui
              </h1>
            </div>

            {/* Animated floating elements */}
            <div className="absolute top-1/2 left-6 sm:left-12 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/50 rounded-full animate-bounce"></div>
            <div className="absolute top-1/3 right-8 sm:right-16 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/3 left-1/4 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/60 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-2/3 right-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/35 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>

            {/* Subtle gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Credit line with proper spacing and layout */}
      <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl  mt-6 sm:mt-8 px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="text-center sm:text-left">
          <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400 leading-relaxed">
            Built by{" "}
            <a
              href="https://x.com/guri_who"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center underline decoration-2 underline-offset-2 text-gray-500 dark:text-white hover:text-[#ff4017] dark:hover:text-[#ff4017] transition-colors duration-200 font-medium"
            >
              gxuri
            </a>
            .{" "}
            <span className="inline-block sm:inline">
              The source code is available on{" "}
              <a
                href="https://skiper-ui.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center underline decoration-2 underline-offset-2 text-gray-500 dark:text-white hover:text-[#ff4017] dark:hover:text-[#ff4017] transition-colors duration-200 font-medium"
              >
                GitHub
              </a>
              .
            </span>
          </p>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        @media (max-width: 640px) {
          .animate-bounce {
            animation-duration: 2s;
          }
        }
      `}</style>
    </div>
  )
}

export default Footer