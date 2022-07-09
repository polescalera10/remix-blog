import { Link } from '@remix-run/react'

export default function Nav () {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/about'>Go to About</Link>
        </li>
        <li>
          <Link to='/posts/create'>Create a Post</Link>
        </li>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
      </ul>
    </nav>
  )
}
