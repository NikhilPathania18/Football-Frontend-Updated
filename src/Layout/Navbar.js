import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Matches', href: '/matches', current: location.pathname === '/matches' },
    { name: 'Groups', href: '/groups', current: location.pathname === '/groups' },
    // {
    //   name: 'Stats',
    //   href: '/stats',
    //   current: location.pathname.startsWith('/stats'),
    //   submenu: [
    //     { name: 'Tournament Stats', href: '/stats/season', current: location.pathname === '/stats/season' },
    //     { name: 'All Time', href: '/stats/all-time', current: location.pathname === '/stats/all-time' },
    //   ],
    // },
    { name: 'Teams', href: '/teams', current: location.pathname === '/teams' },
  ];

  return (
    <Disclosure as="nav" className="bg-[#000040]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                <div className="flex flex-shrink-0 justify-center items-center">
                  <Link to={'/'}>
                    <img className="h-8 w-auto" src={'/nith football logo.png'} alt="NITH Football" />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-12 mx-5 items-center">
                    {navigation.map((item) => (
                      <div key={item.name} className="relative group">
                        {false ? (
                          // Dropdown menu button
                          <Disclosure.Button
                            as="div"
                            className={classNames(
                              item.current ? 'text-teal-400' : 'text-white hover:text-teal-400',
                              'rounded-full px-3 py-2 text-xl font-semibold font-championslight cursor-pointer'
                            )}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ) : (
                          // Regular menu item
                          <Link
                            to={item.href}
                            className={classNames(
                              item.current ? 'bg-teal-400 text-blue-950' : 'text-white hover:text-teal-400',
                              'rounded-full px-3 py-2 text-xl font-semibold font-championslight'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name }
                          </Link>
                        )}

                        {/* Dropdown menu */}
                        {/* {item.submenu && (
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Disclosure.Panel className="absolute z-10 mt-2 space-y-1 px-2 pb-3 pt-2 bg-[#000040] rounded shadow-lg">
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  to={subitem.href}
                                  className={classNames(
                                    subitem.current ? 'text-teal-400' : 'text-white hover:text-teal-300',
                                    'block px-4 py-2 text-sm rounded-md'
                                  )}
                                  aria-current={subitem.current ? 'page' : undefined}
                                >
                                  {subitem.name}
                                </Link>
                              ))}
                            </Disclosure.Panel>
                          </Transition>
                        )} */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'font-championsbold text-teal-400 text-xl'
                      : 'font-championsbold text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-xl font-medium '
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
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
