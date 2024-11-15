import ChatSidebar from '@/components/ChatSidebar';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen text-black flex justify-center items-center '>
      <div className='bg-slate-200 w-11/12 h-[90vh]  shadow-lg mx-auto flex rounded-3xl '>
   
      <div className='flex-[0.3] h-full'>
          <ChatSidebar />
        </div>
        
        <div className='flex-[0.7] h-full  '>
          {children}
        </div>
     
      </div>
    </div>
  );
};

export default Layout;
