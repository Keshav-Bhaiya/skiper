import { SkiperCard } from "@/components/ui/skiper-card"
import card4 from '/public/images/card4.webp'
import card5 from '/public/images/card5.webp'
import card6 from '/public/images/card6.webp'
import card7 from '/public/images/card7.webp'
import card8 from '/public/images/card8.png'
import card9 from '/public/images/card9.webp'
import { cn } from "@/lib/utils"
import { IceCream } from "lucide-react"

const SpecialCards = () => {
  return (
    <div className="w-full rounded-4xl dark:border-neutral-700  min-h-[55rem] border  max-w-4xl mt-2 mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-8 lg:py-5">
      <div className="mx-auto   flex flex-col items-start justify-center max-w-4xl">
        <div className="flex  gap-2 px-3 py-1.5 sm:px-4 sm:py-2 font-semibold bg-white/90 dark:bg-white/20 border border-black/10 dark:border-white/20 rounded-xl lg:rounded-2xl text-sm sm:text-base  z-10 shadow-sm">
            <IceCream className="w-4 h-4 sm:w-5 sm:h-5 fill-[#9883f5] stroke-neutral-800" />
            <span>Component Preview</span>
          </div>

        <h2 className=" mx-auto dark:text-neutral-100 text-black/80 text-center tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-7 font-bold leading-tight">
          Tailwind + Framer + React
        </h2>
        <h5 className="mx-auto dark:text-neutral-400 text-black/80 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 mb-8 md:mb-10 font-bold">
          Everything you need to ship
        </h5>

        <SkiperCard
          step1img1Class={cn(
            "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
            "left-1/4 top-[57%] rounded-[24px]",
            "max-sm:scale-[120%] max-sm:left-[20%] max-sm:top-[60%]",
            "sm:scale-[140%] sm:left-[22%] sm:top-[58%]",
            "md:scale-[160%] md:left-[35px] md:top-[29%] md:rounded-[24px]",
            "lg:scale-100 lg:left-[35px] lg:top-[29%]",
            "md:group-hover:translate-y-2",
          )}
          step1img2Class={cn(
            "pointer-events-none w-3/5 overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
            "left-[69%] top-[53%] rounded-2xl",
            "max-sm:scale-[120%] max-sm:left-[65%] max-sm:top-[55%]",
            "sm:scale-[140%] sm:left-[67%] sm:top-[54%]",
            "md:scale-[160%] md:left-[calc(50%+35px+1rem)] md:top-[21%] md:rounded-[24px]",
            "lg:scale-100 lg:left-[calc(50%+35px+1rem)] lg:top-[21%]",
            "md:group-hover:-translate-y-6",
          )}
          step2img1Class={cn(
            "pointer-events-none w-[50%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-1/4 top-[69%]",
            "max-sm:scale-[120%] max-sm:left-[20%] max-sm:top-[70%]",
            "sm:scale-[140%] sm:left-[22%] sm:top-[69%]",
            "md:scale-[160%] md:left-[35px] md:top-[30%]",
            "lg:scale-100 lg:left-[35px] lg:top-[30%]",
            "md:group-hover:translate-y-2",
          )}
          step2img2Class={cn(
            "pointer-events-none w-2/5 overflow-hidden rounded-2xl rounded-t-[24px] border border-stone-100/10 transition-all duration-500 group-hover:-translate-y-6 dark:border-stone-700",
            "left-[70%] top-[53%]",
            "max-sm:scale-[110%] max-sm:left-[68%] max-sm:top-[55%]",
            "sm:scale-[120%] sm:left-[69%] sm:top-[54%]",
            "md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
            "lg:scale-100 lg:left-[calc(50%+27px+1rem)] lg:top-1/4",
            "md:group-hover:-translate-y-6",
          )}
          step3imgClass={cn(
            "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-[5%] top-[50%]",
            "sm:left-[5%] sm:top-[48%]",
            "md:left-[68px] md:top-[30%]",
            "lg:left-[68px] lg:top-[30%]",
          )}
          title="Component that pop"
          description="Make your app 🤌"
          image={{
         step1light1: card4,
         step1light2: card5,
         step1dark1: card4,
         step1dark2: card5,
         step2light1: card6,
         step2light2: card7,
         step2dark1: card6,
         step2dark2: card7,
         step3light: card8,
         step3dark: card8,
         step4light: card9,
         alt: "Something",
          }}
        />
      </div>
    </div>
  )
}

export default SpecialCards
