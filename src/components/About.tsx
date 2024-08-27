import { motion } from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./ServiceCard";
import avatar from "../assets/avatar.jpg";

const About = () => {
  return (
    <>
      <div className="flex gap-6 justify-between flex-col lg:flex-row">
        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like ReactJS, NextJS, and .
            I'm a quick learner and collaborate closely with clients to create
            efficient, scalable. Let's work together to bring your ideas to life!
          </motion.p>
        </div>
        <motion.div  variants={fadeIn("left", "spring", 0.2, 0.55)} className="w-[300px] hidden lg:block">
          <img className="rounded-lg" src={avatar} alt="avatar" />
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center sm:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
