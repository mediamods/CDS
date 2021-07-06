

import {
  ArrowButton
} from './ArrowButton';

export const InfoCard = props => {

  const pTitle = props.title;
  const pText = props.text;

  return (
    <div
      className={ 'w-72 flex flex-col bg-white' } >
      <div
        className={ 'p-5 flex flex-col gap-5'} >

        <ArrowButton
          text={ pTitle }
          left={ false }
          justify={ 'justify-between' }
          visible={ true }
        />

        <div>
          { pText }
        </div>

      </div>
      <div src="" className={ 'h-96 bg-crimson' }/>
    </div>
  );

};