"use client";

import TagInput from "@/components/TagInput";
import { uploadSchema, UploadSchema } from "@/schemas/uploadSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "module";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function page() {
  const methods = useForm<UploadSchema>({
    resolver: zodResolver(uploadSchema),
  });

  const onSubmit = (data: UploadSchema) => {
    console.dir(data);
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="mb-4 flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="border rounded py-1 px-3"
              {...methods.register("title")}
            />
            {methods.formState.errors.title && (
              <p className="text-rose-500 m-0">
                {methods.formState.errors.title.message}
              </p>
            )}
          </div>

          <div className="mb-4 flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              className="border rounded py-1 px-3 h-20"
              id="description"
              {...methods.register("description")}
            />
            {methods.formState.errors.description && (
              <p className="text-rose-500 m-0">
                {methods.formState.errors.description.message}
              </p>
            )}
          </div>

          {/* tags */}
          <div className="mb-4 flex flex-col">
            <TagInput name="tags" />
            {methods.formState.errors.description && (
              <p className="text-rose-500 m-0">
                {methods.formState.errors.description.message}
              </p>
            )}
          </div>

          {/* multi file upload (png) */}
          <div className="mb-4 flex flex-col border-2 border-dashed  p-2 rounded">
            <input
              type="file"
              {...methods.register('image')}
              id="file"
              placeholder="PNG Image"
              accept="image/png"
            />
            {methods.formState.errors.image?.message && <p className="text-rose-500 m-0">{methods.formState.errors.image.message.toString()}</p>}
          </div>

          <button
            type="submit"
            className="bg-black text-white px-3 py-1 text-center rounded"
          >
            Publish
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
