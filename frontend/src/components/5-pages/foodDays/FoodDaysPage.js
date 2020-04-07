import React from "react";
import AddFoodDayForm from "components/3-organisms/foodDays/AddFoodDayForm";
import AddItemButton from "components/1-atoms/AddItemButton/AddItemButton";

const FoodDaysPage = () => {
  // const {} = FoodDayListContainer();

  return (
    <div>
      <h1>dni</h1>
      <AddFoodDayForm />
      <AddItemButton to="/dashboard/schedule/add" />
    </div>
  );
};

export default FoodDaysPage;
