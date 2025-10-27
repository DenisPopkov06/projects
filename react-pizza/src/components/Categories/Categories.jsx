let categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories = ({ value, onClickCategorie }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={item}
            className={value === index ? "active" : ""}
            onClick={() => onClickCategorie(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
