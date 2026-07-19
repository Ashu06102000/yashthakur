'use client';

const achievements = [
    {
        title: 'Scalable Architecture',
        description:
            'Designed modular frontend systems and reusable architecture that improved maintainability while reducing feature delivery time by 30%.',
    },
    {
        title: 'Cross-Platform Apps',
        description:
            'Built production-ready React Native applications for iOS and Android with a focus on performance, scalability and delightful user experiences.',
    },
    {
        title: 'AI Engineering',
        description:
            'Developed RAG platforms, AI chat experiences and voice assistants using AWS Bedrock, vector search and serverless infrastructure.',
    },
    {
        title: 'Cloud & Media',
        description:
            'Built secure AWS workflows with IAM, MediaConvert, Lambda and scalable backend services powering enterprise applications.',
    },
];

const stats = [
    {
        value: '4+',
        label: 'Years',
    },
    {
        value: '20+',
        label: 'Projects',
    },
    {
        value: '5',
        label: 'Industries',
    },
];

const stack = [
    'React',
    'Next.js',
    'React Native',
    'TypeScript',
    'Node.js',
    'GraphQL',
    'AWS',
    'Bedrock',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'Tailwind',
];

export default function Showreel() {
    return (
        <section
            className="showreel-section"
            id="experience"
        >
            <div className="showreel">

                <div className="showreel__left">

                    <span className="showreel__eyebrow">
                        Four years
                        building
                        <br />
                        digital {" "}
                        <span className="vimeo-hero__word is--relative">
                            <div className="home-header__star">
                                <div className="home-header__star-inner">
                                    <img
                                        src="/assets/VimeoHero SVG/pink-star.svg"
                                        alt=""
                                        className="home-header__star-svg"
                                    />
                                </div>
                            </div>

                            <img
                                src="/assets/VimeoHero SVG/oval-underline.svg"
                                alt=""
                                className="home-header__title-line-svg"
                            />

                            <span> {" "}Products</span>
                        </span>
                    </span>


                    <div className="showreel__intro-container">
                        <p className="showreel__intro">
                            Over the past 4+ years, I&apos;ve worked across product, engineering, and design to build 20+ digital experiences for companies operating in 5 different industries. The work has ranged from fast-moving startups to product-led teams that need reliable systems and polished user experiences.
                        </p>

                        <p className="showreel__intro">
                            From shaping architecture to shipping end-user features, I focus on building products that feel thoughtful from both a company perspective and a customer perspective—balancing speed, scalability, clarity, and long-term maintainability.
                        </p>

                    </div>



                </div>


            </div>

        </section>
    );
}