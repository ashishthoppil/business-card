import React from 'react';

export const BusinessCard = () => {
  return (
    <div className="flex flex-col gap-5 bg-white text-slate-900 w-[25rem] rounded-lg shadow-lg p-4 rotate-90 md:rotate-0">
      <div className='flex justify-between py-3'> 
        <div className='flex flex-col gap-5'>
            <img
                src="/images/logo.png"
                alt="Your Name"
                className=""
                width={120}
            />
            <div className='flex'>
                <h1 className='pr-4 font-semibold text-[14px]'>B Benny</h1>
                <h1 className='pl-4 border-l-2 border-blue-400 font-semibold text-[14px]'>General Manager</h1>
            </div>
        </div>
        <img
            src="/images/qr-code.png"
            alt="QR Code"
            className="w-16 h-16"
        />
      </div>
      <div className='flex justify-between pb-3'>
        <span className='pr text-[10px] w-1/2'>P.O Box 336<br/>
            Prince Mashhour Street,<br/>
            Opp. Hyper Panda, Al Jubail<br/>
            Kingdom of Saudi Arabia</span>
        <span className='border-l-2 border-blue-400 text-[10px] w-1/2 pl-2'><strong>Mobile:</strong> +966-505910799<br/><strong>Tel:</strong> +966-505910799/544837257<br/><strong>Email: </strong>sales@aldahiyah.com<br/></span>
      </div>
    </div>
  );
}
