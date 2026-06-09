export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-primary">💝 CERITA HATI</h1>
        <div className="space-x-4">
          <button className="text-gray-600 hover:text-primary">Login</button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-pink-600">Register</button>
        </div>
      </div>
    </nav>
  )
}