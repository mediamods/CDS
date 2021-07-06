

export const InfoGridCell = props => {

  const pTitle = props.title;
  const pText = props.text;

  return (
    <div
      className={ 'w-72 flex flex-col gap-1' }
    >
      <div
        className={ 'text-brown text-4xl font-serif' }
      >
        { pTitle }
      </div>
      <div
        className={ '' }
      >
        { pText }
      </div>
    </div>
  );

};