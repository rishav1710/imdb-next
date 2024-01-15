'use client';
import { useTheme } from 'next-themes';
import React from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div>
      {currentTheme === 'dark' ? (
        <MdLightMode
          onClick={() => setTheme('light')}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme('dark')}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      )}
    </div>
  );
}

export default DarkModeSwitch;
