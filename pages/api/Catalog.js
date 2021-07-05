import {
  Fragment
} from 'react';

import {
  Disclosure
} from '@headlessui/react'

export const Catalog = props => {

  const pItems = props.items;

  return (
    <div/>
      // pItems.map( item => {
      //   return (
      //     <Disclosure>
      //       <Disclosure.Button>
      //         { item.heading }
      //       </Disclosure.Button>
      //       <Disclosure.Panel>
      //         <ul>
      //         {
      //           item.items.map( listItem => {
      //             return (
      //               <li>
      //                 { listItem.text }
      //               </li>
      //             )
      //           })
      //         }
      //         </ul>
      //       </Disclosure.Panel>
      //     </Disclosure>
      //   );
      // } )
  );
};