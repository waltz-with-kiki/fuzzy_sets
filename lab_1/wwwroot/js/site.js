
    let myChart; // Добавляем переменную для хранения экземпляра графика

    function updateChart() {
        let table = document.getElementById('dataTable');
    let rows = table.querySelectorAll('tr');

    let table2 = document.getElementById('dataTable2')
    let rows2 = table2.querySelectorAll('tr');

    let chartData = [];
    var newData = [];

    for (let i = 1; i < rows2.length; i++) {
        let cells = rows2[i].querySelectorAll('td');
    let alvl2 = parseFloat(cells[0].innerText);
    let value3 = parseFloat(cells[1].innerText);
    let value4 = parseFloat(cells[2].innerText);

    newData.push({
        x: value3,
    y: alvl2
      });

    newData.push({
        x: value4,
    y: alvl2
      });
  }

    newData.sort(function(a, b) {
        return a.x - b.x;
    });

    for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].querySelectorAll('td');
    let alvl = parseFloat(cells[0].innerText);
    let value1 = parseFloat(cells[1].innerText);
    let value2 = parseFloat(cells[2].innerText);


    chartData.push({
        x: value1,
    y: alvl
    });

    chartData.push({
        x: value2,
    y: alvl
    });
  }

    chartData.sort(function(a, b) {
        return a.x - b.x;
    });

    let ctx = document.getElementById('myChart');

    if (myChart) {
        myChart.destroy(); // Удаляем существующий экземпляр графика
    }
    myChart = new Chart(ctx, {
        type: 'line',
    label: 'Значения x',
    data: {
        datasets: [{
        data: chartData,
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
        }]
      },
    options: {
        scales: {
        x: {
        type: 'linear',
    position: 'bottom',
    min: -100,
    max: 100,
          },
    y: {
        min: -100,
    max: 100,
          }
        }
      }
    });
    myChart.data.datasets.push({
        label: 'Новые данные',
    data: newData,
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // указываете цвет фона для нового графика
    borderColor: 'rgba(255, 0, 0, 1)', // указываете цвет границы для нового графика
    });
    myChart.update();
}



    function updateTable() {

        let numberTable = document.getElementById('selectTable').value;

    let table;

    if (numberTable == "first") {
        table = document.getElementById('dataTable');
      }
    else {
        table = document.getElementById('dataTable2');
      }

    let newRow = table.insertRow(-1);
    let alvl = document.getElementById('alvl').value;
    let value1 = document.getElementById('1value').value;
    let value2 = document.getElementById('2value').value;

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = alvl;
    cell2.innerHTML = value1;
    cell3.innerHTML = value2;

    document.getElementById('alvl').value = "";
    document.getElementById('1value').value = "";
    document.getElementById('2value').value = "";
    }


    function deleteRow() {

        let numberTable = document.getElementById('selectTable').value;

    let table;

    if (numberTable == "first") {
        table = document.getElementById('dataTable');
        }
    else {
        table = document.getElementById('dataTable2');
        }
    let rowIndex = document.getElementById('row').value;
    if (rowIndex == -1 || rowIndex == 0) { return };
    table.deleteRow(rowIndex);
  }
