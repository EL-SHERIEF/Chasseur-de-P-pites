'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="home" className="shadow-xl relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px] text-center" ref={ref}>
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="mb-6 text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl leading-tight">
            Surveillez vos publicités en temps réel
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white opacity-90">
            Optimisez vos campagnes publicitaires grâce à notre plateforme de surveillance intelligente. Recevez des alertes instantanées et prenez des décisions éclairées.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link href="/signin" className="inline-flex items-center rounded-full bg-white px-10 py-4 text-lg font-medium text-dark shadow-xl transition duration-300 hover:bg-gray-200 hover:scale-105">
              Commencer maintenant
            </Link>
            <Link href="/about" className="inline-flex items-center border border-white px-10 py-4 text-lg font-medium text-white transition duration-300 hover:bg-white hover:text-dark rounded-full hover:scale-105">
              En savoir plus
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-5xl pointer-events-none">
          <motion.div style={{ y: y1 }} className="absolute sm:-top-48 sm:-left-48 sm:w-96">
            <Image
            src="/images/hero/hero-image.jpg"
            alt="Hero 1"
              className="rounded-3xl shadow-2xl"
              width={400}
              height={250}
              priority
            />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute sm:-top-64 sm:-right-48 -top-32 -right-32 sm:w-96">
            <Image
            src="/images/hero/hero-image.jpg"
            alt="Hero 2"
              className="rounded-3xl shadow-2xl"
              width={450}
              height={280}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;