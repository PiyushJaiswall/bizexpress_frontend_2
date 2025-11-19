import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const Timeline = ({ data }) => {
  return (
    <div className="w-full">
      {data.map((item, index) => (
        <div key={index} className="flex gap-10">
          <div className="sticky flex flex-col items-center top-40 self-start">
            <div className="absolute left-3 h-full w-[1px] bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
            <div className="h-10 w-10 rounded-full bg-black border border-neutral-800 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700" />
            </div>
          </div>
          <div className="relative pl-20 pr-4 md:pl-4 w-full">
            <h3 className="text-2xl font-bold mb-4 text-white">
              {item.title}
            </h3>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
