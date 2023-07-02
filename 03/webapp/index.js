sap.ui.define([
    'sap/m/Text'
], function(Text) {
    'use strict';

    const oText = new Text({
        text: "HW",
        tooltip: "Im tooltip"
    });

    oText.placeAt("content");
});