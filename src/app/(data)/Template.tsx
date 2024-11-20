import { ChartBarIcon } from "lucide-react";

export default[
    
  {  
    name:"Blog Title",
    desc:"An AI Tool that generates blog title depends on your blog information. ",
    category:"blog",
    icon:"https://cdn-icons-png.flaticon.com/128/3607/3607875.png",
    aiPrompt:"Give me 5 topic ideas in bullet wise only based on give niche and outline topic and give me Result in Rich Text editor format .",
    slug:"generate blog title",
    form:[
        {
            label:"Enter you blog niche",
            field:"input",
            name:"niche",
            required:true
        }, 
        {
            label:"Enter blog outline",
            field:"textarea",
            name:"outline",
        }
    ]

   },

   {
    name: "Social Media Caption",
    desc: "An AI Tool that generates catchy captions for social media posts based on your input.",
    category: "social media",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
    aiPrompt: "Generate 5 creative social media captions based on the provided content and tone. Result should be in plain text format.",
    slug: "generate-social-media-caption",
    form: [
      {
        label: "Enter your content description",
        field: "textarea",
        name: "content",
        required: true
      },
      {
        label: "Select tone of the caption",
        field: "textarea",
        name: "tone",
      //  options: ["Professional", "Funny", "Casual", "Inspirational"],
        required: true
      }
    ]
  },

  {
    name: "Email Subject Line",
    desc: "An AI Tool that crafts compelling email subject lines based on the content and goal of your email.",
    category: "email",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    aiPrompt: "Generate 5 email subject lines that are attention-grabbing and relevant to the provided purpose and audience.",
    slug: "generate-email-subject-line",
    form: [
      {
        label: "Enter email content summary",
        field: "textarea",
        name: "emailSummary",
        required: true
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
        required: true
      },
      {
        label: "Enter email goal",
        field: "input",
        name: "goal",
        required: true
      }
    ]
  },

  {
    name: "Product Description",
    desc: "An AI Tool that creates engaging product descriptions tailored for e-commerce platforms.",
    category: "e-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/869/869636.png",
    aiPrompt: "Write a product description in a persuasive tone. Highlight key features and benefits. Format the result as plain text.",
    slug: "generate-product-description",
    form: [
      {
        label: "Enter product name",
        field: "input",
        name: "productName",
        required: true
      },
      {
        label: "Enter product features",
        field: "textarea",
        name: "features",
        required: true
      },
      {
        label: "Select description length",
        field: "dropdown",
        name: "length",
        options: ["Short", "Medium", "Detailed"],
        required: true
      }
    ]
  },


  {
    name: "Ad Copy",
    desc: "An AI Tool that generates engaging ad copy to promote your products or services.",
    category: "advertising",
    icon: "https://cdn-icons-png.flaticon.com/128/906/906406.png",
    aiPrompt: "Generate 3 advertising copy ideas based on the given product, audience, and platform. Include a call to action.",
    slug: "generate-ad-copy",
    form: [
      {
        label: "Enter product/service name",
        field: "input",
        name: "productService",
        required: true
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
        required: true
      },
      {
        label: "Select platform",
        field: "dropdown",
        name: "platform",
        options: ["Facebook", "Google Ads", "Instagram", "LinkedIn"],
        required: true
      }
    ]
  },

  {
    name: "Resume Bullet Points",
    desc: "An AI Tool that improves or generates professional bullet points for your resume.",
    category: "career",
    icon: "https://cdn-icons-png.flaticon.com/128/3593/3593984.png",
    aiPrompt: "Generate 5 professional and concise resume bullet points based on the given job description and role details.",
    slug: "enhance-resume-bullet-points",
    form: [
      {
        label: "Enter your role description",
        field: "textarea",
        name: "roleDescription",
        required: true
      },
      {
        label: "Enter target job title",
        field: "input",
        name: "jobTitle",
        required: true
      }
    ]
  },

  {
    name: "SEO Keywords",
    desc: "An AI Tool that generates relevant keywords for SEO optimization.",
    category: "SEO",
    icon: "https://cdn-icons-png.flaticon.com/128/1077/1077059.png",
    aiPrompt: "Suggest 10 SEO keywords based on the provided topic and target audience. List them in bullet format.",
    slug: "generate-seo-keywords",
    form: [
      {
        label: "Enter topic or niche",
        field: "input",
        name: "topic",
        required: true
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
      }
    ]
  },

  {
    name: "Interview Questions",
    desc: "An AI Tool that generates relevant interview questions based on the given role and industry.",
    category: "career",
    icon: "https://cdn-icons-png.flaticon.com/128/1040/1040251.png",
    aiPrompt: "Generate 10 interview questions tailored for the provided job role and industry. Focus on role-specific and behavioral questions.",
    slug: "generate-interview-questions",
    form: [
      {
        label: "Enter job role",
        field: "input",
        name: "jobRole",
        required: true
      },
      {
        label: "Enter industry",
        field: "input",
        name: "industry",
        required: true
      }
    ]
  },

  {
    name: "Poem Generator",
    desc: "An AI Tool that creates poems based on the selected theme and tone.",
    category: "creative writing",
    icon: "https://cdn-icons-png.flaticon.com/128/2460/2460216.png",
    aiPrompt: "Write a short poem based on the provided theme and tone. Use rhyming words if possible.",
    slug: "generate-poem",
    form: [
      {
        label: "Enter theme",
        field: "input",
        name: "theme",
        required: true
      },
      {
        label: "Select tone",
        field: "dropdown",
        name: "tone",
        options: ["Romantic", "Inspirational", "Humorous", "Melancholy"],
        required: true
      }
    ]
  },

  {
    name: "Chatbot Script",
    desc: "An AI Tool that generates scripts for chatbot conversations based on user input.",
    category: "chatbots",
    icon:"https://cdn-icons-png.flaticon.com/128/2728/2728212.png",
    aiPrompt: "Generate a chatbot script for a customer support scenario. Include greetings, FAQs, and responses.",
    slug: "generate-chatbot-script",
    form: [
      {
        label: "Enter chatbot purpose",
        field: "input",
        name: "purpose",
        required: true
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
        required: true
      }
    ]
  },


  {
    name: "Story Outline",
    desc: "An AI Tool that generates creative story outlines based on your ideas.",
    category: "creative writing",
    icon: "https://cdn-icons-png.flaticon.com/128/1197/1197460.png",
    aiPrompt: "Create a story outline with a protagonist, conflict, and resolution based on the provided idea. Use bullet points for clarity.",
    slug: "generate-story-outline",
    form: [
      {
        label: "Enter story idea",
        field: "textarea",
        name: "idea",
        required: true
      },
      {
        label: "Select story genre",
        field: "dropdown",
        name: "genre",
        options: ["Fantasy", "Mystery", "Romance", "Sci-fi", "Thriller"],
        required: true
      }
    ]
  },

  {
    name: "Cover Letter",
    desc: "An AI Tool that drafts professional cover letters based on your input.",
    category: "career",
    icon: "https://cdn-icons-png.flaticon.com/128/151/151891.png",
    aiPrompt: "Write a personalized cover letter for the given job title and company. Highlight skills and achievements.",
    slug: "generate-cover-letter",
    form: [
      {
        label: "Enter job title",
        field: "input",
        name: "jobTitle",
        required: true
      },
      {
        label: "Enter company name",
        field: "input",
        name: "companyName",
        required: true
      },
      {
        label: "Enter skills/achievements",
        field: "textarea",
        name: "skills",
      }
    ]
  },

  {
    name: "Business Name",
    desc: "An AI Tool that suggests creative business names based on your niche.",
    category: "branding",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055684.png",
    aiPrompt: "Suggest 5 creative business names based on the provided niche. Use modern and catchy language.",
    slug: "generate-business-name",
    form: [
      {
        label: "Enter business niche",
        field: "input",
        name: "niche",
        required: true
      },
      {
        label: "Enter keywords (optional)",
        field: "input",
        name: "keywords",
      }
    ]
  }

]