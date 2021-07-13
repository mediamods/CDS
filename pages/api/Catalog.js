import {
  Fragment
} from 'react';

import {
  Disclosure
} from '@headlessui/react'

import {
  useIcon,
  useIconButton
} from './IconHooks.js';

import clsx from 'clsx';

export const Catalog = props => {

  const pItems = props.items;
  const pItemsLen = pItems.length;

  return (
    <div
      className={ 'w-1/2' } >
      {
      pItems.map( (item, idx) => {
        const iTitle = item.title;
        return (
          <Disclosure
            key={ iTitle }
          >
            {({ open }) => (
            <div
              className={ clsx(
                'py-3',
                'border-t',
                (idx === pItemsLen-1) ? 'border-b' : '',
                'border-crimson',
                'w-full'
              ) } >

              <DisclosureToggle
                open={ open }
                title={ iTitle }
              />
              <Disclosure.Panel
                //todo - tie to the width of the button?
                className={ 'px-10' }
              >
                {
                  item.child
                }
              </Disclosure.Panel>
            </div>
            )}

          </Disclosure>
        );
      } )
      }
    </div>
  );
};

const DisclosureToggle = props => {

  const pOpen = props.open;
  const pTitle = props.title;

  const iconButtonClass = useIconButton( pOpen, !pOpen );
  const iconSpinClass = clsx(
    'transition-rotate',
    'ease-bop',
    'duration-100',
    'transform',
    pOpen ? 'rotate-90' : 'rotate-0'
  );
  const iconClass = [iconButtonClass, iconSpinClass].join( ' ' );
  const icon = useIcon( pOpen, !pOpen, pOpen ? 'ICON_MINUS' : 'ICON_PLUS' );

  return (
    <div
      className={ 'flex gap-2' } >
      
      <Disclosure.Button 
        className={ iconClass } >
        { icon }
      </Disclosure.Button>

      { pTitle }

    </div>
  );
}