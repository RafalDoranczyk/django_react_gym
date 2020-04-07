import React from "react";
import AddFoodDayForm from "components/3-organisms/foodDays/AddFoodDayForm";
import FoodDayPageContainer from "containers/foodDays/FoodDayPageContainer";

const FoodDaysPage = () => {
  const {
    inputSearchValue,
    foodDays,
    mealsForInput,
    onInputSearchHandler,
    onOutsideInputSearchClick
  } = FoodDayPageContainer();
  return (
    <div>
      <h1>add</h1>
      <AddFoodDayForm />
      {/* <SearchInput
        onOutsideClick={onOutsideInputSearchClick}
        // onClick={addIngredientToList}
        onChange={onInputSearchHandler}
        value={inputSearchValue}
        arr={mealsForInput}
      /> */}
    </div>
  );
};

export default FoodDaysPage;
