import './FiltersButtons.css';
function FiltersButtons({clickedFiltr,clickedbtn,name,namebtn}) {

  const setClickedBTN=("",()=>{
    clickedbtn=namebtn;
    clickedFiltr(clickedbtn);
  });
  return (
    <button className="dropdownMenu__button" onClick={setClickedBTN}>{name}</button>
  );
}
export default FiltersButtons;