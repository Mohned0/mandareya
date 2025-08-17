var size = 0;
var placement = 'point';

var style_381_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "3.9000000000000004px \'Showcard Gothic\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("اسم مقدم الطلب") !== null) {
        labelText = String(feature.get("اسم مقدم الطلب"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.800000000000001 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(225,226,225,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(0,105,70,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
