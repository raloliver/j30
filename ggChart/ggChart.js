google.load('visualization', '1', {
    'packages': ['corechart']
});
google.setOnLoadCallback(ggChart);

function ggChart() {
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Saídas');

    data.addRows(6);

    // data.setValue(row, column, value)
    data.setValue(0, 0, "Janeiro");
    data.setValue(0, 1, 4458.0);

    data.setValue(1, 0, "Fevereiro");
    data.setValue(1, 1, 3123.0);

    data.setValue(2, 0, "Março");
    data.setValue(2, 1, 3234.0);

    data.setValue(3, 0, "Abril");
    data.setValue(3, 1, 3234.0);

    data.setValue(4, 0, "Maio");
    data.setValue(4, 1, 2234.0);

    data.setValue(5, 0, "Junho");
    data.setValue(5, 1, 1234.0);

    let $view = new google.visualization.LineChart(document.querySelector("#view"));

    $view.draw(data, {
        width: 720,
        height: 480,
        title: 'Saídas do mês',
        colors: ['red'],
        curveType: 'function'
    });
}