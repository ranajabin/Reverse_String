sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("reversestring1.reversestringproject.controller.View1", {
            onInit: function () {

            },

            onPressReverse: function(){
                var string1 = "";
                var str = this.getView().byId("inp1").getValue();

                for (var i = str.length - 1; i >= 0; i--) { 
                    string1 = string1 + str[i];
                }
               
                alert(string1);
            }
        });
    });
