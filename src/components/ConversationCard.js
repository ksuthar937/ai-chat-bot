import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import UserIamage from "../assets/user.jpg";
import BotAIIamage from "../assets/BotAI_Logo.png";

const ConversationCard = ({ type, content, time }) => {
  return (
    <>
      <CardMedia
        component="img"
        sx={{ width: 120, height: 120, borderRadius: 15, p: 2 }}
        image={type === "question" ? UserIamage : BotAIIamage}
        alt="user"
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            textAlign: "left",
            fontFamily: "ubuntu",
          }}
        >
          {type === "question" ? "You" : "Soul AI"}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            textAlign: "left",
          }}
          component="div"
        >
          {content}
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            textAlign: "left",
            opacity: 0.6,
          }}
          component="div"
        >
          {time}
        </Typography>
      </CardContent>
    </>
  );
};

export default ConversationCard;
