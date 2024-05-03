import { CardHoverEffectDemo } from "@/components/hero/CardHoverEffectDemo";
import { GlobeDemo } from "@/components/hero/GlobeDemo";
import { GridBackgroundDemo } from "@/components/hero/GridBackgroundDemo";
import MarqueeDemo from "@/components/hero/MarqueeDemo";
import { SpotlightPreview } from "@/components/hero/SpotlightPreview";
import { TextShimmerDemo } from "@/components/hero/TextShimmerDemo";
import { WavyBackgroundDemo } from "@/components/hero/WavyBackgroundDemo";
import Navbar from "@/components/Navbar/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";

export default function Home() {
  return (
  <div className="bg-black">
    
    <SpotlightPreview/>
    <CardHoverEffectDemo/>
    <GridBackgroundDemo/>
    <MarqueeDemo/>
    <GlobeDemo/>
  </div>
  );
}
