import { Footer } from "./Footer";
import { Header } from "./Header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
