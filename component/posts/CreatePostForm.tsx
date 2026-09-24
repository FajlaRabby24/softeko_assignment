"use client";

import { useForm } from "react-hook-form";

type CreatePostFormValues = {
  title: string;
  slug: string;
  content: string;
  published: boolean;
};

const CreatePostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreatePostFormValues>({
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      published: false,
    },
  });

  const onSubmit = (data: CreatePostFormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-2xl space-y-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Create post</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Add a title, unique slug, and content for your new post.
        </p>
      </div>

      <div className="grid gap-5">
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            placeholder="Getting started with Prisma"
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:bg-zinc-900"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <p className="text-sm text-red-600">{errors.title.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="slug" className="block text-sm font-medium">
            Slug
          </label>
          <input
            id="slug"
            placeholder="getting-started-with-prisma"
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:bg-zinc-900"
            {...register("slug", { required: "Slug is required" })}
          />
          {errors.slug && <p className="text-sm text-red-600">{errors.slug.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="content" className="block text-sm font-medium">
            Content
          </label>
          <textarea
            id="content"
            rows={8}
            placeholder="Write your post content..."
            className="min-h-44 w-full resize-y rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:bg-zinc-900"
            {...register("content", { required: "Content is required" })}
          />
          {errors.content && <p className="text-sm text-red-600">{errors.content.message}</p>}
        </div>

        <label className="flex items-center justify-between gap-4 rounded-md border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
          <span>
            <span className="block text-sm font-medium">Publish now</span>
            <span className="block text-sm text-zinc-600 dark:text-zinc-400">
              Keep this off to save the post as a draft.
            </span>
          </span>
          <input type="checkbox" className="h-5 w-5" {...register("published")} />
        </label>
      </div>

      <div className="flex justify-end gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
        <button type="reset" className="rounded-md border px-4 py-2 text-sm font-medium">
          Reset
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white disabled:opacity-60 dark:bg-zinc-50 dark:text-zinc-950"
        >
          {isSubmitting ? "Creating..." : "Create post"}
        </button>
      </div>
    </form>
  );
};

export default CreatePostForm;