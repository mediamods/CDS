
import {
  useMemo
} from 'react';

import clsx from 'clsx';

export const ICON_MENU = 'ICON_MENU';
export const ICON_SEARCH = 'ICON_SEARCH';
export const ICON_CLOSE = 'ICON_CLOSE';

export const IconButton = props => {

  const pIcon = props.icon;
  const pDark = props.dark;

  return (
    <a className={ clsx(
      'h-6',
      'w-6',

      'transition-bg ease-bop duration-300',
      pDark ? 'bg-black' : 'bg-white',
      pDark ? 'hover:bg-white' : 'hover:bg-black',

      'rounded-full',
      'flex',
      'items-center justify-center',

      'cursor-pointer'
      ) }
    >

    </a>
  );
}