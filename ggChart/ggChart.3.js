google.load('visualization', '1', {
    'packages': ['corechart']
});
google.setOnLoadCallback(ggChart3);

function ggChart3() {
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Tipo');
    data.addColumn('number', 'Valor');

    data.addRows(4);

    // data
    data.setValue(0, 0, 'Casa');
    data.setValue(0, 1, (Math.random() * 9999));

    data.setValue(1, 0, 'Alimentação');
    data.setValue(1, 1, (Math.random() * 9999));

    data.setValue(2, 0, 'Transporte');
    data.setValue(2, 1, (Math.random() * 9999));

    data.setValue(3, 0, 'Educação');
    data.setValue(3, 1, (Math.random() * 9999));

    let $numberFormat = new google.visualization.NumberFormat({
        decimalSymbol: ',',
        prefix: 'R$ '
    });
    $numberFormat.format(data, 1);

    let $view = new google.visualization.PieChart(document.querySelector("#view3"));

    $view.draw(data, {
        width: 720,
        height: 480,
        title: 'Tipo de Despesa',
        is3D: true
    });

    google.visualization.events.addListener($view, 'select', mouseEventHandler);

    function isClicked(event) {
        document.querySelector('#message').innerHTML += "<p>Tipo de Despesa Selecionada</p>";
    }

    function mouseEventHandler(event) {
        let $isSelected = $view.getSelection();
        let $isChoiced = $isSelected[0].row;
        let $typeSpend = data.getFormattedValue($isChoiced, 0);
        let $valueSpend = data.getFormattedValue($isChoiced, 1);
        document.querySelector('#message').innerHTML = "<p> Gasto em " + $typeSpend + ": R$" + $valueSpend + "</p>";
    }
}