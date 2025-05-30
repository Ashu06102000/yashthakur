import { useEffect, useRef } from "react";
import copodslogo from "../../assets/copodslogo.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
  const workref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (workref.current) {
      gsap.fromTo(
        workref.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: workref.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={workref} className="flex gap-5 py-20 justify-between">
      <h3 className="text-white">Work Experiance</h3>
      <div className="flex flex-col w-2/3 gap-24">
        <div className="flex gap-48 items-start">
          <img src={copodslogo} alt="" />
          <div className="flex flex-col">
            <span className="text-white text-base font-light">
              Software Engineer
            </span>
            <span className="text-graysharetwo text-base font-light font-roboto">
              Pune, India
            </span>
            <span className="text-white text-base font-light pt-4">
              2022 - Present
            </span>
          </div>
        </div>
        <p className="font-roboto text-graymain flex flex-col gap-2">
          <span>
            Implemented encrypted HLS video streaming using AWS MediaConvert,
            CloudFront, and signed URLs—reducing piracy risk by 95% while
            supporting over 650,000+ streams per month.
          </span>
          <span>
            Developed a feature-rich workspace system with real-time
            invitations, live collaboration, and access control. Cut down
            project management time by an average of 2 hours/week per user.
          </span>
          <span>
            Built a flexible authentication system using micro frontends and
            Module Federation. Allowed seamless integration across six
            independent platform modules without authentication conflicts.
          </span>
          <span>
            Created a library of reusable, framework-agnostic UI components.
            Reduced development time on shared features by 40% and improved
            design consistency across platforms.
          </span>
          <span>
            Designed and deployed an Online Examination System that automated
            candidate testing. Improved recruitment efficiency by 63% and cut
            evaluation time from five days to just a few hours.
          </span>
          <span>
            Led the redesign of a healthcare portal offering free diabetes
            consultations. Increased accessibility by 90% and tripled
            appointment bookings within the first three months.
          </span>
          <span>
            Built custom eCommerce experiences using Shopify by creating custom
            components with Liquid, helping brands achieve eight-figure revenue
            within their first year after launch.
          </span>
          <span>
            Developed an AI-powered learning platform on WordPress that
            personalizes content delivery. Boosted average engagement time by
            2.3x and increased course completion rates by 45%.
          </span>
          <span>
            Strengthened backend infrastructure with Prisma ORM, role-based
            access control, Cypress tests, and automated SSL renewals. Reduced
            downtime and critical bugs by 70%.
          </span>
          <span>
            Integrated Twilio to send real-time SMS alerts for healthcare
            appointments. Improved communication response rate by 62%,
            especially in low-connectivity regions.
          </span>
          <span>
            Leveraged AWS services such as S3 for storage, EC2 and Lightsail for
            hosting, and Lambda for serverless functions—building scalable,
            reliable, and cost-effective cloud infrastructure to support various
            applications and platforms.
          </span>
          <span>
            Created responsive, user-friendly websites using WordPress and
            Webflow, delivering tailored digital experiences for various
            clients.
          </span>
        </p>

        <button className="bg-white text-black py-4 px-6 rounded-full w-fit">
          Download Resumé
        </button>
      </div>
    </div>
  );
};

export default WorkSection;
