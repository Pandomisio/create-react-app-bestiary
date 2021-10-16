import './Monsters.css';
import Monster from '../Monster/Monster';

import steel from '../Img/Steel.png';
import silver from '../Img/Silver.png';
import fire from '../Img/Fire.png';
import kinetic from '../Img/Kinetic.png';
import dwimeryt from '../Img/Dwimeryt.png';
import fast from '../Img/Fast.png';
import strong from '../Img/Strong.png';





import ghul from "../Img/Monsters/Ghul.jpg";
import alp from "../Img/Monsters/Alp.png";
import alghul from "../Img/Monsters/Alghul.png";
import arachnomorf from "../Img/Monsters/Arachnomorf.jpg";
import archespor from "../Img/Monsters/Archespor.png";
import graveHag from "../Img/Monsters/Baba_Cmentarna.png";
import waterHag from "../Img/Monsters/Baba_wodna.png";
import barghest from "../Img/Monsters/Barghest.png";
import basilisk from "../Img/Monsters/Bazyliszek.png";
import beannshie from "../Img/Monsters/Beann'shie.png";
import bies from "../Img/Monsters/Bies.png";
import biesTygrysi from "../Img/Monsters/Bies_Tygrysi.png";
import bloqdzuiger from "../Img/Monsters/Bloedzuiger.png";
import borowy from "../Img/Monsters/Borowy.png";
import bruxa from "../Img/Monsters/Bruxa.png";
import cyklop from "../Img/Monsters/Cyklop.png";
import czart from "../Img/Monsters/Czart.png";
import ekimma from "../Img/Monsters/Ekimma.png";
import endriagaWarrior from "../Img/Monsters/Endrega__warrior.png";
import endriagatruten from "../Img/Monsters/Endriaga_truten.png";
import endriagarobotnica from "../Img/Monsters/Endriaga_robotnica.png";
import fleder from "../Img/Monsters/Fleder.png";
import gargulec from "../Img/Monsters/Gargulec.png";
import garkain from "../Img/Monsters/Garkain.png";
import golem from "../Img/Monsters/Golem.png";
import grotnik from "../Img/Monsters/Grotnik.png";
import gryf from "../Img/Monsters/Gryf.png";
import harpia from "../Img/Monsters/Harpia.png";
import ignisFatuus from "../Img/Monsters/Ignis_Fatuus.png";
import arachasVenom from "../Img/Monsters/jadowity-krabopajak.jpg";
import arachasCommon from "../Img/Monsters/krabopajak-pospolity.jpg";
import skolopendromorf from "../Img/Monsters/Skolopendromorf.png";
import moreaus_golem from "../Img/Monsters/moreaus_golem.png";
import leshen from "../Img/Monsters/leshen.png";
import licho from "../Img/Monsters/Licho.png";
import icegiant from "../Img/Monsters/icegiant.png";
import mglak from "../Img/Monsters/Mglak.png";
import nekker from "../Img/Monsters/Nekker.png";
import nekkerWarrior from "../Img/Monsters/Nekker_Warrior.png";
import noonwraith from "../Img/Monsters/noonwraith.png";
import nightwraith from "../Img/Monsters/nightwraith.png";
import ropuchaOlbrzymia from "../Img/Monsters/Ropucha_Olbrzymia.png";
import silvan from "../Img/Monsters/Silvan.png";
import skrzat from "../Img/Monsters/dark_pixie.png";
import skrzekacz from "../Img/Monsters/Skrzekacz.png";
import siren from "../Img/Monsters/siren.png";
import sharley_white from "../Img/Monsters/sharley_white.png";
import troll_magmowy from "../Img/Monsters/troll_magmowy.png";
import troll_skalny from "../Img/Monsters/Troll_skalny.png";
import upiór from "../Img/Monsters/Upiór.png";
import utopiec from "../Img/Monsters/Utopiec.png";
import wicht from "../Img/Monsters/wicht.png";
import widłogon  from "../Img/Monsters/Widłogon.png";
import wywerna  from "../Img/Monsters/Wywerna.png";
import zgnilec  from "../Img/Monsters/Zgnilec.png";
import warewolf  from "../Img/Monsters/warewolf.jpg";


