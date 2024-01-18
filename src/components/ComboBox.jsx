import { useState, useEffect } from "react";
import arrowDownIcon from "../assets/arrowDownIcon.svg";

const ComboBox = ({
  value,
  handleChange,
  items,
  containerClass,
  placeholder = "Choose item",
  inputClass,
  iconClass,
  debounceDelay = 500,
}) => {
  const [active, setActive] = useState(false);
  const [activeItems, setActiveItems] = useState(items || []);

  useEffect(() => {
    const eventHandler = (e) => {
      let container = document.querySelector(".combobox-container");
      if (container && !container?.contains(e.target)) {
        setActive(false);
        setActiveItems(items);
      }
    };
    document.addEventListener("mouseup", eventHandler);

    return () => {
      document.removeEventListener("mouseup", eventHandler);
    };
  });

  const searchContent = (searchText) => {
    if (searchText !== "" && active) {
      let searchResults = items?.filter((d) =>
        d?.text?.toLowerCase().includes(searchText?.toLowerCase())
      );
      setActiveItems(searchResults);
    } else {
      setActiveItems(items);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      searchContent(value);
    }, debounceDelay);

    return () => clearTimeout(debounce);
  }, [value]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    handleChange(value);
  };

  const handleFocus = () => {
    setActive(true);
  };

  const selectHandler = (item) => {
    handleChange(item.text);
    setActiveItems(items);
    setActive(false);
  };

  return (
    <div
      className={`combobox-container box-border h-max relative text-gray-800 ${containerClass}`}
      onClick={handleFocus}
      role="combobox"
      aria-describedby="A combobox for taking from a list of available options"
    >
      <div
        className={`rounded-t-md flex flex-col ${
          active
            ? "border-2 border-[#0000ff] " +
              (activeItems.length > 0 ? "border-b-0" : "rounded-b-md")
            : "bg-gray-100 rounded-b-md drop-shadow"
        }`}
      >
        <input
          aria-label={placeholder}
          onChange={handleInputChange}
          value={value}
          className={`bg-transparent px-4 py-3.5 font-medium text-sm focus-within:outline-none ${inputClass}`}
          placeholder={placeholder}
        />
        <img
          src={arrowDownIcon}
          className="absolute top-[50%] w-3 right-4 -translate-y-[40%] cursor-pointer"
        />
      </div>
      <ul
        className={`combobox-list-container absolute left-0 bottom-0 w-full translate-y-[100%] rounded-b-md border-2 border-[#0000ff] border-t border-t-[#eee] ${
          active && activeItems?.length > 0 ? "block h-auto opacity-100" : "hidden opacity-0"
        }`}
      >
        {activeItems?.length > 0 &&
          activeItems?.map((item, index) => (
            <li
              className="combobox-list-item px-4 py-2.5 text-sm cursor-pointer flex transition-all duration-500 hover:bg-gray-200"
              key={`combobox-list-item${index}`}
              onClick={(e) => {
                e.stopPropagation();
                selectHandler(item);
              }}
            >
              {item.icon && (
                <img
                  src={item.icon}
                  className={`transition-all duration-500 h-5 mr-2 ${iconClass}`}
                />
              )}
              {item.text}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ComboBox;
