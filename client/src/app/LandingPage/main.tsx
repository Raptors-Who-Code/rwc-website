"use client";

import React from "react";
import Hero from "./Hero/main";
import JoinSection from "./JoinSection";
import LandingAbout from "./LandingAbout";
import UpcomingEvents from "./UpcomingEvents";
import LatestJobs from "./LatestJobs";
import FAQ from "./Faq";
import Footer from "./Footer";
import SiteFooter from "@/components/site-footer";
import useAuth from "@/hooks/useAuth";

function LandingPage() {
  const user = useAuth();

  console.log("User", user);

  return (
    <div className="container mx-auto px-8">
      <Hero />
      <JoinSection />
      <LandingAbout />
      <UpcomingEvents />
      <LatestJobs />
      <FAQ />
      <Footer />
      <SiteFooter />
    </div>
  );
}

export default LandingPage;
