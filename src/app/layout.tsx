"use client";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useEffect, useState } from "react";
import "@/../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import { usePathname } from "next/navigation";
import RtlToggle from "./components/common/RtlToggle";
import HomesModal from "./components/modals/HomesModal";
import AskQuestion from "./components/modals/AskQuestion";
import BlogSidebar from "./components/modals/BlogSidebar";
import Login from "./components/modals/Login";
import MobileMenu from "./components/modals/MobileMenu";
import Register from "./components/modals/Register";
import ResetPass from "./components/modals/ResetPass";
import SearchModal from "./components/modals/SearchModal";
import ShareModal from "./components/modals/ShareModal";
import ScrollTop from "./components/common/ScrollTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm.js").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header: any = document.querySelector("header");
      if (window.scrollY > 100) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const [scrollDirection, setScrollDirection] = useState("down");
  useEffect(() => {
    setScrollDirection("up");
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setScrollDirection("down");
        } else {
          // Scrolling up
          setScrollDirection("up");
        }
      } else {
        // Below 250px
        setScrollDirection("down");
      }
      lastScrollY.current = currentScrollY;
    };

    const lastScrollY = { current: window.scrollY };
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    // Close any open modal
    const bootstrap = require("bootstrap"); // dynamically import bootstrap
    const modalElements = document.querySelectorAll(".modal.show");
    modalElements.forEach((modal) => {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    });

    // Close any open offcanvas
    const offcanvasElements = document.querySelectorAll(".offcanvas.show");
    offcanvasElements.forEach((offcanvas) => {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    });
  }, [pathname]); // Runs every time the route changes

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      if (scrollDirection == "up") {
        header.style.top = "0px";
      } else {
        header.style.top = "-185px";
      }
    }
  }, [scrollDirection]);
  useEffect(() => {
    const { WOW } = require("wowjs");
    const wow = new WOW({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    const direction: any = localStorage.getItem("direction");
    if (direction) {
      // document.documentElement.dir = JSON.parse(
      //   direction?.dir
      // );
      document.documentElement.dir = JSON.parse(
        direction
      ).dir;
      document.body.classList.add(
        JSON.parse(direction).dir
      );
    } else {
      document.documentElement.dir = "ltr";
    }
    setTimeout(() => {
      setShowChild(true);
      document.getElementById("preloader")?.classList.add("disabled");
    }, 800);
  });

  return (
    <html lang="en">
      <body className="preload-wrapper">
        <div className="preload preload-container" id="preloader">
          <div className="preload-logo">
            <div className="spinner"></div>
          </div>
        </div>
        <div id="wrapper">{children}</div>
        {showChild ? (
          <>
            <RtlToggle />
            <HomesModal />
            <AskQuestion />
            <BlogSidebar />
            <Login />
            <MobileMenu />
            <Register />
            <ResetPass />
            <SearchModal />
            <ShareModal />
          </>) : (
          " "
        )}


        {/* <Context>
        {showChild ? (
          <>
            <RtlToggle />
            <HomesModal />
            <QuickView />
            <QuickAdd />
            <ProductSidebar />
            <Compare />
            <ShopCart />
            <AskQuestion />
            <BlogSidebar />
            <ColorCompare />
            <DeliveryReturn />
            <FindSize />
            <Login />
            <MobileMenu />
            <Register />
            <ResetPass />
            <SearchModal />
            <ToolbarBottom />
            <ToolbarShop />
            <NewsletterModal />
            <ShareModal />{" "}
          </>
        ) : (
          " "
        )}
      </Context> */}
        <ScrollTop />
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         {children}
//       </body>
//     </html>
//   );
// }
