import React from "react";
import { useState } from "react";
import "./NewProductPage.css";
import ListComponent from "./Productpagecomponent/ListComponent";
import NewSurchBar from "./Productpagecomponent/NewSurchBar";
import SidPanel from "./Productpagecomponent/SidPanel";
const NewproductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectColor, setSelectColor] = useState(null);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);
    const handelselectedColor = (event, value) =>
    !value ? null :setSelectColor(value);
  return (
    <div className="home">
      <NewSurchBar />
      <div className="Home-PanelList-Wrpe">
        <div className="Home-Panel-Wrap">
          <SidPanel
            selectToggal={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectedColor={handelselectedColor}
            selectColor={selectColor}
          />
        </div>
        <div className="Home-list-Wrap">
          <ListComponent />
        </div>
      </div>
    </div>
  );
};

export default NewproductPage;
