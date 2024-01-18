import { useMemo, useState } from "react";
import ComboBox from "./components/ComboBox";

import appleIcon from "./assets/appleIcon.svg";
import bananaIcon from "./assets/bananaIcon.svg";
import orangeIcon from "./assets/orangeIcon.svg";
import grapesIcon from "./assets/grapesIcon.svg";
import mangoIcon from "./assets/mangoIcon.svg";
import blueberryIcon from "./assets/blueberryIcon.svg";

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
        containerClass="w-[25%]"
        placeholder="Choose a Fruit:"
        debounceDelay={400}
      />
    </div>
  );
}

export default App;
