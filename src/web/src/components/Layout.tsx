import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
