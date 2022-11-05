import * as React from "react";
import { useAppDispatch } from "../../utils/redux/hooks";
import { searchActions } from "../../utils/redux/searchSlice";

interface ICategoriesProps {
  categories: string[];
}

const Categories: React.FunctionComponent<ICategoriesProps> = ({
  categories,
}) => {
  const dispatch = useAppDispatch();
  const onClickCategorie = (categorie: string) => {
    dispatch(searchActions.setCurrentCategorie(categorie));
  };
  return (
    <div className="shop-categories__content">
      <span
        className="inline-block border-[1px] border-solid border-green-500 mx-[5px] rounded-[30px] px-[3px] py-[2px]"
        onClick={() => {
          onClickCategorie("");
        }}
      >
        All
      </span>
      {categories.map((categorie: string) => (
        <span
          key={categorie}
          className="inline-block border-[1px] border-solid border-green-500 mx-[5px] rounded-[30px] px-[3px] py-[2px]"
          onClick={() => {
            onClickCategorie(categorie);
          }}
        >
          {categorie}
        </span>
      ))}
    </div>
  );
};

export default Categories;
