"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Viking 1 & 2 (1976)",
    description:
      "NASA's first successful landers on Mars, sending back the first close-up images of the surface and conducting soil experiments to detect signs of life.",
    color: "bg-blue-500",
    // icon: <Users className="w-8 h-8 text-white" />,
  },
  {
    title: "Mars Pathfinder & Sojourner (1997)",
    description:
      "Pathfinder carried the first-ever rover, Sojourner, which demonstrated mobility on Mars and analyzed its rocks, proving that the planet had a watery past.",
    color: "bg-green-500",
    // icon: <Settings className="w-8 h-8 text-white" />,
  },
  {
    title: "Spirit & Opportunity (2004 – 2019)",
    description:
      "Twin rovers designed for 90 days, but exceeded expectations, with Opportunity lasting 15 years! They discovered signs of past water, including evidence of ancient riverbeds and minerals formed in wet conditions.",
    color: "bg-orange-500",
    // icon: <Rocket className="w-8 h-8 text-white" />,
  },
  {
    title: "Phoenix Lander (2008)",
    description:
      "Landed near Mars’ north polar region north , but exceeded expectations,  polar region north polar region and confirmed the presence of frozen water beneath the surface.",
    color: "bg-purple-500",
    // icon: <CheckCircle className="w-8 h-8 text-white" />,
  },
];

export function Explore() {
  return (
    <section className="w-full h-full py-16 px-4 flex flex-col items-center  text-white">
      {/* Title and Subtitle */}
      <motion.h2
        className="text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-5 py-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Mars Exploration
      </motion.h2>

      <motion.p
        className="text-4xl font-bold text-gray-300 mb-12 max-w-[700px] mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Pioneering Mars: Early Missions That Shaped Exploration
      </motion.p>

      {/* Steps Section with 2 items per row */}
      <div className="w-full max-w-4xl grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-orange-900/70 to-purple-600/70 border border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300 flex flex-col items-center gap-6 relative">
              {/* Step Number */}
              <div
                className="absolute top-[-12px] left-[-12px] w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-900 text-white font-bold text-2xl shadow-lg"
              >
                {index + 1}
              </div>

              <CardContent className="p-0 text-center ">
                <h3 className="text-2xl font-semibold text-gray-200">{step.title}</h3>
                <p className="text-gray-300 text-lg mt-2">{step.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}