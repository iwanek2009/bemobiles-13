import { Logo } from "./header/Logo";
import { DesktopNav } from "./header/DesktopNav";
import { MobileMenu } from "./header/MobileMenu";

export const Header = () => {
  return (
    <header className="w-full bg-white border-b relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopNav />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};