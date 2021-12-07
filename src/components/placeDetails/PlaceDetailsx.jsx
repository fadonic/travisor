import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import { LocationOnOutlined, PhoneOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';



const PlaceDetails = ({place}) => {
  console.log(place)
  return (
    <Card elevation={6}>
      <CardMedia 
      style={{height:350}}
      image = {place.photo ? place.photo.images.large.url:''}
      title={place.name}
       />
       <CardContent>
         <Typography gutterBottom variant="h5">
          {place.name}
         </Typography>
         <Box display="flex" justifyContent="space-between">
          <Rating  value={Number(place.rating)} readOnly/>
          <Typography gutterBottom variant="subtitle1">
            Out of {place.nums_reviews} reviews
          </Typography>
         </Box>

         <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">
            Price
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
         </Box>

         <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">
            Ranking
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
         </Box>
         {place?.awards?.map((award, i)=>(
           <Box key={i} my={1} display="flex" justifyContent="space-between">
             <img src={award.images.small} alt={award.display_name} />
             <Typography  variant="subtitle2" color="textSecondary">
              {award.display_name}
          </Typography>
           </Box>
         ))}

        {place?.cuisine?.map(({name}, i)=>(
           <Chip key={i} size="small" label={name}/>
         ))}

        {place?.address && 
           <Typography variant="body2">
             <LocationOnOutlined />
             {place.address}
           </Typography>
         }
       </CardContent>
        
    
    </Card>
  );
};

export default PlaceDetails;