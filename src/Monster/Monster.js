import './Monster.css';
function Monster(props, {icons}) {


  console.log(props.icons[1]);
  let swordicon = "";
  let rareicon = "";
  let demageicon = "";
  let demage2icon = "";
  let attackicon = "";
  if (props.monster.sword === "Srebro") {
    swordicon = props.icons[1];
  }
  if (props.monster.sword === "Stal") {
    swordicon = props.icons[0];
  }
  else {

  }

  if (props.monster.attack === "Szybki") {
    attackicon = props.icons[2];
  }
  else if (props.monster.attack === "Silny") {
    attackicon = props.icons[3];
  }
  else { }

  if (props.monster.demage === "Ogień") {
    demageicon = props.icons[4];
  }
  else if (props.monster.demage === "Dwimeryt") {
    demageicon = props.icons[5];
  }
  else if (props.monster.demage === "Obrażenia Kinetyczne") {
    demageicon = props.icons[6];
  }
  else {

  }
  if (props.monster.demage2 === "Ogień") {
    demage2icon = props.icons[4];
  }
  else if (props.monster.demage2 === "Dwimeryt") {
    demage2icon = props.icons[5];
  }
  else if (props.monster.demage2 === "Obrażenia Kinetyczne") {
    demage2icon = props.icons[6];
  }
  else { }
  return (
    <div className="monster__div">
      <div className="monster">
        {props.monster.name ==="Skolopendromorf"?<label className="label label__name">{props.monster.name.toUpperCase()}</label>:<label className="label">{props.monster.name.toUpperCase()}</label>}
        <label className="label label__icon">{props.monster.rare }</label>
        {props.monster.sword ? <label className="label  label__icon">{props.monster.sword.toUpperCase()}<img src={swordicon} className="icon"></img></label> : <label className="label name">----</label>}
        {props.monster.attack ? <label className="label label__icon">{props.monster.attack.toUpperCase()}<img src={attackicon} className="icon"></img></label> : <label className="label name">----</label>}
        {props.monster.demage ? <label className="label"><p className="demage demage1 label__icon">{props.monster.demage.toUpperCase()}<img src={demageicon} className="icon"></img></p> {props.monster.demage2 ? <p className="demage demage2 label__icon">{props.monster.demage2}<img src={demage2icon} className="icon"></img></p> : ""}</label> : <label className="label name">----</label>}
        <label className="label">{props.monster.cluster.toUpperCase()}</label>
      </div>
      <div className="monster__img">
        {props.monster.name === "Bloedzuiger" ? <img src={props.monster.img} className="img__img lower"></img> : <img src={props.monster.img} className="img__img "></img>}
      </div>
    </div>
  );
}
export default Monster;