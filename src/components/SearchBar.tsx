"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import debounce from "debounce";

export default function SearchBar({keywork}: {keywork?: string}) {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const submit = () => {
    console.log(term);  
    if (term.trim()) router.push(`/search?q=${term}`);
  };

  return (
    // <div className="">
      <div className="flex items-center justify-center min-w-[500px] max-w-[75%] bg-white border-2 border-black rounded-lg">
        <input
          type="text"
          name="search"
          id="search"
          value={keywork}
          placeholder="Smoke effects"
          className="h-16 py-2 px-6 text-xl focus:outline-none rounded-lg w-full"
          onChange={(e) => setTerm(e.target.value.toString())}
        />
        <button
          onClick={submit}
          className="w-20 h-16 text-3xl text-white flex items-center justify-center bg-black"
        >
          <Icon icon="ri:search-line" />
        </button>
      </div>
    // </div>
  );
}
