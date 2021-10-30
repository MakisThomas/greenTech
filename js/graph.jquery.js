if (typeof Object.create !== 'function') {
    Object.create = function (obj) {
        function F() {};
        F.prototype = obj;
        return new F();
    }
}

(function ($, window, document, undefined) {

    var Obj = {
        init: function (options,elem) {
            var self = this;
            self.$elem = $(elem);
            self.options = $.extend({}, $.fn.graph.options, options);
            self.getPercents();

        },

        getPercents: function () {
            self = this;
            var percents = [];
            $.each(this.$elem, function (key, item) {
                percents.push($(item).data('percent'));
            });

            self.animateGraphs(percents);
        },

        animateGraphs: function (percents) {
            var self = this;
            $.each(this.$elem, function(key,item){
                $(item).animate({width: percents[key]+'%'},self.options.time);
            });
        }


    };



    $.fn.graph = function (options) {
        
        var obj = Object.create(Obj);
        obj.init(options,this);
        return obj;
    };
    
    $.fn.graph.options = {
      time: 1000  
    };

})(jQuery, window, document);