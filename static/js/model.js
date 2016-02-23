/**
 * OpenSource Model
 * desc: data manipulation
 */
EH.OpenSource.Model = Backbone.Model.extend({
    /**
     * Get updated text
     * @param  {Number} isoDate  Timestamp in ISO format
     * @return {String}          String
     */
    getUpdatedText: function(isoDate) {
        var d = new Date(isoDate),
            ms = d.getTime(),
            now = Date.now(),
            delta = now - parseInt(ms, 10),
            sec = 1000,
            min = 60 * sec,
            hour = 60 * min,
            day = 24 * hour,
            month = 30 * day,
            year = 12 * month,
            time,
            text = 'Updated ';

        if (delta < sec) {
            text += 'now';
        }
        else if (delta < min) {
            time = Math.floor(delta/sec);
            text += (delta < 2*sec) ? '1 second ago' : time +' seconds ago';
        }
        else if (delta < hour) {
            time = Math.floor(delta/min);
            text += (delta < 2*min) ? '1 minute ago' : time +' minutes ago';
        }
        else if (delta < day) {
            time = Math.floor(delta/hour);
            text += (delta < 2*hour) ? '1 hour ago' : time +' hours ago';
        }
        else if (delta < month) {
            time = Math.floor(delta/day);
            text += (delta < 2*day) ? '1 day ago' : time +' days ago';
        }
        else if (delta < year) {
            time = Math.floor(delta/month);
            text += (delta < 2*month) ? '1 month ago' : time +' months ago';
        }
        else {
            time = Math.floor(delta/year);
            text += (delta < 2*year) ? '1 year ago' : time +' years ago';
        }

        return text;
    },

    /**
     * Load GitHub data
     * @param  {Object} data  Project data
     */
    loadStatsData: function(data) {
        var that = this,
            projects = this.get('projects');

        // iterate through each project
        projects.forEach(function(project) {
            if (project.github && project.github.api) {
                $.ajax({
                    cache: false,
                    url: project.github.api,
                    success: function(results) {
                        that.trigger('model:load:stats', results);
                    },
                    error: function(err) {
                        // fail silently
                    }
                });
            }
        });
    },

    /**
     * Define Url
     * @return {String}  Url string
     */
    url: function() {
        return '/githubio/static/js/data/data.json';
    }
});
