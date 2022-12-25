/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"reversestring1/reversestringproject/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
