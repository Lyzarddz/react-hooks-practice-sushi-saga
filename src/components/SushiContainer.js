import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushiLoad, handleEatSushi}) {
const [sushiIndex, setSushiIndex] = useState(0)

const sushiComponents = sushiLoad
 .slice(sushiIndex, sushiIndex + 4)
  .map((s)=> (
    <Sushi 
   key={s.id}
   sushi={s}
   onEatSushi={handleEatSushi}
   />
   ))

   function handleClickMore () {
     setSushiIndex((sushiIndex)=> (sushiIndex + 4))
   }

  return (
 
    <div className="belt">
      {sushiComponents}
      <MoreButton onClickMore={handleClickMore}/>
    </div>
  );
}

export default SushiContainer;
