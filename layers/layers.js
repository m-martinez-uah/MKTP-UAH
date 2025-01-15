ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32636").setExtent([460337.433236, 2846410.110648, 461185.323748, 2847108.620945]);
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
var format_MiddleKingdomThebanProyect_2 = new ol.format.GeoJSON();
var features_MiddleKingdomThebanProyect_2 = format_MiddleKingdomThebanProyect_2.readFeatures(json_MiddleKingdomThebanProyect_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_MiddleKingdomThebanProyect_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiddleKingdomThebanProyect_2.addFeatures(features_MiddleKingdomThebanProyect_2);
var lyr_MiddleKingdomThebanProyect_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiddleKingdomThebanProyect_2, 
                style: style_MiddleKingdomThebanProyect_2,
                popuplayertitle: "Middle Kingdom Theban Proyect",
                interactive: true,
                title: '<img src="styles/legend/MiddleKingdomThebanProyect_2.png" /> Middle Kingdom Theban Proyect'
            });

lyr_OpenStreetMap1_0.setVisible(false);lyr_Imagery_1.setVisible(true);lyr_MiddleKingdomThebanProyect_2.setVisible(true);
var layersList = [lyr_OpenStreetMap1_0,lyr_Imagery_1,lyr_MiddleKingdomThebanProyect_2];
lyr_MiddleKingdomThebanProyect_2.set('fieldAliases', {'Tomb GPS coord.:': 'Tomb GPS coord.:', 'Tomb n.:': 'Tomb n.:', 'Alternate n. 1:': 'Alternate n. 1:', 'Alternate n. 2:': 'Alternate n. 2:', 'Alternate n. 3:': 'Alternate n. 3:', 'Occupant: (Tomb owner?)': 'Occupant: (Tomb owner?)', 'Translit. occupant:': 'Translit. occupant:', 'Owner nickname:': 'Owner nickname:', 'Translit. owner nickname:': 'Translit. owner nickname:', 'Occupant status:': 'Occupant status:', 'Location:': 'Location:', 'Period:': 'Period:', 'Dynasty:': 'Dynasty:', 'Reigning king:': 'Reigning king:', 'Initial date:': 'Initial date:', 'Final date:': 'Final date:', 'Title 1:': 'Title 1:', 'Title 2:': 'Title 2:', 'Title 3:': 'Title 3:', 'Other titles:': 'Other titles:', 'Spouse:': 'Spouse:', 'Translit. spouse:': 'Translit. spouse:', 'Father:': 'Father:', 'Translit. father:': 'Translit. father:', 'Mother:': 'Mother:', 'Translit. mother:': 'Translit. mother:', 'Usurper:': 'Usurper:', 'Translit. usurper:': 'Translit. usurper:', 'MKTP web link:': 'MKTP web link:', 'Web link 2:': 'Web link 2:', 'Wikipedia link:': 'Wikipedia link:', 'MKTP photo link:': 'MKTP photo link:', 'Other photos link:': 'Other photos link:', 'Web Link:': 'Web Link:', 'Notes:': 'Notes:', 'Current condition:': 'Current condition:', 'Bibliography:': 'Bibliography:', 'Elevation (MSL):': 'Elevation (MSL):', 'x': 'x', 'y': 'y', });
lyr_MiddleKingdomThebanProyect_2.set('fieldImages', {'Tomb GPS coord.:': '', 'Tomb n.:': '', 'Alternate n. 1:': '', 'Alternate n. 2:': '', 'Alternate n. 3:': '', 'Occupant: (Tomb owner?)': '', 'Translit. occupant:': '', 'Owner nickname:': '', 'Translit. owner nickname:': '', 'Occupant status:': '', 'Location:': '', 'Period:': '', 'Dynasty:': '', 'Reigning king:': '', 'Initial date:': '', 'Final date:': '', 'Title 1:': '', 'Title 2:': '', 'Title 3:': '', 'Other titles:': '', 'Spouse:': '', 'Translit. spouse:': '', 'Father:': '', 'Translit. father:': '', 'Mother:': '', 'Translit. mother:': '', 'Usurper:': '', 'Translit. usurper:': '', 'MKTP web link:': '', 'Web link 2:': '', 'Wikipedia link:': '', 'MKTP photo link:': '', 'Other photos link:': '', 'Web Link:': '', 'Notes:': '', 'Current condition:': '', 'Bibliography:': '', 'Elevation (MSL):': '', 'x': '', 'y': '', });
lyr_MiddleKingdomThebanProyect_2.set('fieldLabels', {'Tomb GPS coord.:': 'inline label - always visible', 'Tomb n.:': 'inline label - visible with data', 'Alternate n. 1:': 'inline label - visible with data', 'Alternate n. 2:': 'inline label - visible with data', 'Alternate n. 3:': 'inline label - visible with data', 'Occupant: (Tomb owner?)': 'inline label - visible with data', 'Translit. occupant:': 'inline label - visible with data', 'Owner nickname:': 'inline label - visible with data', 'Translit. owner nickname:': 'inline label - visible with data', 'Occupant status:': 'inline label - visible with data', 'Location:': 'inline label - visible with data', 'Period:': 'inline label - visible with data', 'Dynasty:': 'inline label - visible with data', 'Reigning king:': 'inline label - visible with data', 'Initial date:': 'inline label - visible with data', 'Final date:': 'inline label - visible with data', 'Title 1:': 'inline label - visible with data', 'Title 2:': 'inline label - visible with data', 'Title 3:': 'inline label - visible with data', 'Other titles:': 'inline label - visible with data', 'Spouse:': 'inline label - visible with data', 'Translit. spouse:': 'inline label - visible with data', 'Father:': 'inline label - visible with data', 'Translit. father:': 'inline label - visible with data', 'Mother:': 'inline label - visible with data', 'Translit. mother:': 'inline label - visible with data', 'Usurper:': 'inline label - visible with data', 'Translit. usurper:': 'inline label - visible with data', 'MKTP web link:': 'inline label - visible with data', 'Web link 2:': 'inline label - visible with data', 'Wikipedia link:': 'inline label - visible with data', 'MKTP photo link:': 'inline label - visible with data', 'Other photos link:': 'inline label - visible with data', 'Web Link:': 'inline label - visible with data', 'Notes:': 'inline label - visible with data', 'Current condition:': 'inline label - visible with data', 'Bibliography:': 'inline label - visible with data', 'Elevation (MSL):': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', });
lyr_MiddleKingdomThebanProyect_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});