import Head from 'next/head';

import {
  ArrowButton
} from './api/ArrowButton';

import {
  Catalog
} from './api/Catalog';

import {
  IconButton
} from './api/IconButton';

import {
  HoverMenu
} from './api/HoverMenu';

import {
  LogoVector
} from './api/LogoVector';

import {
  TitleVector
} from './api/TitleVector';

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

      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#f5f4f1'}}>
        <LogoVector/>
        <TitleVector/>
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
          visible={ true }
          left={ true }
          justify={ 'justify-start'} />
        <ArrowButton
          text={ 'Arrow Wrigger Right' }
          visible={ true }
          left={ false }
          justify={ 'justify-end' } />
        <IconButton
          theme={ 'dark' }
          icon={ 'ICON_MENU' } />
        <IconButton
          theme={ 'light' }
          icon={ 'ICON_SEARCH' } />
        <IconButton
          theme={ 'light' }
          icon={ 'ICON_CLOSE' } />
        <HoverMenu
          text={ 'Adult & College Students'}
          items={ [
            {
              text: 'Browse Courses',
              link: '/'
            },
            {
              text: 'Course Registration',
              link: '/'
            }
          ] }/>
        <Catalog
          items={ [
            {
              heading: 'Arts, Writing, and the Humanities',
              items: [
                {
                  text: 'Comparitive Literature',
                  link: '/'
                },
                {
                  text: 'Creative Writing',
                  link: '/'
                }
              ]
            },
            {
              heading: 'Business & Economics',
              items: [
                {
                  text: 'Management',
                  link: '/'
                },
                {
                  text: 'Economics',
                  link: '/'
                }
              ]
            }
          ] }/>
      </div>

    </div>
  );

};

export default Page;