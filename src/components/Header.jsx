function Header({ viewMode, onToggleView }) {
  return (
    <header className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 via-indigo-700 to-violet-800 text-white p-8 rounded-2xl shadow-2xl mb-8 border border-white/10">
      
      <div className="flex items-center justify-between">
        
        {/* Left: Title with emoji */}
        <div className="flex items-center gap-5">
          <div className="bg-white/20 p-4 rounded-2xl">
            <span className="text-5xl">🎓</span>
          </div>
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">Student Info</h1>
            <p className="text-blue-100 mt-1 text-lg font-light">
              Manage student records with ease
            </p>
          </div>
        </div>

        {/* Right: Toggle button */}
        <button
          onClick={onToggleView}
          className="bg-white/20 px-5 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 font-semibold text-lg"
        >
          {viewMode === 'card' ? '📊 Table View' : '🎴 Card View'}
        </button>

      </div>
    </header>
  );
}

export default Header;