import { useAuth } from '@clerk/react-router'
import { Link } from 'react-router'

import type { Route } from './+types/home'

export function meta ({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export function loader ({ context }: Route.LoaderArgs) {
  return { message: 'Hello from Vercel' }
}

export default function Home ({ loaderData }: Route.ComponentProps) {
  const { isSignedIn } = useAuth()
  return (
    <div>
      <h1>Home</h1>
      {isSignedIn ? <h1>Logged</h1> : <Link to='/auth/sign-in'>Sign in</Link>}
    </div>
  )
}
