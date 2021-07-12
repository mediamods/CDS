

export const TextHeading = props => {

  const pHeading = props.heading;
  const pSubHeading = props.subHeading;

  return (
    <div
      className={ 'w-2/3 text-5xl'} >
      <span 
        className={ 'font-bold' }>
          { pHeading }
      </span>
      {'\u00A0'}
      <span>
        { pSubHeading }
      </span>
    </div>
  );

};