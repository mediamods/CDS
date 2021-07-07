
import clsx from 'clsx';

import {
  useIcon
} from './IconHooks.js';

export const IconButton = props => {

  const pIcon = props.icon;
  const pTheme = props.theme;
  const darkTheme = pTheme === 'dark';

  const memodIcon = useIcon( darkTheme, pIcon );

  return (
    <button className={ clsx(
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
    </button>
  );
}