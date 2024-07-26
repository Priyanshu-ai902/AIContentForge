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
                label: 'Enter blog outline',
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
                label: 'Enter blog outline',
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
                label: 'Enter blog outline',
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
                label: 'Enter blog outline',
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
                label: 'Enter blog outline',
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
                label: 'Enter blog outline',
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
                label: 'Enter blog outline',
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
                label: 'Enter blog outline',
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
                label: 'Enter blog outline',
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
                label: 'Enter blog outline',
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
                label: 'Enter blog outline',
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
                label: 'Enter blog outline',
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
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Press Release Generator',
        desc: 'An AI tool that generates professional press releases',
        category: 'Public Relations',
        icon: 'https://cdn-icons-png.flaticon.com/128/5395/5395895.png',
        aiprompt: 'Generate a professional press release based on the given topic.',
        slug: 'generate-press-release',
        form: [
            {
                label: 'Enter your press release topic',
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
        name: 'Resume Bullet Point Generator',
        desc: 'An AI tool that generates effective resume bullet points',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/4116/4116609.png',
        aiprompt: 'Generate effective resume bullet points based on the given job role and responsibilities.',
        slug: 'generate-resume-bullet-points',
        form: [
            {
                label: 'Enter your job role',
                field: 'input',
                name: 'job_role',
                required: true
            },
            {
                label: 'Enter job responsibilities',
                field: 'textarea',
                name: 'responsibilities',
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'LinkedIn Summary Generator',
        desc: 'An AI tool that generates professional LinkedIn summaries',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384072.png',
        aiprompt: 'Generate a professional LinkedIn summary based on the given career details.',
        slug: 'generate-linkedin-summary',
        form: [
            {
                label: 'Enter your career details',
                field: 'textarea',
                name: 'career_details',
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
        name: 'Sales Pitch Generator',
        desc: 'An AI tool that generates persuasive sales pitches',
        category: 'Sales',
        icon: 'https://cdn-icons-png.flaticon.com/128/15721/15721857.png',
        aiprompt: 'Generate a persuasive sales pitch based on the given product or service.',
        slug: 'generate-sales-pitch',
        form: [
            {
                label: 'Enter your product or service',
                field: 'input',
                name: 'product_service',
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
        name: 'Slogan Generator',
        desc: 'An AI tool that generates catchy slogans',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/16447/16447217.png',
        aiprompt: 'Generate a catchy slogan based on the given product or service.',
        slug: 'generate-slogan',
        form: [
            {
                label: 'Enter your product or service',
                field: 'input',
                name: 'product_service',
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
        name: 'Coding Challenge Generator',
        desc: 'An AI tool that generates coding challenges based on the given programming language and difficulty level',
        category: 'Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/17335/17335727.png',
        aiprompt: 'Generate a coding challenge based on the given programming language and difficulty level.',
        slug: 'generate-coding-challenge',
        form: [
            {
                label: 'Enter programming language',
                field: 'input',
                name: 'language',
                required: true
            },
            {
                label: 'Enter difficulty level (e.g., easy, medium, hard)',
                field: 'input',
                name: 'difficulty',
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
        name: 'Math Problem Generator',
        desc: 'An AI tool that generates math problems based on the given topic and grade level',
        category: 'Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/9517/9517330.png',
        aiprompt: 'Generate math problems based on the given topic and grade level.',
        slug: 'generate-math-problem',
        form: [
            {
                label: 'Enter math topic (e.g., algebra, geometry)',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter grade level',
                field: 'input',
                name: 'grade',
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
        name: 'History Quiz Generator',
        desc: 'An AI tool that generates history quiz questions based on the given topic and difficulty level',
        category: 'Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/6462/6462711.png',
        aiprompt: 'Generate history quiz questions based on the given topic and difficulty level.',
        slug: 'generate-history-quiz',
        form: [
            {
                label: 'Enter history topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter difficulty level (e.g., easy, medium, hard)',
                field: 'input',
                name: 'difficulty',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    }
]
