import {
  useMemo
} from 'react';

import clsx from 'clsx';

import { 
  MenuIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  XIcon
} from '@heroicons/react/outline';

export const ICON_CLOSE = 'ICON_CLOSE';
export const ICON_MENU = 'ICON_MENU';
export const ICON_MINUS = 'ICON_MINUS';
export const ICON_PLUS = 'ICON_PLUS';
export const ICON_SEARCH = 'ICON_SEARCH';

export const useIconButton = ( darkTheme ) => {

  const iconButtonClassName = useMemo( () => {

    const buttClassName = clsx(
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
    );

    return buttClassName;

  }, [
    darkTheme
  ] );

  return iconButtonClassName;

}

export const useIcon = ( darkTheme, pIcon ) => {

  const icon = useMemo( () => {
    const className = getIconClassName( darkTheme );
    return getIconJsx( pIcon, className );
  }, [
    pIcon,
    darkTheme
  ] );

  return icon;
};

export const useToggleIcon = ( darkTheme, pIconUnselected, pIconSelected ) => {

};

const getIconClassName = ( darkTheme ) => {
  const className = clsx( 
    'h-6',
    'w-6',

    'transition-text ease-bop duration-300',
    'stroke-current',
    darkTheme ? 'text-white' : 'text-black',
    `group-hover:${ darkTheme ? 'text-black' : 'text-white' }`
  );
  return className;
};

const getIconJsx = ( pIcon, className ) => {
  const icons = {
    [ICON_CLOSE]:
    <XIcon className={ className } />,
    [ICON_MENU]:
    <MenuIcon className={ className } />,
    [ICON_MINUS]:
    <MinusIcon className={ className } />,
    [ICON_PLUS]:
    <PlusIcon className={ className } />,
    [ICON_SEARCH]:
    <SearchIcon className={ className } />,
  };
  const icon = icons[pIcon];
  console.log( 'pIcon', pIcon, '->', icon );
  return icon;  
};