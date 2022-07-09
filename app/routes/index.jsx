import { useLoaderData } from '@remix-run/react'
import { db } from '../services/db.js'
import Nav from '../components/Nav'
import List from '../components/List'

export const loader = async () => {
  const posts = await db.post.findMany({ take: 3 })
  return { posts }
}

export default function Index () {
  const { posts } = useLoaderData()
  return (
    <div>
      <h2>Welcome to Blog Remix</h2>

      <Nav />
      <List items={posts} />
    </div>
  )
}
