(function($){
    var service = window.service = window.service || {};
    service.broadcast = (function(){
        var broadcastConstructor = function Broadcast(options){
            if(false === (this instanceof Broadcast)){
                return new Broadcast();
            }
            var self = this;
            var defaultOptions = {
                loadingEl: '.loading',
                mainContainerEl: '.main-container',
                introEl: '.intro'
            }
            this.options = options = $.extend(defaultOptions, options);
            this.getOptions = function(){ return options; }
            this.setOptions = function(param){ options = $.extend(options, param); }
        }

        broadcastConstructor.prototype.mainpageInit = function(){
            var self = this;
            $(self.options.loadingEl).fadeOut('slow', function(){
                $(self.options.loadingEl).hide();

                // no existing video, insert intro text
                $(self.options.introEl).removeClass('hide');
                $(self.options.introEl).show();
            })
        }

        return broadcastConstructor;
    }());
})(jQuery);
