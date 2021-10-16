import './App.css';
import Header from './Header/Header';
import Filters from './Filters/Filters';
import Monsters from './Monsters/Monsters';
import { useState } from 'react';

import image1 from './Img/1.jpg';
import image2 from './Img/2.jpg';
import image3 from './Img/3.jpg';
import image4 from './Img/4.jpg';
import image5 from './Img/5.jpg';
import image6 from './Img/6.jpg';
import image7 from './Img/7.jpg';
import image8 from './Img/8.jpg';
import image9 from './Img/9.jpg';
import image10 from './Img/10.jpg';
import image11 from './Img/11.jpg';
import image12 from './Img/12.jpg';
import image13 from './Img/13.jpg';
import image14 from './Img/14.jpg';
import image15 from './Img/15.jpg';
import image16 from './Img/16.jpg';
import image17 from './Img/17.jpg';
import image18 from './Img/18.jpg';
import image19 from './Img/19.jpg';
import image20 from './Img/20.jpg';
import image21 from './Img/21.jpg';
import image22 from './Img/22.jpg';
import image23 from './Img/23.jpg';
import image24 from './Img/24.jpg';
import image25 from './Img/25.jpg';



function App() {
  const [sortname, setSortName] = useState("A-Z");
  const [sortsword, setsortSword] = useState(0);
  const [sortrare, setsortRare] = useState(0);
  const [sortdemage, setsortDemage] = useState(0);
  const [sortattack, setsortAttack] = useState(0);
  const [sortcluster, setsortCluster] = useState(0);


  const [namebtn, setnamebtn] = useState("Nazwa↑");
  const [swordbtn, setswordbtn] = useState("Miecz");
  // const [sortrare, setsortRare] = useState(0);
  const [demagebtn, setdemagebtn] = useState("Obrażenia");
  const [attackbtn, setattackbtn] = useState("Atak");
  const [clusterbtn, setclusterbtn] = useState("Gromada");

  const [allShowedMonstersCount, setallShowedMonstersCount] = useState(0);
  const counting = ("", () => {
    let allMonsters = document.querySelectorAll(".monster").length;
    setallShowedMonstersCount(allShowedMonstersCount => allShowedMonstersCount = allMonsters);
  });

  let clickedbtn = "";
  const nameSortAZ = ("", () => {
    setSortName(sortname => sortname = "A-Z");
    // setnamebtn(namebtn => namebtn = "Nazwa↑");
  });
  const nameSortZA = ("", () => {
    setSortName(sortname => sortname = "Z-A");
    // setnamebtn(namebtn => namebtn = "Nazwa↓");
  });

  const swordSort = ("", () => {
    setsortSword(sortsword => sortsword = 0);
  });
  const swordSortSteel = ("", () => {
    setsortSword(sortsword => sortsword = 1);
  });
  const swordSortSilver = ("", () => {
    setsortSword(sortsword => sortsword = 2);
  });


  const demageSort = ("", () => {
    setsortDemage(sortdemage => sortdemage = 0);
  });
  const demageSortFire = ("", () => {
    setsortDemage(sortdemage => sortdemage = 1);
  });
  const demageSortCinetic = ("", () => {
    setsortDemage(sortdemage => sortdemage = 2);
  });
  const demageSortDimerite = ("", () => {
    setsortDemage(sortdemage => sortdemage = 3);
  });


  const clusterSort = ("", () => {
    setsortCluster(sortcluster => sortcluster = 0);
  });
  const clusterSort1 = ("", () => {
    setsortCluster(sortcluster => sortcluster = 1);
  });
  const clusterSort2 = ("", () => {
    setsortCluster(sortcluster => sortcluster = 2);
  });
  const clusterSort3 = ("", () => {
    setsortCluster(sortcluster => sortcluster = 3);
  });
  const clusterSort4 = ("", () => {
    setsortCluster(sortcluster => sortcluster = 4);
  });
  const clusterSort5 = ("", () => {
    setsortCluster(sortcluster => sortcluster = 5);
  });
  const clusterSort6 = ("", () => {
    setsortCluster(sortcluster => sortcluster = 6);
  });
  const clusterSort7 = ("", () => {
    setsortCluster(sortcluster => sortcluster = 7);
  });
  const clusterSort8 = ("", () => {
    setsortCluster(sortcluster => sortcluster = 8);
  });
  const clusterSort9 = ("", () => {
    setsortCluster(sortcluster => sortcluster = 9);
  });

  const attackSort = ("", () => {
    setsortAttack(sortattack => sortattack = 0);
  });
  const attackSortHeavy = ("", () => {
    setsortAttack(sortattack => sortattack = 1);
  });
  const attackSortFast = ("", () => {
    setsortAttack(sortattack => sortattack = 2);
  });



  const rareSort = ("", () => {
    setsortRare(sortrare => sortrare + 1);
    counting();
    //console.log(sortrare);
    if (sortrare === 3) {
      setsortRare(sortrare => sortrare = 0);
    }
  });



  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
  ]




  const changeBG = () => {
    const bodybackground = document.querySelector(".body");
    console.log(bodybackground);
    let bg = images[Math.floor(Math.random() * images.length)];
    bodybackground.style.backgroundImage = `url(${bg})`;
  };
  // setInterval(changeBG, 3000);

  const onLoadWindow = () => {
    counting();
    changeBG();
  };
  window.addEventListener("load", onLoadWindow);
  //console.log(allMonsters);
  return (
    <div className="App">
      <Header />
      <Filters
        nameSortAZ={nameSortAZ}
        nameSortZA={nameSortZA}
        swordSort={swordSort}
        swordSortSteel={swordSortSteel}
        swordSortSilver={swordSortSilver}
        demageSort={demageSort}
        demageSortFire={demageSortFire}
        demageSortCinetic={demageSortCinetic}
        demageSortDimerite={demageSortDimerite}
        attackSort={attackSort}
        attackSortHeavy={attackSortHeavy}
        attackSortFast={attackSortFast}
        clusterSort={clusterSort}
        clusterSort1={clusterSort1}
        clusterSort2={clusterSort2}
        clusterSort3={clusterSort3}
        clusterSort4={clusterSort4}
        clusterSort5={clusterSort5}
        clusterSort6={clusterSort6}
        clusterSort7={clusterSort7}
        clusterSort8={clusterSort8}
        clusterSort9={clusterSort9}
      />
      <p className="counting">{allShowedMonstersCount}<div className="counting__bg"></div><div className="counting__info">Liczba wyświetlanych potworów</div></p>
      <Monsters
        toogleName={sortname}
        toogleRare={sortrare}
        toogleSword={sortsword}
        toogleAttack={sortattack}
        toogleDemage={sortdemage}
        toogleCluster={sortcluster}
        counting={counting}
      />
    </div>
  );
}

export default App;
