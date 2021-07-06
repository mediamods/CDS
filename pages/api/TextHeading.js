

export const TextHeading = props => {

  const pMain = props.mainText;
  const pSub = props.subText;

  return (
    <div
      className={ 'w-2/3 text-5xl'} >
      <span 
        className={ 'font-bold' }>
          { pMain }
      </span>
      {'\u00A0'}
      <span>
        { pSub }
      </span>
    </div>
  );

};