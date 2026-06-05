import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 text-center">
      <div>
        <h1 className="text-6xl font-bold text-ptpal-gold mb-4">404</h1>
        <h2 className="text-2xl text-white mb-6">Lost in the Abyss</h2>
        <p className="text-slate-400 mb-8">The page you are looking for doesn't exist.</p>
        <Link href="/" className="bg-ptpal-accent text-white px-6 py-3 rounded-xl font-bold">
          Return Home
        </Link>
      </div>
    </div>
  );
}
