var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Par_1 = new ol.format.GeoJSON();
var features_Par_1 = format_Par_1.readFeatures(json_Par_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Par_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Par_1.addFeatures(features_Par_1);
var lyr_Par_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Par_1, 
                style: style_Par_1,
                popuplayertitle: 'Pará',
                interactive: true,
                title: '<img src="styles/legend/Par_1.png" /> Pará'
            });
var format_MunicpiosdoEstadodoPar_2 = new ol.format.GeoJSON();
var features_MunicpiosdoEstadodoPar_2 = format_MunicpiosdoEstadodoPar_2.readFeatures(json_MunicpiosdoEstadodoPar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicpiosdoEstadodoPar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosdoEstadodoPar_2.addFeatures(features_MunicpiosdoEstadodoPar_2);
var lyr_MunicpiosdoEstadodoPar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicpiosdoEstadodoPar_2, 
                style: style_MunicpiosdoEstadodoPar_2,
                popuplayertitle: 'Municípios do Estado do Pará',
                interactive: false,
                title: '<img src="styles/legend/MunicpiosdoEstadodoPar_2.png" /> Municípios do Estado do Pará'
            });
var format_Xikrin_do_Rio_Catete_3 = new ol.format.GeoJSON();
var features_Xikrin_do_Rio_Catete_3 = format_Xikrin_do_Rio_Catete_3.readFeatures(json_Xikrin_do_Rio_Catete_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Xikrin_do_Rio_Catete_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Xikrin_do_Rio_Catete_3.addFeatures(features_Xikrin_do_Rio_Catete_3);
var lyr_Xikrin_do_Rio_Catete_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Xikrin_do_Rio_Catete_3, 
                style: style_Xikrin_do_Rio_Catete_3,
                popuplayertitle: 'Xikrin_do_Rio_Catete',
                interactive: true,
                title: '<img src="styles/legend/Xikrin_do_Rio_Catete_3.png" /> Xikrin_do_Rio_Catete'
            });
var format_aldeias_4 = new ol.format.GeoJSON();
var features_aldeias_4 = format_aldeias_4.readFeatures(json_aldeias_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aldeias_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aldeias_4.addFeatures(features_aldeias_4);
var lyr_aldeias_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aldeias_4, 
                style: style_aldeias_4,
                popuplayertitle: 'aldeias',
                interactive: true,
                title: '<img src="styles/legend/aldeias_4.png" /> aldeias'
            });
var format_Hidrografia_5 = new ol.format.GeoJSON();
var features_Hidrografia_5 = format_Hidrografia_5.readFeatures(json_Hidrografia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrografia_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografia_5.addFeatures(features_Hidrografia_5);
var lyr_Hidrografia_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hidrografia_5, 
                style: style_Hidrografia_5,
                popuplayertitle: 'Hidrografia',
                interactive: true,
                title: '<img src="styles/legend/Hidrografia_5.png" /> Hidrografia'
            });
var format_ParauapebasCatete_6 = new ol.format.GeoJSON();
var features_ParauapebasCatete_6 = format_ParauapebasCatete_6.readFeatures(json_ParauapebasCatete_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParauapebasCatete_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParauapebasCatete_6.addFeatures(features_ParauapebasCatete_6);
var lyr_ParauapebasCatete_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParauapebasCatete_6, 
                style: style_ParauapebasCatete_6,
                popuplayertitle: 'Parauapebas - Catete',
                interactive: true,
                title: '<img src="styles/legend/ParauapebasCatete_6.png" /> Parauapebas - Catete'
            });
var format_BelmParauapebas_7 = new ol.format.GeoJSON();
var features_BelmParauapebas_7 = format_BelmParauapebas_7.readFeatures(json_BelmParauapebas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelmParauapebas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelmParauapebas_7.addFeatures(features_BelmParauapebas_7);
var lyr_BelmParauapebas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BelmParauapebas_7, 
                style: style_BelmParauapebas_7,
                popuplayertitle: 'Belém - Parauapebas',
                interactive: true,
                title: '<img src="styles/legend/BelmParauapebas_7.png" /> Belém - Parauapebas'
            });
