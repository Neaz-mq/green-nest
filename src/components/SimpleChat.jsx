import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle } from "lucide-react";

const responses = {
  hello: "Hi there! How can I help you today?",
  hi: "Hello! What’s up?",
  help: "Sure! Ask me anything about our services.",
  services:
    "We offer Landscaping, Lawn Maintenance, Pruning, and Irrigation services.",
  default: "Sorry, I didn’t understand that. Can you try rephrasing?",
};

const SimpleChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    const lower = input.toLowerCase();
    const reply =
      Object.keys(responses).find((key) => lower.includes(key)) || "default";

    const botMsg = { text: responses[reply], sender: "bot" };
    setTimeout(() => {
      setMessages((prev) => [...prev, botMsg]);
    }, 500); // simulate typing delay

    setInput("");
  };

  return (
    <>
      {/* Trendy Chat Icon Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 flex items-center justify-center animate-pulse"
      >
        <MessageCircle size={24} className="animate-bounce" />
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 left-6 w-80 bg-white border rounded-xl shadow-lg flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-green-600 text-white p-3 font-bold flex justify-between items-center">
            Chat Bot
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:text-gray-200 font-bold"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto h-60">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 p-2 rounded-lg max-w-[70%] ${
                  msg.sender === "user" ? "bg-green-100 ml-auto" : "bg-gray-100"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t p-2">
            <input
              type="text"
              className="flex-1 px-3 py-1 rounded-l-lg border focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="bg-green-600 hover:bg-green-700 text-white px-3 rounded-r-lg flex items-center"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleChat;
