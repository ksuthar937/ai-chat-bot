import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentConversation: [],
  pastConversations: {},
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    askQuestion(state, action) {
      state.currentConversation.push({
        id: state.currentConversation.length + 1,
        question: action.payload,
        time: new Date().toLocaleTimeString(),
      });
    },
  },
});

export const { askQuestion } = chatSlice.actions;

export default chatSlice.reducer;
