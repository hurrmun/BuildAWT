/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import logoColor from "../images/logo-color.svg"
import { MenuIcon, XIcon } from "@heroicons/react/outline" 

export default function Navbar() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-blue py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to="/">
              <span className="sr-only">Workflow</span>
              {/* insert logo image below */}
              {/* <h2>BUILDAWT</h2> */}
              <img className="h-8 w-auto sm:h-6" src={logoColor} alt="" />
            </NavLink>    
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-blue hover:text-opacity-60 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>


        
          <Popover.Group as="nav" className="hidden md:flex space-x-10 justify-end">
            <NavLink to="/" className="text-base font-medium text-blue hover:text-opacity-60">
                Workouts
            </NavLink>
            <NavLink to="/exercises" className="text-base font-medium text-blue hover:text-opacity-60">
                Exercises
            </NavLink>
            <NavLink to="/about" className="text-base font-medium text-blue hover:text-opacity-60">
                About
            </NavLink>
          </Popover.Group>

          
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 border-blue">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={logoColor}
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">

                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                <NavLink to="/" className="text-base font-medium text-blue hover:text-opacity-60">
                    Workouts
                </NavLink>
                <NavLink to="/exercises" className="text-base font-medium text-blue hover:text-opacity-60">
                    Exercises
                </NavLink>
                <NavLink to="/about" className="text-base font-medium text-blue hover:text-opacity-60">
                    About
                </NavLink>
              </div>
              <div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
