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

      <Fragment>

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

        <Menu.Items
          static
          className="absolute bg-white w-56 flex-column justify-center">

          {/*todo -- add crimson dot here*/}

          {
          pItems.map( item => {
            return (
              <Menu.Item className="justify-center">
                {({ active }) => (
                  <ArrowButton
                    text={ item.text }
                    visible={ false }
                    left={ false }
                    justify={ 'justify-between' }
                  />
                )}
              </Menu.Item>
            );
          } )
          }
        </Menu.Items>

      </Transition>

      </Fragment>
    </Menu>
  )
}

