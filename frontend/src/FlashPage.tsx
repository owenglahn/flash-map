import { useState } from "react";

const flash_sheet = require("./flash_sheet.jpg");
const red_x = require("./icons8-cross-mark-48.png");

function getRedXs(locations: Array<Array<number>>) {
  return locations.map(
    (loc) => {
      return <img src={red_x} style={{top: loc[1] - 24, left:loc[0] - 24, position:"absolute"}} />;
    }
  );
}
const myStyle = {
  backgroundImage: `url(${flash_sheet})`,
  height: "100vh",
  width: "100vw",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative", // important
} as const;

function FlashPage() {
  const [clickLocations, setLocations] = useState<Array<Array<number>>>([]);
  return (
    <div>
      <div style={myStyle} onClick={(event) => { 
            let currentTargetRect = event.currentTarget.getBoundingClientRect(); 
            const event_offsetX = event.pageX - currentTargetRect.left, event_offsetY = event.pageY - currentTargetRect.top; 
            setLocations((locs) => locs.concat([[event_offsetX, event_offsetY]]));
          }
        }
      >
        {getRedXs(clickLocations)}
      </div>
      <button onClick={() => setLocations([])}>Clear</button>
    </div>
  );
}

export default FlashPage;
