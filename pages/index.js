import Head from 'next/head';

import {
  ArrowButton
} from './api/ArrowButton';

import {
  IconButton
} from './api/IconButton';

import {
  PillButton
} from './api/PillButton';

import {
  RoundButton
} from './api/RoundButton';


//for duplicating transition behavior:
//https://tailwindcss.com/docs/transition-property

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
          crimson={ true } />
        <PillButton
          text={ 'Explore Winter at Yale'}
          crimson={ false } />
        <ArrowButton
          text={ 'Arrow Button Wiggler'}
          left={ true } />
        <ArrowButton
          text={ 'Arrow Wrigger Right' }
          left={ false } />
        <IconButton
          dark={ true }
          icon={ 'ICON_MENU' } />
        <IconButton
          dark={ false }
          icon={ 'ICON_SEARCH' } />
      </div>
    </div>
  );
};

export default Page;