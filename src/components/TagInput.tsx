// components/TagInput.tsx
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

interface TagInputProps {
  name: string;
}

const TagInput: React.FC<TagInputProps> = ({ name }) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [tags, setTags] = useState<string[]>([]);

  const handleTags = (v: string) => {
    // console.log(v);
    var _t = v
      .split(",")
      .map((x) => x.trim())
      .filter((x) => x.length > 0 );
    // console.log(_t);
    setTags(_t);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={name}>Tags</label>
      <input
        id={name}
        {...register(name)}
        className="border px-2 py-1 rounded mb-1"
        onChange={(e) => handleTags(e.target.value)}
        placeholder="Enter tags separated by ','"
      />

      <div>
        {tags.length > 1 && tags.map((tag, index) => (
          <span
            key={index}
            style={{
              marginRight: "5px",
              display: "inline-block",
              background: "#e0e0e0",
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            {tag.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
