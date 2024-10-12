var size = 0;
var placement = 'point';

var style_PedestrianTraffic_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Btwn");
    var labelText = "";
    size = 0;
    var labelFont = "2.6px \'Bahnschrift\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Btwn_") !== null) {
        labelText = String(feature.get("Btwn_"));
    }
    if (value >= 0.000000 && value <= 96.694756) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,196,192,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.04}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 96.694756 && value <= 336.992737) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,190,165,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.04}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 336.992737 && value <= 681.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(251,112,80,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.04}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 681.000000 && value <= 1281.585693) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,32,32,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.04}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1281.585693 && value <= 4336.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(103,0,13,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.04}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
