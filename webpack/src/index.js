import _ from "lodash";
import "./styles.css";


function capitalise(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export { checkIfArrayLegal, capitalise };
