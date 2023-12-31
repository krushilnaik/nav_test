"use client";

import { useState } from "react";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <header className="h-16 bg-amber-400 text-slate-900 p-4 flex justify-end ">
          <button className="relative text-2xl z-50" onClick={() => setOpen(!open)}>
            x
          </button>
          <ul
            // style={{ top: open ? 0 : "-100%" }}
            style={{ height: open ? "100vh" : "0" }}
            className="absolute top-0 left-0 overflow-hidden bg-amber-300 w-full h-screen grid items-center justify-center text-6xl transition-all duration-500"
          >
            <li>
              <Link href={"/"} className={pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/about"} className={pathname === "/about" ? "active" : ""}>
                About
              </Link>
            </li>
            <li>Contact</li>
          </ul>
        </header>
        <main className="grid place-content-center text-7xl">{children}</main>
        <footer className="h-16 bg-amber-400">footer</footer>
      </body>
    </html>
  );
}
