"use client";

import { useState, useEffect } from "react";
import { 
  Send, 
  Bot, 
  User, 
  MessageCircle, 
  Lightbulb, 
  Code, 
  Briefcase,
  GraduationCap,
  Award
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Initialize messages after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMessages([{
      id: "welcome",
      text: "Hi! I'm Anirudha's AI assistant. I can answer questions about his background, skills, projects, and experience. What would you like to know?",
      sender: "bot" as const,
      timestamp: new Date()
    }]);
  }, []);

  // Knowledge base about Anirudha
  const knowledgeBase = {
    name: "Anirudha Kyathsandra",
    title: "Software Engineer",
    experience: "5+ years of software development experience",
    education: "Master's in Computer Science from UIUC (GPA: 3.76/4.00), Bachelor's from Iowa State University (GPA: 3.80/4.00)",
    skills: [
      "Languages: Java, Python, C++, JavaScript, TypeScript, SQL, Bash, C#",
      "Frameworks: Spring Boot, React, Node.js, Next.js, OpenCV",
      "Cloud & DevOps: AWS, GCP, Docker, Kubernetes, Jenkins, Helm",
      "Databases: MySQL, PostgreSQL, MongoDB",
      "Tools: Pandas, Tableau, gRPC, RabbitMQ, Git"
    ],
    projects: [
      "Election Predictor Analytics Platform - ML-powered election prediction system with 87% accuracy",
      "IntelliMatch Resume Platform - Serverless resume parsing system using AWS and OpenAI API"
    ],
    workHistory: [
      "Software Engineering Co-op at General Dynamics Mission Systems (June 2025-Present)",
      "Teaching Assistant/Mentor at UIUC (Aug 2024-May 2025)",
      "Software Engineer at General Mills (Jul 2023-Aug 2024)",
      "Software Engineering Intern at John Deere (May 2022-Dec 2022)",
      "Software Engineer Intern at John Deere (May 2021-Jul 2021)"
    ],
    location: "Champaign, IL",
    contact: {
      email: "anirudhahk@gmail.com",
      phone: "(515) 715-7549",
      linkedin: "linkedin.com/in/anirudhakyathsandra",
      website: "anirudhahk.com"
    },
    availability: "Open to full-time opportunities, freelance projects, and technical consulting"
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("name") || message.includes("who")) {
      return `My name is ${knowledgeBase.name}. I'm a ${knowledgeBase.title} with ${knowledgeBase.experience}.`;
    }
    
    if (message.includes("skill") || message.includes("technology") || message.includes("tech")) {
      return `Here are my key technical skills:\n\n${knowledgeBase.skills.map(skill => `• ${skill}`).join('\n')}`;
    }
    
    if (message.includes("project") || message.includes("build") || message.includes("create")) {
      return `I've worked on several interesting projects:\n\n${knowledgeBase.projects.map(project => `• ${project}`).join('\n')}`;
    }
    
    if (message.includes("experience") || message.includes("job") || message.includes("work history") || message.includes("work experience")) {
      return `Here's my work experience:\n\n${knowledgeBase.workHistory.map(job => `• ${job}`).join('\n')}`;
    }
    
    if (message.includes("education") || message.includes("degree") || message.includes("study")) {
      return `I have a ${knowledgeBase.education}. I'm passionate about continuous learning and staying up-to-date with the latest technologies.`;
    }
    
    if (message.includes("location") || message.includes("where") || message.includes("based")) {
      return `I'm currently based in ${knowledgeBase.location}. I'm open to remote opportunities and willing to relocate for the right opportunity.`;
    }
    
    if (message.includes("available") || message.includes("hire") || message.includes("opportunity")) {
      return `I'm currently ${knowledgeBase.availability}. I'm always interested in discussing new opportunities and exciting projects.`;
    }
    
    if (message.includes("contact") || message.includes("email") || message.includes("reach")) {
      return `You can reach me through:\n• Email: ${knowledgeBase.contact.email}\n• Phone: ${knowledgeBase.contact.phone}\n• LinkedIn: ${knowledgeBase.contact.linkedin}\n• Website: ${knowledgeBase.contact.website}`;
    }
    
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return `Hello! I'm here to help you learn more about Anirudha. Feel free to ask me about his skills, experience, projects, or anything else!`;
    }
    
    return `I'm not sure about that specific question, but I can tell you about Anirudha's skills, experience, projects, education, or availability. What would you like to know?`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateResponse(inputValue);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const suggestedQuestions = [
    "What are your technical skills?",
    "Tell me about your projects",
    "What's your work experience?",
    "Are you available for opportunities?",
    "How can I contact you?"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <Bot className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ask me anything about Anirudha&apos;s background, skills, experience, and projects. 
            I&apos;m here to help you learn more about him!
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Anirudha&apos;s AI Assistant</h3>
                <p className="text-blue-100 text-sm">Online • Ready to help</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-2 ${
                    message.sender === "user" ? "text-blue-100" : "text-gray-500"
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm text-gray-500">Typing...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything about Anirudha..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Suggested Questions */}
        <div className="mt-8 animate-fade-in">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Suggested Questions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => {
                  setInputValue(question);
                  // Auto-submit after a short delay
                  setTimeout(() => {
                    const form = document.querySelector('form');
                    if (form) form.dispatchEvent(new Event('submit', { bubbles: true }));
                  }, 100);
                }}
                className="p-3 text-left bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-sm text-gray-700"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-stagger">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Skills</h3>
            <p className="text-gray-600">Learn about my programming languages, frameworks, and technologies</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Work Experience</h3>
            <p className="text-gray-600">Discover my professional journey and career progression</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Projects</h3>
            <p className="text-gray-600">Explore the innovative solutions I&apos;ve built and contributed to</p>
          </div>
        </div>
      </div>
    </div>
  );
}