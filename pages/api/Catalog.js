import {
  Fragment
} from 'react';

import {
  Disclosure,
  Switch
} from '@headlessui/react'

export const Catalog = props => {

  const pItems = props.items;


  return (
    pItems.map( item => {
      return (
        <Disclosure
          key={ item.title }
        >
          {({ open }) => (
          <Fragment>

            <Disclosure.Button
              className={
                'flex'
              }
              >
              

              { open ? 'open' : item.title }

            </Disclosure.Button>
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
  return (
    <div>ok</div>
  );
}