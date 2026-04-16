import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import ArrowButton from "~/components/ArrowButton/ArrowButton";
import Cookie from "~/components/Cookie/Cookie";

import { useState, useEffect } from "react";

import type { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  const [isVisibleBackToTopButton, setIsVisibleBackToTopButton] =
    useState<boolean>(false);
  const [isVisibleCookie, setIsVisibleCookie] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisibleBackToTopButton(window.scrollY > 200);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hasCookie = document.cookie
      .split("; ")
      .some((item) => item.startsWith("cookie="));

    setIsVisibleCookie(!hasCookie);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    setIsVisibleCookie(false);
    document.cookie = "cookie=true; max-age=2592000; path=/; SameSite=Lax";
  };

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />

      <ArrowButton
        onClick={scrollToTop}
        className="back-to-top-button"
        isVisible={isVisibleBackToTopButton}
        variant="dark"
        isScrollButton
      />

      <Cookie onClick={handleClick} isVisible={isVisibleCookie} />
    </>
  );
};

export default Page;
