import React from "react";
import Transition from "../contents/Scoreboard/Transition/Transition";
import NotFound from "../components/NotFound";

export default function Component({ no, ...props }) {
  const elements = {
    0: ["Not Found", NotFound],
    1: ["Transition Scoreboard", Transition],
  };
  props["title"] = elements[no][0];
  const GraphWidget = React.createElement(elements[no][1], props);
  return GraphWidget;
}
