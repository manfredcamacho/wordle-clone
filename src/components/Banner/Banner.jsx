import "./Banner.css";

const Banner = ({ className, children }) => {
  return (
    <div className={`${className} banner`}>
      <p>{children}</p>
    </div>
  );
};

const HappyBanner = ({ attempts }) => (
  <Banner className={"happy"}>
    <strong>Congratulations!</strong> Got it in
    <strong> {attempts} guesses</strong>.
  </Banner>
);

const SadBanner = ({ answer }) => (
  <Banner className={"sad"}>
    Sorry, the correct answer is <strong>{answer}</strong>.
  </Banner>
);

export { HappyBanner, SadBanner };
