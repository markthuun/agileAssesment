import Chart from 'chart.js/auto'

(async function() {
const data = {
  labels: [
    'Agile',
    'Agile1',
    'Agile2',
    'Agile3',
    'Agile4',
    'Agile5',

  ],
  datasets: [{
    label: 'My First Dataset',
    data: [5,2,3,1,2,3],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'My Second Dataset',
    data: [2,2,1,4,2,3],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'radar',
        data: data,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
      },
    }
  );
})();
