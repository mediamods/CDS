import { 
  Menu,
  Transition
} from '@headlessui/react';

import {
  Fragment,
  useEffect,
  useRef,
  useState
} from 'react';

export const HMenu = props => {
  return (
    <Menu as="div" className="w-56">

      <Menu.Button>
        Options
      </Menu.Button>

      <Transition
        as={ Fragment }
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`flex`}
              >
                Edit
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`flex`}
              >
                Duplicate
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`flex`}
              >
                Archive
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`flex`}
              >
                Move
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`flex`}
              >
                Delete
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

