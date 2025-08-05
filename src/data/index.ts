import { Logo, People, Plant, Eclipse } from "../assets/icons/about";
import { Fruit, Smile, Stress } from "../assets/icons/programs";
import { Pin, Phone } from "../assets/icons/footer";
import Johannes from "../assets/images/coaches/johannes.svg";

export const Mission = {
    title: "To support individuals in achieving better overall health through:",
    items: [
        "Sustainable stress management",
        "Improved physical fitness",
        "Mindful eating habits"
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
            description1: `Using a client-centered approach, coaches help people tap into their
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
            statement: "“Coach Johannes has helped me to be on track of my goals to having a healthy lifestyle, not only for myself, but for my family as well.”",
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
               {
                mainItem:  "Learn and experience a different type of Mind-Body technique in each session:",
                subItem: [
                    "Breathing",
                    "Drawing",
                    "Autogenic training",
                    "Guided imagery",
                    "Shaking and dancing",
                ]
               },
               {
                mainItem: "Share your experience with a coach or the group to promote growth, connection, and support.",
                subItem: []
               }
            ],
            testimonial: {
                name: "Thich Nhat Hanh",
                statement: `“If you know how to breathe, how to sit
                                calmly and quietly, how to do walking meditation, then you have your
                                seatbelt and you're always safe.”`
            },
            details: [
                {
                    name: "Price per session",
                    value: 3200,
                },
                {
                    name: "5 session package",
                    value: 15000
                },
                {
                    name: "Group of 10",
                    value: "PHP 500/person"
                }
            ],
        },
        {
            icon: Smile,
            title: "Fitness Coaching",
            items:[
               {
                mainItem:  "Work with a coach to set achievable, personalized goals.",
                subItem: []
               },
               {
                mainItem: "Learn and experience a different type of exercise in each session:",
                subItem: [
                    "Mobility and flexibility",
                    "Core and balance training",
                    "Bodyweight exercises",
                    "Strength training",
                    "Cardio exercises"
                ]
               }
            ],
            testimonial: {
                name: "Daniel Wolpert",
                statement: `“The entire purpose of the brain is to produce
                                movement. Movement is the only way we have of interacting with the
                                world.”`
            },
            details: [
                {
                    name: "Price per session",
                    value: 3200,
                },
                {
                    name: "5 session package",
                    value: 15000
                }
            ]
        },
        {
            icon: Fruit,
            title: "Healthy Eating",
            items: [
                {
                    mainItem: "Explore your eating habits through journaling and a mindful conversation with a coach.",
                    subItem: [],
                },
                {
                    mainItem: "Connect with your deeper motivation for eating well.",
                    subItem: []
                },
                {
                    mainItem: "Build lasting healthy eating habits for long-term success and well-being.",
                    subItem: []
                }
                
            ],
            testimonial: {
                name: "Michael Arloski",
                statement: "“Wellness is the experience of living life with high level of awareness, conscious choice, self-acceptance, interconnectedness, love, meaning and purpose.”"
            },
            details: [
                {
                    name: "Price per session",
                    value: 3200,
                },
                {
                    name: "5 session package",
                    value: 15000
                }
            ]
        }
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

export const FooterInfo = [
    {
        icon: Pin,
        type: "location",
        title: "4th Floor, Dusit Thani Manila, Makati City, Philippines"
    },
    {
        icon: Phone,
        type: "phone",
        title: "+63917 154 9039 / (02) 5310 4990"
    }
]

export const FAQItems = [
    {
        question: "What is Coaching?",
        answerBold: "Coaching is a thought-provoking and creative process that supports you in moving forward with clarity, purpose, and confidence.",
        answerText: `Through a collaborative conversation, your coach
                    partners with you—always holding the belief that you are naturally creative, resourceful, and
                    whole. Together, you explore your goals, challenges, values, and possibilities in a safe and
                    supportive space.`
    },
    {
        question: "How long is a session?",
        answerBold: "Coaching sessions are typically one hour in length and are held weekly or bi-weekly, depending on your preferences and the pace that works best for you.",
        answerText: "This regular rhythm creates space for insight, accountability, and sustained progress."
    },
    {
        question: "How many sessions do I need to see results?",
        answerBold: "Engaging in a positive conversation with a coach during your first session can immediately help you feel more empowered and confident.",
        answerText: "Small, practical goals or action steps can often be identified and initiated right away, depending on your perspective and readiness."
    },
    {
        question: "Do I need to learn techniques such as Mind-Body Medicine or Exercise?",
        answerBold: "Coaching itself is a valuable and supportive process that benefits clients directly.",
        answerText: `Techniques such as Mind-Body Medicine practices or exercises may be incorporated during sessions, but
                        only based on the client’s preference and readiness.`
    },
    {
        question: "Is it only about Stress, Exercise and Healthy Eating?",
        answerBold: `There are 7 lifestyle factors that can be brought into the coaching conversation to support your
                    overall well-being. These include: Sleep, Relationships, Relaxation, Stress management,
                    Movement (physical activity), Nutrition, and Environment.`,
        answerText: `These areas are explored as relevant to your unique needs and preferences, ensuring your
                    coaching experience is personalized and aligned with what matters most to you.`
    },
    {
        question: "Can I ask the coach a question or for suggestions?",
        answerBold: "Coaches are experts in their field and can offer informed suggestions when explicitly requested by the client.",
        answerText: `That said, coaching is primarily about self-discovery and empowering
                    you to find your own insights and solutions. When appropriate, the coach and client can also
                    engage in brainstorming together to explore ideas and possibilities.`
    },
    {
        question: "Where can I have my coaching sessions?",
        answerBold: "",
        answerText: `Coaching sessions can take place in person at Calderon Medical Clinic in Dusit Thani Manila,
                    Makati; via Zoom video calls; or through home visits arranged based on the client’s needs.`
    },
    {
        question: "What payment methods are available?",
        answerBold: "",
        answerText: "We accept credit card, bank transfer, e-wallets (GCash), and cash for in-person sessions."
    }
]