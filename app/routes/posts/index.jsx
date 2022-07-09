import { useLoaderData, Outlet } from '@remix-run/react'
import { db } from '../../services/db.js'
import Nav from '../../components/Nav'
import List from '../../components/List'

export const loader = async () => {
  const posts = await db.post.findMany()
  return { posts }
}

export default function Posts () {
  const { posts } = useLoaderData()

  return (
    <div>
      <h2>Posts</h2>
      <Outlet />

      <Nav />
      <List items={posts} />
    </div>
  )
}
