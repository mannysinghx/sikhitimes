"use client";

import { useState } from "react";
import { MessageCircle, Hash, Users, Lock, Send } from "lucide-react";
import Link from "next/link";

const DEFAULT_CHANNELS = [
  { id: "1", name: "general", description: "Welcome! All Sikhs welcome here.", topic: "general" },
  { id: "2", name: "canada-sikhs", description: "Sikh community in Canada", topic: "city:canada" },
  { id: "3", name: "uk-sangat", description: "UK Sikh community", topic: "city:uk" },
  { id: "4", name: "kirtan", description: "Share and discuss kirtan", topic: "interest:kirtan" },
  { id: "5", name: "youth", description: "Young Sikhs worldwide", topic: "interest:youth" },
  { id: "6", name: "langar-recipes", description: "Share your Langar recipes", topic: "interest:food" },
  { id: "7", name: "sikh-events", description: "Events & gatherings worldwide", topic: "events" },
];

const MOCK_MESSAGES = [
  { id: "1", user: "Gurpreet_Singh", avatar: "G", content: "Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh! 🙏", time: "2:30 PM" },
  { id: "2", user: "Kaur_Amritsar", avatar: "K", content: "Fateh Ji! Anyone attending the Vaisakhi parade in Vancouver?", time: "2:31 PM" },
  { id: "3", user: "Simran_ji", avatar: "S", content: "Yes! Our family will be there. Looking forward to it!", time: "2:32 PM" },
];

export default function CommunityPage() {
  const [activeChannel, setActiveChannel] = useState(DEFAULT_CHANNELS[0]);
  const [messageText, setMessageText] = useState("");
  const isLoggedIn = false; // Will be replaced with actual auth check

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="flex items-center gap-3 mb-6">
        <MessageCircle className="text-amber-700" size={24} />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sikh Community</h1>
          <p className="text-sm text-gray-500">Connect with Sikhs worldwide</p>
        </div>
      </div>

      {!isLoggedIn ? (
        /* Login gate */
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center max-w-lg mx-auto mt-8">
          <Lock size={36} className="text-amber-700 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Sign in to Join the Community</h2>
          <p className="text-gray-600 text-sm mb-6">
            The community platform is free — you just need a SikhiTimes account to send messages, join
            channels, and connect with Sikhs worldwide. Reading public channels is free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/auth/signin"
              className="px-6 py-3 bg-amber-700 text-white font-semibold rounded-xl hover:bg-amber-800 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="px-6 py-3 border-2 border-amber-700 text-amber-700 font-semibold rounded-xl hover:bg-amber-50 transition-colors"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      ) : (
        /* Community layout */
        <div className="flex flex-col md:flex-row gap-0 h-[calc(100vh-220px)] min-h-[500px] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          {/* Sidebar — channels */}
          <div className="md:w-56 border-b md:border-b-0 md:border-r border-gray-100 bg-gray-50 flex flex-col flex-shrink-0 max-h-24 md:max-h-none">
            <div className="hidden md:block p-3 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide px-1">Channels</p>
            </div>
            <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-y-auto p-2 md:space-y-0.5">
              {DEFAULT_CHANNELS.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannel(channel)}
                  className={`flex-shrink-0 md:w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                    activeChannel.id === channel.id
                      ? "bg-amber-100 text-amber-800 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Hash size={13} className="flex-shrink-0" />
                  {channel.name}
                </button>
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-1 flex flex-col">
            {/* Channel header */}
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Hash size={16} className="text-gray-400" />
                <span className="font-semibold text-gray-900">{activeChannel.name}</span>
                <span className="text-sm text-gray-400 border-l border-gray-200 pl-2 ml-1">
                  {activeChannel.description}
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Users size={12} />
                <span>128 members</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {MOCK_MESSAGES.map((msg) => (
                <div key={msg.id} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 text-sm font-bold flex-shrink-0">
                    {msg.avatar}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-sm font-semibold text-gray-900">{msg.user}</span>
                      <span className="text-xs text-gray-400">{msg.time}</span>
                    </div>
                    <p className="text-sm text-gray-700">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message input */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 rounded-xl border border-gray-200 px-4 py-2.5">
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder={`Message #${activeChannel.name}`}
                  className="flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder-gray-400"
                />
                <button
                  className="text-amber-700 hover:text-amber-900 transition-colors"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-1 px-1">
                All messages are filtered for kid-friendly content ☬
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
