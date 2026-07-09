/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import DeveloperBanner from "./components/DeveloperBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServerInfo from "./components/ServerInfo";
import Features from "./components/Features";
import Rules from "./components/Rules";
import Ranks from "./components/Ranks";
import Community from "./components/Community";
import Footer from "./components/Footer";
import logo from "./assets/images/logo.jpg";
import { DeveloperProvider } from "./context/DeveloperContext";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";

export default function App() {
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute("href", logo);
    }
  }, []);

  return (
    <DeveloperProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </DeveloperProvider>
  );
}

function AppContent() {
  const { currentPage } = useNavigation();

  return (
    <div className="min-h-screen bg-[#07030e] text-slate-100 flex flex-col relative">
      {/* Centralized Sticky Header Group */}
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col pointer-events-none">
        <div className="pointer-events-auto">
          <div className="hidden md:block">
            <DeveloperBanner />
          </div>
          <Navbar />
        </div>
      </header>

      {/* Main Sections */}
      <main className="flex-grow pt-14 md:pt-20">
        <AnimatePresence mode="wait">
          {currentPage === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <Hero />
            </motion.div>
          )}
          {currentPage === "connection" && (
            <motion.div
              key="connection"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="pt-4 md:pt-10"
            >
              <ServerInfo />
            </motion.div>
          )}
          {currentPage === "features" && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="pt-4 md:pt-10"
            >
              <Features />
            </motion.div>
          )}
          {currentPage === "rules" && (
            <motion.div
              key="rules"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="pt-4 md:pt-10"
            >
              <Rules />
            </motion.div>
          )}
          {currentPage === "ranks" && (
            <motion.div
              key="ranks"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="pt-4 md:pt-10"
            >
              <Ranks />
            </motion.div>
          )}
          {currentPage === "community" && (
            <motion.div
              key="community"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="pt-4 md:pt-10"
            >
              <Community />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

