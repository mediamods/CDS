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

  return (
    pItems.map( item => {
      const iTitle = item.title;
      return (
        <Disclosure
          key={ iTitle }
        >
          {({ open }) => (
          <Fragment>

            <DisclosureToggle
              open={ open }
              title={ iTitle }
            />
            <Disclosure.Panel>
              {
                item.children
              }
            </Disclosure.Panel>
          </Fragment>
          )}

        </Disclosure>
      );
    } )
  );
};

const DisclosureToggle = props => {

  const pOpen = props.open;
  const pTitle = props.title;

  const iconButtonClass = useIconButton( pOpen );
  const icon = useIcon( pOpen, pOpen ? 'ICON_MINUS' : 'ICON_PLUS' );

  return (
    <Disclosure.Button
      className={ 'flex gap-2' } >
      
      <button className={ iconButtonClass }>
        { icon }
      </button>

      { pOpen ? 'open' : pTitle }

    </Disclosure.Button>
  );
}