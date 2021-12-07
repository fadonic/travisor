import React, { useState } from 'react';
import {CirclarProgress, Grid, InputLabel, Typography, MenuItem, FormControl, Select } from '@material-ui/core'
import PlacesDetails from '../placeDetails/PlaceDetails'


import useStyles from './styles'

const List = ({places}) => {
  const classes = useStyles()
  const [type, setType] = useState('restuarants')
  const [ratings, setRatings] = useState('')

  

  return (
    <div>
      <Typography varient="h4">
        Restaurant, Hotels, Attractions in Your vasinity
      </Typography>
      <FormControl>
        <InputLabel>
        Type
        </InputLabel>
        <Select value={''} onchange={(e)=>setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>
         Ratings
        </InputLabel>
        <Select value={''} onChange={(e)=>setRatings(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i)=>(
          <Grid item key={i}>
            <PlacesDetails place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;