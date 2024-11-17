var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Andalucia_1 = new ol.format.GeoJSON();
var features_Andalucia_1 = format_Andalucia_1.readFeatures(json_Andalucia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Andalucia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Andalucia_1.addFeatures(features_Andalucia_1);
var lyr_Andalucia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Andalucia_1, 
                style: style_Andalucia_1,
                popuplayertitle: "Andalucia",
                interactive: true,
    title: 'Andalucia<br />\
    <img src="styles/legend/Andalucia_1_0.png" /> 20 mins<br />'
        });
var format_Valencia_2 = new ol.format.GeoJSON();
var features_Valencia_2 = format_Valencia_2.readFeatures(json_Valencia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Valencia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Valencia_2.addFeatures(features_Valencia_2);
var lyr_Valencia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Valencia_2, 
                style: style_Valencia_2,
                popuplayertitle: "Valencia",
                interactive: true,
    title: 'Valencia<br />\
    <img src="styles/legend/Valencia_2_0.png" /> 20 mins<br />'
        });
var format_Madrid_3 = new ol.format.GeoJSON();
var features_Madrid_3 = format_Madrid_3.readFeatures(json_Madrid_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Madrid_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Madrid_3.addFeatures(features_Madrid_3);
var lyr_Madrid_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Madrid_3, 
                style: style_Madrid_3,
                popuplayertitle: "Madrid",
                interactive: true,
    title: 'Madrid<br />\
    <img src="styles/legend/Madrid_3_0.png" /> 20 mins<br />'
        });
var format_CYLSur_4 = new ol.format.GeoJSON();
var features_CYLSur_4 = format_CYLSur_4.readFeatures(json_CYLSur_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CYLSur_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CYLSur_4.addFeatures(features_CYLSur_4);
var lyr_CYLSur_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CYLSur_4, 
                style: style_CYLSur_4,
                popuplayertitle: "CYL Sur",
                interactive: true,
    title: 'CYL Sur<br />\
    <img src="styles/legend/CYLSur_4_0.png" /> 20 mins<br />'
        });
var format_CYLNorte_5 = new ol.format.GeoJSON();
var features_CYLNorte_5 = format_CYLNorte_5.readFeatures(json_CYLNorte_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CYLNorte_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CYLNorte_5.addFeatures(features_CYLNorte_5);
var lyr_CYLNorte_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CYLNorte_5, 
                style: style_CYLNorte_5,
                popuplayertitle: "CYL Norte",
                interactive: true,
    title: 'CYL Norte<br />\
    <img src="styles/legend/CYLNorte_5_0.png" /> 20 mins<br />'
        });
var format_LaRioja_6 = new ol.format.GeoJSON();
var features_LaRioja_6 = format_LaRioja_6.readFeatures(json_LaRioja_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaRioja_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaRioja_6.addFeatures(features_LaRioja_6);
var lyr_LaRioja_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaRioja_6, 
                style: style_LaRioja_6,
                popuplayertitle: "La Rioja",
                interactive: true,
    title: 'La Rioja<br />\
    <img src="styles/legend/LaRioja_6_0.png" /> 20 mins<br />'
        });
var format_CLM_7 = new ol.format.GeoJSON();
var features_CLM_7 = format_CLM_7.readFeatures(json_CLM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLM_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLM_7.addFeatures(features_CLM_7);
var lyr_CLM_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLM_7, 
                style: style_CLM_7,
                popuplayertitle: "CLM",
                interactive: true,
    title: 'CLM<br />\
    <img src="styles/legend/CLM_7_0.png" /> 20 mins<br />'
        });
var format_Aragn_8 = new ol.format.GeoJSON();
var features_Aragn_8 = format_Aragn_8.readFeatures(json_Aragn_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aragn_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aragn_8.addFeatures(features_Aragn_8);
var lyr_Aragn_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aragn_8, 
                style: style_Aragn_8,
                popuplayertitle: "Aragón",
                interactive: true,
    title: 'Aragón<br />\
    <img src="styles/legend/Aragn_8_0.png" /> 20 mins<br />'
        });
var format_PaisVascoNavarra_9 = new ol.format.GeoJSON();
var features_PaisVascoNavarra_9 = format_PaisVascoNavarra_9.readFeatures(json_PaisVascoNavarra_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaisVascoNavarra_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaisVascoNavarra_9.addFeatures(features_PaisVascoNavarra_9);
var lyr_PaisVascoNavarra_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaisVascoNavarra_9, 
                style: style_PaisVascoNavarra_9,
                popuplayertitle: "Pais Vasco/Navarra",
                interactive: true,
    title: 'Pais Vasco/Navarra<br />\
    <img src="styles/legend/PaisVascoNavarra_9_0.png" /> 20 mins<br />'
        });
var format_Extremadura_10 = new ol.format.GeoJSON();
var features_Extremadura_10 = format_Extremadura_10.readFeatures(json_Extremadura_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Extremadura_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Extremadura_10.addFeatures(features_Extremadura_10);
var lyr_Extremadura_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Extremadura_10, 
                style: style_Extremadura_10,
                popuplayertitle: "Extremadura",
                interactive: true,
    title: 'Extremadura<br />\
    <img src="styles/legend/Extremadura_10_0.png" /> 20 mins<br />'
        });
