// import Footer1 from "@/components/footers/Footer1";
// import Header2 from "@/components/headers/Header2";
import FilterSidebar from "@/components/shop/FilterSidebar";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Shop Filter Sidebar || xxxx",
  description: "xxxxx - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      {/* <Header2 /> */}
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">New Arrival</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Shop through our latest selection of Fashion
          </p>
        </div>
      </div>
      <FilterSidebar />
      {/* <Footer1 /> */}
    </>
  );
}
