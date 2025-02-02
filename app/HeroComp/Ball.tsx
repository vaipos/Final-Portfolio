import React from 'react'

const Ball = () => {
  return (
    <div className="flex -my-[20%] justify-center items-center w-full h-screen relative z-10">
      {/* Ball */}
      <div className="w-screen h-screen rounded-full bg-gradient-to-r from-purple-600 to-blue-400 relative">
        {/* Mock-up Code */}
        <div className="mockup-code absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[calc(100%+400px)] w-screen h-[48%] text-center overflow-x-auto">
          <pre data-prefix="3">
            <code>
              Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore ratione.
     
            </code>
           <div className="">Wow</div>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Ball
