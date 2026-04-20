import { PropsWithChildren } from "react";
import { Container } from "./container";

export function SectionWrapper({
  children,
  className = ""
}: PropsWithChildren<{ className?: string }>) {
  return (
    <section className={`py-14 sm:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
