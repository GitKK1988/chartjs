
  const labels2 = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'Juli',
    'August',
  ];

  const data2 = {
    labels: labels,
    datasets: [{
      label: 'primitive Data',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [{x:'Sales', y:20}, {x:'Revenue', y:10}]
    }]
  };

  const config2 = {
    type: 'line',
    data: data2,
    options: {}
  };



  const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
  );
