export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center mb-5">
        <span className="text-2xl">❤️</span>
      </div>

      <h1 className="text-2xl font-semibold mb-2">Decide</h1>

      <p className="text-sm text-neutral-400 text-center mb-8">
        Swipe with friends, find what you
      </p>

      <div className="w-full max-w-xs flex flex-col gap-3">
        <button className="h-11 rounded-lg bg-white text-black text-sm font-medium">
          Create a room
        </button>

        <button className="h-11 rounded-lg border border-neutral-700 text-sm font-medium">
          Join a room
        </button>
      </div>
    </main>
  );
}
