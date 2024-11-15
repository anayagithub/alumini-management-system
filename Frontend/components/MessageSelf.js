import React from 'react'

const MessageSelf = ({name="RandomUser",message="This is sample meassag send by others"}) => {
  return (
    <div className='flex justify-end'>
      <div className='bg-[#63d7b0] w-max p-2.5 m-1 font-custom flex flex-col border rounded-[20]'>
        <p className='p-1 font-custom text-xs'>{message}</p>
        <p className='flex justify-end font-custom text-xs'>12:00am</p>
      </div>
    </div>
  )
}

export default MessageSelf
