ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32636").setExtent([459982.722639, 2845913.434570, 461678.503663, 2847152.156903]);
var wms_layers = [];


        var lyr_OpenStreetMap1_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap1',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Imagery_1 = new ol.layer.Tile({
            'title': 'Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AllThebanTombs_2 = new ol.format.GeoJSON();
var features_AllThebanTombs_2 = format_AllThebanTombs_2.readFeatures(json_AllThebanTombs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_AllThebanTombs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllThebanTombs_2.addFeatures(features_AllThebanTombs_2);
var lyr_AllThebanTombs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllThebanTombs_2, 
                style: style_AllThebanTombs_2,
                popuplayertitle: "All Theban Tombs",
                interactive: true,
                title: '<img src="styles/legend/AllThebanTombs_2.png" /> All Theban Tombs'
            });

lyr_OpenStreetMap1_0.setVisible(false);lyr_Imagery_1.setVisible(true);lyr_AllThebanTombs_2.setVisible(true);
var layersList = [lyr_OpenStreetMap1_0,lyr_Imagery_1,lyr_AllThebanTombs_2];
lyr_AllThebanTombs_2.set('fieldAliases', {'Theban Tomb number': 'Theban Tomb number', 'Altarnate number 1': 'Altarnate number 1', 'Alternate number 2': 'Alternate number 2', 'Location': 'Location', 'Occupant': 'Occupant', 'Translit. Occupant': 'Translit. Occupant', 'Nickname': 'Nickname', 'Translit. Nickname': 'Translit. Nickname', 'Occupant Status': 'Occupant Status', 'Period': 'Period', 'Dynasty': 'Dynasty', 'Reigning King': 'Reigning King', 'Date Begin': 'Date Begin', 'Date End': 'Date End', 'Title1': 'Title1', 'Title2': 'Title2', 'Title3': 'Title3', 'Spouse': 'Spouse', 'Translit. Spouse': 'Translit. Spouse', 'Father': 'Father', 'Translit. Father': 'Translit. Father', 'Mother': 'Mother', 'Translit. Mother': 'Translit. Mother', 'Usurper': 'Usurper', 'Translit. Usurper': 'Translit. Usurper', 'Photo Link': 'Photo Link', 'Web Link': 'Web Link', 'Notes': 'Notes', 'Bibliography': 'Bibliography', 'Elevation (MSL)': 'Elevation (MSL)', 'x': 'x', 'y': 'y', });
lyr_AllThebanTombs_2.set('fieldImages', {'Theban Tomb number': '', 'Altarnate number 1': '', 'Alternate number 2': '', 'Location': '', 'Occupant': '', 'Translit. Occupant': '', 'Nickname': '', 'Translit. Nickname': '', 'Occupant Status': '', 'Period': '', 'Dynasty': '', 'Reigning King': '', 'Date Begin': '', 'Date End': '', 'Title1': '', 'Title2': '', 'Title3': '', 'Spouse': '', 'Translit. Spouse': '', 'Father': '', 'Translit. Father': '', 'Mother': '', 'Translit. Mother': '', 'Usurper': '', 'Translit. Usurper': '', 'Photo Link': '', 'Web Link': '', 'Notes': '', 'Bibliography': '', 'Elevation (MSL)': '', 'x': '', 'y': '', });
lyr_AllThebanTombs_2.set('fieldLabels', {'Theban Tomb number': 'inline label - visible with data', 'Altarnate number 1': 'inline label - visible with data', 'Alternate number 2': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Occupant': 'inline label - visible with data', 'Translit. Occupant': 'inline label - visible with data', 'Nickname': 'inline label - visible with data', 'Translit. Nickname': 'inline label - visible with data', 'Occupant Status': 'inline label - visible with data', 'Period': 'inline label - visible with data', 'Dynasty': 'inline label - visible with data', 'Reigning King': 'inline label - visible with data', 'Date Begin': 'inline label - visible with data', 'Date End': 'inline label - visible with data', 'Title1': 'inline label - visible with data', 'Title2': 'inline label - visible with data', 'Title3': 'inline label - visible with data', 'Spouse': 'inline label - visible with data', 'Translit. Spouse': 'inline label - visible with data', 'Father': 'inline label - visible with data', 'Translit. Father': 'inline label - visible with data', 'Mother': 'inline label - visible with data', 'Translit. Mother': 'inline label - visible with data', 'Usurper': 'inline label - visible with data', 'Translit. Usurper': 'inline label - visible with data', 'Photo Link': 'inline label - visible with data', 'Web Link': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Bibliography': 'inline label - visible with data', 'Elevation (MSL)': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', });
lyr_AllThebanTombs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});