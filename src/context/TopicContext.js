import { createContext, useContext, useState } from "react";

const TopicContext = createContext();

export const TopicProvider = ({ children }) => {
  const [selectedTopic, setSelectedTopic] = useState("");

  return (
    <TopicContext.Provider value={{ selectedTopic, setSelectedTopic }}>
      {children}
    </TopicContext.Provider>
  );
};

export const useTopic = () => useContext(TopicContext);
