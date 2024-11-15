import React from 'react'


const WelcomeChat = () => {
  return (
<div className="w-full h-full flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center text-center p-8 rounded-lg ">
          <img 
            src="/Images/welcomChat.png" 
            alt="Welcome to chat"
            className="w-48 h-36 mx-auto mb-4" 
          />
          <p className="text-gray-600">
            View and text directly to people present in the chat Rooms.
          </p>
        </div>
      </div>


  
  )
}

export default WelcomeChat
