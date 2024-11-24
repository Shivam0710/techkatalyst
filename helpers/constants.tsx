export type ServicePoint = {
    heading: string;
    description: string;
};

export type WhyUsPoint = {
    icon: string;
    heading: string;
    description: string;
};

export type HowItWorksPoint = {
    heading: string;
    description: string;
};

export type FAQ = {
    question: string;
    answer: string;
};

export type Offering = {
    icon: string;
    description: string;
};

export type Service = {
    heroSection: {
        title: string;
        heading: string;
        description: string;
    };
    offeringsSection: {
        title: string;
        offerings: Offering[];
    };
    whyChooseUsSection: {
        title: string;
        description: string;
        points: ServicePoint[];
    };
    WhyUsSection: {
        title: string;
        heading?: string;
        points: WhyUsPoint[];
    };
    howItWorksSection: HowItWorksPoint[];
    faqSection: FAQ[];
};

export type Services = {
    "mobile-app-development": Service;
    "ui-ux-design": Service;
};

export const services: Services = {
    "mobile-app-development": {
        "heroSection": {
            title: 'Market Research',
            heading: 'Drive Business Success with Data-Driven Market Insights',
            description: 'In-depth product research, competitor analysis, and market documentation that provide a clear roadmap for your business.'
        },
        "offeringsSection": {
            "title": "Our Mobile Application Development Service offerings",
            "offerings": [
                {
                    "icon": "/images/services/ios.png",
                    "description": "IOS app development services"
                },
                {
                    "icon": "/images/services/android.png",
                    "description": "Android app development services"
                },
                {
                    "icon": "/images/services/cross-platform.png",
                    "description": "Cross-platform app development services"
                },
                {
                    "icon": "/images/services/ui-ux.png",
                    "description": "UI/UX mobile app designing services"
                },
                {
                    "icon": "/images/services/enterprise.png",
                    "description": "Enterprise mobility solution"
                },
                {
                    "icon": "/images/services/prototyping.png",
                    "description": "Mobile app prototyping services"
                },
                {
                    "icon": "/images/services/qa.png",
                    "description": "Automated QA and Testing"
                },
                {
                    "icon": "/images/services/maintenance.png",
                    "description": "App maintenance support"
                }
            ]
        },
        "whyChooseUsSection": {
            "title": "Why your Business needs a Mobile App",
            "description": "Mobile app development services bring strategic benefits that drive engagement and support your business goals:",
            "points": [
                {
                    "heading": "Enhanced User Experience",
                    "description": "We design intuitive and visually engaging interfaces that provide a seamless, enjoyable user journey."
                },
                {
                    "heading": "Stronger Brand Presence",
                    "description": "A well-crafted app strengthens your brand identity, helping users associate quality with your business."
                },
                {
                    "heading": "Improved Customer Engagement",
                    "description": "Our approach to UX/UI and functionality keeps users engaged, leading to higher retention and loyalty."
                },
                {
                    "heading": "Scalability for Growth",
                    "description": "It is an important tool that helps simplify purchases, introduce loyalty programs, and offer mobile-specific deals to increase conversions and customer retention."
                },
                {
                    "heading": "Seamless Accessibility",
                    "description": "An app keeps your business at your customer's fingertips, offering seamless access to products, services, and support anytime, anywhere."
                },
                {
                    "heading": "Edge Over Competition",
                    "description": "In today's mobile-first world, having an app positions your business as innovative, giving you a distinct edge in the market."
                }
            ]
        },
        "WhyUsSection": {
            heading: "Why Tech Katalyst",
            title: "Choosing Tech Katalyst for mobile app development means partnering with a team that's dedicated to delivering high-quality, user-focused solutions. Here's why we stand out:",
            points: [
                {
                    "icon": "/images/services/strategic.png",
                    "heading": "Strategic approach",
                    "description": "We build with the end in mind, developing an app strategy that supports both short-term goals and long-term scalability."
                },
                {
                    "icon": "/images/services/budget.png",
                    "heading": "In-budget app development",
                    "description": "We cater to startups of all nature and offer cost-effective mobile app development services."
                },
                {
                    "icon": "/images/services/cross-platform-expertise.png",
                    "heading": "Cross-Platform expertise",
                    "description": "Whether it's iOS, Android, or both, we ensure seamless functionality and high performance across platforms."
                },
                {
                    "icon": "/images/services/experience.png",
                    "heading": "A wealth of experience",
                    "description": "Our team of mobile app developers is proficient in developing and designing standout applications."
                },
                {
                    "icon": "/images/services/round-the-clock.png",
                    "heading": "Round-the-clock availability",
                    "description": "Our team is in constant touch with you to listen to feedback, improve and progress on your mobile app."
                },
                {
                    "icon": "/images/services/custom-solutions.png",
                    "heading": "Custom solutions",
                    "description": "We tailor experiences, solutions and mobile apps around your target audience, industry and business case."
                },
            ]
        },
        "howItWorksSection": [
            {
                "heading": "Explore, Evaluate, Experiment",
                "description": "We dive into your goals with market research, technology recommendations, and a go-to-market strategy, setting a foundation for business impact."
            },
            {
                "heading": "Define & Visualize Design",
                "description": "Our UX/UI team designs a visually engaging and user-centered experience, while our developers transform wireframes into functional, secure app iterations."
            },
            {
                "heading": "Develop & Test",
                "description": "Our front-end and back-end developers build and test the app, ensuring security, performance, and quality across iOS and Android platforms."
            },
            {
                "heading": "Optimise for Launch",
                "description": "We prepare the app for launch, fine-tuning performance and security, and implementing any necessary analytics for user insights."
            },
            {
                "heading": "Post-Launch Support",
                "description": "Our team provides ongoing support, monitoring performance, and implementing updates to keep the app optimized as user needs evolve."
            }
        ],
        "faqSection": [
            {
                "question": "How much does mobile app development cost?",
                "answer": "If there were an easy answer to this question, you’d see it here. Reach out to us with the simple form below and we can give you a fair estimate after understanding the scope of your requirement."
            },
            {
                "question": "How much does mobile app development cost?",
                "answer": "If there were an easy answer to this question, you’d see it here. Reach out to us with the simple form below and we can give you a fair estimate after understanding the scope of your requirement."
            },
            {
                "question": "How much does mobile app development cost?",
                "answer": "If there were an easy answer to this question, you’d see it here. Reach out to us with the simple form below and we can give you a fair estimate after understanding the scope of your requirement."
            },
            {
                "question": "How much does mobile app development cost?",
                "answer": "If there were an easy answer to this question, you’d see it here. Reach out to us with the simple form below and we can give you a fair estimate after understanding the scope of your requirement."
            },
            {
                "question": "How much does mobile app development cost?",
                "answer": "If there were an easy answer to this question, you’d see it here. Reach out to us with the simple form below and we can give you a fair estimate after understanding the scope of your requirement."
            },
        ]
    },
    "ui-ux-design": {
        "heroSection": {
            title: 'Product-UI/UX-Design',
            heading: 'User-Cantered Design that Brings Your Brand to Life',
            description: 'At Tech Katalyst, we blend creativity and functionality to build user-friendly interfaces that resonate with users and align with your business goals. Elevate your product with UI/UX that stands out..'
        },
        "offeringsSection": {
            "title": "Our User interface & Experience Design Service Offerings",
            "offerings": [
                {
                    "icon": "/images/services/ios.png",
                    "description": "User-Cantered Design Approach"
                },
                {
                    "icon": "/images/services/android.png",
                    "description": "Wireframing and Prototyping"
                },
                {
                    "icon": "/images/services/cross-platform.png",
                    "description": "Responsive and Adaptive Design"
                },
                {
                    "icon": "/images/services/ui-ux.png",
                    "description": "UI Design and Branding"
                },
                {
                    "icon": "/images/services/enterprise.png",
                    "description": "Design System and Style Guide Creation"
                },
                {
                    "icon": "/images/services/prototyping.png",
                    "description": "Usability Testing and Feedback"
                },
                {
                    "icon": "/images/services/qa.png",
                    "description": "UX Strategy and Consulting"
                },
                {
                    "icon": "/images/services/maintenance.png",
                    "description": "Continuous Improvement and Iteration"
                }
            ]
        },
        "whyChooseUsSection": {
            "title": "Why your Business Needs UI and UX Design",
            "description": "Our UI/UX design services provide strategic benefits for your business",
            "points": [
                {
                    "heading": "Enhanced Usability",
                    "description": "Intuitive design allows users to navigate and interact effortlessly, improving satisfaction."
                },
                {
                    "heading": "Stronger Brand Identity",
                    "description": "Integrated branding elements create a memorable experience that builds recognition and loyalty."
                },
                {
                    "heading": "Increased Engagement and Retention",
                    "description": "Optimized UX keeps users engaged, fostering long-term relationships."
                },
                {
                    "heading": "Higher Conversion Rates",
                    "description": "A user-friendly interface aligned with expectations drives higher conversions and key actions."
                },
                {
                    "heading": "Lower Development Costs",
                    "description": "Early prototyping and testing reduce the need for costly revisions during development."
                },
                {
                    "heading": "Competitive Edge",
                    "description": "Superior design can differentiate your applications and website, positioning your brand as professional and trustworthy."
                }
            ]
        },
        "WhyUsSection": {
            heading: "Why Choose Us for UI/UX Design",
            title: 'Choosing Tech Katalyst as your UI/UX design partner means working with a team dedicated to delivering meaningful, high-impact user experiences. Here’s what sets us apart:',
            points: [
                {
                    "icon": "/images/services/strategic.png",
                    "heading": "User-Centric Approach",
                    "description": "We create intuitive designs that keep users engaged and delighted."
                },
                {
                    "icon": "/images/services/budget.png",
                    "heading": "Driving Business Success",
                    "description": "Our designs focus on converting visitors into loyal customers, boosting growth."
                },
                {
                    "icon": "/images/services/cross-platform-expertise.png",
                    "heading": "Data-Driven Insights",
                    "description": "Every design choice is backed by user data to ensure optimal usability."
                },
                {
                    "icon": "/images/services/round-the-clock.png",
                    "heading": "Consistency Across Devices",
                    "description": "Seamless experiences across all devices, with consistent branding."
                },
                {
                    "icon": "/images/services/experience.png",
                    "heading": "Customized Solutions",
                    "description": "Unique design solutions tailored to reflect your brand identity."
                },
                {
                    "icon": "/images/services/custom-solutions.png",
                    "heading": "Continuous Improvement",
                    "description": "Ongoing support to refine designs as your business evolves."
                },
            ]
        },
        "howItWorksSection": [
            {
                "heading": "Define",
                "description": "We start by understanding your goals, user needs, and market trends to identify the core problem and set a clear vision for the product."
            },
            {
                "heading": "Ideate",
                "description": "Our team brainstorms and explores creative solutions, focusing on functionality, user experience, and innovation to shape the ideal concept."
            },
            {
                "heading": "Prototype",
                "description": "We build initial models and interactive wireframes, enabling you to visualize the product and gather feedback before development."
            },
            {
                "heading": "Build",
                "description": "With a finalized design, we move to the development phase, crafting a seamless, functional, and visually engaging product."
            },
            {
                "heading": "Analyse",
                "description": "Post-launch, we gather data and user feedback, continuously refining the product to ensure it meets objectives and enhances user satisfaction."
            }
        ],
        "faqSection": [
            {
                "question": "What is UI/UX design and why is it important?",
                "answer": "UI/UX design is the process of designing digital products with a focus on user experience and interface. It involves creating intuitive and visually appealing interfaces that are easy to navigate and use. Good UI/UX design can significantly improve user satisfaction, engagement, and conversion rates."
            },
            {
                "question": "How can a well-designed user interface increase user engagement and conversions?",
                "answer": "A well-designed user interface can reduce user frustration, improve task completion rates, and enhance brand perception, leading to higher user engagement and conversions."
            },
            {
                "question": "How can UI/UX design help my business achieve its goals?",
                "answer": "UI/UX design can help businesses achieve their goals by increasing user acquisition, boosting customer satisfaction, driving sales and revenue, and improving brand reputation."
            },
            {
                "question": "How do you approach a new UI/UX design project?",
                "answer": "Our approach involves user research, information architecture, wireframing, prototyping, visual design, usability testing, and iteration to create effective and user-friendly designs."
            },
            {
                "question": "How do you ensure that your designs are accessible to people with disabilities?",
                "answer": "We adhere to accessibility guidelines such as WCAG to ensure that our designs are inclusive and usable by people with disabilities. This includes using clear and concise language, providing alternative text for images, ensuring sufficient color contrast, using keyboard navigation, and providing transcripts for audio and video content."
            },
        ]
    }
}