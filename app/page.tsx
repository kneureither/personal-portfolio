const sections = [
  {
    title: "Experience",
    items: [
      "Intern & J-1 Research Scholar at Interaction.co (The Interaction Company of California), Palo Alto.",
      "Building next-generation AI systems at the intersection of scientific computing and applied ML.",
    ],
  },
  {
    title: "Education",
    items: [
      "M.Sc. Computational Science and Engineering (CSE), TU Munich (TUM), completed October 2025 with a 1.0 grade.",
      "CDTM honors degree (Center for Digital Technology and Management), cohort 2022–2024.",
    ],
  },
  {
    title: "Research",
    items: [
      "Focus areas: physics-informed AI, molecular ML potentials, Particle-in-Cell simulations, and the hydrogen problem.",
      "Visiting researcher at Stanford University and SLAC National Accelerator Laboratory (March 2025 – October 2025), under Siegfied Glenzer.",
    ],
  },
  {
    title: "Interests",
    items: [
      "High-performance computing and early AI adoption.",
      "Classical opera enthusiast.",
      "Backcountry hiking and mountaineering, including Yosemite and Half Dome routes.",
    ],
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-10 sm:px-10 lg:py-16">
      <section className="rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-lg shadow-blue-100/60 backdrop-blur sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Konstantin Neureither
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Computational Science Engineer & AI Researcher
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          I work on scientific machine learning and next-gen AI, combining rigorous
          computational methods with practical innovation.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
