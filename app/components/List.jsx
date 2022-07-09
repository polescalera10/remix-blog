import { Link } from '@remix-run/react'

export default function List ({ items }) {
  return items && items.map(item => (
    <Link key={item.id} to={`/posts/${item.id}`}>
      <h4>{item.title}</h4>
      <p>{item.body}</p>
    </Link>
  ))
}
