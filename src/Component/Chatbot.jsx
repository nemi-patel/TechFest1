import React from "react";
import ChatBot from "react-simple-chatbot";

function Chatbot() {
  return (
    <ChatBot
      headerTitle="Speech Synthesis"
      speechSynthesis={{ enable: true, lang: "en" }}
      steps={[
        {
      id: "1",
      message: "Welcome to Vanita Vishram Women's University! What's your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: `Hi {previousValue}, nice to meet you! If you want to take admission in our university, please select an option:`,
      trigger: "admissionOptions",
    },
    {
      id: "admissionOptions",
      options: [
        { value: "yes", label: "Yes", trigger: "4" },
        { value: "no", label: "No", trigger: "end" },
      ],
    },
    {
      id: "4",
      message: "Nice! In which department?",
      trigger: "departmentInput",
    },
    {
      id: "departmentInput",
      user: true,
      trigger: "5",
      validator: (value) => {
        // Validate that the user inputs a department
        if (!value) {
          return "Please enter a department.";
        }
        return true;
      },
    },
    {
      id: "5",
      message: "Your record has been submitted.",
      end: true,
    },
    {
      id: "end",
      message: "Thank you for chatting with us.",
      end: true,
    },
      ]}
      floating={true}
    />
  );
}

export default Chatbot;
