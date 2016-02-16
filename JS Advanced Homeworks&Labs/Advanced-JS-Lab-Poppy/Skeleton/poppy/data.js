if (!Object.create) {
    Object.create = function(proto) {
        function F() {}
        F.prototype = proto;
        return new F();
    };
}

Object.prototype.extends = function(parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

var popupsModule = (function() {
    var Popup = (function() {
        function Popup(title, message, type) {
            this.title = title;
            this.message = message;
            this.type = type;
        }

        Popup.prototype._popupData = function() {
            return this.popupData;
        };

        return Popup;
    })();

    var Success = (function() {
        function Success(title, message, type) {
            Popup.call(this, title, message, type);
            this.autoHide = true;
            this.timeOut = 5000;
            this.position = 'bottomLeft';
        }

        Success.extends(Popup);

        return Success;
    })();

    var Info = (function() {
        function Info(title, message, type) {
            Popup.call(this,title, message, type);
            this.closeButton = true;
            this.position = 'topLeft';
            this.timeOut = 0;
        }

        Info.extends(Popup);

        return Info;
    })();

    var Error = (function() {
        function Error(title, message, type) {
            Popup.call(this,title, message, type);
            this.position = 'topRight';
        }

        Error.extends(Popup);

        return Error;
    })();

    var Warning = (function() {
        function Warning(title, message, type) {
            Popup.call(this, title, message, type);
            this.callback = function() {
                window.location = 'https://www.youtube.com/watch?v=HMUDVMiITOU';
            };
            this.position = 'bottomRight';
        }

        Warning.extends(Popup);

        return Warning;
    })();

    return {
        createSuccess: function(title, message, type)  {
            return {
                _popupData: new Success(title, message, type)
            }
        },
        createInfo: function(title, message, type)  {
            return {
                _popupData: new Info(title, message, type)
            }
        },
        createError: function(title, message, type) {
            return {
                _popupData: new Error(title, message, type)
            }
        },
        createWarning: function(title, message, type) {
            return {
                _popupData: new Warning(title, message, type)
            }
        }
    }
})();