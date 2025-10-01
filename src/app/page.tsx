import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 font-sans bg-white text-black">
      <h1 className="text-5xl font-bold mb-6">Sasha Surkin</h1>
      <p className="text-lg text-center max-w-xl mb-10">
        I build weird, useful things, from AI finance tools to self-correcting eyeglasses.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:hello@sashasurkin.com"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Contact Me
        </a>
        <a
          href="https://x.com/sashasurk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          Twitter/X
        </a>
        <a
          href="https://www.linkedin.com/in/janiesashasurkin"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/sashasurkin"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}
