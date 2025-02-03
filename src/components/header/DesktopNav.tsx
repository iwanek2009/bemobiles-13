import { Link } from "react-router-dom";
import { MegaMenu } from "./MegaMenu";

export const DesktopNav = () => {
  return (
    <nav className="hidden md:flex gap-6 items-center">
      <Link to="/" className="text-black hover:text-primary transition-colors text-base">Home</Link>
      <MegaMenu />
      <Link to="#" className="text-black hover:text-primary transition-colors text-base">Sim Only</Link>
      <Link to="#" className="text-black hover:text-primary transition-colors text-base">Broadband & TV</Link>
    </nav>
  );
};