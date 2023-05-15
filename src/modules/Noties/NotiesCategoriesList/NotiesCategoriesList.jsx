import css from "./notiesCategoriesList.module.scss"
import items from "./pets"; 

console.log(items)
const NotiesCategoriesList = () => {
  const pets = items.map(({ id, animal, text }) => (
    <li className={css.example_card} key={id}>
      <div>
        <div className={css.animal}>
          <p className={css.icon_category}>sell</p>

          <button className={css.favorite}>H</button>
          <button className={css.deletion}>K</button>
          <button className={css.add_pet}>Add pet</button>
          {animal}
          <ul className={css.animalsDataList}>
            <li className={css.animalsData}>
              <p className={css.animalsDataText}>Kropivnitsky</p>
            </li>
            <li className={css.animalsData}>
              <p className={css.animalsDataText}>ear gggggg</p>
            </li>
            <li className={css.animalsData}>
              <p className={css.animalsDataText}>female gg</p>
            </li>
          </ul>
        </div>

        <p className={css.animal_description}>{text}</p>

        <button className={css.more_info_btn}>Learn more</button>
      </div>
    </li>
  ));
  return (
    <div className={css.container}>
      <ul className={css.wrapper}>{pets}</ul>
    </div>
  );
};

export default NotiesCategoriesList;
