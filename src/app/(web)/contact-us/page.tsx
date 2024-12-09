import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import ContactForm2 from "@/components/othersPages/contact/ContactForm2";
import Map2 from "@/components/othersPages/contact/Map2";
import React from "react";

export const metadata = {
  title: "Contact us || xxxxxx",
  description: "xxxxxx",
};
export default function page() {
  return (
    <>
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Contact Us</div>
        </div>
      </div>
      <Map2 />
      {/* <ContactForm2 /> */}
    </>
  );
}
