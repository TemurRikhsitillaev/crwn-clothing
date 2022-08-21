import { useSelector } from "react-redux";

import CategoryPreview from "../../component/category-preview/category-preview.component";
import { selectorCategoriesMap } from "../../store/categories/categories.selector";
import Spinner from "../../component/spinner/spinner.component";
import { selectCategoriesIsLoading } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const isLoading = useSelector(selectCategoriesIsLoading);
  const categoriesMap = useSelector(selectorCategoriesMap);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