function Monsters({ toogleName, toogleRare, toogleSword, toogleAttack, toogleDemage, toogleCluster, counting }) {
  const beasts =
    [
      { name: "Alghul", weakness: 46, rare: 1, demage2: null, attack: "Silny", sword: "Srebro", demage: "----", img: alghul, cluster: "Trupojady" },
      { name: "Alp", weakness: 45, rare: 0, demage2: null, attack: "Szybki", sword: "Srebro", demage: "----", img: alp, cluster: "Wampiry" },
      { name: "Arachnomorf", weakness: 350, rare: 0, demage2: null, attack: "Szybki", sword: "Stal", demage: "Ogień", img: arachnomorf, cluster: "Insektoidy" },
      { name: "Archespor", weakness: 460, rare: 1, demage2: null, attack: "Silny", sword: "Srebro", demage: "Ogień", img: archespor, cluster: "Istory przeklęte" },
      { name: "Baba Cmentarna", weakness: 45, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: null, img: graveHag, cluster: "Trupojady" },
      { name: "Baba Wodna", weakness: 450, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: "Ogień", img: waterHag, cluster: "Trupojady" },
      { name: "Barghest", weakness: 45, rare: 0, demage2: null, attack: "Szybki", sword: "Srebro", demage: null, img: barghest, cluster: "Upiory" },
      { name: "Bazyliszek", weakness: 462, rare: 1, demage2: null, attack: "Silny", sword: "Srebro", demage: "Obrażenia Kinetyczne", img: basilisk, cluster: "Drakonoidy" },
      { name: "Bies", weakness: 360, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Ogień", img: bies, cluster: "Relikty" },
      { name: "Bies Tygrysi", weakness: 360, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Ogień", img: biesTygrysi, cluster: "Relikty" },
      { name: "Bloedzuiger", weakness: 360, rare: 0, demage2: null, attack: "Silny", sword: "Stal", demage: "Ogień", img: bloqdzuiger, cluster: "Trupojady" },
      { name: "Borowy", weakness: 360, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Ogień", img: borowy, cluster: "Relikty" },
      { name: "Cyklop", weakness: 36, rare: 2, demage2: null, attack: "Silny", sword: "Stal", demage: null, img: cyklop, cluster: "Ogrowate" },
      { name: "Czart", weakness: 36, rare: 2, demage2: null, attack: "Silny", sword: "Stal", demage: null, img: czart, cluster: "Relikty" },
      { name: "Ekimma", weakness: 360, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Ogień", img: ekimma, cluster: "Wampiry" },
      { name: "Endriaga Robotnica", weakness: 350, rare: 1, demage2: null, attack: "Szybki", sword: "Stal", demage: "Ogień", img: endriagarobotnica, cluster: "Insektoidy" },
      { name: "Endriaga Truteń", weakness: 360, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Ogień", img: endriagatruten, cluster: "Insektoidy" },
      { name: "Fleder", weakness: 36, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: null, img: fleder, cluster: "Wampiry" },
      { name: "Gargulec", weakness: 361, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Dwimeryt", img: gargulec, cluster: "Istoty Magiczne" },
      { name: "Garkain", weakness: 46, rare: 1, demage2: null, attack: "Silny", sword: "Srebro", demage: null, img: garkain, cluster: "Wampiry" },
      { name: "Ghul", weakness: 452, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: "Obrażenia Kinetyczne", img: ghul, cluster: "Trupojady" },
      { name: "Ghul Bladolicy", weakness: 45, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: null, img: ghul, cluster: "Trupojady" },
      { name: "Golem", weakness: 1, rare: 1, demage2: null, attack: "----", sword: "----", demage: "Dwimeryt", img: golem, cluster: "Istoty Magiczne" },
      { name: "Gryf", weakness: 3502, rare: 1, demage2: "Obrażenia Kinetyczne", attack: "Szybki", sword: "Stal", demage: "Ogień", img: gryf, cluster: "Hybrydy" },
      { name: "Harpia", weakness: 3502, rare: 1, demage2: "Obrażenia Kinetyczne", attack: "Szybki", sword: "Stal", demage: "Ogień", img: harpia, cluster: "Hybrydy" },
      { name: "Jadowity Krabopająk", rare: 1, demage2: null, attack: "Szybki", sword: "Stal", demage: "Ogień", weakness: 350, img: arachasVenom, cluster: "Insektoidy" },
      { name: "Kikimora Robotnica", rare: 1, demage2: null, attack: "Szybki", sword: "Stal", demage: "Ogień", weakness: 350, img: "static/media/Ghul.219eac19.jpg", cluster: "Insektoidy" },
      { name: "Krabopająk Królewski", rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: null, weakness: 36, img: "static/media/Ghul.219eac19.jpg", cluster: "Insektoidy" },
      { name: "Krabopająk Pospolity", rare: 1, demage2: null, attack: "Szybki", sword: "Stal", demage: "Ogień", weakness: 350, img: arachasCommon, cluster: "Insektoidy" },
      { name: "Krabopająk Pustelnik", rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: null, weakness: 36, img: "static/media/Ghul.219eac19.jpg", cluster: "Insektoidy" },
      { name: "Mglak", weakness: 452, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: "Obrażenia Kinetyczne", img: mglak, cluster: "Trupojady" },
      { name: "Milczący", weakness: 45, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: null, img: "static/media/Ghul.219eac19.jpg", cluster: "Upiory" },
      { name: "Nekker", weakness: 452, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: "Obrażenia Kinetyczne", img: nekker, cluster: "Ogrowate" },
      { name: "Nekker Bagienny", weakness: 452, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: "Obrażenia Kinetyczne", img: "static/media/Ghul.219eac19.jpg", cluster: "Ogrowate" },
      { name: "Nekker Wojownik", weakness: 46, rare: 1, demage2: null, attack: "Silny", sword: "Srebro", demage: null, img: nekkerWarrior, cluster: "Ogrowate" },
      { name: "Nekker Rzeźnik", weakness: 46, rare: 2, demage2: null, attack: "Silny", sword: "Srebro", demage: null, img: "static/media/Ghul.219eac19.jpg", cluster: "Ogrowate" },
      { name: "Ogar Borowego", weakness: 360, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Ogień", img: "static/media/Ghul.219eac19.jpg", cluster: "Relikty" },
      { name: "Pijawiec", weakness: 360, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Ogień", img: "static/media/Ghul.219eac19.jpg", cluster: "Trupojady" },
      { name: "Południca", weakness: 45, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: null, img: noonwraith, cluster: "Upiory" },
      { name: "Północnica", weakness: 45, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: null, img: nightwraith, cluster: "Upiory" },
      { name: "Raraszek", weakness: 36, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: null, img: "static/media/Ghul.219eac19.jpg", cluster: "Drakonidy" },
      { name: "Silvan", weakness: 36, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: null, img: silvan, cluster: "Relikty" },
      { name: "Skolopendromorf", weakness: 36, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: null, img: skolopendromorf, cluster: "Insektoidy" },
      { name: "Skrzat", weakness: 45, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: null, img: skrzat, cluster: "Istoty Magiczne" },
      { name: "Sukkub", weakness: 352, rare: 1, demage2: null, attack: "Szybki", sword: "Stal", demage: "Obrażenia Kinetyczne", img: "static/media/Ghul.219eac19.jpg", cluster: "Hybrydy" },
      { name: "Syrena", weakness: 4502, rare: 1, demage2: "Obrażenia Kinetyczne", attack: "Szybki", sword: "Srebro", demage: "Ogień", img: siren, cluster: "Hybrydy" },
      { name: "Szarlej", weakness: 362, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Obrażenia Kinetyczne", img: sharley_white, cluster: "Relikty" },
      { name: "Troll Skalny", weakness: 362, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Obrażenia Kinetyczne", img: troll_skalny, cluster: "Ogrowate" },
      { name: "Upiór", weakness: 45, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: null, img: upiór, cluster: "Upiory" },
      { name: "Utopiec", weakness: 460, rare: 0, demage2: null, attack: "Silny", sword: "Srebro", demage: "Ogień", img: utopiec, cluster: "Trupojady" },
      { name: "Wicht", weakness: 45, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: null, img: wicht, cluster: "Trupojady" },
      { name: "Wij", weakness: 35, rare: 1, demage2: null, attack: "Szybki", sword: "Stal", demage: null, img: "static/media/Ghul.219eac19.jpg", cluster: "Insektoidy" },
      { name: "Widłogon", weakness: 362, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Obrażenia Kinetyczne", img: widłogon, cluster: "Drakonidy" },
      { name: "Widłogon Zielony", weakness: 36, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: null, img: "static/media/Ghul.219eac19.jpg", cluster: "Drakonidy" },
      { name: "Wilkołak", weakness: 450, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: "Ogień", img: warewolf, cluster: "Istoty Przeklęte" },
      { name: "Wodnik", weakness: 350, rare: 1, demage2: null, attack: "Szybki", sword: "Stal", demage: "Ogień", img: "static/media/Ghul.219eac19.jpg", cluster: "Ogrowate" },
      { name: "Wywerna", weakness: 36, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: null, img: wywerna, cluster: "Drakonidy" },
      { name: "Zgnilec", weakness: 450, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: "Ogień", img: zgnilec, cluster: "Trupojady" },
      { name: "Ropucha Olbrzymia", weakness: 35, rare: 1, demage2: null, attack: "Szybki", sword: "Stal", demage: null, img: ropuchaOlbrzymia, cluster: "Istoty Przelęte" },
      { name: "Szarlej", weakness: 352, rare: 1, demage2: null, attack: "Szybki", sword: "Stal", demage: "Obrażenia Kinetyczne", img: "static/media/Ghul.219eac19.jpg", cluster: "" },



      { name: "Nekker Królewski", weakness: 452, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: "Obrażenia Kinetyczne", img: "static/media/Ghul.219eac19.jpg", cluster: "Ogrowate" },
      { name: "Truchlica", weakness: 45, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: null, img: "static/media/Ghul.219eac19.jpg", cluster: "Trupojady" },
      { name: "Ogar Leszego", weakness: 360, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Ogień", img: "static/media/Ghul.219eac19.jpg", cluster: "Relikty" },
      { name: "Widłogon Siny", weakness: 362, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Obrażenia Kinetyczne", img: "static/media/Ghul.219eac19.jpg", cluster: "Drakonidy" },
      { name: "Zjadarka", weakness: 462, rare: 1, demage2: null, attack: "Silny", sword: "Srebro", demage: "Obrażenia Kinetyczne", img: "static/media/Ghul.219eac19.jpg", cluster: "Trupojady" },
      { name: "Mglak Królewski", weakness: 452, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: "Obrażenia Kinetyczne", img: "static/media/Ghul.219eac19.jpg", cluster: "Trupojady" },
      { name: "Troll Magmowy", weakness: 362, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Obrażenia Kinetyczne", img: troll_magmowy, cluster: "Ogrowate" },
      { name: "Leszy", weakness: 360, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Ogień", img: leshen, cluster: "Relikty" },
      { name: "Skrzekacz", weakness: 4602, rare: 1, demage2: "Obrażenia Kinetyczne", attack: "Silny", sword: "Srebro", demage: "Ogień", img: skrzekacz, cluster: "Drakonidy" },
      { name: "Licho", weakness: 362, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Obrażenia Kinetyczne", img: licho, cluster: "Upiory" },
      { name: "Grotnik", weakness: 36, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: null, img: grotnik, cluster: "Relikty" },
      { name: "Ignis Fatuus", weakness: 452, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: "Obrażenia Kinetyczne", img: ignisFatuus, cluster: "Trupojady" },
      { name: "Kamienny Golem", weakness: 1, rare: 1, demage2: null, attack: "----", sword: "----", demage: "Dwimeryt", img: moreaus_golem, cluster: "Magiczne Istoty" },
      { name: "Endriaga Wojownik", weakness: 360, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Ogień", img: endriagaWarrior, cluster: "Insektoidy" },
      { name: "Bruxa", weakness: 450, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: "Ogień", img: bruxa, cluster: "Wampiry" },
      { name: "Beann'shie", weakness: 45, rare: 1, demage2: null, attack: "Szybki", sword: "Srebro", demage: null, img: beannshie, cluster: "Upiory" },

      { name: "Lodowy Gigant", weakness: 360, rare: 1, demage2: null, attack: "Silny", sword: "Stal", demage: "Ogień", img: icegiant, cluster: "Ogrowate" },
      { name: "Przeraza", weakness: 46, rare: 1, demage2: null, attack: "Silny", sword: "Srebro", demage: null, img: "static/media/Ghul.219eac19.jpg", cluster: "Insektoidy" },
    ];
  let sorted__beasts = beasts;


  //set alfabetic
  if (toogleName === "A-Z") {
    sorted__beasts = beasts.sort((a, b) => a.name.localeCompare(b.name));
  }
  else {
    sorted__beasts = beasts.sort((a, b) => b.name.localeCompare(a.name));
  }
  // //take wekness
  // let number = weakness,
  //   output = [],
  //   sNumber = number.toString();
  // const takeWeakness = () => {
  //   number = weakness;
  //   output = [];
  //   sNumber = number.toString();
  //   for (var i = 0, len = sNumber.length; i < len; i += 1) {
  //     output.push(+sNumber.charAt(i));
  //   }
  // }

  //set sword
  switch (toogleSword) {
    default:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast !== null) {
            return true;
          }
          else
            return false
        }
      );
      break;
    case 1:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.sword === "Stal") {
            //console.log("Stal");
            return true;
          }
          else
            return false
        }
      );
      break;
    case 2:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.sword === "Srebro") {
            //console.log("Srebro");
            return true;
          }
          else
            return false
        }
      );
      break;
  }
  //set attack
  switch (toogleAttack) {
    default:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast !== null) {
            return true;
          }
          else
            return false
        }
      );
      break;
    case 1:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.attack === "Szybki") {
            //console.log("Szybki");
            return true;
          }
          else
            return false
        }
      );
      break;
    case 2:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.attack === "Silny") {
            //console.log("Silny");
            return true;
          }
          else
            return false
        }
      );
      break;
  }
  //set demage
  switch (toogleDemage) {
    default:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast !== null) {
            return true;
          }
          else
            return false
        }
      );
      break;
    case 1:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.demage === "Ogień") {
            //console.log("Ogień");
            return true;
          }
          else
            return false
        }
      );
      break;
    case 2:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.demage === "Obrażenia Kinetyczne" || sorted__beast.demage2 === "Obrażenia Kinetyczne") {
            //console.log("Obrażenia Kinetyczne");
            return true;
          }
          else
            return false
        }
      );
      break;
    case 3:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.demage === "Dwimeryt") {
            //console.log("Dwimeryt");
            return true;
          }
          else
            return false
        }
      );
      break;
  }
  //set cluster
  switch (toogleCluster) {
    default:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast !== null) {
            return true;
          }
          else
            return false
        }
      );
      break;
    case 1:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.cluster === "Trupojady") {
            //console.log("Trupojady");
            return true;
          }
          else
            return false
        }
      );
      break;
    case 2:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.cluster === "Insektoidy") {
            //console.log("Insektoidy");
            return true;
          }
          else
            return false
        }
      );
      break;
    case 3:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.cluster === "Istoty Magiczne") {
            //console.log("Istoty Magiczne");
            return true;
          }
          else
            return false
        }
      );
      break;
    case 4:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.cluster === "Istoty Przeklęte") {
            //console.log("Istoty Przeklęte");
            return true;
          }
          else
            return false
        }
      );
      break;
    case 5:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.cluster === "Upiory") {
            //console.log("Upiory");
            return true;
          }
          else
            return false
        }
      );
      break;
    case 6:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.cluster === "Relikty") {
            //console.log("Relikty");
            return true;
          }
          else
            return false
        }
      );
      break;
    case 7:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.cluster === "Hybrydy") {
            //console.log("Hybrydy");
            return true;
          }
          else
            return false
        }
      );
      break;
    case 8:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.cluster === "Wampiry") {
            //console.log("Wampiry");
            return true;
          }
          else
            return false
        }
      );
      break;
    case 9:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.cluster === "Ogrowate") {
            //console.log("Ogrowate");
            return true;
          }
          else
            return false
        }
      );
      break;
    case 10:
      sorted__beasts = sorted__beasts.filter(
        function (sorted__beast) {
          if (sorted__beast.cluster === "Drakonidy") {
            //console.log("Drakonidy");
            return true;
          }
          else
            return false
        }
      );
      break;
  }

  const icons = [
    steel,
    silver,
    fast,
    strong,
    fire,
    dwimeryt,
    kinetic,
  ]
  return (
    <div className="monsters">
      {counting}
      {sorted__beasts.map(monster => (
        <Monster monster={monster} icons={icons} counting={counting}/>
      ))}
    </div>
  );
}

export default Monsters;