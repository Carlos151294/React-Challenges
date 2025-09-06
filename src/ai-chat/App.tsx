import React from "react";
import "./App.css";

// A small chat at bottom right. You can minimize and maximize it.
// Render initial message:
// 1. Call 1st endpoint to fetch welcome message and initial set of questions.
// Render follow up messages once user clicks a response
// 1. Call 2nd enpoint

interface Option {
  value: string;
  label: string;
}

interface Message {
  type: string;
  content?: string;
  options?: Option[];
}

interface SessionResponse {
  id: string;
  messages: Message[];
}

const Options = ({
  options,
  onOptionClick,
}: {
  options: Option[];
  onOptionClick: (text: string) => void;
}) => {
  return (
    <div className="list">
      {options.map((option) => (
        <div
          key={option.label}
          className="option"
          onClick={() => onOptionClick(option.label)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

const Message = ({
  message,
  onOptionClick,
}: {
  message: Message;
  onOptionClick: (text: string) => void;
}) => {
  if ("options" in message) {
    return (
      <Options options={message.options ?? []} onOptionClick={onOptionClick} />
    );
  }

  return <div className="message">{message.content}</div>;
};

const Widget = ({
  messages,
  onOptionClick,
}: {
  messages: Message[];
  onOptionClick: (text: string) => void;
}) => {
  return (
    <div className="widget">
      <div className="list">
        {messages.map((message, idx) => (
          <Message
            key={`${idx}${message.content}`}
            message={message}
            onOptionClick={onOptionClick}
          />
        ))}
      </div>
    </div>
  );
};

const getMessageToSessionUrl = (sessionId: string) => {
  return `https://ostro-chat-mock.replit.app/chat/session/${sessionId}/message`;
};

const App = () => {
  const [id, setId] = React.useState<string>("");
  const [messages, setMessages] = React.useState<Message[]>([]);

  const fetchFollowupMessages = async (sessionId: string, message: string) => {
    const res = await fetch(getMessageToSessionUrl(sessionId), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    const data: SessionResponse = await res.json();

    const messageWithOptions = messages.find((message) => "options" in message);

    const updatedOptions = messageWithOptions?.options?.filter(
      (option) => option.label === message
    );

    setMessages((prev) => [
      ...prev.map((message) =>
        "options" in message ? { ...message, options: updatedOptions } : message
      ),
      ...data.messages,
    ]);

    return [];
  };

  const fetchInitialMessages = async () => {
    const res = await fetch("https://ostro-chat-mock.replit.app/chat/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: SessionResponse = await res.json();
    setId(data.id);
    setMessages(data.messages);
  };

  const handleOptionClick = async (text: string) => {
    // call to endpoint
    fetchFollowupMessages(id, text);
  };

  React.useEffect(() => {
    fetchInitialMessages();
  }, []);

  return <Widget messages={messages} onOptionClick={handleOptionClick} />;
};

export default App;
