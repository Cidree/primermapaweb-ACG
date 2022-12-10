ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([316581.547569, 4061614.151649, 329091.047582, 4070906.318325]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SierradelasNieves_1 = new ol.format.GeoJSON();
var features_SierradelasNieves_1 = format_SierradelasNieves_1.readFeatures(json_SierradelasNieves_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_SierradelasNieves_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SierradelasNieves_1.addFeatures(features_SierradelasNieves_1);
var lyr_SierradelasNieves_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SierradelasNieves_1, 
                style: style_SierradelasNieves_1,
                interactive: true,
                title: '<img src="styles/legend/SierradelasNieves_1.png" /> Sierra de las Nieves'
            });
var format_Yunquera_2 = new ol.format.GeoJSON();
var features_Yunquera_2 = format_Yunquera_2.readFeatures(json_Yunquera_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Yunquera_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yunquera_2.addFeatures(features_Yunquera_2);
var lyr_Yunquera_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yunquera_2, 
                style: style_Yunquera_2,
                interactive: true,
                title: '<img src="styles/legend/Yunquera_2.png" /> Yunquera'
            });
var format_ProvinciasAndalucia_3 = new ol.format.GeoJSON();
var features_ProvinciasAndalucia_3 = format_ProvinciasAndalucia_3.readFeatures(json_ProvinciasAndalucia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ProvinciasAndalucia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinciasAndalucia_3.addFeatures(features_ProvinciasAndalucia_3);
var lyr_ProvinciasAndalucia_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProvinciasAndalucia_3, 
                style: style_ProvinciasAndalucia_3,
                interactive: true,
                title: '<img src="styles/legend/ProvinciasAndalucia_3.png" /> Provincias Andalucia'
            });
var format_Carreteras_4 = new ol.format.GeoJSON();
var features_Carreteras_4 = format_Carreteras_4.readFeatures(json_Carreteras_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Carreteras_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carreteras_4.addFeatures(features_Carreteras_4);
var lyr_Carreteras_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Carreteras_4,
maxResolution:28.00446615226196,
 
                style: style_Carreteras_4,
                interactive: true,
                title: '<img src="styles/legend/Carreteras_4.png" /> Carreteras'
            });
var format_Caminos_5 = new ol.format.GeoJSON();
var features_Caminos_5 = format_Caminos_5.readFeatures(json_Caminos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Caminos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caminos_5.addFeatures(features_Caminos_5);
var lyr_Caminos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Caminos_5,
maxResolution:28.00446615226196,
 
                style: style_Caminos_5,
                interactive: true,
                title: '<img src="styles/legend/Caminos_5.png" /> Caminos'
            });
var format_Senderos_6 = new ol.format.GeoJSON();
var features_Senderos_6 = format_Senderos_6.readFeatures(json_Senderos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Senderos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Senderos_6.addFeatures(features_Senderos_6);
var lyr_Senderos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Senderos_6,
maxResolution:28.00446615226196,
 
                style: style_Senderos_6,
                interactive: true,
                title: '<img src="styles/legend/Senderos_6.png" /> Senderos'
            });
var format_ParcelasInventario_7 = new ol.format.GeoJSON();
var features_ParcelasInventario_7 = format_ParcelasInventario_7.readFeatures(json_ParcelasInventario_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ParcelasInventario_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelasInventario_7.addFeatures(features_ParcelasInventario_7);
var lyr_ParcelasInventario_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParcelasInventario_7,
maxResolution:28.00446615226196,
 
                style: style_ParcelasInventario_7,
                interactive: true,
                title: '<img src="styles/legend/ParcelasInventario_7.png" /> Parcelas Inventario'
            });
var format_FocoHeterobasidionannosum_8 = new ol.format.GeoJSON();
var features_FocoHeterobasidionannosum_8 = format_FocoHeterobasidionannosum_8.readFeatures(json_FocoHeterobasidionannosum_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_FocoHeterobasidionannosum_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FocoHeterobasidionannosum_8.addFeatures(features_FocoHeterobasidionannosum_8);
var lyr_FocoHeterobasidionannosum_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FocoHeterobasidionannosum_8,
maxResolution:28.00446615226196,
 
                style: style_FocoHeterobasidionannosum_8,
                interactive: false,
                title: '<img src="styles/legend/FocoHeterobasidionannosum_8.png" /> Foco Heterobasidion annosum'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SierradelasNieves_1.setVisible(true);lyr_Yunquera_2.setVisible(true);lyr_ProvinciasAndalucia_3.setVisible(true);lyr_Carreteras_4.setVisible(true);lyr_Caminos_5.setVisible(true);lyr_Senderos_6.setVisible(true);lyr_ParcelasInventario_7.setVisible(true);lyr_FocoHeterobasidionannosum_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SierradelasNieves_1,lyr_Yunquera_2,lyr_ProvinciasAndalucia_3,lyr_Carreteras_4,lyr_Caminos_5,lyr_Senderos_6,lyr_ParcelasInventario_7,lyr_FocoHeterobasidionannosum_8];
