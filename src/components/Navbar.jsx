/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
} from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'
import logoColor from "../images/logo-color.svg"

export default function Navbar() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to="/">
              <span className="sr-only">Workflow</span>
              {/* insert logo image below */}
              {/* <h2>BUILDAWT</h2> */}
              <img className="h-8 w-auto sm:h-6" src={logoColor} alt="" />
            </NavLink>    
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10 justify-end">
            <NavLink to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Workouts
            </NavLink>
            <NavLink to="/exercises" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Exercises
            </NavLink>
            <NavLink to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
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
      </Transition>
    </Popover>
  )
}
