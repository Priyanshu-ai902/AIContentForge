export default [
    {
        name: 'Blog Content',
        desc: 'AI tool that generates blog content based on your topic and outline.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
        aiprompt: 'Generate a comprehensive blog post based on the given topic and outline.',
        slug: 'generate-blog-content',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'AI tool generates blog topic ideas based on your niche and preferences.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/16117/16117924.png',
        aiprompt: 'Give me 5 blog topic ideas in bullet points based on the niche.',
        slug: 'generate-blog-topic-ideas',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter additional information',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'YouTube SEO Title',
        desc: 'AI tool that generates SEO-friendly YouTube titles based on your chosen topic.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/440/440727.png',
        aiprompt: 'Generate an SEO-friendly YouTube title based on the given topic.',
        slug: 'generate-youtube-seo-title',
        form: [
            {
                label: 'Enter your YouTube topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter additional information',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'YouTube Description',
        desc: 'AI tool that generates detailed YouTube descriptions based on your chosen topic.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/404/404162.png',
        aiprompt: 'Generate a detailed YouTube description based on the given topic.',
        slug: 'generate-youtube-description',
        form: [
            {
                label: 'Enter your YouTube topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter additional information',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'YouTube Tags',
        desc: 'AI tool that generates relevant YouTube tags based on your chosen topic.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/5721/5721451.png',
        aiprompt: 'Generate relevant YouTube tags based on the given topic.',
        slug: 'generate-youtube-tags',
        form: [
            {
                label: 'Enter your YouTube topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter additional information',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'AI tool that adds relevant emojis to your text to enhance engagement.',
        category: 'Text Enhancement',
        icon: 'https://cdn-icons-png.flaticon.com/128/17205/17205622.png',
        aiprompt: 'Add relevant emojis to the given text.',
        slug: 'add-emojis-to-text',
        form: [
            {
                label: 'Enter your text',
                field: 'textarea',
                name: 'text',
                required: true
            },
            {
                label: 'Enter additional information',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'AI tool generates engaging Instagram posts based on your given topic and details.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/15707/15707749.png',
        aiprompt: 'Generate an engaging Instagram post based on the given topic.',
        slug: 'generate-instagram-post',
        form: [
            {
                label: 'Enter your Instagram topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter additional information',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'AI tool that improves the quality and clarity of your text for readability.',
        category: 'Text Enhancement',
        icon: 'https://cdn-icons-png.flaticon.com/128/12860/12860749.png',
        aiprompt: 'Improve the quality of the given text.',
        slug: 'improve-text',
        form: [
            {
                label: 'Enter your text',
                field: 'textarea',
                name: 'text',
                required: true
            },
            {
                label: 'Enter additional information',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Rewrite Article',
        desc: 'AI tool that rewrites articles to be plagiarism-free and more engaging.',
        category: 'Text Enhancement',
        icon: 'https://cdn-icons-png.flaticon.com/128/2680/2680900.png',
        aiprompt: 'Rewrite the given article to be plagiarism-free.',
        slug: 'rewrite-article',
        form: [
            {
                label: 'Enter your article',
                field: 'textarea',
                name: 'article',
                required: true
            },
            {
                label: 'Enter additional information',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Social Media Caption Generator',
        desc: 'AI tool generates engaging captions for social media posts, tailored to your needs.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/8545/8545058.png',
        aiprompt: 'Generate an engaging caption based on the given topic.',
        slug: 'generate-social-media-caption',
        form: [
            {
                label: 'Enter your social media topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter additional information',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Email Subject Line Generator',
        desc: 'AI tool generates compelling email subject lines to improve open rates effectively.',
        category: 'Email',
        icon: 'https://cdn-icons-png.flaticon.com/128/3102/3102850.png',
        aiprompt: 'Generate a compelling email subject line based on the given topic.',
        slug: 'generate-email-subject-line',
        form: [
            {
                label: 'Enter your email topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter additional information',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Product Description Generator',
        desc: 'AI tool generates detailed product descriptions based on the name and features provided.',
        category: 'E-commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/4129/4129528.png',
        aiprompt: 'Generate a detailed product description based on the given product name and features.',
        slug: 'generate-product-description',
        form: [
            {
                label: 'Enter your product name',
                field: 'input',
                name: 'product_name',
                required: true
            },
            {
                label: 'Enter product features',
                field: 'textarea',
                name: 'features',
            },
            {
                label: 'Enter additional information',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Ad Copy Generator',
        desc: 'AI tool generates persuasive ad copy to attract customers and boost conversions.',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1055/1055664.png',
        aiprompt: 'Generate persuasive ad copy based on the given product or service.',
        slug: 'generate-ad-copy',
        form: [
            {
                label: 'Enter your product or service',
                field: 'input',
                name: 'product_service',
                required: true
            },
            {
                label: 'Enter additional information',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'FAQ Generator',
        desc: 'AI tool generates FAQs based on your product or service to help customers.',
        category: 'Customer Service',
        icon: 'https://cdn-icons-png.flaticon.com/128/4403/4403603.png',
        aiprompt: 'Generate FAQs based on the given product or service.',
        slug: 'generate-faq',
        form: [
            {
                label: 'Enter your product or service',
                field: 'input',
                name: 'product_service',
                required: true
            },
            {
                label: 'Enter additional information',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Website Headline Generator',
        desc: 'An AI tool that generates catchy website headlines based on descriptions.',
        category: 'Website',
        icon: 'https://cdn-icons-png.flaticon.com/128/7991/7991055.png',
        aiprompt: 'Generate a catchy headline for a website based on the given description.',
        slug: 'generate-website-headline',
        form: [
            {
                label: 'Enter website description',
                field: 'input',
                name: 'description',
                required: true
            },
            {
                label: 'Enter additional details',
                field: 'textarea',
                name: 'details',
            }
        ]
    },
    {
        name: 'Slogan Generator',
        desc: 'An AI tool that generates catchy slogans for brands, products, and businesses.',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/18131/18131275.png',
        aiprompt: 'Generate a catchy slogan for the given brand or product.',
        slug: 'generate-slogan',
        form: [
            {
                label: 'Enter your brand or product name',
                field: 'input',
                name: 'brand_product',
                required: true
            },
            {
                label: 'Enter additional details',
                field: 'textarea',
                name: 'details',
            }
        ]
    },
    {
        name: 'LinkedIn Post Generator',
        desc: 'An AI tool that creates professional LinkedIn posts based on specific topics.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/174/174857.png',
        aiprompt: 'Generate a professional LinkedIn post based on the given topic.',
        slug: 'generate-linkedin-post',
        form: [
            {
                label: 'Enter your LinkedIn post topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter additional details',
                field: 'textarea',
                name: 'details',
            }
        ]
    },
    {
        name: 'Resume Bullet Point Generator',
        desc: 'An AI tool that generates impactful resume bullet points based on job descriptions.',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/3094/3094841.png',
        aiprompt: 'Generate impactful resume bullet points based on the given job description.',
        slug: 'generate-resume-bullet-points',
        form: [
            {
                label: 'Enter job description',
                field: 'textarea',
                name: 'job_description',
                required: true
            },
            {
                label: 'Enter additional details',
                field: 'textarea',
                name: 'details',
            }
        ]
    },
    {
        name: 'Press Release Generator',
        desc: 'An AI tool that generates professional press releases for announcements or events.',
        category: 'Public Relations',
        icon: 'https://cdn-icons-png.flaticon.com/128/2550/2550266.png',
        aiprompt: 'Generate a professional press release based on the given event or announcement.',
        slug: 'generate-press-release',
        form: [
            {
                label: 'Enter event or announcement',
                field: 'input',
                name: 'event_announcement',
                required: true
            },
            {
                label: 'Enter additional details',
                field: 'textarea',
                name: 'details',
            }
        ]
    },
    {
        name: 'Story Generator',
        desc: 'An AI tool that generates creative stories based on user-provided prompts or ideas.',
        category: 'Creative Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2913/2913968.png',
        aiprompt: 'Generate a creative story based on the given prompt or idea.',
        slug: 'generate-story',
        form: [
            {
                label: 'Enter your story prompt or idea',
                field: 'textarea',
                name: 'prompt',
                required: true
            },
            {
                label: 'Enter additional details',
                field: 'textarea',
                name: 'details',
            }
        ]
    },
    {
        name: 'Event Invitation Generator',
        desc: 'An AI tool that generates formal event invitations based on provided details.',
        category: 'Event Planning',
        icon: 'https://cdn-icons-png.flaticon.com/128/747/747545.png',
        aiprompt: 'Generate a formal invitation for an event based on the given details.',
        slug: 'generate-event-invitation',
        form: [
            {
                label: 'Enter event details',
                field: 'textarea',
                name: 'event_details',
                required: true
            },
            {
                label: 'Enter additional details',
                field: 'textarea',
                name: 'details',
            }
        ]
    },
    {
        name: 'Job Description Generator',
        desc: 'An AI tool that generates detailed job descriptions based on role responsibilities.',
        category: 'Human Resources',
        icon: 'https://cdn-icons-png.flaticon.com/128/3032/3032911.png',
        aiprompt: 'Generate a detailed job description based on the given role and responsibilities.',
        slug: 'generate-job-description',
        form: [
            {
                label: 'Enter job role',
                field: 'input',
                name: 'job_role',
                required: true
            },
            {
                label: 'Enter job responsibilities',
                field: 'textarea',
                name: 'responsibilities',
                required: true
            },
            {
                label: 'Enter additional details',
                field: 'textarea',
                name: 'details',
            }
        ]
    },
    {
        name: 'Business Plan Generator',
        desc: 'An AI tool that generates detailed business plans based on ideas and goals.',
        category: 'Business',
        icon: 'https://cdn-icons-png.flaticon.com/128/2920/2920413.png',
        aiprompt: 'Generate a detailed business plan based on the given business idea and goals.',
        slug: 'generate-business-plan',
        form: [
            {
                label: 'Enter business idea',
                field: 'input',
                name: 'business_idea',
                required: true
            },
            {
                label: 'Enter business goals',
                field: 'textarea',
                name: 'goals',
                required: true
            },
            {
                label: 'Enter additional details',
                field: 'textarea',
                name: 'details',
            }
        ]
    },
   {
            name: "Quote Generator",
            desc: "An AI tool that generates motivational or inspiring quotes.",
            category: "Inspiration",
            icon: "https://cdn-icons-png.flaticon.com/128/13269/13269788.png",
            aiprompt: "Generate a motivational quote.",
            slug: "generate-quote",
            form: [
                {
                    label: "Enter a theme or topic for the quote",
                    field: "input",
                    name: "quote_topic",
                    required: true
                }
            ]
        },
        {
            "name": "Podcast Title Generator",
            "desc": "AI tool to create catchy titles for podcasts based on episode themes.",
            "category": "Podcasts",
            "icon": "https://cdn-icons-png.flaticon.com/128/1976/1976607.png",
            "aiprompt": "Generate a catchy podcast title based on the given theme.",
            "slug": "generate-podcast-title",
            "form": [
                {
                    "label": "Enter the podcast episode theme",
                    "field": "input",
                    "name": "episode_theme",
                    "required": true
                }
            ]
        },
        {
            "name": "Business Name Generator",
            "desc": "AI tool for creating creative business names based on industry and values.",
            "category": "Business",
            "icon": "https://cdn-icons-png.flaticon.com/128/3135/3135727.png",
            "aiprompt": "Generate creative business names for the given industry.",
            "slug": "generate-business-name",
            "form": [
                {
                    "label": "Enter your industry",
                    "field": "input",
                    "name": "industry",
                    "required": true
                },
                {
                    "label": "Enter your business values",
                    "field": "textarea",
                    "name": "business_values",
                    "required": true
                }
            ]
        },
        {
            "name": "AI Art Description",
            "desc": "Generate detailed descriptions for artwork or illustrations.",
            "category": "Art",
            "icon": "https://cdn-icons-png.flaticon.com/128/14030/14030142.png",
            "aiprompt": "Generate a detailed description of the artwork.",
            "slug": "generate-art-description",
            "form": [
                {
                    "label": "Enter the style of the artwork",
                    "field": "input",
                    "name": "art_style",
                    "required": true
                },
                {
                    "label": "Enter the subject of the artwork",
                    "field": "input",
                    "name": "art_subject",
                    "required": true
                }
            ]
        },
        {
            "name": "Product Review Generator",
            "desc": "AI tool to generate product reviews based on features and benefits.",
            "category": "E-commerce",
            "icon": "https://cdn-icons-png.flaticon.com/128/6145/6145176.png",
            "aiprompt": "Generate a product review based on the product features.",
            "slug": "generate-product-review",
            "form": [
                {
                    "label": "Enter the product features",
                    "field": "textarea",
                    "name": "product_features",
                    "required": true
                },
                {
                    "label": "Enter the product benefits",
                    "field": "textarea",
                    "name": "product_benefits",
                    "required": true
                }
            ]
        },
        {
            "name": "Name Generator for Characters",
            "desc": "AI tool to generate names for fictional characters in stories or games.",
            "category": "Creative Writing",
            "icon": "https://cdn-icons-png.flaticon.com/128/3220/3220773.png",
            "aiprompt": "Generate a name for a fictional character based on personality traits.",
            "slug": "generate-character-name",
            "form": [
                {
                    "label": "Enter the character's personality traits",
                    "field": "input",
                    "name": "character_traits",
                    "required": true
                }
            ]
        },
        {
            "name": "Email Signature Generator",
            "desc": "Create professional and personalized email signatures.",
            "category": "Productivity",
            "icon": "https://cdn-icons-png.flaticon.com/128/3114/3114937.png",
            "aiprompt": "Generate an email signature based on your name and role.",
            "slug": "generate-email-signature",
            "form": [
                {
                    "label": "Enter your name",
                    "field": "input",
                    "name": "name",
                    "required": true
                },
                {
                    "label": "Enter your role",
                    "field": "input",
                    "name": "role",
                    "required": true
                }
            ]
        },
        {
            "name": "AI Joke Generator",
            "desc": "Generate jokes based on themes or topics.",
            "category": "Entertainment",
            "icon": "https://cdn-icons-png.flaticon.com/128/3656/3656408.png",
            "aiprompt": "Generate a joke based on the given topic.",
            "slug": "generate-joke",
            "form": [
                {
                    "label": "Enter the topic for the joke",
                    "field": "input",
                    "name": "joke_topic",
                    "required": true
                }
            ]
        },
        {
            "name": "Tagline Generator",
            "desc": "AI tool to create catchy taglines for branding.",
            "category": "Marketing",
            "icon": "https://cdn-icons-png.flaticon.com/128/16823/16823329.png",
            "aiprompt": "Generate a catchy tagline for the brand or service.",
            "slug": "generate-tagline",
            "form": [
                {
                    "label": "Enter the brand or service name",
                    "field": "input",
                    "name": "brand_name",
                    "required": true
                }
            ]
        },
        {
            "name": "Speech Script Generator",
            "desc": "Generate a speech script based on a given topic and occasion.",
            "category": "Writing",
            "icon": "https://cdn-icons-png.flaticon.com/128/1110/1110457.png",
            "aiprompt": "Generate a speech script for the given topic.",
            "slug": "generate-speech-script",
            "form": [
                {
                    "label": "Enter the speech topic",
                    "field": "input",
                    "name": "speech_topic",
                    "required": true
                },
                {
                    "label": "Enter the occasion",
                    "field": "input",
                    "name": "occasion",
                    "required": true
                }
            ]
        },
        {
            "name": "Product Name Generator",
            "desc": "AI tool to generate unique product names based on features and target audience.",
            "category": "E-commerce",
            "icon": "https://cdn-icons-png.flaticon.com/128/11282/11282356.png",
            "aiprompt": "Generate a product name for the given features.",
            "slug": "generate-product-name",
            "form": [
                {
                    "label": "Enter the product features",
                    "field": "textarea",
                    "name": "product_features",
                    "required": true
                },
                {
                    "label": "Enter the target audience",
                    "field": "input",
                    "name": "target_audience",
                    "required": true
                }
            ]
        },
        {
            "name": "Event Planner Assistant",
            "desc": "AI tool to help plan events by suggesting themes, locations, and activities.",
            "category": "Event Planning",
            "icon": "https://cdn-icons-png.flaticon.com/128/4098/4098840.png",
            "aiprompt": "Suggest event themes, locations, and activities based on preferences.",
            "slug": "event-planner-assistant",
            "form": [
                {
                    "label": "Enter your event type",
                    "field": "input",
                    "name": "event_type",
                    "required": true
                },
                {
                    "label": "Enter your preferred location",
                    "field": "input",
                    "name": "event_location",
                    "required": true
                }
            ]
        },
        {
            "name": "Content Calendar Generator",
            "desc": "Generate a content calendar for social media or blog posts.",
            "category": "Social Media",
            "icon": "https://cdn-icons-png.flaticon.com/128/4104/4104634.png",
            "aiprompt": "Generate a content calendar based on your chosen topics and frequency.",
            "slug": "generate-content-calendar",
            "form": [
                {
                    "label": "Enter your topics",
                    "field": "textarea",
                    "name": "topics",
                    "required": true
                },
                {
                    "label": "Enter posting frequency",
                    "field": "input",
                    "name": "posting_frequency",
                    "required": true
                }
            ]
        },
        {
            "name": "Resume Summary Generator",
            "desc": "AI tool to create a compelling summary for resumes based on job experience.",
            "category": "Career",
            "icon": "https://cdn-icons-png.flaticon.com/128/3723/3723906.png",
            "aiprompt": "Generate a resume summary based on your work experience.",
            "slug": "generate-resume-summary",
            "form": [
                {
                    "label": "Enter your work experience",
                    "field": "textarea",
                    "name": "work_experience",
                    "required": true
                }
            ]
        },
        {
            "name": "Ad Slogan Generator",
            "desc": "Create engaging ad slogans tailored to specific campaigns.",
            "category": "Marketing",
            "icon": "https://cdn-icons-png.flaticon.com/128/2960/2960744.png",
            "aiprompt": "Generate an ad slogan for the given product or service.",
            "slug": "generate-ad-slogan",
            "form": [
                {
                    "label": "Enter the product or service name",
                    "field": "input",
                    "name": "product_name",
                    "required": true
                }
            ]
        },
        {
            "name": "Email Marketing Campaign Generator",
            "desc": "AI tool to generate a full email marketing campaign.",
            "category": "Marketing",
            "icon": "https://cdn-icons-png.flaticon.com/128/3114/3114972.png",
            "aiprompt": "Generate a full email marketing campaign for your product.",
            "slug": "generate-email-marketing-campaign",
            "form": [
                {
                    "label": "Enter the product details",
                    "field": "textarea",
                    "name": "product_details",
                    "required": true
                },
                {
                    "label": "Enter the campaign goals",
                    "field": "textarea",
                    "name": "campaign_goals",
                    "required": true
                }
            ]
        },
        {
            "name": "Social Media Hashtag Generator",
            "desc": "Generate trending and relevant hashtags for social media posts.",
            "category": "Social Media",
            "icon": "https://cdn-icons-png.flaticon.com/128/7754/7754226.png",
            "aiprompt": "Generate relevant hashtags for your social media post.",
            "slug": "generate-social-media-hashtags",
            "form": [
                {
                    "label": "Enter your social media post description",
                    "field": "textarea",
                    "name": "post_description",
                    "required": true
                }
            ]
        },
        {
            "name": "AI Interview Questions Generator",
            "desc": "Generate interview questions for any job position.",
            "category": "HR",
            "icon": "https://cdn-icons-png.flaticon.com/128/15260/15260298.png",
            "aiprompt": "Generate interview questions for a given job title.",
            "slug": "generate-interview-questions",
            "form": [
                {
                    "label": "Enter the job title",
                    "field": "input",
                    "name": "job_title",
                    "required": true
                }
            ]
        },
        {
            "name": "Personalized Workout Plan Generator",
            "desc": "Generate workout plans based on user preferences and fitness goals.",
            "category": "Fitness",
            "icon": "https://cdn-icons-png.flaticon.com/128/2433/2433335.png",
            "aiprompt": "Generate a personalized workout plan based on fitness goals.",
            "slug": "generate-workout-plan",
            "form": [
                {
                    "label": "Enter your fitness goals",
                    "field": "input",
                    "name": "fitness_goals",
                    "required": true
                },
                {
                    "label": "Enter your preferred workout types",
                    "field": "input",
                    "name": "workout_types",
                    "required": true
                }
            ]
        }


    ];


