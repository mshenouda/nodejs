console.log("Hello World");
const https = require("https");

// function getTotalGoals(teams, year) {
//     let teamgoals = 0;
//     teamgoals += getRequest(teams, year, "team2", "team2goals");

//     //const team1 
//     function getRequest(teams, year, type, field) {
//         let goals = 0;    
//         https.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&${type}=${teams}`, res => {
//             const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
//             console.log('Status Code:', res.statusCode);
//             console.log('Date in Response header:', headerDate);
            
//             let data =  [];
//             res.on('data', chunk => {
//                 data.push(chunk);
//             });

//             res.on('end', () => {
//                 console.log('Response ended: ');
//                 const responses = JSON.parse(Buffer.concat(data).toString());
//                 console.log(responses);
//                     for(response of responses.data) {
//                         const {competition, year, round, team1, team2, team1goals, team2goals} = response;
//                         //if (type == team1)
//                             goals += parseInt(team2goals);
//                             console.log(goals);
//                         // else
//                         //     goals += parseInt(team2goals);
//                     }
//             });
//         })
//         .on('error', err => {console.log('Error: ', err.message)});    
//         return goals;
//     }
    
//     return teamgoals;
//}

// function getTotalGoals(teams, year) {
    
//     let URL = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${teams}`; 
//     const goals = fetch(URL)
//                         .then(res => res.json())
//                         .then(res => res.data)
//                         .then(datas => {
//                             let goals = 0;
//                             for(data of datas) {
//                                 const {competition, year, round, team1, team2, team1goals, team2goals} = data;
//                                 goals+=parseInt(team1goals);
//                             }
//                             return goals;
//                         })
//                         .catch(error => console.log(error));
//     return goals;
// }

function returnString() {
    return new Promise((resolve, reject)=>{
        resolve("mina shenouda");
    });
} 


// let data = 0;
// const result = getTotalGoals("Barcelona", 2011).then(res => res);
// console.log(result);
    

const checkUserHosting = async (type, team, year, callback) => {
    const hostEmailData  = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&${type}=${team}`);
    //use string literals
    const hostEmailJson = await hostEmailData.json();
    const hostDatas = await hostEmailJson.data;
    let goals = 0;
    for(data of hostDatas) {
        const {competition, year, round, team1, team2, team1goals, team2goals} = data;
        const teamgoals = type === "team1" ? team1goals : team2goals;
        goals+=parseInt(teamgoals);
    }
    return goals;
}
   
const getActivity = () => {
    let goals1, goals2;
    (async () =>{
        goals1 = await checkUserHosting("team1", "Barcelona", 2011);
        goals2 = await checkUserHosting("team2", "Barcelona", 2011);  
        console.log(goals1, goals2);
    })();
    return goals1 + goals2;
}

//const result = getActivity();

function myFunc() {
    let result;
    const tmp = async () => {
        result = await returnString();
        console.log(result);
    };
    tmp();
    console.log(result);
};

myFunc();
//const result = returnString();
//console.log(result);