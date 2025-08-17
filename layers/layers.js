ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([5166217.477157, 2828093.164270, 5242209.569884, 2872493.730603]);
var wms_layers = [];


        var lyr_DarkMatternolabelsretina_0 = new ol.layer.Tile({
            'title': 'Dark Matter [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}@2x.png'
            })
        });

        var lyr_DarkMatternolabels_1 = new ol.layer.Tile({
            'title': 'Dark Matter [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_381_3 = new ol.format.GeoJSON();
var features_381_3 = format_381_3.readFeatures(json_381_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_381_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_381_3.addFeatures(features_381_3);
var lyr_381_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_381_3, 
                style: style_381_3,
                popuplayertitle: 'الطلبات الجديدة حتى 3-8 (1)',
                interactive: true,
                title: '<img src="styles/legend/381_3.png" /> الطلبات الجديدة حتى 3-8 (1)'
            });

lyr_DarkMatternolabelsretina_0.setVisible(true);lyr_DarkMatternolabels_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_381_3.setVisible(true);
var layersList = [lyr_DarkMatternolabelsretina_0,lyr_DarkMatternolabels_1,lyr_OpenStreetMap_2,lyr_381_3];
lyr_381_3.set('fieldAliases', {'رغم البلاغ': 'رغم البلاغ', 'رقم المنزل': 'رقم المنزل', 'الحي': 'الحي', 'خط الطول': 'خط الطول', 'خط العرض': 'خط العرض', 'المستكشف': 'المستكشف', 'التاريخ': 'التاريخ', 'حالة البلاغ': 'حالة البلاغ', 'الملاحظات': 'الملاحظات', 'البلدية': 'البلدية', 'رقم الهاتف': 'رقم الهاتف', 'اسم مقدم الطلب': 'اسم مقدم الطلب', });
lyr_381_3.set('fieldImages', {'رغم البلاغ': 'Range', 'رقم المنزل': 'Range', 'الحي': 'TextEdit', 'خط الطول': 'TextEdit', 'خط العرض': 'TextEdit', 'المستكشف': 'TextEdit', 'التاريخ': 'TextEdit', 'حالة البلاغ': 'TextEdit', 'الملاحظات': 'TextEdit', 'البلدية': 'TextEdit', 'رقم الهاتف': 'Range', 'اسم مقدم الطلب': 'TextEdit', });
lyr_381_3.set('fieldLabels', {'رغم البلاغ': 'no label', 'رقم المنزل': 'no label', 'الحي': 'no label', 'خط الطول': 'no label', 'خط العرض': 'no label', 'المستكشف': 'no label', 'التاريخ': 'no label', 'حالة البلاغ': 'no label', 'الملاحظات': 'no label', 'البلدية': 'no label', 'رقم الهاتف': 'no label', 'اسم مقدم الطلب': 'inline label - always visible', });
lyr_381_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});