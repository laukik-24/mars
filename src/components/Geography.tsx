"use client";

import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";

const features = [
  {
    title: "Olympus Mons",
    description: "The tallest volcano in the solar system, standing 22 km high—nearly three times taller than Mount Everest. It has shallow slopes, indicating long-lasting lava flows.",
  },
  {
    title: "Valles Marineris",
    description: "A massive canyon system stretching 4,000 km, making it 10 times longer and 5 times deeper than the Grand Canyon. It likely formed due to tectonic activity and erosion.",
  },
  {
    title: "Polar Ice Caps",
    description: "Mars' poles contain frozen water and dry ice, expanding in winter and shrinking in summer. Large underground ice reserves could support future exploration.",
  },
  {
    title: "Dust Storms",
    description: "The largest in the solar system, these largest storms can cover the entire planet for months, largest reducing sunlight and affecting rover operations.",
  },
];

const Geography = () => {
  return (
    <section id="features" className=" relative py-16 text-white w-full text-center px-4 md:px-20 lg:px-40">
      <motion.h2
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Mars&apos; Geography & Features
      </motion.h2>


      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 0}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.1 + index * 0.2 }} // Added a slight delay to each feature
            viewport={{ once: true }}
          >
            {/* <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300 text-justify">{feature.description}</p>
            </div> */}
            <BackgroundGradient className="w-full rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-300 text-justify mt-8">{feature.description}</p>
            </BackgroundGradient>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Geography;