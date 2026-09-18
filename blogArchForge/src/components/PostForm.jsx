import React, { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import Input from "./common/Input";
import Select from "./common/Select";
import RTE from "./RTE";

export default function PostForm() {
  // Initialize react-hook-form
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      content: "<p>Start drafting your post...</p>",
      status: "active",
    },
  });

  //  Pure function: Converts title text to a clean URL-friendly slug
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9\s]/g, "") // Strip special symbols (@, !, #)
        .replace(/\s+/g, "-");          // Replace spaces with dashes
    }
    return "";
  }, []);

  // Listen to input changes: When user types a title, update the slug field
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    // Cleanup subscription when component unmounts
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  // Form Submit handler: Receives clean validated data ready for Spring Boot!
  const submitHandler = (data) => {
    console.log("=========================================");
    console.log("READY FOR SPRING BOOT POST REQUEST DTO:");
    console.log(data);
    console.log("=========================================");
    alert(`Post Created Successfully!\nCheck your browser console (F12) to see the payload.`);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 space-y-4">
          <Input
            label="Post Title"
            placeholder="e.g. Complete Guide to Spring Security"
            {...register("title", { required: true })}
          />

          <Input
            label="URL Slug (Auto-Generated)"
            placeholder="auto-generated-slug"
            {...register("slug", { required: true })}
            onInput={(e) => {
              // Allows manual editing of slug if the user wants to tweak it
              setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
          />

          <RTE
            label="Post Content (Rich Text)"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>

        {/* Right Column (1/3 width): Metadata & Publishing */}
        <div className="space-y-4 bg-gray-900/80 p-5 rounded-xl border border-gray-800 h-fit">
          <h3 className="text-lg font-semibold text-white border-b border-gray-800 pb-2">
            Publishing Options
          </h3>

          <Select
            label="Publication Status"
            options={["active", "inactive"]}
            {...register("status", { required: true })}
          />

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow transition-colors"
          >
            Publish Article
          </button>
        </div>

      </div>
    </form>
  );
}