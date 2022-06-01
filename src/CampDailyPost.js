import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CampDailyPostFav from './CampDailyPostFav';

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
      <Header/>
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
        style={{justifyContent:'center' ,alignItems:'center'}}
      />
      <CardActions disableSpacing>  
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
      <Collapse  in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph >投稿文:</Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}

function Header() {
    return (
      <div style={{display: 'flex'}}>
          <h2>日付</h2>
          <h2 style={{margin:'auto'}}>キャンプ場名</h2>
          <CampDailyPostFav/>
      </div>
    );
  }