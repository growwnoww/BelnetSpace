import { cn } from "@/utils/cn"
import TextShimmer from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export async function TextShimmerDemo() {
  return (
    <div className="z-10 flex min-h-[6rem] items-center justify-center">
      <div
        className={cn(
          "group rounded-full border  text-base text-white transition-all ease-in hover:cursor-pointer  border-white/5 bg-neutral-900 hover:bg-neutral-800",
        )}
      >
        <TextShimmer className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-white  hover:duration-300 hover:text-neutral-400">
          <span>✨ Introducing BelNet Space</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </TextShimmer>
      </div>
    </div>
  );
}
