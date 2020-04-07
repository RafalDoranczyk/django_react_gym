import React from "react";
import clsx from "clsx";
import { useStyles } from "./styles";
import {
  Card,
  CardHeader,
  Collapse,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@material-ui/core";
import {
  Favorite,
  Share,
  ExpandMore,
  MoreVert,
  KitchenTwoTone,
  AttachMoney,
  Delete,
  Update,
} from "@material-ui/icons";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";

export default function RecipeReviewCard({ item, deleteItem }) {
  const {
    id,
    name,
    kcal,
    carbs,
    protein,
    fat,
    price,
    image,
    created,
    description,
    source_type,
  } = item;

  let values = [kcal, carbs, protein, fat, price];
  const names = ["Kcal", "Carbohydrates", "Protein", "Fat", "Price"];
  values = values.map((val, index) => ({
    name: names[index],
    value: val,
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isSettingsOpen = Boolean(anchorEl);

  const handleAccountMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAccountMenu = () => {
    setAnchorEl(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {source_type}
          </Avatar>
        }
        action={
          <div>
            <IconButton onClick={handleAccountMenu} aria-label="settings">
              <MoreVert />
            </IconButton>
            <Menu
              id="settings"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={isSettingsOpen}
              onClose={handleCloseAccountMenu}
            >
              <MenuItem onClick={handleCloseAccountMenu}>
                <ListItemIcon>
                  <Update color="primary" />
                </ListItemIcon>
                Update
              </MenuItem>
              <MenuItem onClick={() => deleteItem(id)}>
                <ListItemIcon>
                  <Delete color="secondary" />
                </ListItemIcon>
                Delete
              </MenuItem>
            </Menu>
          </div>
        }
        title={name}
        subheader={created || " not defined"}
      />
      {image ? (
        <CardMedia className={classes.media} image={image} />
      ) : (
        <CardMedia className={classes.broken}>
          <BrokenImageIcon fontSize="large" />
        </CardMedia>
      )}

      <CardContent>
        <List className={classes.list}>
          {values.map(({ name, value }) => (
            <ListItem key={name}>
              <ListItemAvatar>
                <Avatar className={classes.small}>
                  {name === "Price" ? (
                    <AttachMoney fontSize="small" />
                  ) : (
                    <KitchenTwoTone fontSize="small" />
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={name} secondary={value} />
            </ListItem>
          ))}
        </List>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {description && <ExpandMore />}
        </IconButton>
      </CardActions>
      {description && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
}
