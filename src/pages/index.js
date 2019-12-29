import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/themify-icons.css"
import "../css/animate.css"
import "../css/style.css"
import "../css/responsive.css"
import Navbar from "../components/Navbar"
import BannerSection from "../components/BannerSection"
import FeatureSection from "../components/FeatureSection"
import AboutSection from "../components/AboutSection"
import FeatureExtendSection from "../components/FeatureExtendSection"
import VideoSection from "../components/VideoSection"
import ShowcaseSection from "../components/ShowcaseSection"
import TestimonialSection from "../components/TestimonialSection"
import PricingSection from "../components/PricingSection"
import DownloadSection from "../components/DownloadSection"
import ContactSection from "../components/ContactSection"
import FooterSection from "../components/FooterSection"
import SEO from "../SEO"

export default () => (
  <>
    <SEO title="APP Landing with Gatsby"></SEO>
    <Navbar/>
    <BannerSection/>
    <FeatureSection/>
    <AboutSection/>
    <FeatureExtendSection/>
    <VideoSection/>
    <ShowcaseSection/>
    <TestimonialSection />
    <PricingSection />
    <DownloadSection />
    <ContactSection />
    <FooterSection />
  </>
)

