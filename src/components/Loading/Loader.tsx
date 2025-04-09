import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const titlesRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const titles = titlesRef.current?.children;
    const blocks = blocksRef.current?.children;

    if (!titles || !blocks) return;

    gsap.fromTo(
      titles,
      {
        x: -60,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.inOut",
        stagger: 2,
      }
    );

    gsap.to(titles, {
      x: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut",
      delay: 1,
      stagger: 2,
    });

    gsap.from(blocks, {
      x: -1600,
      duration: 3,
      ease: "expo.inOut",
      delay: 3,
      stagger: 0.16,
    });

    gsap.to(blocks, {
      x: 1600,
      duration: 2.6,
      ease: "expo.inOut",
      delay: 6,
      stagger: 0.2,
      onComplete: () => setLoading(false),
    });
  }, [setLoading]);

  return (
    <div className="loader-container fixed top-0 left-0 w-screen h-screen z-[100] flex items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <div
          ref={titlesRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4"
        >
          <div className="relative">
            <h1 className="font-[Barracuda] font-medium text-[240px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              Make
            </h1>
          </div>
          <div className="relative">
            <h1 className="font-[Barracuda] font-medium text-[240px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              A
            </h1>
          </div>
          <div className="relative">
            <h1 className="font-[Barracuda] font-medium text-[240px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              Difference
            </h1>
          </div>
        </div>

        <ul
          ref={blocksRef}
          className="absolute top-0 left-0 m-0 p-0 flex w-full h-screen list-none justify-center items-center"
        >
          <li className="h-screen w-[0.2%] mx-[10px] bg-[#da0510]" />
          <li className="h-screen w-[1.4%] ml-[20px] mr-[200px] bg-[#2001fe]" />
          <li className="h-screen w-[0.8%] mx-[40px] bg-[#01fefe]" />
          <li className="h-screen w-[2%] mx-[400px] bg-[#00fe00]" />
          <li className="h-screen w-[0.8%] mx-[20px] bg-[#f4f315]" />
          <li className="h-screen w-[2.8%] bg-[#fa04f9]" />
        </ul>
      </div>
    </div>
  );
};

export default Loader;
