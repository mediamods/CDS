
import clsx from 'clsx';

import {
  useIcon,
  useIconButton
} from './IconHooks.js';

export const IconButton = props => {

  const pIcon = props.icon;
  const pTheme = props.theme;
  const darkTheme = pTheme === 'dark';

  const memodButtonClass = useIconButton( darkTheme );
  const memodIcon = useIcon( darkTheme, pIcon );

  return (
    <button className={ memodButtonClass } >
      { memodIcon }
    </button>
  );
}