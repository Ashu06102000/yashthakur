import Hero from "./hero/Hero";

const Landing = ({ loading }: { loading: boolean }) => {
  return (
    <div className="relative bg-white">
      <Hero loading={loading} />
    </div>
  );
};
export default Landing;
