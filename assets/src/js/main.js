/* ***** ----------------------------------------------- ***** **
** ***** Main JS
** ***** ----------------------------------------------- ***** */


var Main = {
	modules: {}
};

/* global jQuery */
(function($){
	'use strict';

	Main.init = function() {

		// For each module in Main, call the init function
		$.each(Main.modules, function(moduleName, moduleFunction) {
			if ($.isFunction(moduleFunction().init())) {
				moduleFunction().init();
			}
		});

	};

	/* INIT */

	$(function(){

		Main.init();

	});

})(jQuery);