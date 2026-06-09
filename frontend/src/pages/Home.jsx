export default function Home() {
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Selamat datang di CERITA HATI</h2>
        <p className="text-gray-600 text-lg">Tempat aman untuk berbagi cerita dan berkeluh kesah Anda</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
          <div className="text-4xl mb-3">📝</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Berbagi Cerita</h3>
          <p className="text-gray-600">Ceritakan pengalaman dan keluhan Anda dengan bebas</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
          <div className="text-4xl mb-3">💬</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Saling Mendukung</h3>
          <p className="text-gray-600">Beri komentar dan dukungan kepada sesama pengguna</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
          <div className="text-4xl mb-3">😍</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Apresiasi</h3>
          <p className="text-gray-600">Berikan reaksi emoji untuk menunjukkan empati Anda</p>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-pink-600 transition">
          Mulai Cerita Sekarang
        </button>
      </div>
    </div>
  )
}
