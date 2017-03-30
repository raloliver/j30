google.load('visualization', '1', {
    'packages': ('corechart')
});
google.setOnLoadCallback(ggChart1);

function ggChart1() {
    let data = new google.visualization.DataTable();
    data.addColumn('date', 'Dia');
    data.addColumn('number', 'Conta Corrente');
    data.addColumn('number', 'Conta Investimento');

    data.addRows(6);

    // data
    data.setValue(0, 0, new Date(2017, 01, 07));
    data.setValue(0, 1, 1023.29);
    data.setValue(0, 2, 410.50);

    data.setValue(1, 0, new Date(2017, 01, 08));
    data.setValue(1, 1, 908.42);
    data.setValue(1, 2, 490.82);

    data.setValue(2, 0, new Date(2017, 01, 09));
    data.setValue(2, 1, 852.97);
    data.setValue(2, 2, 450.17);

    data.setValue(3, 0, new Date(2017, 01, 10));
    data.setValue(3, 1, 1780.0);
    data.setValue(3, 2, 450.17);

    data.setValue(4, 0, new Date(2017, 01, 11));
    data.setValue(4, 1, 1621.69);
    data.setValue(4, 2, 720.81);

    data.setValue(5, 0, new Date(2017, 01, 12));
    data.setValue(5, 1, 1352.50);
    data.setValue(5, 2, 698.42);

    let $dateFormat = new google.visualization.DateFormat({
        formatType: 'medium'
    });
    $dateFormat.format(data, 0);

    let $numberFormat = new google.visualization.NumberFormat({
        decimalSymbol: ',',
        prefix: 'R$ '
    });
    $numberFormat.format(data, 1);
    $numberFormat.format(data, 2);

    let $view = new google.visualization.LineChart(document.querySelector("#view1"));
    $view.draw(data, {
        width: 720,
        height: 480,
        title: 'Aplicações'
    });
}