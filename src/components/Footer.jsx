import React from 'react';
import { HomeIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Footer({ active }) {
  const tabs = [
    { name: 'Form', icon: HomeIcon },
    { name: 'Calendar', icon: CalendarIcon },
    { name: 'Profile', icon: UserIcon },
  ];
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t flex">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.name;
        return (
          <div
            key={tab.name}
            className={`flex-1 text-center p-2 ${
              isActive ? 'bg-red-500 text-white' : 'text-gray-500'
            }`}
          >
            <Icon className="h-6 w-6 mx-auto" />
            <div className="text-xs">{tab.name}</div>
          </div>
        );
      })}
    </footer>
  );
}
