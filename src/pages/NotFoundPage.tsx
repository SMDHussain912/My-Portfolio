import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <span className="section-index">404 / PAGE NOT FOUND</span>
      <h1>This page went<br /><span>off the map.</span></h1>
      <p>The page you're looking for doesn't exist yet, or the link may have changed.</p>
      <Link className="button button-primary" to="/">Back to home</Link>
    </main>
  )
}
