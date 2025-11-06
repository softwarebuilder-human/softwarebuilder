import AnimatedParagraph from "@/components/AnimatedParagraph";

export default function AboutSection({ batman }: any) {
  const textBlocks = [
    <>
      💡 Have an idea for your business, but not sure how to make software for it❓</>,
      <>Don’t worry —{" "}
      <span
        className={`${batman.className} bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-600`}
      >
        Software Builder
      </span>{" "}
      makes it simple.
    </>,
    <>
      🧑‍💻 Just tell us what you need, and we’ll help you create software that fits your work perfectly.{" "}
      Whether it’s a Website 🌐, Mobile&nbsp;app 📱, or Desktop 🖥️ software — we build it all for you!
    </>,
    <>
      💰 Best part — it's{" "}
      <span className="text-green-400">Super Affordable</span>, so small businesses and individuals can
      bring their ideas to life without spending too much.
    </>
  ];

  return <AnimatedParagraph textBlocks={textBlocks} />;
}
