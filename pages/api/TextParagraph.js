

export const TextParagraph = props => {

  const pText = props.text;

  return (
    <div
      className={ 'w-1/3'} >
      { pText }
    </div>
  );

};