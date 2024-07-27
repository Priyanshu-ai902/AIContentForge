export default [
    {
        name: 'Blog Content',
        desc: 'An AI tool that generates blog content based on your topic and outline',
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
        desc: 'An AI tool that generates blog topic ideas based on your niche',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/16117/16117924.png',
        aiprompt: 'Give me 5 blog topic ideas in bullet points based on the given niche.',
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
        desc: 'An AI tool that generates SEO-friendly YouTube titles',
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
        desc: 'An AI tool that generates detailed YouTube descriptions',
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
        desc: 'An AI tool that generates relevant YouTube tags',
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
        desc: 'An AI tool that adds relevant emojis to your text',
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
        desc: 'An AI tool that generates engaging Instagram posts',
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
        desc: 'An AI tool that improves the quality of your text',
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
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'An AI tool that rewrites articles to be plagiarism-free',
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
        desc: 'An AI tool that generates engaging captions for social media posts',
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
        desc: 'An AI tool that generates compelling email subject lines',
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
        desc: 'An AI tool that generates detailed product descriptions',
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
        desc: 'An AI tool that generates persuasive ad copy',
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
        desc: 'An AI tool that generates FAQs based on your product or service',
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
        desc: 'An AI tool that generates catchy headlines for your website',
        category: 'Website',
        icon: 'https://cdn-icons-png.flaticon.com/128/857/857681.png',
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
        desc: 'An AI tool that generates catchy slogans for your brand or product',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2667/2667309.png',
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
        desc: 'An AI tool that generates professional LinkedIn posts',
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
        desc: 'An AI tool that generates impactful resume bullet points',
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
        desc: 'An AI tool that generates professional press releases',
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
        desc: 'An AI tool that generates creative stories',
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
        desc: 'An AI tool that generates formal invitations for events',
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
        desc: 'An AI tool that generates detailed job descriptions',
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
        desc: 'An AI tool that generates detailed business plans',
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
    }
];


