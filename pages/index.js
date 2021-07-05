import Head from 'next/head';

import {
  ArrowButton
} from './api/ArrowButton';

import {
  IconButton
} from './api/IconButton';

import {
  HMenu
} from './api/Menu';

import {
  PillButton
} from './api/PillButton';

import {
  RoundButton
} from './api/RoundButton';


const Page = props => {

  return (
    <div>

      <Head>
        {/*https://stackoverflow.com/questions/56213019/how-to-add-a-favicon-to-a-next-js-static-site*/}
        <link rel="shortcut icon" href="favicon.png" />
      </Head>

      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: 'gray'}}>      
        <RoundButton
          text={ 'cool buttons' } />
        <RoundButton
          text={ 'wow now cow' } />
        <PillButton
          text={ 'Explore Summer at Harvard'}
          theme={ 'crimson' } />
        <PillButton
          text={ 'Explore Winter at Yale'}
          theme={ 'crimson-light' } />
        <PillButton
          text={ 'Request Info'}
          theme={ 'dark' } />
        <ArrowButton
          text={ 'Arrow Button Wiggler'}
          left={ true } />
        <ArrowButton
          text={ 'Arrow Wrigger Right' }
          left={ false } />
        <IconButton
          theme={ 'dark' }
          icon={ 'ICON_MENU' } />
        <IconButton
          theme={ 'light' }
          icon={ 'ICON_SEARCH' } />
        <IconButton
          theme={ 'light' }
          icon={ 'ICON_CLOSE' } />
        <HMenu
          text={ 'Adult & College Students'} />
      </div>

    </div>
  );
};

export default Page;