"use client";

import { cn } from "@/utils/cn";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time?: string;
}

let notifications = [
  {
    name: "Responsive Design",
    description: "",
    
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Fast and light weight",
    description: "Magic UI",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Clean and Quality Code",
    description: "Magic UI",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "User Research",
    description: "Magic UI",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "Wireframes and Design",
    description: "Magic UI",
    icon: "📜",
    color: "#1E86FF",
  },
  {
    name: "Development and testing",
    description: "Magic UI",
    icon: "🧪",
    color: "#FF3D71",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
       
        // dark styles
        "transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo() {
  return (
    <div className="relative flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg   p-6 shadow-lg">
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
