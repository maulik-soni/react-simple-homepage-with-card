import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {connect} from "react-redux";
import cardLike from '../../actions/cardActions';

const styles = theme => ({
  card: {
    maxWidth: 450,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  iconColor: {
      color: red[500]
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleLikeClick = (cardID) => {
    this.props.dispatch(cardLike(cardID))
  };

  render() {
    const { classes } = this.props;
    let cardDetails = this.props.cardDetails;
    let likedCards = this.props.cardActionStore.likedCards||[];

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {cardDetails.auther_details.name[0].toUpperCase()}
            </Avatar>
          }
          title={cardDetails.auther_details.name}
          subheader={cardDetails.auther_details.email}
        />
        {cardDetails.card_image && <CardMedia
          className={classes.media}
          image={cardDetails.card_image}
        />}
        <CardContent>
          <Typography component="p">
            {cardDetails.ugc_post || cardDetails.question_post}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites" onClick={()=>{this.handleLikeClick(cardDetails.id)}}>
            <FavoriteIcon className = {!!~likedCards.indexOf(cardDetails.id) ? classes.iconColor : {} }/>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};



function mapStoreStateToProps(state) {
  return {
    cardActionStore: state.cardActionStore
  };
}

export default withStyles(styles)(connect(mapStoreStateToProps)(RecipeReviewCard))