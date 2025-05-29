const ResumeExperiance = () => {
  return (
    <div className="flex gap-5 py-20 justify-between">
      <h3 className="text-white text-lg ">Work Experiance</h3>
      <div className="flex flex-col w-2/3 gap-16">
        <div className="flex gap-48 items-start">
          <h3 className=" font-semibold">Copods</h3>
          <div className="flex font-roboto text-base w-full gap-12 align-top">
            <div className="flex flex-col">
              <span className="text-white  font-light">Software Engineer</span>
              <span className="text-graysharetwo  font-light">Pune, India</span>
            </div>

            <span className="text-white  font-light">2022 - Present</span>
          </div>
        </div>
        <p className="font-roboto text-graymain flex flex-col gap-2">
          <span>
            Over the past few projects, I’ve had the chance to build everything
            from secure video platforms to collaborative workspaces. I
            implemented encrypted HLS video streaming using AWS MediaConvert,
            CloudFront, and signed URLs—ensuring content was fast, protected,
            and scalable. I also built a feature-rich workspace system where
            users could collaborate and invite others, helping teams work better
            together.
          </span>
          <span>
            One of the most exciting challenges I took on was integrating
            Digital Rights Management (DRM) for premium video content. Figuring
            out how to protect media at scale while keeping the user experience
            seamless taught me a lot about security, licensing, and content
            delivery. It pushed me to think not just like a developer, but like
            a product owner and end-user.
          </span>
          <span>
            Alongside that, I developed a flexible authentication system using
            micro frontends and Module Federation, allowing different parts of a
            SaaS platform to work independently yet seamlessly. I also focused
            on writing reusable, framework-agnostic components to support
            cross-stack compatibility.
          </span>
          <span>
            I've built real-world impact projects too—like an Online Examination
            System that improved hiring efficiency by 63%, and a healthcare
            portal redesign that offered free diabetes consultations, increasing
            accessibility by 90%.
          </span>
          <span>
            I’ve also created custom eCommerce experiences using WordPress,
            Webflow, and Shopify, helping brands launch meaningful online
            stores. One project I'm especially proud of is an AI-powered
            learning platform built on WordPress, which personalizes content
            delivery and makes learning more engaging.
          </span>
          <span>
            Behind the scenes, I kept things secure and scalable—writing
            end-to-end Cypress tests, setting up role-based access controls,
            integrating Prisma ORM for cleaner backend logic, and automating SSL
            renewals. I also used Twilio to send SMS alerts for health
            appointments, improving communication and user engagement.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResumeExperiance;
