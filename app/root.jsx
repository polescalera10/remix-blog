import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'

import globalStyles from '~/styles/global.css'

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1'
})

export const links = () => ([
  {
    rel: 'stylesheet',
    href: globalStyles
  },
  {
    rel: 'stylesheet',
    href: 'https://cdn.simplecss.org/simple.min.css'
  }
])

const Layout = () => {
  return (
    <main>
      <header>
        <Link to='/'>
          <h1>Blog Remix</h1>
        </Link>
      </header>
      <Outlet />
      <footer>
        <small>Copyright 2022. Pol Escalera</small>
      </footer>
    </main>
  )
}

export default function App () {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
