import Link from "next/link";

const languages = [
  { name: "Python", note: "Syntax, OOP, data structures" },
  { name: "Java", note: "OOP, collections, exceptions" },
  { name: "C", note: "Pointers, memory, fundamentals" },
  { name: "C++", note: "STL, classes, memory management" },
  { name: "JavaScript", note: "Closures, async, the DOM" },
];

const steps = [
  {
    title: "Choose a language",
    text: "Pick the language you want to be interviewed in.",
  },
  {
    title: "Answer by text or voice",
    text: "Type your answer or speak it. Both are evaluated the same way.",
  },
  {
    title: "Get AI feedback",
    text: "Receive a score, what you did well, what you missed, and a sample answer.",
  },
  {
    title: "Track your progress",
    text: "See your reports, weak topics and improvement over time in My Performance.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 px-4 py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Prepare for programming interviews with AI
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Practice real interview questions, get scored on your understanding
            (not exact wording), and see exactly how to improve.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white hover:bg-indigo-400"
            >
              Start Interview
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Supported languages */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold">Supported Languages</h2>
        <p className="mt-2 text-center text-slate-600">
          Three rounds per language: Fundamentals, Intermediate and Advanced.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-indigo-600">
                {lang.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{lang.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">How It Works</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="text-3xl font-bold">About the Platform</h2>
        <p className="mt-4 text-slate-600">
          AI Interview Prep is a personal practice space for students, freshers
          and job seekers. There are no leaderboards and no competition, just
          honest feedback to help you get better.
        </p>
        <Link
          href="/about"
          className="mt-6 inline-block font-semibold text-indigo-600 hover:underline"
        >
          Read more →
        </Link>
      </section>
    </>
  );
}