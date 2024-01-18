import { useMemo, useState } from "react";
import ComboBox from "./components/ComboBox";

import appleIcon from "./assets/appleIcon.svg";
import bananaIcon from "./assets/bananaIcon.svg";
import orangeIcon from "./assets/orangeIcon.svg";
import grapesIcon from "./assets/grapesIcon.svg";
import mangoIcon from "./assets/mangoIcon.svg";
import blueberryIcon from "./assets/blueberryIcon.svg";
import peachIcon from "./assets/peachIcon.svg";
import papayaIcon from "./assets/papayaIcon.svg";
import pomegranateIcon from "./assets/pomegranateIcon.svg";
import lemonIcon from "./assets/lemonIcon.svg";
import cherryIcon from "./assets/cherryIcon.svg";
import pineappleIcon from "./assets/pineappleIcon.svg";
import kiwiIcon from "./assets/kiwiIcon.svg";
import watermelonIcon from "./assets/watermelonIcon.svg";
import strawberryIcon from "./assets/strawberryIcon.svg";
import avocadoIcon from "./assets/avocadoIcon.svg";
import guavaIcon from "./assets/guavaIcon.svg";

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const listItems = useMemo(
    () => [
      { icon: appleIcon, text: "Apple" },
      { icon: bananaIcon, text: "Banana" },
      { icon: orangeIcon, text: "Orange" },
      { icon: grapesIcon, text: "Grapes" },
      { icon: mangoIcon, text: "Mango" },
      { icon: blueberryIcon, text: "Blueberry" },
      { icon: peachIcon, text: "Peach" },
      { icon: papayaIcon, text: "Papaya" },
      { icon: pomegranateIcon, text: "Pomegranate" },
      { icon: lemonIcon, text: "Lemon" },
      { icon: cherryIcon, text: "Cherry" },
      { icon: pineappleIcon, text: "Pineapple" },
      { icon: kiwiIcon, text: "Kiwi" },
      { icon: watermelonIcon, text: "Watermelon" },
      { icon: strawberryIcon, text: "Strawberry" },
      { icon: avocadoIcon, text: "Avocado" },
      { icon: guavaIcon, text: "Guava" },
    ],
    []
  );

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ComboBox
        value={selectedItem}
        handleChange={(value) => {
          setSelectedItem(value);
        }}
        items={listItems}
        containerClass="w-[70%] md:w-[25%]"
        placeholder="Choose a Fruit:"
        debounceDelay={400}
      />
    </div>
  );
}

export default App;
