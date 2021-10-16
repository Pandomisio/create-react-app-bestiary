import './Filters Main Buttons.css';
function FiltersMainButtons({clickedFiltr,namebtn, css}) {
    let classCss ="filters__button ";
    classCss+=css;
    return (
        <button onClick={clickedFiltr} className={classCss} id="filtr__name">{namebtn}</button>
    );
}
export default FiltersMainButtons;