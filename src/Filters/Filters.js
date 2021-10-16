
import './Filters.css';
import FiltersButtons from './FiltersButtons';
import FiltersMainButtons from '../Filters Main Buttons/Filters Main Buttons';
function Filters({ nameSortZA, nameSortAZ, swordSort, swordSortSteel, swordSortSilver, demageSort, demageSortFire, demageSortCinetic, demageSortDimerite, attackSort, attackSortHeavy, attackSortFast, clusterSort, clusterSort1, clusterSort2, clusterSort3, clusterSort4, clusterSort5, clusterSort6, clusterSort7, clusterSort8, clusterSort9 }) {




  console.log(nameSortZA);
  return (
    <div className="filters">
      <div className="filter filter__name">
        <FiltersMainButtons namebtn={"Nazwa"} css={"filters__button--first"} />
        {/* <button className="filters__button--first filters__button" id="filtr__name" onClick={Sortname}>{namebtn}</button> */}
        <ul className="dropdownMenu dropdownMenu__name">
          <li className="dropdownMenu__item"><FiltersButtons name={"A-Z"} clickedFiltr={nameSortAZ} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"Z-A"} clickedFiltr={nameSortZA} /></li>
        </ul>
      </div>
      <div className="filter filter__rare">
        <FiltersMainButtons namebtn={"Rzadkość"} />
        {/* <button className="filters__button" onClick={Sortrare}>Rzadkość</button> */}
        <ul className="dropdownMenu dropdownMenu__rare">
          {/* <li className="dropdownMenu__item"><FiltersButtons name={"Wszystkie"} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"Pospolite"} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"Rzadkie"} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"Legendarne"} /></li> */}
        </ul>
      </div>

      <div className="filter filter__sword">
        <FiltersMainButtons namebtn={"Miecz"} />
        {/* <button className="filters__button">{swordbtn}</button> */}
        <ul className="dropdownMenu dropdownMenu__sword">
          <li className="dropdownMenu__item"><FiltersButtons name={"WSZTYSTKIE"} clickedFiltr={swordSort} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"STAL"} clickedFiltr={swordSortSteel} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"SREBRO"} clickedFiltr={swordSortSilver} /></li>
        </ul>
      </div>

      <div className="filter filter__attack">
        <FiltersMainButtons namebtn={"Atak"} />
        {/* <button className="filters__button" onClick={Sortattack}>{attackbtn}</button> */}
        <ul className="dropdownMenu dropdownMenu__attack">
          <li className="dropdownMenu__item"><FiltersButtons name={"WSZYSTKIE"} clickedFiltr={attackSort} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"SZYBKI"} clickedFiltr={attackSortHeavy} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"SILNY"} clickedFiltr={attackSortFast} /></li>
        </ul>
      </div>

      <div className="filter filter__demage">
        <FiltersMainButtons namebtn={"Obrażenia"} />
        {/* <button className="filters__button" onClick={Sortdemage}>{demagebtn}</button> */}
        <ul className="dropdownMenu dropdownMenu__demage">
          <li className="dropdownMenu__item"><FiltersButtons name={"WSZYSTKIE"} clickedFiltr={demageSort} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"OGIEŃ"} clickedFiltr={demageSortFire} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"OBRAŻENIA KINETYCZNE"} clickedFiltr={demageSortCinetic} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"DWIMERYT"} clickedFiltr={demageSortDimerite} /></li>
        </ul>
      </div>

      <div className="filter filter__cluster">
        <FiltersMainButtons namebtn={"Gromada"} css={"filters__button--last"} />
        {/* <button className="filters__button filters__button--last" onClick={Sortcluster}>{clusterbtn}</button> */}
        <ul className="dropdownMenu dropdownMenu__cluster">
          <li className="dropdownMenu__item"><FiltersButtons name={"Wszystkie"} clickedFiltr={clusterSort} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"Trupojady"} clickedFiltr={clusterSort1} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"Insektoidy"} clickedFiltr={clusterSort2} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"Istoty Magiczne"} clickedFiltr={clusterSort3} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"Istoty Przeklęte"} clickedFiltr={clusterSort4} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"Upiory"} clickedFiltr={clusterSort5} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"Relikty"} clickedFiltr={clusterSort6} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"Hybrydy"} clickedFiltr={clusterSort7} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"Wampiry"} clickedFiltr={clusterSort8} /></li>
          <li className="dropdownMenu__item"><FiltersButtons name={"Ogrowate"} clickedFiltr={clusterSort9} /></li>
        </ul>
      </div>
    </div>
  );
}

export default Filters;