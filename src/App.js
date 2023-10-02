import { useState } from "react";
import "./style/App.css";


function App() {

  var weapons = [
    {
        "name": "AK47",
        "description": "Rugged, stylish, and deadly, ideal for dominating virtual battlegrounds with its fierce design and fierce firepower.",
        "type": "Assault rifle",
        "team": "Terrorist",
        "img": "ak-47.png",
    },
    {
        "name": "M4A1",
        "description": "The M4A1 in CS:GO: A precise, versatile assault rifle favored by counter-terrorists, featuring a detachable silencer for accuracy and stealth.",
        "type": "Assault rifle",
        "team": "Counter-Terrorist",
        "img": "m4a1.png",
    },
    {
        "name": "AWP",
        "description": "The AWP sniper rifle: Legendary for its one-shot kills, unmatched range, and iconic scope. A game-changer for skilled marksmen.",
        "type": "Sniper rifle",
        "team": "Both",
        "img": "awp.png",
    },
    {
        "name": "Desert Eagle",
        "description": "The Desert Eagle: A high-caliber semi-auto pistol known for its stopping power. A favorite sidearm among both terrorists and counter-terrorists.",
        "type": "Pistol",
        "team": "Both",
        "img": "desertdeagle.png",
    },
    {
        "name": "P90",
        "description": "The P90 SMG: Compact, rapid-firing, and perfect for close-quarters combat. A staple weapon for terrorists on the move.",
        "type": "SMG",
        "team": "Terrorist",
        "img": "p90.png",
    },
    {
        "name": "UMP-45",
        "description": "The UMP-45 SMG: A reliable and affordable choice for close to mid-range engagements. Preferred by counter-terrorists for its versatility.",
        "type": "SMG",
        "team": "Counter-Terrorist",
        "img": "ump45.png",
    },
    {
        "name": "Glock-18",
        "description": "The Glock-18 pistol: Standard issue for terrorists, offering a high rate of fire and decent accuracy. Perfect for swift assaults.",
        "type": "Pistol",
        "team": "Terrorist",
        "img": "glock_18.png",
    },
    {
        "name": "USP-S",
        "description": "The USP-S pistol: A silenced sidearm for counter-terrorists. Offers precision and stealth, making it a reliable choice for silent takedowns.",
        "type": "Pistol",
        "team": "Counter-Terrorist",
        "img": "usp.png",
    },
    {
        "name": "FAMAS",
        "description": "The FAMAS: A cost-effective assault rifle for terrorists, known for its burst-fire mode. Offers a balance of firepower and economy.",
        "type": "Assault rifle",
        "team": "Terrorist",
        "img": "famas.png",
    }
];


  return (
    <div className="App">
      {weapons.map((weapon) => (
        <Tile weapon={weapon}/>
      ))}
    </div>
  );
}

function Tile(props){
  const [showInfo, setShowInfo] = useState(false);
  
  const handleTileClick = () => {
    var oldShowInfo = !showInfo;
    setShowInfo(oldShowInfo);
  }

  return(
    <div className="tile" onClick={() => {handleTileClick()}}>
      {showInfo ? (<TileInfo name={props.weapon.name} desc={props.weapon.description} img={props.weapon.img}/>) : (<TileFace type={props.weapon.type} team={props.weapon.team} />)}  
    </div>
  )
}

function TileFace(props) {
  return (
    <>
      <p className="tile-title">{props.type}</p>
      <p className="tile-team">{props.team}</p>
    </>
  );
}

function TileInfo(props){
  return(
    <>
      <p className="tile-title weapon">{props.name}</p>
      <img src={"/weapons/" + props.img} alt="AK-47"/>
      <p className="tile-weapon-info">{props.desc}</p>
    </>
  )
}

export default App;
