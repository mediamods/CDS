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

import clsx from 'clsx';

import {
  ArrowButton
} from './ArrowButton';

export const NavItem = props => {

  const pText = props.text;
  const pItems = props.items;

  return (
    <Menu
      as="div"
      className="" >

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
          className="absolute bg-white w-56">
          <div className={ clsx(
              'transform',
              'translate-x-1/2'
            ) } >
              <div className={ clsx(
                'absolute',
                'transform',
                '-translate-x-1/2',
                '-translate-y-1/2',
                'w-2',
                'h-2',
                'rounded-full',
                'bg-crimson'
              ) }/>
            </div>

          <div className={
            clsx(
              'p-6'
            ) } >

            {
            pItems.map( item => {
              return (
                <Menu.Item
                  key={ item.text }>
                  {({ active }) => (
                    <div className={ 'py-1' }>
                    <ArrowButton
                      text={ item.text }
                      visible={ false }
                      left={ false }
                      justify={ 'justify-between' }
                    />
                    </div>
                  )}
                </Menu.Item>
              );
            } )
            }

          </div>
        </Menu.Items>

      </Transition>

      </Fragment>
    </Menu>
  )
}
