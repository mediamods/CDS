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
          key={ item.heading }
        >
          <Disclosure.Button
            className={
              'flex'
            }
          >
            { item.heading }
          </Disclosure.Button>
          <Disclosure.Panel>
            <ul>
{/*            {
              item.items.map( listItem => {
                return (
                  <li>
                    { listItem.text }
                  </li>
                )
              })
            }*/}
            </ul>
          </Disclosure.Panel>
        </Disclosure>
      );
    } )
  );
};