google.load('visualization', '1', {
    //aqui precisar carregar o pacote correto
    'packages': ['corechat']
});
google.setOnLoadCallback(ggChart6);

function ggChart6() {
    let $view = new google.visualization.ChartWrapper({
        dataSourceUrl: 'http://spreadsheets.google.com/tq?key=pCQbetd-CptGXxxQIG7VFIQ&pub=1',
        query: 'SELECT A,D WHERE D > 100 ORDER BY D',
        chartType: 'AreaChart',
        containerId: 'view6',
        options: {
            'title': 'Countries',
            width: 720,
            height: 480
        }
    });

    $view.draw();
}