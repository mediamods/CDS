
import {
  useMemo
} from 'react';

import clsx from 'clsx';

import { 
  XIcon,
  MenuIcon,
  SearchIcon
} from '@heroicons/react/outline';

export const ICON_CLOSE = 'ICON_CLOSE';
export const ICON_MENU = 'ICON_MENU';
export const ICON_SEARCH = 'ICON_SEARCH';

export const IconButton = props => {

  const pIcon = props.icon;
  const pTheme = props.theme;
  const darkTheme = pTheme === 'dark';

  const memodIcon = useMemo( () => {
    const className = clsx( 
      'h-6',
      'w-6',

      'transition-text ease-bop duration-300',
      'stroke-current',
      darkTheme ? 'text-white' : 'text-black',
      `group-hover:${ darkTheme ? 'text-black' : 'text-white' }`
    );

    const icons = {
      [ICON_MENU]:
      <MenuIcon className={ className } />,
      [ICON_SEARCH]:
      <SearchIcon className={ className } />,
      [ICON_CLOSE]:
      <XIcon className={ className } />,
    };
    const icon = icons[pIcon];
    return icon;
  }, [
    pIcon,
    darkTheme
  ] );

  return (
    <a className={ clsx(
      'h-8',
      'w-8',

      'transition-bg ease-bop duration-300',
      darkTheme ? 'bg-black' : 'bg-white',
      darkTheme ? 'hover:bg-white' : 'hover:bg-black',

      'rounded-full',
      'flex',
      'items-center justify-center',

      'cursor-pointer',

      'group'
      ) }
    >
      { memodIcon }
    </a>
  );
}