lyr_SierradelasNieves_1.set('fieldAliases', {'CODIGOESPA': 'CODIGOESPA', 'FIGURA': 'FIGURA', 'NOMBRE': 'NOMBRE', 'SUPERFICIE': 'SUPERFICIE', 'SUP_TER': 'SUP_TER', 'SUP_MAR': 'SUP_MAR', 'ZON_PRO': 'ZON_PRO', 'FEC_DECLA': 'FEC_DECLA', 'NOR_DECLA': 'NOR_DECLA', 'FEC_DEC_PR': 'FEC_DEC_PR', 'NOR_DEC_PR': 'NOR_DEC_PR', 'FEC_LIM_LI': 'FEC_LIM_LI', 'NOR_LIM_LI': 'NOR_LIM_LI', 'FEC_LIM_CA': 'FEC_LIM_CA', 'NOR_LIM_CA': 'NOR_LIM_CA', 'OBSERVAC': 'OBSERVAC', 'FORMAT_LEG': 'FORMAT_LEG', 'CARACTER': 'CARACTER', 'TIPO_FIGUR': 'TIPO_FIGUR', });
lyr_Yunquera_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_ProvinciasAndalucia_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PROVINCIAS': 'PROVINCIAS', 'PROVINCI_1': 'PROVINCI_1', 'PROVINCIA': 'PROVINCIA', 'SUM__P_F45': 'SUM__P_F45', 'TSUM__P_F4': 'TSUM__P_F4', 'TSUM__P__1': 'TSUM__P__1', 'SUM_SUM_C2': 'SUM_SUM_C2', 'SUM_C2': 'SUM_C2', 'C1': 'C1', 'C2': 'C2', 'C3': 'C3', 'C4': 'C4', 'C5': 'C5', 'C6': 'C6', 'C7': 'C7', 'C8': 'C8', 'C9': 'C9', 'C10': 'C10', });
lyr_Carreteras_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Caminos_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Senderos_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_ParcelasInventario_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_FocoHeterobasidionannosum_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', });
lyr_SierradelasNieves_1.set('fieldImages', {'CODIGOESPA': 'TextEdit', 'FIGURA': 'TextEdit', 'NOMBRE': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'SUP_TER': 'TextEdit', 'SUP_MAR': 'TextEdit', 'ZON_PRO': 'TextEdit', 'FEC_DECLA': 'DateTime', 'NOR_DECLA': 'TextEdit', 'FEC_DEC_PR': 'TextEdit', 'NOR_DEC_PR': 'TextEdit', 'FEC_LIM_LI': 'DateTime', 'NOR_LIM_LI': 'TextEdit', 'FEC_LIM_CA': 'DateTime', 'NOR_LIM_CA': 'TextEdit', 'OBSERVAC': 'TextEdit', 'FORMAT_LEG': 'TextEdit', 'CARACTER': 'TextEdit', 'TIPO_FIGUR': 'TextEdit', });
lyr_Yunquera_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_ProvinciasAndalucia_3.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PROVINCIAS': 'TextEdit', 'PROVINCI_1': 'TextEdit', 'PROVINCIA': 'TextEdit', 'SUM__P_F45': 'TextEdit', 'TSUM__P_F4': 'TextEdit', 'TSUM__P__1': 'TextEdit', 'SUM_SUM_C2': 'TextEdit', 'SUM_C2': 'TextEdit', 'C1': 'TextEdit', 'C2': 'TextEdit', 'C3': 'TextEdit', 'C4': 'TextEdit', 'C5': 'TextEdit', 'C6': 'TextEdit', 'C7': 'TextEdit', 'C8': 'TextEdit', 'C9': 'TextEdit', 'C10': 'TextEdit', });
lyr_Carreteras_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Caminos_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Senderos_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_ParcelasInventario_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_FocoHeterobasidionannosum_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', });
lyr_SierradelasNieves_1.set('fieldLabels', {'CODIGOESPA': 'no label', 'FIGURA': 'no label', 'NOMBRE': 'no label', 'SUPERFICIE': 'no label', 'SUP_TER': 'no label', 'SUP_MAR': 'no label', 'ZON_PRO': 'no label', 'FEC_DECLA': 'no label', 'NOR_DECLA': 'no label', 'FEC_DEC_PR': 'no label', 'NOR_DEC_PR': 'no label', 'FEC_LIM_LI': 'no label', 'NOR_LIM_LI': 'no label', 'FEC_LIM_CA': 'no label', 'NOR_LIM_CA': 'no label', 'OBSERVAC': 'no label', 'FORMAT_LEG': 'no label', 'CARACTER': 'no label', 'TIPO_FIGUR': 'no label', });
lyr_Yunquera_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_ProvinciasAndalucia_3.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PROVINCIAS': 'no label', 'PROVINCI_1': 'no label', 'PROVINCIA': 'no label', 'SUM__P_F45': 'no label', 'TSUM__P_F4': 'no label', 'TSUM__P__1': 'no label', 'SUM_SUM_C2': 'no label', 'SUM_C2': 'no label', 'C1': 'no label', 'C2': 'no label', 'C3': 'no label', 'C4': 'no label', 'C5': 'no label', 'C6': 'no label', 'C7': 'no label', 'C8': 'no label', 'C9': 'no label', 'C10': 'no label', });
lyr_Carreteras_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Caminos_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Senderos_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_ParcelasInventario_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_FocoHeterobasidionannosum_8.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', });
lyr_FocoHeterobasidionannosum_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});