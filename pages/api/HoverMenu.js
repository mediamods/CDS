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

import {
  ArrowButton
} from './ArrowButton';

export const HoverMenu = props => {

  const pText = props.text;
  const pItems = props.items;

  return (
    <Menu as="div" className="w-56">

      <Menu.Button>
        { pText }
      </Menu.Button>

      <Transition
        as={ Fragment }
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >

        <Menu.Items className="absolute">
          {
          pItems.map( item => {
            return (
              <Menu.Item>
                {({ active }) => (
                  <ArrowButton
                    text={ item.text }
                    left={ false }
                  />
                )}
              </Menu.Item>
            );
          } )
          }
        </Menu.Items>

      </Transition>
    </Menu>
  )
}

