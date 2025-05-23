import Hero from "./hero/Hero";

const Landing = ({ loading }: { loading: boolean }) => {
  return (
    <div className="relative ">
      <Hero loading={loading} />
    </div>
  );
};
export default Landing;
