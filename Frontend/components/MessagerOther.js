import React from 'react'

const MessagerOther = ({name="RandomUser",message="This is sample meassag send by otherss"}) => {
  return (
    <div className='flex justify-start'>
        <div className='flex '>
            <p className='row-start-1 row-end-3 col-start-1 col-end-2 flex justify-center items-center font-custom text-2xl font-extrabold text-white bg-[#d9d9d9] h-11 w-11 p-0.5 rounded-full justify-self-center self-center'>{name[0]}</p>
            <div className='bg-[#d9d9d9d9] max-w-[300px] w-full p-2.5 m-2 font-custom border rounded-[20px] flex flex-col'>
                <p className='row-start-1 row-end-2 col-start-2 col-end-4 font-custom font-bold text-slate-600'>{name}</p>
                <p className='font-custom text-xs p-1 break-words'>{message}</p>
                <p className='flex justify-end font-custom text-xs text-slate-600'>12:00am</p>
            </div>
            
        </div>
    </div>
  )
}

export default MessagerOther
