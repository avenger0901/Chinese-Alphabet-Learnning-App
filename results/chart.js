import { getUser } from '../utils/getuser.js';


const user = getUser();

//-------------------------------------------------//

const ctx = document.getElementById('results-chart').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    fillOpacity: .3,
    // The data for our dataset
    data: {
        labels: ['Sheng Mu', 'Yun Mu', 'Zheng Ti'],
        datasets: [{
            label: 'Correct',
            backgroundColor: '#8FBFB6',
            borderColor: 'white',
            data: [user.shengMu.correct, user.yunMu.correct, user.zhengTi.correct]
        }, {
            label: 'Incorrect',
            backgroundColor: '#F2133C',
            borderColor: 'white',
            data: [user.shengMu.incorrect, user.yunMu.incorrect, user.zhengTi.incorrect]
        }]
    },

    // Configuration options go here
    options: {}
});


