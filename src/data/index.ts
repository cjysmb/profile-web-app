import { Smiley, People, Plant, Eclipse } from "../assets/icons/about";
import { Fruit, Smile, Stress } from "../assets/icons/programs";

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
            icon: Smiley,
            icon2: Eclipse,
            title: "Self-Awareness",
            description: "Tools and guidance to help you understand yourself, your strengths, and what truly matters to you."
        },
        {
            icon: People,
            icon2: Eclipse,
            title: "Supportive Community",
            description: "A safe space to grow with others, share experiences, and find encouragement."
        },
        {
            icon: Plant,
            icon2: Eclipse,
            title: "Purposeful Growth",
            description: "Programs that nurture personal well-being and inspire actions for a better world."
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
            title: "Self-Awareness",
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
                    value: 25600
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
                    value: 25600
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
                    value: 25600
                }
            ]
        },
        
    ]
}