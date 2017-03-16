google.load('visualization', '1', {
    //aqui precisar carregar o pacote correto
    'packages': ['intensitymap']
});
google.setOnLoadCallback(ggChart4);

function ggChart4() {
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Country');
    data.addColumn('number', 'Population (mil)');
    data.addColumn('number', 'Area (km2)');

    data.addRows(7);
    // data   
    data.setValue(0, 0, 'BR');
    data.setValue(0, 1, 8515);
    data.setValue(0, 2, 207225);     

    data.setValue(1, 0, 'CO');
    data.setValue(1, 1, 1138);
    data.setValue(1, 2, 49131);  

    data.setValue(2, 0, 'PE');
    data.setValue(2, 1, 1285);
    data.setValue(2, 2, 31448);  

    data.setValue(3, 0, 'AR');
    data.setValue(3, 1, 2780);
    data.setValue(3, 2, 43850);

    data.setValue(4, 0, 'UY');
    data.setValue(4, 1, 176);
    data.setValue(4, 2, 3480);

    data.setValue(5, 0, 'VE');
    data.setValue(5, 1, 912);
    data.setValue(5, 2, 31028);

    data.setValue(6, 0, 'CL');
    data.setValue(6, 1, 756);
    data.setValue(6, 2, 18191);

    let $view = new google.visualization.IntensityMap(document.querySelector("#view4"));

    $view.draw(data, {
        region: 'south_america',
        width: 720,
        heigth: 480
    });
    
}