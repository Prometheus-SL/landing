import Background from "@/components/ui/componentes_main/background";
import { Navbar } from "@/components/ui/componentes_main/navbar";
import { HeroSection } from "@/components/ui/componentes_main/hero_section";
import { FeaturesSection } from "@/components/ui/componentes_main/features_section";
import { StatsSection } from "@/components/ui/componentes_main/stats_section";
import { ScreenshotsSection } from "@/components/ui/componentes_main/screenshots_section";
import { TechSection } from "@/components/ui/componentes_main/tech_section";
import { GithubSection } from "@/components/ui/componentes_main/github_section";
import { TeamSection } from "@/components/ui/componentes_main/team_section";
import { IntegrationsSection } from "@/components/ui/componentes_main/integrations_section";
import { CtaSection } from "@/components/ui/componentes_main/cta_section";
import { FooterRedesigned } from "@/components/ui/componentes_main/footer_redesigned";

const HomePage = () => {
  return (
    <Background>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <IntegrationsSection />
        <TechSection />
        <GithubSection />
        <TeamSection />
        <CtaSection />
        <FooterRedesigned />
      </div>
    </Background>
  );
};
export default HomePage;
