import React from "react";
import AddItemButton from "components/1-atoms/AddItemButton/AddItemButton";
import Spinner from "components/1-atoms/Spinner/Spinner";
import TabsNav from "components/2-molecules/TabsNav/TabsNav";
import GsapBoxesList from "components/4-templates/GsapBoxesList/GsapBoxesList";
import MealsPageContainer from "containers/meals/MealsPageContainer";
import { addMeal } from "urls/routes";
import Paginator from "components/2-molecules/Paginator/Paginator";

const MealsPage = () => {
  const {
    itemsArray,
    loading,
    types,
    pages,
    isErrorMessage,
    currentPage,
    currentType,
    pageAndTypeFilterHandler,
    message
  } = MealsPageContainer();

  return (
    <div>
      {loading && <Spinner />}

      {currentType && (
        <TabsNav
          currentType={currentType}
          types={types}
          pageAndTypeFilterHandler={pageAndTypeFilterHandler}
        />
      )}

      {itemsArray.length === 0 && !loading ? (
        <h2>There is nothing to show </h2>
      ) : (
        <GsapBoxesList
          pages={pages}
          loading={loading}
          itemsArray={itemsArray}
          currentPage={currentPage}
          pageAndTypeFilterHandler={pageAndTypeFilterHandler}
        />
      )}
      {itemsArray.length !== 0 && !loading && (
        <Paginator
          pageAndTypeFilterHandler={pageAndTypeFilterHandler}
          pages={pages}
          currentPage={currentPage}
        />
      )}

      <AddItemButton to={addMeal} />
    </div>
  );
};

export default MealsPage;
