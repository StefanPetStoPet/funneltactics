"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


  

const lineVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: i * 0.25,
      ease: "easeOut",
    },
  }),
};

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, // controls left → right sequencing
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -80,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      type: "spring",
  stiffness: 220,
  damping: 12,
  mass: 1.2,
    },
  },
};

const ScrollRevealText = () => {
  const ref = useRef(null);

  const text =
    "We help businesses increase conversions through CRO-driven redesigns that improve UX. SEO improvements increase high-intent traffic that converts. We reduce abandoned carts and friction to maximize revenue.";

  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.4"],
  });

  return (
    <p
      ref={ref}
      className="max-w-5xl pt-10 pb-30 mx-auto text-center mt-10 text-white/90 text-base md:text-3xl leading-relaxed flex flex-wrap justify-center gap-x-2"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        const opacity = useTransform(
          scrollYProgress,
          [start, end],
          [0.2, 1]
        );

        return (
          <motion.span key={i} style={{ opacity }}>
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

export default function StatsSection() {
  const stats = [
    {
      value: "2–3×",
      title: "Higher Conversion Rate",
      desc: "Well-designed websites convert significantly more visitors into customers.",
    },
    {
      value: "+10–30%",
      title: "Increase in Order Value",
      desc: "Better structure and UX naturally lead to higher purchase value.",
    },
    {
      value: "Up to 2×",
      title: "More Revenue per Visitor",
      desc: "Combining UX, CRO and clarity results in stronger overall performance.",
    },
  ];

  return (
    <section className="relative z-10 w-full rounded-t-[70px] bg-gradient-to-br from-[#00003f] via-[#1206b6] to-[#4508c0]">
      
<div
  className="w-full"
  style={{
    backgroundImage: "url('/backgroundLines.png')",
    backgroundPosition: "top",
    backgroundSize: "cover",
  }}
>
  <div className="relative max-w-6xl mx-auto pt-16 pb-8 flex flex-col items-center gap-16">
      <div className="max-w-6xl mx-auto pt-16 flex flex-col items-center gap-16">



        {/* TITLE */}
    


    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
      className="text-center"
    >
      {/* Line 1 */}
      <div className="overflow-hidden pb-2">
        <motion.h2
          custom={0}
          variants={lineVariant}
          className="text-6xl font-semibold text-white"
        >
          Design is not just about looks
        </motion.h2>
      </div>

      {/* Line 2 */}
      <div className="overflow-hidden mt-2">
        <motion.span
          custom={1}
          variants={lineVariant}
          className="text-5xl text-white block"
        >
          Its about performance.
        </motion.span>
      </div>
    </motion.div>
  

        {/* STATS */}
        <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={item}
          className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-8 shadow-[0_5px_20px_rgba(255,255,255,0.25)] text-center"
        >
          <div className="text-5xl font-semibold text-white mb-4">
            {stat.value}
          </div>

          <h3 className="text-xl text-white font-medium mb-2">
            {stat.title}
          </h3>

          <p className="text-white/60 text-sm leading-relaxed">
            {stat.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
</div>
</div>
 </div>
<ScrollRevealText />
        {/* DISCLAIMER */}
        {/* <p className="text-white/40 text-sm text-center max-w-xl">
          *Based on industry benchmarks and CRO research
        </p> */}

     
    </section>
  );
}