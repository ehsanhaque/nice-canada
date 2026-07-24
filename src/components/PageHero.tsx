import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-teal-900">
      <div className="bg-arch-pattern absolute inset-0 opacity-[0.15]" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <Container className="relative py-20 sm:py-24">
        {eyebrow ? (
          <p className="mb-3 font-arabic text-2xl text-gold-400">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl font-bold text-cream-50 sm:text-5xl text-balance">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg text-cream-100/85 text-balance">
            {description}
          </p>
        ) : null}
      </Container>
    </div>
  );
}
