import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({
  name = "content",
  control,
  label,
  defaultValue = "",
}) {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label className="text-sm font-semibold text-gray-300 pl-1">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey="8gvhva0dolc6xc3i03n02e7ovqa8t5xkonqxtv32zwaz1t6s" 
            initialValue={defaultValue}
            value={value}
            init={{
              height: 320,
              menubar: false,
              promotion:false,
              skin: "oxide-dark",
              content_css: "dark",
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; background-color: #111827; color: #f3f4f6 }",
            }}
            onEditorChange={onChange} // Forwards rich text changes directly to hook-form
          />
        )}
      />
    </div>
  );
}