import React, { useEffect, useRef, useState } from "react"
import { Button } from "./Button/Button"
import { motion } from "framer-motion"

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const top = cardRef.current.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (top < windowHeight * 0.75) {
          setIsVisible(true)
        }
      }
    }

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll)

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []) // Empty dependency array means this effect runs once on mount
  const fadeInVariants = {
    initial: { y: 80, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 3 } },
  }
  return (
    <div className="bg-gradient-to-b from-purple-900 to-indigo-700 py-24">
      <motion.div
        className="max-w-4xl mx-auto"
        ref={cardRef}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">
              Turn Your Idea into Reality
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Small subtitle or description goes here.
            </p>
            <div className="flex justify-center">
              <Button text="   Call to Action" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CallToAction
