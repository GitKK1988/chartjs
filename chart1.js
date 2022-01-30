
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'Juli',
    'August',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'primitive Data',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 15],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };



  const myChart1 = new Chart(
    document.getElementById('myChart1'),
    config
  );