var format_Canarias_11 = new ol.format.GeoJSON();
var features_Canarias_11 = format_Canarias_11.readFeatures(json_Canarias_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canarias_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canarias_11.addFeatures(features_Canarias_11);
var lyr_Canarias_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Canarias_11, 
                style: style_Canarias_11,
                popuplayertitle: "Canarias",
                interactive: true,
    title: 'Canarias<br />\
    <img src="styles/legend/Canarias_11_0.png" /> 20 mins<br />'
        });
var format_Galicia_12 = new ol.format.GeoJSON();
var features_Galicia_12 = format_Galicia_12.readFeatures(json_Galicia_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Galicia_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Galicia_12.addFeatures(features_Galicia_12);
var lyr_Galicia_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Galicia_12, 
                style: style_Galicia_12,
                popuplayertitle: "Galicia",
                interactive: true,
    title: 'Galicia<br />\
    <img src="styles/legend/Galicia_12_0.png" /> 20 mins<br />'
        });
var format_AsturiasCantabria_13 = new ol.format.GeoJSON();
var features_AsturiasCantabria_13 = format_AsturiasCantabria_13.readFeatures(json_AsturiasCantabria_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AsturiasCantabria_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AsturiasCantabria_13.addFeatures(features_AsturiasCantabria_13);
var lyr_AsturiasCantabria_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AsturiasCantabria_13, 
                style: style_AsturiasCantabria_13,
                popuplayertitle: "Asturias/Cantabria",
                interactive: true,
    title: 'Asturias/Cantabria<br />\
    <img src="styles/legend/AsturiasCantabria_13_0.png" /> 20 mins<br />'
        });
var format_Outputpointlayer_14 = new ol.format.GeoJSON();
var features_Outputpointlayer_14 = format_Outputpointlayer_14.readFeatures(json_Outputpointlayer_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outputpointlayer_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outputpointlayer_14.addFeatures(features_Outputpointlayer_14);
var lyr_Outputpointlayer_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outputpointlayer_14, 
                style: style_Outputpointlayer_14,
                popuplayertitle: "Output point layer",
                interactive: true,
                title: '<img src="styles/legend/Outputpointlayer_14.png" /> Output point layer'
            });
var group_Tempo = new ol.layer.Group({
                                layers: [lyr_Andalucia_1,lyr_Valencia_2,lyr_Madrid_3,lyr_CYLSur_4,lyr_CYLNorte_5,lyr_LaRioja_6,lyr_CLM_7,lyr_Aragn_8,lyr_PaisVascoNavarra_9,lyr_Extremadura_10,lyr_Canarias_11,lyr_Galicia_12,lyr_AsturiasCantabria_13,],
                                fold: "open",
                                title: "Tempo"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Andalucia_1.setVisible(true);lyr_Valencia_2.setVisible(true);lyr_Madrid_3.setVisible(true);lyr_CYLSur_4.setVisible(true);lyr_CYLNorte_5.setVisible(true);lyr_LaRioja_6.setVisible(true);lyr_CLM_7.setVisible(true);lyr_Aragn_8.setVisible(true);lyr_PaisVascoNavarra_9.setVisible(true);lyr_Extremadura_10.setVisible(true);lyr_Canarias_11.setVisible(true);lyr_Galicia_12.setVisible(true);lyr_AsturiasCantabria_13.setVisible(true);lyr_Outputpointlayer_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Tempo,lyr_Outputpointlayer_14];
lyr_Andalucia_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Valencia_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Madrid_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_CYLSur_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_CYLNorte_5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_LaRioja_6.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_CLM_7.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Aragn_8.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_PaisVascoNavarra_9.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Extremadura_10.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Canarias_11.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Galicia_12.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_AsturiasCantabria_13.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Outputpointlayer_14.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_Andalucia_1.set('fieldImages', {'fid': '', 'name': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Valencia_2.set('fieldImages', {'fid': '', 'name': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Madrid_3.set('fieldImages', {'fid': '', 'name': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_CYLSur_4.set('fieldImages', {'fid': '', 'name': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_CYLNorte_5.set('fieldImages', {'fid': '', 'name': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_LaRioja_6.set('fieldImages', {'fid': '', 'name': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_CLM_7.set('fieldImages', {'fid': '', 'name': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Aragn_8.set('fieldImages', {'fid': '', 'name': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_PaisVascoNavarra_9.set('fieldImages', {'fid': '', 'name': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Extremadura_10.set('fieldImages', {'fid': '', 'name': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Canarias_11.set('fieldImages', {'fid': '', 'name': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Galicia_12.set('fieldImages', {'fid': '', 'name': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_AsturiasCantabria_13.set('fieldImages', {'fid': '', 'name': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Outputpointlayer_14.set('fieldImages', {'fid': '', 'name': '', 'folders': '', 'description': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_Andalucia_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Valencia_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Madrid_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_CYLSur_4.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_CYLNorte_5.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_LaRioja_6.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_CLM_7.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Aragn_8.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_PaisVascoNavarra_9.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Extremadura_10.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Canarias_11.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Galicia_12.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_AsturiasCantabria_13.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Outputpointlayer_14.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'inline label - always visible', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_Outputpointlayer_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});