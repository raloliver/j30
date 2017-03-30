google.load('visualization', '1', {
    //aqui precisar carregar o pacote correto
    'packages': ['geochart']
});
google.setOnLoadCallback(ggChart5);

function ggChart5() {
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'State');
    data.addColumn('number', 'Population (mil)');
    data.addColumn('number', 'Area (km2)');

    data.addRows(7);
    // data   
    data.setValue(0, 0, 'BR-SP');
    data.setValue(0, 1, 4971);
    data.setValue(0, 2, 44846);     

    data.setValue(1, 0, 'BR-ES');
    data.setValue(1, 1, 427);
    data.setValue(1, 2, 3973);  

    data.setValue(2, 0, 'BR-RS');
    data.setValue(2, 1, 1647);
    data.setValue(2, 2, 11286);  

    data.setValue(3, 0, 'BR-BA');
    data.setValue(3, 1, 762);
    data.setValue(3, 2, 15276);

    data.setValue(3, 0, 'BR-AM');
    data.setValue(3, 1, 395);
    data.setValue(3, 2, 4001);

    data.setValue(3, 0, 'BR-CE');
    data.setValue(3, 1, 471);
    data.setValue(3, 2, 8980);

    let $view = new google.visualization.GeoChart(document.querySelector("#view5"));

    $view.draw(data, {
        region: 'BR',      
        resolution: 'provinces', 
        displayMode: 'regions',
        width: 720,
        heigth: 480
    });
    
}