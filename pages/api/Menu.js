import { 
  Popover,
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

export const Menu = props => {

  const pText = props.text;
  const pItems = props.items || [];

  return (
    <Popover
      as="div"
      className="relative" >

      <Popover.Button>
        { pText }
      </Popover.Button>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >

        <Popover.Panel
          className={ clsx(
            'bg-white',
            'w-56',
            'absolute',
            'transform',
            '-translate-x-1/2',
            'left-1/2' ) } >

          <div
            className={ clsx(
            'absolute',
            'transform',
            '-translate-x-1/2',
            '-translate-y-1/2',
            'left-1/2',
            'w-2',
            'h-2',
            'rounded-full',
            'bg-crimson'
          ) }/>

          <div
            className={ clsx(
              'p-6'
            ) } >

           {
            pItems.map( item => {
              return (
                <div
                  key={ item.text }
                  className={ 'py-1' }>
                  <ArrowButton
                    text={ item.text }
                    visible={ false }
                    left={ false }
                    justify={ 'justify-between' }
                  />
                </div>
              );
            } )
            }
          </div>

        </Popover.Panel>
      </Transition>

    </Popover>
  )
}

