import { Container } from "./Container";

export function Section({
  className = "",
  containerClassName = "",
  children,
}: {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold text-teal-900 sm:text-4xl text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-ink-500 text-balance">{description}</p>
      ) : null}
    </div>
  );
}
