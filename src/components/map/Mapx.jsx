import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import { LocationOnOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import useStyles from './styles'

const Map = ({setCoordinates, setBounds, coordinates, places}) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width:600px)')

  return (
    <div style={{height:'100vh'}}>
      <GoogleMapReact 
        bootstrapURLKeys={{key:'AIzaSyDYp5I_QIpgrbMGJrSEO08mE47uiyd148I'}} 
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
        onChildClick={(e)=>alert(1)}
      >
        {places?.map((place, i)=>{
          return <div lat={Number(place.latitude)} lng={Number(place.longitude)} key={i} style={{width:'300px', height:'200px', padding: '20px', background:'#fff'}}>
           {!isDesktop ? (
              <LocationOnOutlined color="primary" fontSize="large"/>
           ) 
           :
           (
           <>
            <Paper elevation={3}>
             <Typography variant="subtitle1" className={classes.paper}>
               {place.name}
             </Typography>
              <img className={classes.pointer} style={{width:'100px'}} src={place.photo ? place.photo.images.large.url: ''} alt={place.name} />
              <Rating size="small" value={Number(place.rating)} readOnly/>
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