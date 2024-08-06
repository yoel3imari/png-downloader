"use client";

import ImageHolder from "@/components/ImageHolder";
import SearchBar from "@/components/SearchBar";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function page() {
  const params = useSearchParams();
  const q = params.get("q");

  return (
    <div className="">
      <div className="mb-12 p-4 flex items-center justify-center">
        <SearchBar keywork={q || ''} />
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 10 }).map((i) => (
          <div className="col-span-1 flex items-center justify-center">
            <ImageHolder
              title="Cartoon Mushroom - Mushroom man illustration with green shirt"
              link="https://banner2.cleanpng.com/lnd/20240801/vwl/ak4yzdybh.webp"
              tags={["Mushrooms", "Kids", "Anime", "Cartoons"]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
