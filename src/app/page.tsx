export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-4 sm:p-8 font-sans bg-white text-black">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'Epoch, sans-serif' }}>Who is Sasha?</h1>
        <p className="text-base sm:text-lg text-center max-w-xl mb-10 px-4">
          She exists at the intersection of engineering and business, and made her first invention at 6 years old.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
        <a
          href="mailto:sasha@w-eye-ze.com"
          className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-black rounded-lg hover:bg-black hover:text-white transition text-center"
        >
          the mail one
        </a>
        <a
          href="https://x.com/sashasurk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-black rounded-lg hover:bg-black hover:text-white transition text-center"
        >
          the bird one
        </a>
        <a
          href="https://www.linkedin.com/in/janiesashasurkin"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-black rounded-lg hover:bg-black hover:text-white transition text-center"
        >
          the professional one
        </a>
        <a
          href="https://github.com/sashasurkin"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-black rounded-lg hover:bg-black hover:text-white transition text-center"
        >
          the project one
        </a>
      </div>
    </main>
  );
}