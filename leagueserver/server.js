'use strict';

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const PORT = 25565;
const HOST = '0.0.0.0';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.get('/', async (req, res) => {
    const name = req.query.name;
    const info = '';
    await axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + encodeURI(name), {
        headers:{'X-Riot-Token': 'RGAPI-27005fbf-01a5-45ea-bb00-218f51912675'}
    })
    .then(function(response){
        // info = getInfo(response);
        console.log('result: ' + response.data.id);
        res.send(info);
    })
    .catch(error => (console.log(error.message)))
})
// async function getInfo(eid){
//     const info = '';
//     await axios.get('https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/' + encodeURI(eid), {
//             headers:{'X-Riot-Token': 'RGAPI-27005fbf-01a5-45ea-bb00-218f51912675'}
//         })
//         .then(response => (info = response.data))
//         .catch(error => (console.log(error.message)))
//         return info;
        
// }
app.listen(PORT, HOST);