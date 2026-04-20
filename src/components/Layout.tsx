import { Outlet } from "react-router-dom";
import Background from "@/components/ui/componentes_main/background";
import { Navbar } from "@/components/ui/componentes_main/navbar";
import { FooterRedesigned } from "@/components/ui/componentes_main/footer_redesigned";

export function Layout() {
  return (
    <Background>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Outlet />
        <FooterRedesigned />
      </div>
    </Background>
  );
}
