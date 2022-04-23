import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FoodGenreButton from './FoodGenreButton'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{justifyContent:'center' ,alignItems:'center'}}>
      <CardHeader
        avatar={
          <Avatar style={{justifyContent:'center' ,alignItems:'center'}}>
            R
          </Avatar>
        }
        action={
            <FoodGenreButton/>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
        style={{justifyContent:'center' ,alignItems:'center'}}
      />
      <CardContent>
        <Typography style={{justifyContent:'center' ,alignItems:'center'}} variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{justifyContent:'center' ,alignItems:'center'}}>  
        <IconButton aria-label="add to favorites" style={{justifyContent:'center' ,alignItems:'center'}}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" style={{justifyContent:'center' ,alignItems:'center'}}> 
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          style={{justifyContent:'center' ,alignItems:'center'}}
        >
          <ExpandMoreIcon style={{justifyContent:'center' ,alignItems:'center'}} />
        </ExpandMore>
      </CardActions>
      <Collapse style={{justifyContent:'center' ,alignItems:'center'}} in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{justifyContent:'center' ,alignItems:'center'}}>Method:</Typography>
          <Typography paragraph style={{justifyContent:'center' ,alignItems:'center'}}>
           
          </Typography>
          <Typography paragraph style={{justifyContent:'center' ,alignItems:'center'}}>
            
          </Typography>
          <Typography paragraph style={{justifyContent:'center' ,alignItems:'center'}}>
            
          </Typography>
          <Typography style={{justifyContent:'center' ,alignItems:'center'}}>

          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}