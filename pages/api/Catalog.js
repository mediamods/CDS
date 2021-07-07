import {
  Fragment
} from 'react';

import {
  Disclosure
} from '@headlessui/react'

import {
  useIcon
} from './IconHooks.js';


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

  const icon = useIcon( false, 'ICON_PLUS' );

  return (
    <Disclosure.Button
      className={
        'flex'
      } >
      
      { icon }
      { pOpen ? 'open' : pTitle }

    </Disclosure.Button>
  );
}