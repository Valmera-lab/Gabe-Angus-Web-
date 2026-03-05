import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

type Message = { role: "user" | "bot"; text: string };

const botResponses: { keywords: string[]; response: string }[] = [
  {
    keywords: ["speak", "someone", "human", "person", "call", "phone", "talk", "real"],
    response:
      "Of course! You can reach us directly at gabe.angus.web@gmail.com — we'll get back to you within 24 hours. 📧",
  },
  {
    keywords: ["price", "cost", "how much", "pricing", "quote", "budget", "expensive"],
    response:
      "Our websites start from around £150 for a landing page. All sites include hosting & maintenance at £20/month. You can also use our quote calculator on the site for an instant estimate! If you'd prefer full ownership, the entire site can be purchased for an extra £250.",
  },
  {
    keywords: ["hosting", "maintenance", "monthly", "20", "£20"],
    response:
      "We charge £20/month for hosting, maintenance, updates, SSL, backups and SEO monitoring. This is only removable if you purchase full ownership of your website for £250.",
  },
  {
    keywords: ["buy", "own", "purchase", "250", "buyout", "ownership"],
    response:
      "You can purchase full ownership of your website for £250. This includes source code, design assets, and domain transfer. After that, no more monthly fees!",
  },
  {
    keywords: ["plumb", "plumber", "plumbing", "electric", "electrician", "electrical", "trade", "trades", "builder"],
    response:
      "We build professional websites for tradespeople — plumbers, electricians, builders and more. Online booking, service pages, and local SEO included. Get a free quote on the site!",
  },
  {
    keywords: ["portfolio", "creative", "freelance"],
    response:
      "We design stunning portfolio websites for creatives and freelancers — showcase your work beautifully and win more clients. Check out our quote calculator!",
  },
  {
    keywords: ["ecommerce", "shop", "store", "sell", "products"],
    response:
      "We build beautiful online stores that convert — from product pages to secure checkout. Our Valmera Accessories project is a great example!",
  },
  {
    keywords: ["time", "long", "how long", "fast", "quick", "turnaround"],
    response:
      "Most websites are ready within 1–3 weeks depending on complexity. Rush delivery is available if you need it sooner!",
  },
  {
    keywords: ["hello", "hi", "hey", "good"],
    response:
      "Hey! 👋 Welcome to Gabe Angus Web Designs. How can I help you today? I can answer questions about pricing, services, or connect you with our team.",
  },
  {
    keywords: ["email", "contact", "reach"],
    response:
      "You can email us at gabe.angus.web@gmail.com — we respond within 24 hours! 📧",
  },
];

const defaultResponse =
  "Thanks for your message! For specific enquiries, feel free to email us at gabe.angus.web@gmail.com and we'll get back to you within 24 hours. You can also use our quote calculator for an instant estimate!";

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const entry of botResponses) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.response;
    }
  }
  return defaultResponse;
}

const LiveChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hey! 👋 Welcome to Gabe Angus Web Designs. Ask me about pricing, services, or anything else!",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botMsg: Message = { role: "bot", text: getBotResponse(userMsg.text) };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:bg-accent/80 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[480px] bg-card border border-border/50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-border/50 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <div>
                <p className="font-body text-sm font-medium text-foreground">Gabe Angus Web Designs</p>
                <p className="font-body text-[11px] text-muted-foreground">Usually replies instantly</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 text-[13px] font-body leading-relaxed ${
                      msg.role === "user"
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-foreground/90"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border/50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 p-3 bg-background border border-border/50 text-foreground font-body text-sm outline-none focus:border-accent/50 transition-colors placeholder:text-muted-foreground/40"
                />
                <button
                  type="submit"
                  className="p-3 bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;
