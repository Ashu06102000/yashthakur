import ResumeEducation from "./ResumeEducation";
import ResumeExperiance from "./ResumeEperiance";
import ResumeSkills from "./ResumeSkills";

const ResumePage = ({ loading }: { loading: boolean }) => {
  return (
    <div className="flex flex-col p-24">
      <div className="border-b border-b-graymain border-opacity-30 pb-28">
        <h1 className="text-8xl w-2/3 text-white/80">
          My resume, in human speak
        </h1>
      </div>

      <div className="py-24 w-2/5 flex flex-col gap-10">
        <h2 className="text-2xl">Wait, what?</h2>
        <p className="font-roboto text-graysharetwo">
          To make sense of how I got to where I am now, these entries are in the
          order of oldest to newest—you know, like a Snapchat story. A resume
          should be about meaningful experiences, not masked by buzzwords and
          inflated wins. This is the real story of how I would tell it like a
          real person, but of course, if you still need the HR ready version
          it’s here.
        </p>
        <button className="bg-white text-black py-4 px-6 rounded-full w-fit">
          Download Bullshit Version
        </button>
      </div>
      <ResumeEducation />
      <ResumeExperiance />
      <ResumeSkills />
    </div>
  );
};
export default ResumePage;
