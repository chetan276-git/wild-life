'use client';

import Image from 'next/image';

export default function WhatsAppButton() {
  const phoneNumber = '9021962183';

  const openWhatsApp = () => {
    const message = 'Hello, I need assistance!';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div
      className='flex h-10 w-10 fixed bottom-4 right-4 z-50'
      onClick={openWhatsApp}
    >
      <span className='animate-ping absolute h-10 w-10 rounded-full bg-gray-200 opacity-75'></span>
      <span className='relative rounded-full h-10 w-10  bg-secondary flex justify-center items-center'>
        <Image
          src='/images/avatar/taiger-paw.png'
          alt='Img'
          width={24}
          height={24}
          objectFit='contain'
        />
        <div className='line-circle w-3 h-3 rounded-full bg-primary absolute -top-0.5 right-0' />
      </span>
    </div>
  );
}
