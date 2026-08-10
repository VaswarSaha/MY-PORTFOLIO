import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <div className="aurora-field" aria-hidden>
        <div className="aurora-blob one" />
        <div className="aurora-blob two" />
        <div className="aurora-blob three" />
      </div>
      <Navigation />
    </>
  );
};

export default Header;