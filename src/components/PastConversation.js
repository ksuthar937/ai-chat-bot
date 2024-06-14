import React from "react";
import { useSelector } from "react-redux";
import ConversationCard from "./ConversationCard";
import { Card } from "@mui/material";

const PastConversation = () => {
  const pastConversations = useSelector((state) => state.pastConversations);

  return (
    <div>
      {pastConversations.map((item, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 2,
            marginRight: { sm: 4, xs: 2 },
            my: 3,
            background: "linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)",
            borderRadius: 4,
          }}
        >
          {item.data.map((conversation) => (
            <Card
              sx={{
                display: "flex",
                my: 1,
                background: "none",
                boxShadow: "none",
              }}
            >
              <ConversationCard
                key={conversation.id}
                content={conversation.question}
                time={conversation.time}
                type={conversation.type}
              />
            </Card>
          ))}
        </Card>
      ))}
    </div>
  );
};

export default PastConversation;
