import React from "react";
import InitialData from "../components/InitialData";
import { useSelector } from "react-redux";
import ConversationCard from "../components/ConversationCard";

const Home = () => {
  const convessations = useSelector((state) => state.currentConversation);

  return (
    <>
      {convessations.length > 0 ? (
        convessations.map((item) => (
          <ConversationCard
            key={item.id}
            content={item.question}
            time={item.time}
          />
        ))
      ) : (
        <InitialData />
      )}
    </>
  );
};

export default Home;
