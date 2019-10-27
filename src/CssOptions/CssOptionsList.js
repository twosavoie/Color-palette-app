import React from "react";
import CSS_COLOR_NAMES from "./cssColorNames.js";
import CssOption from "./CssOption.js";

var CssOptionsList = props => {
  var colorOptions = CSS_COLOR_NAMES.map(color => (
    <CssOption key={color} color={color} selectColor={props.selectColor} />
  ));

  return <ul className="color-options">{colorOptions}</ul>;
};

export default CssOptionsList;
