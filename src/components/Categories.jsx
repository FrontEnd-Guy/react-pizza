import React from 'react';

const Categories = ({ activeCategory, onChangeCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={index}
            className={`${activeCategory === index ? 'active' : ''}`}
            onClick={() => onChangeCategory(index)}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
