
import clsx from 'clsx';

import {
  LogoVector
} from './LogoVector';

import {
  TitleVector
} from './TitleVector';

export const Logo = props => {
  return (
    <div className={ clsx(
      'flex',
      'items-start',
      'w-56'
    ) } >
      <LogoVector
        width={ '33%' }
      />
      <TitleVector
        width={ '66%' }
      />
    </div>
  );
};