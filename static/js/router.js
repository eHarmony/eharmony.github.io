/**
 * OpenSource Router
 * desc: routes and app instantation
 */
EH.OpenSource.Router = Backbone.Router.extend({
    /**
     * Routes hash map
     * syntax: '[url]': '[handler]'
     */
    routes: {
        '*default': 'handleOpenSourceRoute'
    },

    /**
     * Handler for Open-Source Route
     */
    handleOpenSourceRoute: function() {
        var model = new EH.OpenSource.Model(),
            view = new EH.OpenSource.View({model:model});

        // load data
        model.fetch();
    }
});


// start one-page application
$(function() {
    var app = new EH.OpenSource.Router();
    Backbone.history.start({pushState:true});
});
