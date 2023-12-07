export const MyButton = () => {
  function handleClick() {
    alert('Me hiciste click');
  }

  return (
    <button className="btn" onClick={handleClick}>
      {' '}
      Hazme click
    </button>
  );
};
