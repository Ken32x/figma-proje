import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sponsor from '@/components/Sponsor'; 
import Services from "@/components/Servicesintro";
import ServicesCards from "@/components/ServicesCards";
import CTA from "@/components/CTA";
import CaseIntro from "@/components/CaseIntro";
import CaseCards from "@/components/CaseCards";
import Working from "@/components/Working";
import React from "react";
import AccorProcess from "@/components/AccorProcess";
import Team from "@/components/Team"; 



export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Sponsor /> {/* ← Reklam / logo barı burada */}
      <Services />
      <ServicesCards />
      <CTA />
      <CaseIntro />
      <CaseCards />
      <Working />
      <AccorProcess />
      <Team
     
      
     
    
      
    </>
  );
}