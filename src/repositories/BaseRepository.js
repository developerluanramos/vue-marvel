import axios from 'axios';

//const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08'
const baseDomain = `https://api.nasa.gov/`
const apiVersion = `v1`
const baseUrl = baseDomain + 'neo/rest/' + apiVersion

export default axios.create({
    baseURL: baseUrl,
    headers: {
        "Accept":"application/json",
        "Content-Type": "application/json"
    },
})
