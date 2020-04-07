import React, { useEffect } from "react";
import { TweenMax } from "gsap";
import CardListElement from "components/2-molecules/CardListElement/CardListElement";
import { Grid } from "@material-ui/core";

const GsapBoxesList = ({ loading, itemsArray }) => {
  const refs = [];

  useEffect(() => {
    if (refs.length > 0) {
      TweenMax.staggerTo(refs, 0.5, { y: 5, opacity: 1 }, 0.15);
    }
  }, [refs]);

  return (
    !loading && (
      <Grid container spacing={3} justify="space-around">
        {itemsArray.map((element, index) => (
          <Grid lg={4} md={4} sm={7} xs={12} item key={element.id}>
            <CardListElement
              key={element.id}
              elementRef={(el) => (refs[index] = el)}
              element={element}
            />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default GsapBoxesList;
