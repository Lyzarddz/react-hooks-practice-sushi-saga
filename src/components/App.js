import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const[sushiLoad, setSushiLoad] = useState([]);
  const [wallet, setWallet] = useState(150)

  useEffect(()=> {
    fetch(API)
    .then((resp) => resp.json())
    .then((sushis) => {
      const updatedSushis = sushis.map((sushi) => {
        return { ...sushi, eaten: false };
      });
      setSushiLoad(updatedSushis);
    });
}, []);


  function handleEatSushi(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushis = sushiLoad.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushiLoad, eaten: true };
        return sushi;
      });

      setSushiLoad(updatedSushis);
      setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert("Need more 💸");
    }
  }

  const eatenSushis = sushiLoad.filter((sushi) => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer sushiLoad={sushiLoad} handleEatSushi={handleEatSushi} />
      <Table wallet={wallet}  plates={eatenSushis}/>
    </div>
  );
}

export default App;
