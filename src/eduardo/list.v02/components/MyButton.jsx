export const MyButton = () => {
  function handleClick() {
    alert('Me hiciste click');
  }
  console.log(handleClick);

  return (
    <button className="btn" onClick={handleClick}>
      {' '}
      Hazme click
    </button>
  );
};
