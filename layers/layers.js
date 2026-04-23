var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PartaiKebangkitanBangsa_1 = new ol.format.GeoJSON();
var features_PartaiKebangkitanBangsa_1 = format_PartaiKebangkitanBangsa_1.readFeatures(json_PartaiKebangkitanBangsa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiKebangkitanBangsa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiKebangkitanBangsa_1.addFeatures(features_PartaiKebangkitanBangsa_1);
var lyr_PartaiKebangkitanBangsa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiKebangkitanBangsa_1, 
                style: style_PartaiKebangkitanBangsa_1,
                popuplayertitle: 'Partai Kebangkitan Bangsa',
                interactive: true,
    title: 'Partai Kebangkitan Bangsa<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_1_0.png" /> 1315 - 3373<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_1_1.png" /> 3373 - 5430<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_1_2.png" /> 5430 - 7488<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_1_3.png" /> 7488 - 9545<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_1_4.png" /> 9545 - 11603<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_PartaiKebangkitanBangsa_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PartaiKebangkitanBangsa_1];
lyr_PartaiKebangkitanBangsa_1.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Suara Parpol Pemilu 2024_Kab_Kot': 'Suara Parpol Pemilu 2024_Kab_Kot', 'Suara Parpol Pemilu 2024_PKB': 'Suara Parpol Pemilu 2024_PKB', 'Suara Parpol Pemilu 2024_GERINDRA': 'Suara Parpol Pemilu 2024_GERINDRA', 'Suara Parpol Pemilu 2024_PDIP': 'Suara Parpol Pemilu 2024_PDIP', 'Suara Parpol Pemilu 2024_GOLKAR': 'Suara Parpol Pemilu 2024_GOLKAR', 'Suara Parpol Pemilu 2024_NASDEM': 'Suara Parpol Pemilu 2024_NASDEM', 'Suara Parpol Pemilu 2024_BUR': 'Suara Parpol Pemilu 2024_BUR', 'Suara Parpol Pemilu 2024_GELORA': 'Suara Parpol Pemilu 2024_GELORA', 'Suara Parpol Pemilu 2024_PKS': 'Suara Parpol Pemilu 2024_PKS', 'Suara Parpol Pemilu 2024_PKN': 'Suara Parpol Pemilu 2024_PKN', 'Suara Parpol Pemilu 2024_HANURA': 'Suara Parpol Pemilu 2024_HANURA', 'Suara Parpol Pemilu 2024_GARUDA': 'Suara Parpol Pemilu 2024_GARUDA', 'Suara Parpol Pemilu 2024_PAN': 'Suara Parpol Pemilu 2024_PAN', 'Suara Parpol Pemilu 2024_PBB': 'Suara Parpol Pemilu 2024_PBB', 'Suara Parpol Pemilu 2024_DEMOKRAT': 'Suara Parpol Pemilu 2024_DEMOKRAT', 'Suara Parpol Pemilu 2024_PSI': 'Suara Parpol Pemilu 2024_PSI', 'Suara Parpol Pemilu 2024_PERINDO': 'Suara Parpol Pemilu 2024_PERINDO', 'Suara Parpol Pemilu 2024_PPP': 'Suara Parpol Pemilu 2024_PPP', 'Suara Parpol Pemilu 2024_UMMAT': 'Suara Parpol Pemilu 2024_UMMAT', });
lyr_PartaiKebangkitanBangsa_1.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Suara Parpol Pemilu 2024_Kab_Kot': 'TextEdit', 'Suara Parpol Pemilu 2024_PKB': 'Range', 'Suara Parpol Pemilu 2024_GERINDRA': 'Range', 'Suara Parpol Pemilu 2024_PDIP': 'Range', 'Suara Parpol Pemilu 2024_GOLKAR': 'Range', 'Suara Parpol Pemilu 2024_NASDEM': 'Range', 'Suara Parpol Pemilu 2024_BUR': 'Range', 'Suara Parpol Pemilu 2024_GELORA': 'Range', 'Suara Parpol Pemilu 2024_PKS': 'Range', 'Suara Parpol Pemilu 2024_PKN': 'Range', 'Suara Parpol Pemilu 2024_HANURA': 'Range', 'Suara Parpol Pemilu 2024_GARUDA': 'Range', 'Suara Parpol Pemilu 2024_PAN': 'Range', 'Suara Parpol Pemilu 2024_PBB': 'Range', 'Suara Parpol Pemilu 2024_DEMOKRAT': 'Range', 'Suara Parpol Pemilu 2024_PSI': 'Range', 'Suara Parpol Pemilu 2024_PERINDO': 'Range', 'Suara Parpol Pemilu 2024_PPP': 'Range', 'Suara Parpol Pemilu 2024_UMMAT': 'Range', });
lyr_PartaiKebangkitanBangsa_1.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Suara Parpol Pemilu 2024_Kab_Kot': 'inline label - visible with data', 'Suara Parpol Pemilu 2024_PKB': 'inline label - visible with data', 'Suara Parpol Pemilu 2024_GERINDRA': 'hidden field', 'Suara Parpol Pemilu 2024_PDIP': 'hidden field', 'Suara Parpol Pemilu 2024_GOLKAR': 'hidden field', 'Suara Parpol Pemilu 2024_NASDEM': 'hidden field', 'Suara Parpol Pemilu 2024_BUR': 'hidden field', 'Suara Parpol Pemilu 2024_GELORA': 'hidden field', 'Suara Parpol Pemilu 2024_PKS': 'hidden field', 'Suara Parpol Pemilu 2024_PKN': 'hidden field', 'Suara Parpol Pemilu 2024_HANURA': 'hidden field', 'Suara Parpol Pemilu 2024_GARUDA': 'hidden field', 'Suara Parpol Pemilu 2024_PAN': 'hidden field', 'Suara Parpol Pemilu 2024_PBB': 'hidden field', 'Suara Parpol Pemilu 2024_DEMOKRAT': 'hidden field', 'Suara Parpol Pemilu 2024_PSI': 'hidden field', 'Suara Parpol Pemilu 2024_PERINDO': 'hidden field', 'Suara Parpol Pemilu 2024_PPP': 'hidden field', 'Suara Parpol Pemilu 2024_UMMAT': 'hidden field', });
lyr_PartaiKebangkitanBangsa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});