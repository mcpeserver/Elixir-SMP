import React, { createContext, useContext, useState, useEffect } from "react";

export interface DeveloperConfig {
  name: string;
  contact: {
    phone: string;
    whatsapp: string;
  };
  community: {
    name: string;
    website: string;
    discord: string;
  };
  website: {
    portfolio: string;
  };
}

const defaultConfig: DeveloperConfig = {
  name: "Ran Dev",
  contact: {
    phone: "0895602592430",
    whatsapp: "0895602592430"
  },
  community: {
    name: "Ran Dev Community",
    website: "https://community.randev.com",
    discord: "https://discord.gg/9KUN2byKRM"
  },
  website: {
    portfolio: "https://sfl.gl/x2ic"
  }
};

const DeveloperContext = createContext<{
  config: DeveloperConfig;
  loading: boolean;
}>({
  config: defaultConfig,
  loading: true
});

export function DeveloperProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<DeveloperConfig>(defaultConfig);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch developer config");
        }
        return res.json();
      })
      .then((data) => {
        if (active && data && data.name) {
          setConfig(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error fetching developer config, using defaults:", err);
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <DeveloperContext.Provider value={{ config, loading }}>
      {children}
    </DeveloperContext.Provider>
  );
}

export function useDeveloper() {
  return useContext(DeveloperContext);
}
