import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Uncover the Globel's Hidden Gems.
          </h1>
          <p className="paragraph">
          Find details about every country. Explore cultures, histories, and more with our easy-to-use search and filter tools.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Begin Your Exploration <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img
            src="/images/WORLD IMAGE.webp"
            alt="world is beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};