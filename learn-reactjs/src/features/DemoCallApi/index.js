import { useEffect, useState } from 'react';
import categoriesApi from './api/categoriesApi';
import Categories from './components/Categories';

function DemoCallApi() {
  const [showCategories, setShowCategories] = useState(false);
  const [showCategoriesId, setShowCategoriesId] = useState(false);

  const [categories, setCategories] = useState([]);

  const [checkList, setCheckList] = useState(() => {
    const getcheckListStorage = JSON.parse(
      localStorage.getItem('demo-call-api')
    );
    return getcheckListStorage || [];
  });
  console.log(checkList);

  const handleClick = (id) => {
    // console.log(id)
    const newCheckList = [...checkList];
    const indexItem = newCheckList.findIndex((item) => item === id);

    if (indexItem === -1) {
      newCheckList.push(id);
      setCheckList(newCheckList);
    } else {
      newCheckList.splice(indexItem, 1);
      setCheckList(newCheckList);
    }

    localStorage.setItem('demo-call-api', JSON.stringify(newCheckList));
  };

  const handleRemoveCheckList = (active) => {
    // console.log(active);
    if (active === 'remove') {
      localStorage.removeItem('demo-call-api');
      setCheckList([]);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      const params = { _limit: 30 };
      const categories = await categoriesApi.getAll(params);
      console.log(categories);
      setCategories(categories);
    };
    getCategories();
  }, []);

  return (
    <div>
      <button onClick={() => setShowCategories(!showCategories)}>
        Categories
      </button>
      {showCategories && (
        <Categories
          categories={categories}
          onHandleClick={handleClick}
          checkList={checkList}
          onHandleRemoveCheckList={handleRemoveCheckList}
        />
      )}
    </div>
  );
}

export default DemoCallApi;
