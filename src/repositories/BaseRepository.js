import axios from 'axios';
import { md5 } from 'js-md5';

const baseDomain = `https://gateway.marvel.com`
const baseApiPort = `443`
const apiVersion = `v1`
const timestamp = new Date().getTime()
const apiDomain = `public`
const baseUrl = 'https://gateway.marvel.com/v1/public/'
let hash = md5(timestamp+'7fc8c02727d4655bd430bf78c2f8fa3cedbbb785'+'1457a7a4c37c5d138bca628bcf26c18e')

export default axios.create({
    baseURL: baseUrl,
    params: {
        "ts" : timestamp,
        "apiKey" : "1457a7a4c37c5d138bca628bcf26c18e",
        "hash" : hash
    },
    headers: {
        "Accept":"application/json",
        "Content-Type": "application/json"
    },
})