var format_MarabCatete_8 = new ol.format.GeoJSON();
var features_MarabCatete_8 = format_MarabCatete_8.readFeatures(json_MarabCatete_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarabCatete_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarabCatete_8.addFeatures(features_MarabCatete_8);
var lyr_MarabCatete_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarabCatete_8, 
                style: style_MarabCatete_8,
                popuplayertitle: 'Marabá - Catete',
                interactive: true,
                title: '<img src="styles/legend/MarabCatete_8.png" /> Marabá - Catete'
            });
var format_BelmMarab_9 = new ol.format.GeoJSON();
var features_BelmMarab_9 = format_BelmMarab_9.readFeatures(json_BelmMarab_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelmMarab_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelmMarab_9.addFeatures(features_BelmMarab_9);
var lyr_BelmMarab_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BelmMarab_9, 
                style: style_BelmMarab_9,
                popuplayertitle: 'Belém - Marabá',
                interactive: true,
                title: '<img src="styles/legend/BelmMarab_9.png" /> Belém - Marabá'
            });
var format_PontosMunicpios_10 = new ol.format.GeoJSON();
var features_PontosMunicpios_10 = format_PontosMunicpios_10.readFeatures(json_PontosMunicpios_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosMunicpios_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosMunicpios_10.addFeatures(features_PontosMunicpios_10);
var lyr_PontosMunicpios_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosMunicpios_10, 
                style: style_PontosMunicpios_10,
                popuplayertitle: 'Pontos Municípios',
                interactive: false,
                title: '<img src="styles/legend/PontosMunicpios_10.png" /> Pontos Municípios'
            });
