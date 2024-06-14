import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentConversation: [],
  pastConversations: [
    {
      data: [
        {
          type: "question",
          id: 10,
          question: "Hello! How are you?",
          time: new Date().toLocaleTimeString(),
        },

        {
          type: "answer",
          id: 11,
          question: "I am Good.",
          time: new Date().toLocaleTimeString(),
        },
        {
          type: "question",
          id: 15,
          question: "What are you doing?",
          time: new Date().toLocaleTimeString(),
        },
        {
          type: "answer",
          id: 19,
          question: "Just listning song",
          time: new Date().toLocaleTimeString(),
        },
      ],
    },
    {
      data: [
        {
          type: "question",
          id: 10,
          question: "Hi! Can you help me out here",
          time: new Date().toLocaleTimeString(),
        },

        {
          type: "answer",
          id: 11,
          question: "As a AI language model. I can not helop you out.",
          time: new Date().toLocaleTimeString(),
        },
      ],
    },
  ],
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    askQuestion(state, action) {
      state.currentConversation.push({
        type: "question",
        id: state.currentConversation.length + 1,
        question: action.payload,
        time: new Date().toLocaleTimeString(),
      });
    },
  },
});

export const { askQuestion } = chatSlice.actions;

export default chatSlice.reducer;
