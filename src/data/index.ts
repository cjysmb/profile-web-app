import { Logo, People, Plant, Eclipse } from "../assets/icons/about";
import { Fruit, Smile, Stress } from "../assets/icons/programs";
import Johannes from "../assets/images/coaches/johannes.svg";

export const Mission = {
    title: "To Support Individuals in",
    items: [
        "Expanding self-awareness",
        "Tapping into their strengths",
        "Identifying core values",
        "Building confidence",
        "Experimenting with life-enhancing behaviors that lead to the fulfillment of their personal goals."
    ]
};

export const Vision = {
    title: "To build Healing Community",
    description: "where individuals support one another in fostering personal growth, collective well-being, and environmental sustainability."
};

export const AboutUs = {
    title: "About Us",
    description: "Transforming Ordinary Into Extraordinary Fitness for Health Resolution",
    items: [
        {
            icon: People,
            icon2: Eclipse,
            description: "Coaching is a supportive alliance between coach and client.It is built on mutual respect, trust, and shared commitment.",
            description1: "Both the coach and the client hold each other in positive regard, creating a space where each can grow, learn, and benefit equally from their interactions."
        },
        {
            icon: Logo,
            icon2: Eclipse,
            description: "Our Compassionate Coaches Logo symbolizes this partnership — two people moving in harmony, dancing in the moment, and flowing with the rhythm of each session.",
            description1: "It represents collaboration, resilience, and the joint effort to overcome challenges and achieve the client’s personal goals."
        },
        {
            icon: Plant,
            icon2: Eclipse,
            description: "At Our Compassionate Coaches, we believe in working together, each coach bringing their unique strengths and expertise to support not only the client’s aspirations but also their own professional growth.",
            description1: "Together, we cultivate a meaningful and impactful coaching journey."
        },
    ]
};

export const Testimonials = {
    title: "Client's Feedback",
    clients: [
        {
            name: "Marie, COO",
            statement: "Coach Johannes has helped me to be on track of my goals to having a healthy lifestyle, not only for myself, but for my family as well.",
            star: 5
        },
        {
            name: "Jessica, Business Coach",
            statement: "“It was great working with Johannes! He is highly commendable especially in getting me back on track & regaining my positivity despite a \"hiccup\". He is emphatic and yet remains objective of the goals set. A good listener indeed!”",
            star: 5
        }
    ]
};

export const OurPrograms = {
    title: "Our Programs",
    programs: [
        {
            icon: Stress,
            title: "Stress Management",
            items: [
                "Learn Mind-Body techniques such as breathing, drawing, and expressive movement for better stress management.",
                "Share your experience with a coach or the group and inspire growth, connection, and support.",
                "Individual / Group"
            ],
            testimonial: {
                name: "Michael Arloski",
                statement: "“Wellness is the experience of living life with high level of awareness, conscious choice, self-acceptance, interconnectedness, love, meaning and purpose.”"
            },
            details: [
                {
                    name: "Duration",
                    value: "8 weeks, once a week"
                },
                {
                    name: "Price",
                    value: 25600,
                    value2: 7200
                }
            ]
        },
        {
            icon: Fruit,
            title: "Healthy Eating",
            items: [
                "Explore your eating habits through mindful conversation with a coach.",
                "Connect with your deeper motivation for eating well.",
                "Build lasting healthy eating habits for long-term success and well-being."
            ],
            testimonial: {
                name: "Michael Arloski",
                statement: "“Wellness is the experience of living life with high level of awareness, conscious choice, self-acceptance, interconnectedness, love, meaning and purpose.”"
            },
            details: [
                {
                    name: "Duration",
                    value: "8 weeks, once a week"
                },
                {
                    name: "Price",
                    value: 25600,
                    value2: 7200
                }
            ]
        },
        {
            icon: Smile,
            title: "Joyful Movement",
            items: [
                "Work with a coach to set achievable, personalized goals.",
                "Enhance your movement experience by learning mindful breathing techniques.",
                "Train with a coach to move better, get stronger, stay consistent, and enjoy every step of your journey."
            ],
            testimonial: {
                name: "Michael Arloski",
                statement: "“Wellness is the experience of living life with high level of awareness, conscious choice, self-acceptance, interconnectedness, love, meaning and purpose.”"
            },
            details: [
                {
                    name: "Duration",
                    value: "8 weeks, once a week"
                },
                {
                    name: "Price",
                    value: 25600,
                    value2: 7200
                }
            ]
        },
    ]
};

export const OurCoaches = {
    title: "Our Coach",
    title2: "Our Coaches",
    coaches: [
        {
            img: Johannes,
            name: "Johannes Laue",
            information: [
                "B.S Sports Science",
                "10 years of Personal Fitness Training experience",
                "Certified Functional Medicine Health Coach",
                "Advance Training for Mind-Body Medicine"
            ]
        }
    ]
}
