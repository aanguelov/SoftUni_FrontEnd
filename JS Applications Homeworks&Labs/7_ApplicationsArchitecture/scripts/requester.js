var app = app || {};

app.requester = (function () {
    function Requester(appId, appSecret) {
        this.appId = appId;
        this.appSecret = appSecret;
        this.baseUrl = 'https://baas.kinvey.com/';
    }

    Requester.prototype.get = function(url, useSession) {
        return this.makeRequest('GET', url, null, useSession);
    };

    Requester.prototype.post = function(url, data, useSession) {
        return this.makeRequest('POST', url, data, useSession);
    };

    Requester.prototype.put = function(url, data, useSession) {
        return this.makeRequest('PUT', url, data, useSession);
    };

    Requester.prototype.delete = function(url, useSession) {
        return this.makeRequest('DELETE', url, null, useSession);
    };

    Requester.prototype.makeRequest = function(method, url, data, useSession) {
        var token,
            defer = Q.defer(),
            _this = this,
            options = {
                method: method,
                url: url,
                success: function (data) {
                    defer.resolve(data);
                },
                error: function (error) {
                    defer.reject(error);
                }
            };

        $.ajaxSetup({
            beforeSend: function(xhr, settings) {
                if (!useSession) {
                    token = 'dGhlQm9va0NvbGxlY3RvcjppbG92ZWJvb2tz';
                    xhr.setRequestHeader('Authorization', 'Basic ' + token);
                } else {
                    token = sessionStorage['sessionAuth'];
                    xhr.setRequestHeader('Authorization', 'Kinvey ' + token);
                }
                if(data) {
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    settings.data = JSON.stringify(data);
                    return true;
                }
            }
        });

        $.ajax(options);

        return defer.promise;
    };

    return {
        config: function(appId, appSecret) {
            return new Requester(appId, appSecret);
        }
    };
}());