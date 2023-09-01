import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";

const Navbar = () => {

  const navigation = [
    { name: 'Architectural', route: '/architectural-interiors', current: false },
    { name: 'Personal', route: '/point-of-sale', current: false },
    { name: 'About', route: '/about', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 hover:text-gray-600">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link className='hover:text-gray-600' to="/">
                    Shane Butler Architectural Photographer
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.route}
                        className={classNames(
                          item.current ? 'text-gray-500' : 'hover:text-gray-500'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  className={classNames(
                    item.current ? 'bg-gray-100' : 'hover:bg-gray-100',
                    'block ml-auto mr-0 rounded-md px-3 py-2'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link to={item.route}>
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
