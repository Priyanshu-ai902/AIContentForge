"use client"

import React, { useEffect, useState } from 'react'
import { Apple, FacebookIcon, InstagramIcon, Linkedin, Play, Store, TwitterIcon, YoutubeIcon, } from "lucide-react";
import Image from 'next/image';
import { Button } from '@/components/ui/button';

import { ChevronDown, ChevronUp } from "lucide-react";


const faqs = [
  {
    question: "Can you generate AI content for free?",
    answer:
      "You can try our AI Content Generator with a limited number of free generations. For unlimited access, consider upgrading to a premium plan.",
  },
  {
    question: "Can I generate visual content with AI tools?",
    answer:
      "Yes, our AI can generate stunning visuals, including banners, thumbnails, and AI-enhanced images for your projects.",
  },
  {
    question: "Can I generate paragraphs with AI?",
    answer:
      "Absolutely! Our AI-powered generator can create high-quality paragraphs on any topic with just a few words as input.",
  },
  {
    question: "Can I create quotes with AI?",
    answer:
      "Yes, you can generate engaging and inspirational quotes tailored to your needs.",
  },
  {
    question: "Can I generate social media captions with AI?",
    answer:
      "Our AI can create catchy social media captions optimized for different platforms, including Instagram, Twitter, and Facebook.",
  },
  {
    question: "Can you create marketing materials with AI?",
    answer:
      "Yes! You can generate ad copy, email templates, and product descriptions to enhance your marketing efforts.",
  },
];

const stepsData = [
  {
    number: 1,
    heading: "Launch tool",
    description:
      "Open the AI content generating tool by clicking the button in the banner at the top of the page.",
  },
  {
    number: 2,
    heading: "Enter your prompt",
    description:
      "Type a few words into the box to describe the text you want to create. For the best results, add detailed phrases.",
  },
  {
    number: 3,
    heading: "Add additional description",
    description:
      "Add additional descriptive details for better content generation",
  },
  {
    number: 4,
    heading: "Produce quality content",
    description:
      "Click Generate AI text to transform your text prompt into AI-generated text.",
  },
  {
    number: 5,
    heading: "Download it",
    description:
      "Click the Copy button to download and share your designs.",
  },
];

const images = [
  "enter.png",
  "launch.png",
  "result.png",
];

