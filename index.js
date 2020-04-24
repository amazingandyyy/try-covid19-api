
import axios from 'axios';

axios
  .get('https://www.amazingshellyyy.com/covid19-api/US-CA/countyTimeseries.json')
  .then(res => {
    console.log('covid CA County data',res.data)
  })
  .catch(err => {
    console.log(err)
  })
