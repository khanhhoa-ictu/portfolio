import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";

function ServiceCard({ index, title, icon }: any) {
  return (
    <Tilt className="w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <div
            className={`w-16 h-16 ${
              (title === "NextJS" || title === "TypeScript") && "bg-white"
            } ${title === "NextJS" && "rounded-full"}`}
          >
            <img
              src={icon}
              alt="web-development"
              className="w-16 h-16 object-contain"
            />
          </div>

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default ServiceCard;
