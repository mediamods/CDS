
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
      'w-56',
      'gap-x-3.5'
    ) } >
  
      <LogoVector
        //you, logo, get a third of the total
        width={ '33%' }
      />
  
      {/*this div gets the remainer*/}
      <div
      >
        <TitleVector
          //and we fill the remainder with our TitleVector
          width={ '100%' }
        />
      </div>
    </div>
  );
};