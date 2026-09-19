import React, { useEffect, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./common/Input";
import Select from "./common/Select";
import RTE from "./RTE";
import postService from "../services/postService";

export default function PostForm({ post }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  const { register, handleSubmit, watch, setValue, control } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  const submitHandler = async (data) => {
    setIsSubmitting(true);
    setFeedbackMessage(null);

    try {
      const response = await postService.createPost(data);
      console.log("Post creation response:", response);
      setFeedbackMessage({
        type: "success",
        text: `Article published successfully! (Slug: ${data.slug})`,
      });
    } catch (error) {
      console.error("Submission failed:", error);
      setFeedbackMessage({
        type: "error",
        text: "Failed to publish article. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        {feedbackMessage && (
          <div
            className={`p-3 rounded-lg text-sm font-medium ${
              feedbackMessage.type === "success"
                ? "bg-emerald-950/50 border border-emerald-800 text-emerald-300"
                : "bg-red-950/50 border border-red-800 text-red-300"
            }`}
          >
            {feedbackMessage.text}
          </div>
        )}

        <Input
          label="Title"
          placeholder="Article Title"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug (URL)"
          placeholder="auto-generated-slug"
          {...register("slug", { required: true })}
        />
        <RTE label="Content" name="content" control={control} />
      </div>

      <div className="space-y-4">
        <Select
          label="Status"
          options={["active", "inactive"]}
          {...register("status", { required: true })}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2.5 rounded-lg text-white font-medium transition-all ${
            isSubmitting
              ? "bg-indigo-900 cursor-not-allowed text-gray-400"
              : "bg-indigo-600 hover:bg-indigo-500"
          }`}
        >
          {isSubmitting ? "Publishing..." : "Publish Article"}
        </button>
      </div>
    </form>
  );
}