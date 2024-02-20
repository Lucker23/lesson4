/*
Zadání: Po kliku na tlačítko zobrazte alert s textem „Ahoj“.
*/

export const Uloha1 = () => {
  const handleClick = () => {
    alert('ahoj');
  };

  return (
    <button className="greet" onClick={handleClick}>
      Zobraz bublinu
    </button>
  );

};
