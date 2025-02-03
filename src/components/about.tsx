"use client";

import { Card } from "./ui/card"; // ShadCN UI
import { motion } from "framer-motion";
import { Users, Globe, ShieldCheck, Rocket } from "lucide-react"; // Icons
import {Statistic}  from "./ui/stat"; // Animated Statistic

const stats = [
    { title: "Diameter", value: 6779 , suffix:"km", description: "About half of Earth's Diameter", icon: <Users className="w-10 h-10 text-purple-400" /> },
    { title: "Gravity", value: 38, suffix:"% of Earth's", description: "Meaning you’d weigh much less on Mars", icon: <Globe className="w-10 h-10 text-blue-400" /> },
    { title: "Temperature", value: -63, suffix:"° C", description: "making it extremely cold", icon: <ShieldCheck className="w-10 h-10 text-green-400" /> },
    { title: "Length of a year", value: 687, suffix:" Earth days", description: "nearly twice as long as a year on Earth", icon: <Rocket className="w-10 h-10 text-orange-400" /> },
];

export function AboutMars() {
    return (<>
        
        <section className=" relative py-20 text-white flex flex-col items-center mb-0">
            {/* Title */}
            
            <motion.h2
                className="text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-5 py-3"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
               About Mars
            </motion.h2>

            <p className="text-4xl font-bold text-white mb-12 max-w-[700px] mx-auto text-center">
            Quick Facts About Mars
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl px-10">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-gray-950 border border-gray-700 rounded-3xl shadow-2xl p-8 flex justify-between items-center w-full md:w-[450px] transition-transform">
                            <div>
                                <h3 className="text-lg font-medium text-gray-300">{stat.title}</h3>
                                <div className="text-2xl md:text-3xl text-white font-bold">
                                    <Statistic end={stat.value} suffix={stat.suffix} />
                                </div>
                                {/* <p className="text-4xl font-bold text-white">{stat.value}</p> */}
                                <p className="text-md text-gray-400">{stat.description}</p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
            
        </section>
</>
    );
};