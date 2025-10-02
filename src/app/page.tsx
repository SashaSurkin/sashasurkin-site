export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 font-sans bg-white text-black">
      <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Epoch, sans-serif' }}>W h o is S a s h a?</h1>
      <p className="text-lg text-center max-w-xl mb-10">
        She exists at the intersection of engineering and business, and made her first invention at 6 years old.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:sasha@w-eye-ze.com"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          the mail one
        </a>
        <a
          href="https://x.com/sashasurk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          the bird one
        </a>
        <a
          href="https://www.linkedin.com/in/janiesashasurkin"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          the professional one
        </a>
        <a
          href="https://github.com/sashasurkin"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          the project one
        </a>
      </div>
    </main>
  );
}