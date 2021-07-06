import {
  Fragment
} from 'react';

import {
  Disclosure
} from '@headlessui/react'

export const Catalog = props => {

  const pItems = props.items;


  return (
    pItems.map( item => {
      return (
        <Disclosure
          key={ item.title }
        >
          <Disclosure.Button
            className={
              'flex'
            }
          >
            { item.title }
          </Disclosure.Button>
          <Disclosure.Panel>
            {
              item.children
            }
          </Disclosure.Panel>
        </Disclosure>
      );
    } )
  );
};