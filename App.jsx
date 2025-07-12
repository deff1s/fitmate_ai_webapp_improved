import React, { useState } from "react";
import { HomeIcon, CalendarIcon, UserIcon } from "@heroicons/react/24/outline";
import Form from "./components/Form";
import Calendar from "./components/Calendar";
import Profile from "./components/Profile";

export default function App() {
  const [activeTab, setActiveTab] = useState("form");

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="p-4 flex items-center justify-center border-b border-gray-200">
        <h1 className="text-xl font-bold text-primary">FitMate AI</h1>
      </header>
      <main className="flex-1 overflow-auto">
        {activeTab === "form" && <Form />}
        {activeTab === "calendar" && <Calendar />}
        {activeTab === "profile" && <Profile />}
      </main>
      <nav className="flex border-t border-gray-200">
        <button
          onClick={() => setActiveTab("form")}
          className={`flex-1 p-2 flex flex-col items-center justify-center ${activeTab==="form" ? "bg-primary text-white" : ""}`}
        >
          <HomeIcon className="h-6 w-6" />
          <span className="text-sm">Расчет</span>
        </button>
        <button
          onClick={() => setActiveTab("calendar")}
          className={`flex-1 p-2 flex flex-col items-center justify-center ${activeTab==="calendar" ? "bg-primary text-white" : ""}`}
        >
          <CalendarIcon className="h-6 w-6" />
          <span className="text-sm">Календарь</span>
        </button>
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex-1 p-2 flex flex-col items-center justify-center ${activeTab==="profile" ? "bg-primary text-white" : ""}`}
        >
          <UserIcon className="h-6 w-6" />
          <span className="text-sm">Профиль</span>
        </button>
      </nav>
    </div>
);
}
