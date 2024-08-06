import React from "react";
import Image from "next/image";
import ImageTag from "./ImageTag";
import Link from "next/link";
import { toSlug } from "@/utils/global";

export default function ImageHolder({
  title,
  link,
  tags,
}: {
  title: string;
  link: string;
  tags: string[];
}) {
  return (
    <div className="flex flex-col p-3 bg-white rounded-lg shadow max-w-[300px]">
      <Link className="mb-6" href={`/images/${toSlug(title)}`}>
        <Image
          src={link}
          width={500}
          height={500}
          className="rounded-lg"
          alt="Cartoon Mushroom - Mushroom man illustration with green shirt"
        />
      </Link>
      <p className="mb-1 line-clamp-1">{title}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((t) => (
          <ImageTag tag={t} />
        ))}
      </div>
    </div>
  );
}
