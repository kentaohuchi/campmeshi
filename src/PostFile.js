import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';

function Media(props) {
  const { loading = false } = props;

  return (
    <Card sx={{ maxWidth: '50%', m: 2, maxHeight:'50%' ,justifyContent:'center', alignItems:'center'}}>
      <CardHeader
      justifyContent='center' alignItems='center'
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} justifyContent='center' alignItems='center' />
          ) : (
            <Avatar
              alt="Ted talk"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
              justifyContent='center' alignItems='center'
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings" justifyContent='center' alignItems='center'>
              <MoreVertIcon justifyContent='center' alignItems='center' />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 ,justifyContent:'center' ,alignItems:'center'}}
            />
          ) : (
            'Ted'
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" justifyContent='center' alignItems='center' />
          ) : (
            '5 hours ago'
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" justifyContent='center' alignItems='center'/>
      ) : (
        <CardMedia
          component="img"
          height="140"
          image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          alt="Nicola Sturgeon on a TED talk stage"
          justifyContent='center' alignItems='center'
        />
      )}

      <CardContent justifyContent='center' alignItems='center'>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 , justifyContent:'center' , alignItems:'center'}} />
            <Skeleton animation="wave" height={10} width="80%" justifyContent='center' alignItems='center' />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary" component="p" justifyContent='center' alignItems='center'>
            {
              "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
            }
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Facebook() {
  return (
    <div style={{justifyContent:'center',alignItems:'center' }}>
      <Media loading />
      <Media />
    </div>
  );
}
