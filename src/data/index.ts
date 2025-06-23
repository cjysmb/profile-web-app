import { Logo, People, Plant, Eclipse } from "../assets/icons/about";
import { Fruit, Smile, Stress } from "../assets/icons/programs";
import Johannes from "../assets/images/coaches/johannes.svg";

export const Mission = {
    title: "To support individuals in achieving better overall health through:",
    items: [
        "Sustainable stress management",
        "Mindful eating habits",
        "Improved physical fitness"
    ]
};

export const Vision = {
    title: "To build Healing Community",
    description: `To create a thriving, inclusive community where every individual has the
                    opportunity, support, and environment to achieve optimal health,
                    wellbeing and a balanced life - physically, mentally socially, and
                    environmentally.`
};

export const AboutUs = {
    title: "About Us",
    description: "Transforming Ordinary Into Extraordinary Fitness for Health Resolution",
    items: [
        {
            icon: People,
            icon2: Eclipse,
            description: `Through calming, mindful conversation, coaches support individuals and
                            groups in exploring and achieving their self-defined health and wellness
                            goals.`,
            description1: `Using a client-centered approach, coaches helps people tap into their
                            own insight, strengths, and resources. Together, they set meaningful
                            goals, take intentional action, and create accountability—leading to
                            lasting, healthy lifestyle change.`
        },
        {
            icon: Logo,
            icon2: Eclipse,
            description: `The Compassionate Coaches logo symbolizes the partnership at the heart
                            of coaching—two individuals moving in harmony, dancing in the moment,
                            and flowing with the rhythm of each session.`,
            description1: `The Compassionate Coaches logo represents collaboration, resilience,
                            and the shared commitment to navigating challenges and achieving the
                            client’s personal goals.`
        },
        {
            icon: Plant,
            icon2: Eclipse,
            description:`At Compassionate Coaches, we believe in the power of working together.
                            Each coach brings unique strengths and expertise—not only to support
                            client goals, but also to foster continuous professional growth. `,
            description1: "Together, we cultivate a meaningful, collaborative, and impactful coaching journey."
        },
    ]
};

export const Testimonials = {
    title: "Client Feedback",
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
                name: "Thich Nhat Hanh",
                statement: `“If you know how to breathe, how to sit
                                calmly and quietly, how to do walking meditation, then you have your
                                seatbelt and you're always safe.”`
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
            ],
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
                    value2: 0,
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
                name: "Daniel Wolpert",
                statement: `“The entire purpose of the brain is to produce
                                movement. Movement is the only way we have of interacting with the
                                world.”`
            },
            details: [
                {
                    name: "Duration",
                    value: "8 weeks, once a week"
                },
                {
                    name: "Price",
                    value: 25600,
                    value2: 0,
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
