import { useState } from "react";

const flash_sheet = require("../resources/flash_sheet.jpg");
const red_x = require("../resources/icons8-cross-mark-48.png");

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
          console.log(`top: ${event.currentTarget.getBoundingClientRect().top}, y: ${event.currentTarget.getBoundingClientRect().y}`);
          console.log(`client info: ${event.clientX}, ${event.clientY}`);
          const event_offsetX = event.clientX - event.currentTarget.getBoundingClientRect().left; 
          const event_offsetY = event.clientY - event.currentTarget.getBoundingClientRect().top;
          setLocations((locs) => locs.concat([[event_offsetX, event_offsetY]]));
        }}
      >
        {getRedXs(clickLocations)}
      </div>
      <button onClick={() => setLocations([])}>Clear</button>
    </div>
  );
}

export default FlashPage;
