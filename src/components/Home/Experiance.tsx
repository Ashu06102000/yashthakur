const Experiance = () => {
  return (
    <div className="flex flex-col border-t-[1px] border-ra mt-20 border-bot">
      <h3 className="uppercase text-8xl p-4 w-full border-bot">Experiance</h3>
      <div className="flex flex-col gap-8 px-6 max-w-[80em] border-r-[1px] border-ra py-20 ">
        <div className="flex  gap-2 flex-col">
          <div className="flex  gap-2 items-center">
            {" "}
            <span className="h-4 w-4 bg-orange-500 flex"></span>
            <span className="uppercase text-4xl  gap-4">
              Copods <span className="text-sm">2022 - Present</span>
            </span>
          </div>

          <div className="flex flex-col gap-8">
            <span>Frontend Developer</span>
            <div className="flex flex-col gap-4 text-3xl font-light">
              <p>
                At COPODS, I specialized in micro frontend architecture,
                React.js, and Remix.js. I successfully led projects from
                inception to delivery, including developing websites on
                platforms like WordPress and Webflow
              </p>
              <p>
                My approach focused on exceeding client expectations through
                meticulous requirements gathering, effective demos, and seamless
                project management. I ensured all solutions aligned with SEO and
                accessibility standards, translating client needs into robust
                technical implementations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
