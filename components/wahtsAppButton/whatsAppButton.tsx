'use client';

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
      className='fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition'
    >
      1
    </div>
  );
}
