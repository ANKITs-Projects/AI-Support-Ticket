import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation()

  const linkStyle = (path) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition ${
      location.pathname === path
        ? "bg-blue-500 text-white"
        : "text-gray-600 hover:bg-gray-200"
    }`;

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo / App Name */}
        <h1 className="text-xl font-bold text-blue-600">
          AI Support Desk
        </h1>

        {/* Navigation */}
        <nav className="flex gap-2">
          <Link to="/" className={linkStyle("/")}>
            Dashboard
          </Link>
          <Link to="/create" className={linkStyle("/create")}>
            Create Ticket
          </Link>
        </nav>

      </div>
    </header>
  )
}