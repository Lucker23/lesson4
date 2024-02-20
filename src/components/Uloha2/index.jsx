import hradUrl from './hrad.svg';

/*
Zadání: Po najetí myši, `onMouseEnter` na obrázek zobrazte alert s textem „Na hradě je myš!“
*/

export const Uloha2 = () => {
  const onMouseEnter = () => {
      alert('Na hradě je myš!')
  };
  return (<img onMouseEnter={onMouseEnter} src={hradUrl} width={60} height={60} alt="hrad" />);
};


// const handleClick = () => {
//   alert('ahoj');
// };

// return (
//   <button className="greet" onClick={handleClick}>
//     Zobraz bublinu
//   </button>)