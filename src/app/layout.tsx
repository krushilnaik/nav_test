"use client";

import { useState } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <header className="h-16 bg-amber-400 text-slate-900 p-4 flex justify-end">
          <button className="relative text-2xl z-50" onClick={() => setOpen(!open)}>
            x
          </button>
          <ul
            style={{ top: open ? 0 : "-100%" }}
            className="absolute left-0 bg-amber-300 w-full h-screen grid items-center justify-center text-6xl transition-all duration-500"
          >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </header>
        <main className="grid place-content-center text-7xl">{children}</main>
        <footer className="h-16 bg-amber-400">footer</footer>
      </body>
    </html>
  );
}
