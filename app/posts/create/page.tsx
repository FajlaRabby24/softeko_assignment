import CreatePostForm from '@/component/posts/CreatePostForm'
import React from 'react'

const CreatePostPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 py-2 dark:bg-zinc-900">
      <CreatePostForm />
    </div>
  )
}

export default CreatePostPage