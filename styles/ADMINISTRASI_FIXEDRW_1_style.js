var size = 0;
var placement = 'point';

var style_ADMINISTRASI_FIXEDRW_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Arial\', sans-serif";
    var labelFill = "#0007c4";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("WADMRW") !== null) {
        labelText = String(feature.get("WADMRW"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,40,200,1.0)', lineDash: [13.299999999999999,2.6599999999999997], lineCap: 'butt', lineJoin: 'miter', width: 2.6599999999999997}),fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
