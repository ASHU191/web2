'use client';

import Navigation from '@/widgets/Navigation';
import Hero from '@/widgets/Hero';
import About from '@/widgets/About';
import Services from '@/widgets/Services';
import Approach from '@/widgets/Approach';
import Project from '@/widgets/Project';
import Sliding from '@/widgets/Sliding';

import CallToAction from '@/widgets/CallToAction';
import Leader from '@/widgets/Leader';
import ShadowCursor from '@/components/ui/ShadowCursor'


export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Project />
      <Services />
      <Leader />
      <Approach />
      <Sliding />
      
      
      <CallToAction />
      
      {/* disable cursor here */}
      <ShadowCursor />
    </>
  );
}
