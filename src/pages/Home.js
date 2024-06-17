import React from "react";
import InitialData from "../components/InitialData";
import { useSelector } from "react-redux";
import ConversationCard from "../components/ConversationCard";
import { Card } from "@mui/material";

const Home = () => {
  const convessations = useSelector((state) => state.currentConversation);

  return (
    <>
      {convessations.length > 0 ? (
        convessations.map((item) => (
          <Card
            sx={{
              display: "flex",
              marginLeft: 2,
              marginRight: { sm: 4, xs: 2 },
              my: 3,
              background: "rgba(215, 199, 244, 0.13)",
              borderRadius: 4,
            }}
            key={item.id}
          >
            <ConversationCard
              content={item.question}
              time={item.time}
              type={item.type}
            />
          </Card>
        ))
      ) : (
        <InitialData />
      )}
    </>
  );
};

export default Home;
