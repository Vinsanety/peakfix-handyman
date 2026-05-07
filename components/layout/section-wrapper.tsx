import { PropsWithChildren } from "react";
import { Container } from "./container";

export function SectionWrapper({
  children,
  className = ""
}: PropsWithChildren<{ className?: string }>) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
