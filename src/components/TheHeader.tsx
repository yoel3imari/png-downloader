import React from "react";
import Link from "next/link";

export default function TheHeader() {
  return (
    <header className="w-full py-4 flex items-center justify-between px-4 md:px-8">
      <div id="logo">
        <Link href="/">
          <h1 className="text-4xl font-bold">PNG Downloader</h1>
        </Link>
      </div>
      <nav className="">
        <ul className="flex gap-4 items-center justify-center">
          <li>
            <Link href="/upload" className="">Upload</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
