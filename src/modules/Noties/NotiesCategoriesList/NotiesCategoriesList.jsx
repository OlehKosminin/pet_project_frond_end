// import {css} from "./notiesCategoriesList.module.scss"
import items from "./pets"; 
console.log(items)
const NotiesCategoriesList = () => {
  const pets = items.map(({ id, animal, text }) => (
    <li key={id}>
      <div>{animal}</div>
      {text}
      <button>Learn more</button>
    </li>
  ));
  return <div><ul>{ pets}</ul></div>;
};

export default NotiesCategoriesList;
