import './App.css'
import { CssBaseline, Grid } from '@material-ui/core'
import Header from './components/header/Header'
import List from './components/list/List'
import Map from './components/map/Map'
import { getPlacesData } from './api'
import { useEffect, useState } from 'react'

function App () {
  const [places, setPlaces] = useState([])
  const [filteredPlaces, setfilteredPlaces] = useState([])
  const [type, setType] = useState('restaurant')
  const [rating, setRating] = useState('')
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({ sw: 0, ne: 0 })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  useEffect(() => {
    const filterPlaces =
      places.length > 0
        ? places.filter(place => {
            return place.rating > rating
          })
        : []
    setfilteredPlaces(filterPlaces)
  }, [rating])

  useEffect(() => {
    getPlacesData(type, bounds.sw, bounds.ne).then(data => {
      setPlaces(data)
    })
  }, [type, coordinates, bounds])

  console.log('p', places)

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length > 0 ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length > 0 ? filteredPlaces : places}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App
