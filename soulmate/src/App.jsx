export default function App() {
  return (
    <div className="bg-pink-50 min-h-screen">

      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-primary">
           Soulmate
          </h1>

          <div className="hidden md:flex gap-6">
            <a className="hover:text-primary">Home</a>
            <a className="hover:text-primary">Matches</a>
            <a className="hover:text-primary">About</a>
          </div>

          <button className="bg-primary text-white px-4 py-2 rounded-xl hover:scale-105 transition">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <h1 className="text-5xl font-bold">
          Find Your Soulmate
        </h1>

        <p className="mt-4 text-lg max-w-xl mx-auto">
          Connect with people who match your personality and dreams.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-3 justify-center max-w-xl mx-auto">
          <input
            placeholder="Search by interest or city"
            className="p-3 rounded-xl text-black w-full border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <button className="bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Find Matches
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Soulmate?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold">Smart Matching</h3>
            <p className="text-gray-600 mt-2">
              AI finds your perfect match.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold">Safe & Secure</h3>
            <p className="text-gray-600 mt-2">
              Your data is protected.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold">Global Matches</h3>
            <p className="text-gray-600 mt-2">
              Meet people worldwide.
            </p>
          </div>

        </div>
      </section>

      {/* Profiles */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Top Matches
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

          <div className="rounded-2xl overflow-hidden shadow hover:scale-105 transition">
            <img
              className="h-60 w-full object-cover"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt=""
            />
            <div className="p-4">
              <h3 className="font-bold text-xl">John, 28</h3>
              <p className="text-gray-600">Toronto • Music Lover</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow hover:scale-105 transition">
            <img
              className="h-60 w-full object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt=""
            />
            <div className="p-4">
              <h3 className="font-bold text-xl">Emma, 26</h3>
              <p className="text-gray-600">New York • Traveler</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow hover:scale-105 transition">
            <img
              className="h-60 w-full object-cover"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              alt=""
            />
            <div className="p-4">
              <h3 className="font-bold text-xl">Sophia, 25</h3>
              <p className="text-gray-600">London • Designer</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-rose-500 to-pink-500 text-white">
        <h2 className="text-4xl font-bold">
          Ready to Find Love?
        </h2>

        <p className="mt-4">
          Join thousands finding real connections every day.
        </p>

        <button className="mt-6 bg-white text-pink-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Get Started Free
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-center py-6">
        © 2026 Soulmate App
      </footer>

    </div>
  );
}