var group_Rotas = new ol.layer.Group({
                                layers: [lyr_Hidrografia_5,lyr_ParauapebasCatete_6,lyr_BelmParauapebas_7,lyr_MarabCatete_8,lyr_BelmMarab_9,lyr_PontosMunicpios_10,],
                                fold: "open",
                                title: 'Rotas'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Par_1.setVisible(false);lyr_MunicpiosdoEstadodoPar_2.setVisible(false);lyr_Xikrin_do_Rio_Catete_3.setVisible(true);lyr_aldeias_4.setVisible(true);lyr_Hidrografia_5.setVisible(false);lyr_ParauapebasCatete_6.setVisible(false);lyr_BelmParauapebas_7.setVisible(false);lyr_MarabCatete_8.setVisible(false);lyr_BelmMarab_9.setVisible(false);lyr_PontosMunicpios_10.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_Par_1,lyr_MunicpiosdoEstadodoPar_2,lyr_Xikrin_do_Rio_Catete_3,lyr_aldeias_4,group_Rotas];
lyr_Par_1.set('fieldAliases', {'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', 'AREA_KM2': 'AREA_KM2', });
lyr_MunicpiosdoEstadodoPar_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_Xikrin_do_Rio_Catete_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'terrai_cod': 'terrai_cod', 'terrai_nom': 'terrai_nom', 'etnia_nome': 'etnia_nome', 'municipio_': 'municipio_', 'uf_sigla': 'uf_sigla', 'superficie': 'superficie', 'fase_ti': 'fase_ti', 'modalidade': 'modalidade', 'reestudo_t': 'reestudo_t', 'cr': 'cr', 'faixa_fron': 'faixa_fron', 'undadm_cod': 'undadm_cod', 'undadm_nom': 'undadm_nom', 'undadm_sig': 'undadm_sig', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area ha': 'area ha', });
lyr_aldeias_4.set('fieldAliases', {'Id': 'Id', 'Aldeias': 'Aldeias', });
lyr_Hidrografia_5.set('fieldAliases', {'NORIOCOMP': 'NORIOCOMP', 'CORIO': 'CORIO', });
lyr_ParauapebasCatete_6.set('fieldAliases', {'Name': 'Name', 'Comp_': 'Comp_', 'Desc': 'Desc', });
lyr_BelmParauapebas_7.set('fieldAliases', {'Name': 'Name', 'Comp_': 'Comp_', 'Desc': 'Desc', });
lyr_MarabCatete_8.set('fieldAliases', {'Name': 'Name', 'Comp_': 'Comp_', 'Desc': 'Desc', });
lyr_BelmMarab_9.set('fieldAliases', {'Name': 'Name', 'Comp_': 'Comp_', 'Descriçã': 'Descriçã', });
lyr_PontosMunicpios_10.set('fieldAliases', {'Name': 'Name', });
lyr_Par_1.set('fieldImages', {'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_MunicpiosdoEstadodoPar_2.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Xikrin_do_Rio_Catete_3.set('fieldImages', {'OBJECTID': 'Range', 'terrai_cod': 'Range', 'terrai_nom': 'TextEdit', 'etnia_nome': 'TextEdit', 'municipio_': 'TextEdit', 'uf_sigla': 'TextEdit', 'superficie': 'TextEdit', 'fase_ti': 'TextEdit', 'modalidade': 'TextEdit', 'reestudo_t': 'TextEdit', 'cr': 'TextEdit', 'faixa_fron': 'TextEdit', 'undadm_cod': 'TextEdit', 'undadm_nom': 'TextEdit', 'undadm_sig': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area ha': 'TextEdit', });
lyr_aldeias_4.set('fieldImages', {'Id': 'Range', 'Aldeias': 'TextEdit', });
lyr_Hidrografia_5.set('fieldImages', {'NORIOCOMP': 'TextEdit', 'CORIO': 'TextEdit', });
lyr_ParauapebasCatete_6.set('fieldImages', {'Name': 'TextEdit', 'Comp_': 'TextEdit', 'Desc': 'TextEdit', });
lyr_BelmParauapebas_7.set('fieldImages', {'Name': 'TextEdit', 'Comp_': 'TextEdit', 'Desc': 'TextEdit', });
lyr_MarabCatete_8.set('fieldImages', {'Name': 'TextEdit', 'Comp_': 'TextEdit', 'Desc': 'TextEdit', });
lyr_BelmMarab_9.set('fieldImages', {'Name': 'TextEdit', 'Comp_': 'TextEdit', 'Descriçã': 'TextEdit', });
lyr_PontosMunicpios_10.set('fieldImages', {'Name': 'TextEdit', });
lyr_Par_1.set('fieldLabels', {'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'NM_REGIAO': 'no label', 'AREA_KM2': 'no label', });
lyr_MunicpiosdoEstadodoPar_2.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_Xikrin_do_Rio_Catete_3.set('fieldLabels', {'OBJECTID': 'no label', 'terrai_cod': 'no label', 'terrai_nom': 'no label', 'etnia_nome': 'no label', 'municipio_': 'no label', 'uf_sigla': 'no label', 'superficie': 'no label', 'fase_ti': 'no label', 'modalidade': 'no label', 'reestudo_t': 'no label', 'cr': 'no label', 'faixa_fron': 'no label', 'undadm_cod': 'no label', 'undadm_nom': 'no label', 'undadm_sig': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'area ha': 'no label', });
lyr_aldeias_4.set('fieldLabels', {'Id': 'no label', 'Aldeias': 'no label', });
lyr_Hidrografia_5.set('fieldLabels', {'NORIOCOMP': 'no label', 'CORIO': 'no label', });
lyr_ParauapebasCatete_6.set('fieldLabels', {'Name': 'no label', 'Comp_': 'no label', 'Desc': 'no label', });
lyr_BelmParauapebas_7.set('fieldLabels', {'Name': 'no label', 'Comp_': 'no label', 'Desc': 'no label', });
lyr_MarabCatete_8.set('fieldLabels', {'Name': 'no label', 'Comp_': 'no label', 'Desc': 'no label', });
lyr_BelmMarab_9.set('fieldLabels', {'Name': 'no label', 'Comp_': 'no label', 'Descriçã': 'no label', });
lyr_PontosMunicpios_10.set('fieldLabels', {'Name': 'no label', });
lyr_PontosMunicpios_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});