import AboutSection from "@/components/pageSections/home/AboutSection";
import ContactSection from "@/components/pageSections/home/ContactSection";
import ExperienceSection from "@/components/pageSections/home/ExperienceSection";
import Footer from "@/components/pageSections/home/Footer";
import Header from "@/components/pageSections/home/Header";
import HeroSection from "@/components/pageSections/home/HeroSection";
import ProjectsSection from "@/components/pageSections/home/ProjectsSection";
import SkillsSection from "@/components/pageSections/home/SkillsSection";
import { experience, navigation, projects, skillGroups } from "@/data/home";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="site-shell">
        <Header navigation={navigation} />
        <HeroSection />
        <AboutSection />
        <SkillsSection skillGroups={skillGroups} />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
