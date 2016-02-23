/**
 * OpenSource View
 * desc: ui presentation
 */
EH.OpenSource.View = Backbone.View.extend({
    /**
     * Element
     */
    el: 'body',

    /**
     * Events hash map
     * sytax: '[event] [element]': '[handler]'
     */
    events: {
        'click #splash .arrow': 'handleSplashArrowClick'
    },

    /**
     * Initialize view
     */
    initialize: function() {
        // invoke init functions
        this._resizeSplash();

        // setup event listeners
        // note: since it's listening to the window need to do it here
        $(window).on('resize', this._resizeSplash.bind(this));

        // setup pub/sub event listeners
        this.model.on('sync', this.render, this);
        this.model.on('model:load:stats', this.renderStats, this);
    },

    /**
     * Handler for splash arrow click
     * @param  {Object} e  JS Event object
     */
    handleSplashArrowClick: function(e) {
        var splashY = $(window).outerHeight();
        $('html,body').animate({scrollTop:splashY});
    },

    /**
     * Render view
     */
    render: function() {
        var templateData = this.model.toJSON(),
            templateFunc = Handlebars.templates['projects'],
            templateHtml = templateFunc(templateData);

        // render html on page
        this.$el.find('#projects').html(templateHtml);

        // after render, load stats
        this.model.loadStatsData();
    },

    /**
     * Render GitHub stars and forks stats
     * @param  {Object} data  Repo data
     */
    renderStats: function(data) {
        var $project = $('#'+ data.name),
            updatedText = this.model.getUpdatedText(data.updated_at);

        // update project stats
        $project.find('.stars').html(data.stargazers_count).addClass('visible');
        $project.find('.forks').html(data.forks_count).addClass('visible');
        $project.find('.updated').html(updatedText);
    },

    /**
     * Resize splash image
     * @param  {Object} e  JS Event object
     */
    _resizeSplash: function(e) {
        var splashY = $(window).outerHeight();
        $('#splash').css({height:splashY})
    }
});
