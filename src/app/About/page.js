export const metadata = {
  title: "About | AI Interview Prep",
};

const sections = [
  {
    title: "Our Purpose",
    text: "Technical interviews are stressful, and most people never get honest feedback on how they actually answer. AI Interview Prep gives you a safe place to practice as many times as you want and learn from each attempt.",
  },
  {
    title: "How AI Interview Practice Works",
    text: "You pick a language and answer questions in writing or by voice. Our AI evaluates your answer based on understanding, not exact wording. It checks correctness, conceptual understanding and explanation quality, then tells you what you did well, what you missed, and how to improve.",
  },
  {
    title: "Benefits for Students and Job Seekers",
    text: "Build confidence before real interviews, find your weak topics, practice under a timer, and watch your scores improve across attempts. Your progress is private and visible only to you.",
  },
  {
    title: "Available Languages",
    text: "Python, Java, C, C++ and JavaScript, with more coming. Each language has three rounds: Fundamentals, Intermediate and Advanced.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">About AI Interview Prep</h1>
      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-semibold text-indigo-600">
              {section.title}
            </h2>
            <p className="mt-2 leading-relaxed text-slate-600">
              {section.text}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}