import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import { LocationOnOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import useStyles from './styles'

const Map = ({setCoordinates, setBounds, coordinates, places}) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width:600px)')
  const API_KEY = process.env.REACT_APP_API_KEY
  return (
    <div style={{height:'100vh'}}>
      <GoogleMapReact 
        bootstrapURLKeys={{key: API_KEY}} 
        defaultCenter={coordinates}
        defaultZoom={8}
        center ={coordinates}
        margin = {[50, 50, 50, 50]}
        option = {''}
        onChange={(e)=>{
          console.log(e)
          setCoordinates({lat:e.center.lat, lng:e.center.lng})
          setBounds({nw:e.marginBounds.nw, se:e.marginBounds.se, sw:e.marginBounds.sw, ne:e.marginBounds.ne })
        }}
        onChildClick={(child)=>{
          console.log(child)
          alert(1)
        }}
      >
        {places?.map((place, i)=>{
          return <div lat={Number(place.latitude)} lng={Number(place.longitude)} key={i}>
           {!isDesktop ? (
              <LocationOnOutlined color="primary" fontSize="large"/>
           ) 
           :
           (
           <>
            <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> 
                    {place.name}
                  </Typography>
                  <img className={classes.pointer} src={place.photo ? place.photo.images.large.url: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={place.name} />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
           </>
           )
          
          }
          </div>
        })}

      </GoogleMapReact>
    </div>
  );
};

export default Map;