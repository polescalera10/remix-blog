import { useTransition, Form, useActionData } from '@remix-run/react'
import { redirect, json } from '@remix-run/node'
import { db } from '../../services/db'

const badRequest = data => {
  return json(data, { status: 400 })
}

export const action = async ({ request }) => {
  const form = await request.formData()
  const title = form.get('title')
  const body = form.get('body')

  const fieldErrors = {
    title: title.length < 3 ? 'Title must be at least 3 characters' : null,
    body: body.length < 10 ? 'Content must be at least 10 characters' : null
  }

  const hasErrors = Object.values(fieldErrors).some(Boolean)

  const fields = { body, title }

  if (hasErrors) {
    return badRequest({ fieldErrors, fields })
  }

  const post = await db.post.create({ data: fields })

  return redirect(`/posts/${post.id}`)
}

export function ErrorBoundary () {
  return (
    <div>
      <strong>Something went wrong :/ </strong>
    </div>
  )
}

export default function CreatePost () {
  const { state } = useTransition()
  const actionData = useActionData()

  const { fieldErrors } = actionData ?? {}
  const { title: titleError, body: bodyError } = fieldErrors ?? {}

  const isSubmitting = state === 'submitting'

  return (
    <>
      <h2>Create new post</h2>
      <Form method="POST" disabled={isSubmitting}>
        <div>
          <label htmlFor="title">Title</label><br />
          <input placeholder='Title of post' type="text" id="title" name="title" />
          {titleError && <p><small style={{ color: 'red' }}>{titleError}</small></p>}
        </div>

        <div>
          <label htmlFor="body">Body</label><br />
          <textarea type="text" id="body" placeholder='Content of post' name="body" />
          {bodyError && <p><small style={{ color: 'red' }}>{bodyError}</small></p>}
        </div>

        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Submitting...' : 'Add new post'}
        </button>
      </Form>
    </>
  )
}
