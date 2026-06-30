import StarField from "../common/StarField";
import SectionHeading from "../common/SectionHeading";
import SectionWrapper from "../common/SectionWrapper";
import Book from "./Book";

export default function AboutScene() {
  return (
    <SectionWrapper id="about" className="flex items-center py-28 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-purple-deep/40 to-midnight" />
      {/* Bookshelf silhouette suggestion via soft vertical bars */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 opacity-20 [background:repeating-linear-gradient(90deg,transparent,transparent_38px,#D9B45F_38px,#D9B45F_40px)] mask-fade-t" />
      <StarField count={26} color="gold" variant="float" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 w-full">
        <SectionHeading
          eyebrow="Scene II — The Library"
          title="About Me"
          description="A few pages from the story so far."
        />
        <Book />
      </div>
    </SectionWrapper>
  );
}
