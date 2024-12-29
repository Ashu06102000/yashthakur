const About = () => {
  return (
    <div className="flex ">
      <div className="h-full w-1/4"></div>
      <div className="border-[1px] border-t-0 border-ra w-auto h-full p-8">
        <div className="h-[100vh] relative flex justify-center">
          <video
            className="h-56 absolute top-[14%]"
            src="/src/assets/robo.mp4"
            autoPlay
            muted
          ></video>
          <img
            className="sticky top-0 max-h-[650px] w-full max-w-[400px]"
            src="/src/assets/elivat.webp"
            alt=""
          />
        </div>
      </div>
      <div className="h-full w-1/4"></div>
    </div>
  );
};

export default About;
