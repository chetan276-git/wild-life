'use client';

import Image from 'next/image';

export default function WhatsAppButton() {
  const phoneNumber = '9021962183'; // Replace with your WhatsApp number

  const openWhatsApp = () => {
    const message = 'Hello, I need assistance!'; // Default message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div
      onClick={openWhatsApp}
      className='fixed bottom-4 z-[999] right-4 bg-[#1e293b] border border-[#334155] p-3 rounded-full shadow-lg cursor-pointer transition'
    >
      <Image
        src='/images/avatar/taiger-paw.png'
        alt='Img'
        width={40}
        height={40}
        objectFit='contain'
      />
      <div className='line-circle w-3 h-3 rounded-full bg-primary absolute top-2 right-0' />
    </div>
  );
}
