import React from 'react'

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
    heading: "Produce quality content",
    description:
      "Click Generate AI text to transform your text prompt into AI-generated text.",
  },
  {
    number: 4,
    heading: "Add to canvas",
    description:
      "When you’re done generating text, click Add to canvas to instantly add your AI text to a blank canvas or image.",
  },
  {
    number: 5,
    heading: "Download it",
    description:
      "Click the Export button to download and share your designs.",
  },
];


export default function Hero() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-slate-800 text-white py-52">
        <div className="flex px-10">
          <div className="w-1/2 pr-10">
            <h1 className="text-5xl font-bold mb-4">AI content generator: Quick and easy content creation</h1>
            <p className="text-xl mb-8">
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
              style={{ width: '900px', height: '500px' }}
            />
          </div>
        </div>
      </section>

      <section className=" py-52">
        <div className="flex px-10">
          <div className="w-1/2 flex justify-center">
            <img
              src="/path-to-your-image.jpg" // Replace with your image path
              alt="AI Content Generator"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-1/2 pr-10">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className="group mb-6 p-4 border-l-4 border-purple-600 hover:bg-gray-100 transition duration-300 cursor-pointer"
              >
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-purple-600 mr-4">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold">{step.heading}</h3>
                </div>
                <p className="mt-2 text-gray-600 ">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Everything you can create with AI content generation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI Images</h3>
              <p className="text-gray-600">Generate unique images with AI.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI Videos</h3>
              <p className="text-gray-600">Create engaging videos effortlessly.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI Designs</h3>
              <p className="text-gray-600">Design stunning graphics with AI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Start Creating Today</h2>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
            Try It Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 PicsArt AI Content Generator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}