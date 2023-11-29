import React from "react"

const HeroSection = () => {
  return (
    <div
      className="flex items-center justify-between h-screen bg-cover"
      style={{ backgroundImage: `url(${"headerImg"})`, marginTop: "-80px" }}
    >
      <div className="max-w-1/2 text-white p-8">
        <h1 className="text-5xl font-bold mb-4">Your Big Text Here</h1>
        <p className="text-lg mb-4">
          Your description goes here. Describe your product, service, or any
          relevant information.
        </p>

        <button className="custom-button text-white py-4 px-8 rounded-full ">
          Watch Video
        </button>
      </div>
    </div>
  )
}

export default HeroSection
