import React, { createContext, useContext, useState, useEffect } from "react";

export type PageId = "home" | "connection" | "features" | "rules" | "ranks" | "community";

interface NavigationContextType {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  currentPage: "home",
  setCurrentPage: () => {}
});

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPageState] = useState<PageId>("home");

  // Sync hash in URL with page state if page is loaded with hash, or when navigating
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["home", "connection", "features", "rules", "ranks", "community"].includes(hash)) {
        setCurrentPageState(hash as PageId);
      }
    };

    // Set initial state based on hash
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const setCurrentPage = (page: PageId) => {
    setCurrentPageState(page);
    // Smooth scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Update hash silently without triggering full page reload
    window.history.pushState(null, "", `#${page}`);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
