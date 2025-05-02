import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sponsor from '@/components/Sponsor'; // Eğer bu şekilde ayarladıysan
import Services from "@/components/Servicesintro";
import ServicesCards from "@/components/ServicesCards";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Sponsor /> {/* ← Reklam / logo barı burada */}
      <Services />
      <ServicesCards />
      
    </>
  );
}