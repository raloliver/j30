google.load('visualization', '1', {
    'packages': ['corechart']
});
google.setOnLoadCallback(ggChart2);

function ggChart2() {
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Gráfico GG');

    data.addRows(12);

    // data
    data.setValue(0, 0, 'Janeiro');
    data.setValue(0, 1, (Math.random() * 9999));

    data.setValue(1, 0, 'Fevereiro');
    data.setValue(1, 1, (Math.random() * 9999));

    data.setValue(2, 0, 'Março');
    data.setValue(2, 1, (Math.random() * 9999));

    data.setValue(3, 0, 'Abril');
    data.setValue(3, 1, (Math.random() * 9999));

    data.setValue(4, 0, 'Maio');
    data.setValue(4, 1, (Math.random() * 9999));

    data.setValue(5, 0, 'Junho');
    data.setValue(5, 1, (Math.random() * 9999));

    data.setValue(6, 0, 'Julho');
    data.setValue(6, 1, (Math.random() * 9999));

    data.setValue(7, 0, 'Agosto');
    data.setValue(7, 1, (Math.random() * 9999));

    data.setValue(8, 0, 'Setembro');
    data.setValue(8, 1, (Math.random() * 9999));

    data.setValue(9, 0, 'Outubro');
    data.setValue(9, 1, (Math.random() * 9999));

    data.setValue(10, 0, 'Novembro');
    data.setValue(10, 1, (Math.random() * 9999));

    data.setValue(11, 0, 'Dezembro');
    data.setValue(11, 1, (Math.random() * 9999));

    let $numberFormat = new google.visualization.NumberFormat({
        decimalSymbol: ',',
        prefix: 'R$ '
    });
    $numberFormat.format(data, 1);
    //BarChart: horizontalChart
    let $view = new google.visualization.ColumnChart(document.querySelector("#view2"));

    $view.draw(data, {
        width: 720,
        height: 480,
        title: 'Gera Grana',
        colors: ['#BADA55'],
        vAxis: {
            title: 'Valor'
        },
        hAxis: {
            title: 'Meses do Ano'
        }
    });
}