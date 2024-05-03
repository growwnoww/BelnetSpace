import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BiCodeBlock } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { MdDesignServices, MdSettingsSuggest } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-full mx-auto px-8 bg-black">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Software Development",
    icon:<BiCodeBlock />


  },
  {
    title: "Web Appliaction",
    icon:<CgWebsite />
  },
  {
    title: "Web Designing",
    icon:<MdDesignServices />
  },
  {
    title: "Android Application",
    icon:<IoLogoAndroid />
  },

  {
    title: "IOS Appliaction",
    icon:<FaApple />

  },
  {
    title: "Smart Contract",
    icon:<VscWorkspaceTrusted />

  },
];
