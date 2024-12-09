import React from "react";

export default function RtlToggle() {
  const handleDir = () => {
    let val = "rtl";
    const direction:any = localStorage.getItem("direction");
    console.log('direction');
    if (JSON.parse(direction)?.dir == "rtl") {
      val = "ltr";
    } else {
      val = "rtl";
    }

    localStorage.setItem("direction", JSON.stringify({ dir: val }));

    // document.documentElement?.dir = val?.dir;
    // Router.reload();
    window.location.reload();
  };
  return (
    <a
      id="toggle-rtl"
      onClick={handleDir}
      className="tf-btn animate-hover-btn btn-fill"
    >
      <span>ltr</span>
      <span>rtl</span>
    </a>
  );
}
