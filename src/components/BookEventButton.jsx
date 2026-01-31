import React from 'react';

const BookEventButton = () => {
  const message = "Hi Icyeza One! I'd like to reserve a table or book an event space.\n\nDetails:\nDate: \nTime: \nNumber of people: \nOccasion / purpose:";
  const link = `https://wa.me/250788123456?text=${encodeURIComponent(message)}`; // CHANGE NUMBER

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-4 bg-gradient-to-r from-coffee-medium to-coffee-dark text-white px-10 py-5 rounded-full text-xl md:text-2xl font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-1.438 0-2.847-.402-4.072-1.161l-.292-.178-3.024.792.806-2.943-.19-.302c-.804-1.274-1.227-2.756-1.227-4.28 0-4.432 3.61-8.042 8.043-8.042 2.15 0 4.168.838 5.687 2.357 1.518 1.518 2.355 3.536 2.355 5.686 0 4.432-3.61 8.043-8.043 8.043z"/>
      </svg>
      Book Event / Reserve Table
    </a>
  );
};

export default BookEventButton;