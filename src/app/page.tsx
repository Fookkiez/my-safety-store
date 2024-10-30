import Image from "next/image";
import styles from "./page.module.css";
import Topbar from "./components/headers/Topbar";
import type { Metadata } from "next";
import Header from "./components/headers/Header";
import Hero from "./components/homes/Hero";
import Marquee from "./components/homes/Marquee";
import Categories from "./components/homes/Categories";
import Products from "./components/homes/Products";
import Testimonials from "./components/homes/Testimonials";
import Lookbook from "./components/homes/Lookbook";
import Features from "./components/homes/Features";
import Footer from "./components/footers/Footer";
import Collections from "./components/homes/Collections";
import Features2 from "./components/homes/Features2";

// export const metadata = {
//   title: "Home 1 || Ecomus - Ultimate Nextjs Ecommerce Template",
//   description: "Ecomus - Ultimate Nextjs Ecommerce Template",
// };
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <Marquee />
      <Categories />
      <Products />
      {/* <Lookbook /> */}
      <Testimonials />
      {/* <Brands /> */}
      {/* <ShopGram /> */}
      <Features />
      <Features2 />
      <Footer />
    </>

  );
}



// <div className={styles.page}>
//   <main className={styles.main}>
//     <Image
//       className={styles.logo}
//       src="https://nextjs.org/icons/next.svg"
//       alt="Next.js logo"
//       width={180}
//       height={38}
//       priority
//     />
//     <ol>
//       <li>
//         Get started by editing <code>src/app/page.tsx</code>.
//       </li>
//       <li>Save and see your changes instantly.</li>
//     </ol>

//     <div className={styles.ctas}>
//       <a
//         className={styles.primary}
//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Image
//           className={styles.logo}
//           src="https://nextjs.org/icons/vercel.svg"
//           alt="Vercel logomark"
//           width={20}
//           height={20}
//         />
//         Deploy now
//       </a>
//       <a
//         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//         className={styles.secondary}
//       >
//         Read our docs
//       </a>
//     </div>
//   </main>
//   <footer className={styles.footer}>
//     <a
//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="https://nextjs.org/icons/file.svg"
//         alt="File icon"
//         width={16}
//         height={16}
//       />
//       Learn
//     </a>
//     <a
//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="https://nextjs.org/icons/window.svg"
//         alt="Window icon"
//         width={16}
//         height={16}
//       />
//       Examples
//     </a>
//     <a
//       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="https://nextjs.org/icons/globe.svg"
//         alt="Globe icon"
//         width={16}
//         height={16}
//       />
//       Go to nextjs.org →
//     </a>
//   </footer>
// </div>