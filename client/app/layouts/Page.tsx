import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";

import BackToTopButton from "~/components/BackToTopButton/BackToTopButton";

import type { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />

      <BackToTopButton />
    </>
  );
};

export default Page;
