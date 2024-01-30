import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import DashProfile from "../components/DashProfile";
import DashSidebar from "../components/DashSidebar";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTeb] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    console.log(tabFromUrl);
    if (tabFromUrl) {
      setTeb(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* Profile.... */}
      {tab === "profile" && <DashProfile />}
    </div>
  );
}
