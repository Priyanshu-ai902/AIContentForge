"use client"

import React, { useEffect, useState } from 'react'
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
      "Click Generate AI text to transform your text prompt into AI-generated text.",
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
              style={{ width: '900px', height: '560px' }}
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

      

      

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Start Creating Today</h2>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
            Try It Now
          </button>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 PicsArt AI Content Generator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}