export default function Hero() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-slate-800 text-white py-36">
        <div className="flex px-12">
          <div className="w-1/2 pr-10 pt-14">
            <h1 className="text-6xl font-bold mb-4 
            bg-gradient-to-r from-purple-500 via-purple-700  to-indigo-700 text-transparent bg-clip-text">
              AI content generator: Quick and easy content creation</h1>
            <p className="text-xl mb-8 text-purple-200">
              From social media captions to quotes, it has never been easier to streamline your creative process. Use the Picsart free AI content generator for all of your content creation needs. Try now with limited free generations.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition duration-300">
              Get Started
            </button>
          </div>

          <div className="w-1/2 flex justify-center">
            <img
              src="imagep.png"
              alt="AI Content Generator"
              className="rounded-lg shadow-lg py-10"
              style={{ width: '900px', height: '600px' }}
            />
          </div>
        </div>
      </section>

      <section className="text-center py-16 pt-28">
        <h2 className="text-5xl font-bold mb-4">
          Everything you can create with AI content generation
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The AI content creator can handle it all. Whether you need content that’s very long or very short or anything in between, you can easily rely on AI to put together a compelling copy for you.
        </p>

        <div className="flex flex-wrap justify-center gap-12 mt-14">
          <div className="bg-pink-200 rounded-xl shadow-lg p-6 w-96">
            <img src="https://pastatic.picsart.com/cms-pastatic/a7d76f90-5d5c-4f88-a1b2-1e1bc968730e.png?type=webp&to=min&r=-1" alt="Caption Generator" className="rounded-lg" />
            <h3 className="text-xl font-bold mt-4">Caption Generator</h3>
            <p className="text-gray-600 mt-2">
              Quickly and effortlessly craft the perfect caption to go along with social media posts of any kind and occasion.
            </p>
          </div>

          <div className="bg-orange-300 rounded-xl shadow-lg p-6 w-96">
            <img src="https://pastatic.picsart.com/cms-pastatic/0cda6c41-8faf-4d4a-b12d-cda79108ce61.png?type=webp&to=min&r=-1" alt="Quote Generator" className="rounded-lg" />
            <h3 className="text-xl font-bold mt-4">Quote Generator</h3>
            <p className="text-gray-600 mt-2">
              Get inspired to inspire with AI-generated motivational quotes and affirmations for social media, vision boards, and more.
            </p>
          </div>

          <div className="bg-teal-400 rounded-xl shadow-lg p-6 w-96">
            <img src="https://pastatic.picsart.com/cms-pastatic/4336ce66-4f4c-4673-b181-86486dd441a0.png?type=webp&to=min&r=-1" alt="Sentence Generator" className="rounded-lg" />
            <h3 className="text-xl font-bold mt-4">Sentence Generator</h3>
            <p className="text-gray-600 mt-2">
              Populate your visual content with meaningful sentence-long content. Perfect for when you need short content for visuals, stories, etc.
            </p>
          </div>
        </div>

        <button className="mt-8 bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-700">
          Start now
        </button>
      </section>

      <section className="h-[1000px] py-40 bg-slate-950">
        <h1 className="text-center text-white text-5xl font-bold pb-10">How to use the AI Content Generator</h1>
        <div className="flex px-10">
          <div className="w-1/2 flex justify-center">
            <img
              src={images[currentIndex]}
              alt="AI Content Generator"
              className="rounded-lg shadow-lg transition-all duration-700 ease-in-out"
            />
          </div>
          <div className="w-1/2 pr-10">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className="group mb-6 p-4 border-l-4 border-purple-400 hover:bg-gray-100 transition duration-300 cursor-pointer"
              >
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-purple-300 mr-4">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold">{step.heading}</h3>
                </div>
                <p className="mt-2 text-gray-500 ">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-white py-36">
        <div className="flex px-12">
          <div className="flex-1 pt-24">
            <h2 className="text-5xl font-bold text-black">
              Save time with AI content creation
            </h2>
            <p className="text-gray-700 mt-4 text-xl">
              Keep track of all your AI-generated content in one place. Whether it's
              creative captions, engaging blog intros, or persuasive marketing copy,
              your previously generated text is securely stored here for easy access.
              No more losing ideas—return anytime to refine, edit, or repurpose your
              content as needed.
              <br />
              <br />
              Whether you're working on a new project or revisiting past creations,
              your history allows you to stay organized and build upon your previous
              work. Download, share, or copy your saved content with just one click.
              Keep your creativity flowing without starting from scratch every time!
            </p>

            {/* Button */}
            <Button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg">
              Try AI content generator
            </Button>
          </div>

          <div className="flex-1 flex justify-center">
            <img src="history.png" alt="AI Writer" className="h-96 rounded-xl"
              style={{ width: '900px', height: '560px' }} />
          </div>
        </div>
      </section>

      <img src="price.png" alt="img" className='rounded-lg w-full'
        style={{ height: "800px" }} />

      <section className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          AI Content Generator FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}

        </div>
      </section>


      <footer className="bg-slate-950 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            {/* Logo & App Links */}
            <div className="mb-6">
              <div className='flex items-center'>
                <Image
                  src="https://img.freepik.com/premium-psd/computer-social-media-content-3d-icon-design_557569-440.jpg"
                  width={45}
                  height={45}
                  alt="logo"
                  className="rounded-full"
                />

                <h1 className="ml-1 font-bold text-3xl bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
                  Content-Forge
                </h1>

              </div>
              <p className="mt-2 font-semibold">Get The Free App</p>
              <div className="flex space-x-2 mt-2">
                <button className="flex items-center space-x-2 border p-2 rounded-lg shadow-md">
                  <Apple className="h-5 w-5" />
                  <span>App Store</span>
                </button>
                <button className="flex items-center space-x-2 border p-2 rounded-lg shadow-md">
                  <Play className="h-5 w-5" />
                  <span>Google Play</span>
                </button>
                <button className="flex items-center space-x-2 border p-2 rounded-lg shadow-md">
                  <Store className="h-5 w-5" />
                  <span>Microsoft Store</span>
                </button>

              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-12">
              <div>
                <h3 className="font-bold mb-3">Explore</h3>
                <ul className="space-y-2">
                  <li>Image Tools</li>
                  <li>Video Tools</li>
                  <li>Design Tools</li>
                  <li>AI Tools</li>
                  <li>Templates</li>
                  <li>Colors</li>
                  <li>Fonts</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-3">Solutions</h3>
                <ul className="space-y-2">
                  <li>For Businesses</li>
                  <li>For Developers</li>
                  <li>For Google Drive</li>
                  <li>For Specific Industries</li>
                  <li>Quicktools</li>
                  <li>AI Avatar</li>
                  <li>Pricing</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-3">Company</h3>
                <ul className="space-y-2">
                  <li>Support</li>
                  <li>Careers</li>
                  <li>About Us</li>
                  <li>Affiliate Program</li>
                  <li>Blog</li>
                  <li>Press Center</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Icons & Legal Links */}
          <div className="mt-8 flex flex-wrap justify-between items-center">
            <div className="flex space-x-4">
              <div className="flex space-x-3 mt-2">


                <button className="flex items-center space-x-2 border p-2 rounded-lg shadow-md">
                  <FacebookIcon className="h-5 w-5" />
                </button>
                <button className="flex items-center space-x-2 border p-2 rounded-lg shadow-md">
                  <TwitterIcon className="h-5 w-5" />
                </button>
                <button className="flex items-center space-x-2 border p-2 rounded-lg shadow-md">
                  <InstagramIcon className="h-5 w-5" />
                </button>
                <button className="flex items-center space-x-2 border p-2 rounded-lg shadow-md">
                  <Linkedin className="h-5 w-5" />
                </button>
                <button className="flex items-center space-x-2 border p-2 rounded-lg shadow-md">
                  <YoutubeIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

          </div>

          <div className="mt-6 text-sm text-center border-t pt-4">
            <ul className="flex justify-center space-x-4">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Do Not Sell</li>
              <li>Interest-Based Advertising</li>
              <li>Community Guidelines</li>
              <li>DMCA</li>
              <li>Security Policy</li>
            </ul>
            <p className="mt-2">© 2025 PicsArt, Inc.</p>
          </div>
        </div>
      </footer>


    </div>
  );
}