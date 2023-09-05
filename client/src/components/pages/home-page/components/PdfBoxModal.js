import { Dialog, Transition } from "@headlessui/react";
import React, { useRef } from "react";

export default function PdfBoxModal({ children, open, setOpen }) {
  const cancelButtonRef = useRef(null);

  return (
    <div className="relative w-full h-full">
        <Transition.Root show={open}>
          <Dialog
            as="div"
            className="z-10"
            initialFocus={cancelButtonRef}
            onClose={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Select document here to start
                      </Dialog.Title>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Start Now
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition.Root>
      {children}
    </div>
  );
}
