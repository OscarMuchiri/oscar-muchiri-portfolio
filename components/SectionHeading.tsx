export default function SectionHeading({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {body && <p className="mt-4 max-w-2xl leading-7 text-slate-400">{body}</p>}
    </div>
  );
}
