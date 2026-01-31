import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const PromoModal = ({ isOpen, onClose, promo }) => {
  if (!promo) return null;

  const whatsappLink = `https://wa.me/250788123456?text=${encodeURIComponent(
    `Hi Icyeza One! ☕ I'd love to come for the ${promo.title}. Can you tell me more or reserve a spot?`
  )}`;

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 text-left align-middle shadow-2xl transition-all">
                <div className="relative">
                  <img
                    src={promo.img}
                    alt={promo.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <button
                    type="button"
                    className="absolute top-4 right-4 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition"
                    onClick={onClose}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="p-6 md:p-8">
                  <Dialog.Title className="text-2xl md:text-3xl font-serif text-coffee-dark dark:text-coffee-light mb-4">
                    {promo.title}
                  </Dialog.Title>

                  <p className="text-lg md:text-xl text-coffee-dark dark:text-coffee-light mb-6">
                    {promo.desc}
                  </p>

                  <p className="text-base text-gray-600 dark:text-gray-400 mb-8">
                    {promo.day}
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-coffee-medium text-white px-6 py-3 rounded-full text-base md:text-lg font-medium hover:bg-coffee-dark transition shadow-md hover:shadow-lg"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-1.438 0-2.847-.402-4.072-1.161l-.292-.178-3.024.792.806-2.943-.19-.302c-.804-1.274-1.227-2.756-1.227-4.28 0-4.432 3.61-8.042 8.043-8.042 2.15 0 4.168.838 5.687 2.357 1.518 1.518 2.355 3.536 2.355 5.686 0 4.432-3.61 8.043-8.043 8.043z"/>
                    </svg>
                    Chat on WhatsApp about this special →
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PromoModal;