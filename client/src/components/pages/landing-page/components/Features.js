import BackgroundImage from "../../../sharable-components/BackgroundImage";
import Container from "../../../sharable-components/Container";

const features = [
  {
    feature: "Smart Clause Highlighting:",
    summary:
      "Our intelligent system takes the guesswork out of reading complex travel documents. With a keen eye, it identifies and highlights the most critical clauses relevant to your journey. Whether it's terms and conditions, visa requirements, or important deadlines, you'll always stay informed and in control.",
  },
  {
    feature: "Instant Translations:",
    summary:
      "Language barriers shouldn't hinder your travel plans. Our app offers instant translations of your documents, making sure you comprehend every detail no matter where you're headed. From hotel reservations to entry permits, understanding foreign languages is no longer a hurdle.",
  },
  {
    feature: "Streamlined Signing Process:",
    summary:
      "Signing paperwork shouldn't be a chore. Our integration with Dropbox Sign API streamlines the entire signing process. Just a few clicks, and you're done. Spend less time on paperwork and more time planning your adventures.",
  },
  {
    feature: "Document Organization and Backup:",
    summary:
      "Keep your travel documents organized and accessible at all times. Our app syncs seamlessly with your Dropbox account, ensuring you have a secure backup of all your important documents. Never worry about losing crucial paperwork again.",
  },
  {
    feature: "User-Friendly Interface:",
    summary:
      "We're committed to enhancing your experience. Expect regular updates that bring new features and improvements to the app. Your feedback is invaluable in shaping the future of our platform.",
  },
];

function Title({ feature }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        {feature.feature}
      </h3>
    </>
  );
}

function Summary({ feature, className }) {
  const containerClassName = `space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur ${className}`;

  return (
    <ol role="list" className={containerClassName}>
      <p className="mt-1 tracking-tight text-blue-900">{feature.summary}</p>
    </ol>
  );
}

function FeatureStatic() {
  return (
    <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 lg:gap-x-8">
      {features.map((feature) => (
        <section key={feature.feature}>
          <Title feature={feature} />
          <Summary feature={feature} className="my-10" />
        </section>
      ))}
    </div>
  );
}

export default function Features() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Experience Travel Simplified: Unveiling the Multifaceted
            Capabilities of TravelDoc
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Your Ultimate Solution for Document-Related Challenges on Your
            Journeys
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-bottom-32 -top-40" />
        <Container className="relative">
          <FeatureStatic />
        </Container>
      </div>
    </section>
  );
}
