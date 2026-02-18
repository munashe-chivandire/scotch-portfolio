"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

interface Message {
  id: string
  role: "assistant" | "user"
  content: string
}

const welcomeMessage: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi there! I'm Scotch's AI assistant. Ask me about his GIS projects, spatial consulting services, or how we might collaborate.",
}

const quickActions = [
  "What services do you offer?",
  "Tell me about your GIS work",
  "How can we collaborate?",
]

export default function AiChatBubble() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([welcomeMessage])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open])

  // Lock body scroll on mobile when open
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches
    if (open && isMobile) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const handleSend = (text?: string) => {
    const content = text || input.trim()
    if (!content) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setIsTyping(true)

    // Simulate assistant response
    setTimeout(() => {
      const reply = getSimulatedReply(content)
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "assistant", content: reply },
      ])
      setIsTyping(false)
    }, 1200 + Math.random() * 800)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
              className="fixed z-50
                inset-0 md:inset-auto
                md:bottom-24 md:right-6
                md:w-[420px] md:h-[600px]
                lg:w-[480px] lg:h-[680px]
                md:rounded-[24px] md:border md:border-border
                bg-surface md:shadow-[0_24px_80px_rgba(0,0,0,0.5)]
                flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="relative shrink-0">
                {/* Gradient accent line */}
                <div className="h-[2px] gradient-bg" />

                <div className="flex items-center justify-between px-5 py-4 lg:px-6 lg:py-5">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="relative w-8 h-8 lg:w-10 lg:h-10 rounded-full gradient-bg flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2a8 8 0 0 1 8 8v1a8 8 0 0 1-16 0v-1a8 8 0 0 1 8-8z" />
                        <path d="M9 12h.01M15 12h.01" />
                        <path d="M10 16s1.5 1 2 1 2-1 2-1" />
                      </svg>
                      <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success/60" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success border-2 border-surface" />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm lg:text-base text-fg leading-none">
                        SA Assistant
                      </h3>
                      <p className="font-mono text-[10px] text-success tracking-[0.1em] uppercase mt-1">
                        Online
                      </p>
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-full hover:bg-surface-elevated transition-colors duration-200"
                    aria-label="Close chat"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-fg-muted"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Messages area */}
              <div className="flex-1 overflow-y-auto px-5 py-4 lg:px-6 lg:py-5 space-y-4 scrollbar-thin">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 lg:px-5 lg:py-3.5 text-sm lg:text-[15px] leading-relaxed font-sans ${
                        msg.role === "user"
                          ? "bg-violet/20 text-fg rounded-[16px] rounded-br-[4px] border border-violet/20"
                          : "bg-surface-elevated text-fg-muted rounded-[16px] rounded-bl-[4px] border border-border"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-surface-elevated border border-border rounded-[16px] rounded-bl-[4px] px-4 py-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-fg-subtle animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-fg-subtle animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-fg-subtle animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                )}

                {/* Quick actions — only show at start */}
                {messages.length === 1 && !isTyping && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {quickActions.map((action) => (
                      <button
                        key={action}
                        onClick={() => handleSend(action)}
                        className="text-xs font-sans text-violet border border-violet/25 bg-violet/5
                          rounded-full px-3.5 py-2 hover:bg-violet/15 hover:border-violet/40
                          transition-all duration-200"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input area */}
              <div className="shrink-0 border-t border-border px-4 py-3 lg:px-5 lg:py-4">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-surface-elevated border border-border rounded-full px-4 py-2.5 lg:px-5 lg:py-3
                      text-sm lg:text-[15px] text-fg placeholder:text-fg-subtle/50 font-sans
                      focus:outline-none focus:border-violet/50 transition-colors duration-200"
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={!input.trim() || isTyping}
                    className="shrink-0 w-10 h-10 lg:w-11 lg:h-11 rounded-full gradient-bg flex items-center justify-center
                      hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0
                      disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0
                      transition-all duration-200"
                    aria-label="Send message"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
                <p className="text-center font-mono text-[9px] text-fg-subtle/40 tracking-[0.1em] mt-2">
                  AI-powered — responses may be simulated
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating bubble button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full gradient-bg
          flex items-center justify-center
          shadow-[0_8px_32px_rgba(124,58,255,0.35)]
          hover:shadow-[0_12px_40px_rgba(124,58,255,0.5)]
          hover:-translate-y-0.5 active:translate-y-0
          transition-all duration-300 ${open ? "md:flex hidden" : ""}`}
        whileTap={{ scale: 0.92 }}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  )
}

/* ─── Simulated replies ────────────────────────────── */

function getSimulatedReply(userMessage: string): string {
  const lower = userMessage.toLowerCase()

  if (lower.includes("service") || lower.includes("offer")) {
    return "Scotch specializes in GIS System Architecture, Drone Data & GIS Integration, Spatial Data Consulting, and AI-powered geospatial solutions. Would you like to explore any of these in detail?"
  }
  if (lower.includes("gis") || lower.includes("work") || lower.includes("project")) {
    return "Scotch has built spatial systems that governments and financial institutions rely on — from enterprise GIS platforms to drone survey pipelines. His work spans PostGIS, GeoDjango, and cutting-edge AI integration. Check out the Work page for case studies!"
  }
  if (lower.includes("collaborate") || lower.includes("hire") || lower.includes("contact")) {
    return "I'd love to connect you with Scotch! Head over to the Contact page to send an inquiry, or feel free to describe your spatial challenge here and I can help you figure out the best approach."
  }
  if (lower.includes("drone")) {
    return "Scotch is designing next-generation spatial systems using drone technology combined with AI. This includes automated survey pipelines, orthomosaic processing, and real-time aerial data integration with existing GIS infrastructure."
  }
  if (lower.includes("ai") || lower.includes("artificial intelligence") || lower.includes("machine learning")) {
    return "AI + GIS is one of Scotch's key research areas. This includes using machine learning for spatial pattern recognition, automated feature extraction from satellite and drone imagery, and predictive geospatial analytics."
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Hey! Great to have you here. I can tell you about Scotch's spatial consulting services, GIS projects, or help you get in touch. What are you curious about?"
  }
  return "That's a great question! While I'm currently running in demo mode, Scotch would love to discuss this further. You can reach out via the Contact page, or ask me about his services, GIS projects, or drone + AI research."
}
