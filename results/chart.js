
const YunMuData = {
    name: 'Yun Mu',
    correct: 10,
    incorrect: 13
};

const ShengMuData = {
    name: 'Sheng Mu',
    correct: 20,
    incorrect: 5
};

const ZhengTiData = {
    name: 'Zheng Ti',
    correct: 5,
    incorrect: 14
};

//-------------------------------------------------//

const ctx = document.getElementById('results-chart').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    
    fillOpacity: .3,
    // The data for our dataset
    data: {
        labels: ['Yun Mu', 'Sheng Mu', 'Zheng Ti'],
        datasets: [{
            label: 'Correct',
            backgroundColor: 'rgb(179, 255, 198)',
            borderColor: 'rgb(255, 255, 255)',
            data: [YunMuData.correct, ShengMuData.correct, ZhengTiData.correct]
        }, {
            label: 'Incorrect',
            backgroundColor: 'rgb(255, 102, 102)',
            borderColor: 'rgb(255, 255, 255)',
            data: [YunMuData.incorrect, ShengMuData.incorrect, ZhengTiData.incorrect]
        }]
    },

    // Configuration options go here
    options: {}
});