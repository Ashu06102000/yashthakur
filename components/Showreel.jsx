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
                        digital
                        products.
                    </span>

                    <h2 className="showreel__title">
                        professional experiace

                    </h2>

                

                </div>

                <div className="showreel__right">

                    <div className="showreel__company">

                        <div>

                            <span className="showreel__role">
                                Frontend Engineer
                            </span>

                            <h3 className="showreel__company-name">
                                Copods
                            </h3>

                        </div>

                        <span className="showreel__date">
                            2022 — Present
                        </span>

                    </div>

                    <div className="showreel__stats">

                        {stats.map((item) => (

                            <div
                                key={item.label}
                                className="showreel__stat"
                            >

                                <h3>
                                    {item.value}
                                </h3>

                                <span>
                                    {item.label}
                                </span>

                            </div>

                        ))}

                    </div>

                    <div className="showreel__achievements">
                        {achievements.map((item, index) => (

                            <article
                                key={item.title}
                                className="showreel__achievement"
                            >

                                <div className="showreel__achievement-number">
                                    0{index + 1}
                                </div>

                                <div className="showreel__achievement-content">

                                    <h4>
                                        {item.title}
                                    </h4>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>

                            </article>

                        ))}

                    </div>

                    <div className="showreel__divider" />

                    <div className="showreel__stack">

                        <span className="showreel__stack-title">
                            Technologies I work with
                        </span>

                        <div className="showreel__stack-list">

                            {stack.map((tech) => (

                                <span
                                    key={tech}
                                    className="showreel__stack-item"
                                >
                                    {tech}
                                </span>

                            ))}

                        </div>

                    </div>

                    <div className="showreel__footer">

                        <div className="showreel__footer-left">

                            <span>
                                Currently building products at
                            </span>

                            <h3>
                                Copods
                            </h3>

                        </div>

                        <div className="showreel__footer-right">

                            <a href="mailto:yash6102000thakur@gmail.com">
                                Email
                            </a>

                            <a
                                href="https://linkedin.com/in/YOUR-LINK"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="https://github.com/YOUR-GITHUB"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}