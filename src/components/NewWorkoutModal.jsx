import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

function NewWorkoutModal(props) {
  const cancelButtonRef = useRef(null);
  const nameInput = useRef();
  const imageInput = useRef();
  const handleSubmit = () => {
    console.log("name", nameInput.current.value);
    console.log("image", imageInput.current.value);
  };
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={props.setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden border-2 border-blue transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-bold text-blue block"
                    >
                      Add a new Workout
                    </Dialog.Title>

                    <div className="mt-3 grid grid-cols-1 justify-items-start">
                      <label className="text-blue text-md mb-1" htmlFor="">
                        Workout Name:
                      </label>
                      <input
                        type="text"
                        placeholder="Name your workout"
                        className="justify-self-stretch"
                        ref={nameInput}
                      />
                      <label className="text-blue text-md mb-1 mt-3" htmlFor="">
                        Thumbnail Image:
                      </label>
                      <input
                        type="text"
                        placeholder="Image url (e.g https://image.com/imageSelect)"
                        className="justify-self-stretch"
                        ref={imageInput}
                      />
                    </div>
                    <div className="mt-3 py-3 flex flex-wrap sm:flex-nowrap justify-end">
                      <button
                        onClick={() => {
                          handleSubmit();
                          props.setOpen(false);
                        }}
                        type="button"
                        className="w-full justify-end rounded-md border-2 border-blue px-4 py-2 mb-3 sm:mb-0 bg-blue text-sm font-medium text-white hover:bg-lightblue hover:border-lightblue sm:ml-3 sm:w-auto sm:text-sm"
                        //   onClick={}
                      >
                        Add
                      </button>
                      <div
                        className="w-full justify-end rounded-md border border-blue px-4 py-2 cursor-pointer bg-white text-sm font-medium text-blue hover:bg-red hover:border-red hover:text-white sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => props.setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default NewWorkoutModal;
