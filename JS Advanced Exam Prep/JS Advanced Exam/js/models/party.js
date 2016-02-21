var app = app || {};

(function (eventsSystem) {
    function Party(options) {
        eventsSystem._event.call(this, options);
        this.setIsCatered(options.isCatered);
        this.setIsBirthday(options.isBirthday);
        this.setOrganiser(options.organiser);
    }

    Party.extends(eventsSystem._event);

    Party.prototype.checkIsCatered = function getIsCatered() {
        return this._isCatered;
    };

    Party.prototype.setIsCatered = function setIsCatered(isCatered) {
        if (typeof isCatered !== 'boolean') {
            throw new Error('Argument must be a boolean value.')
        }

        this._isCatered = !!isCatered;
    };

    Party.prototype.checkIsBirthday = function getIsBirthday() {
        return this._isBirthday;
    };

    Party.prototype.setIsBirthday = function setIsBirthday(isBirthday) {
        if (typeof isBirthday !== 'boolean') {
            throw new Error('Argument must be a boolean value.')
        }

        this._isBirthday = !!isBirthday;
    };

    Party.prototype.getOrganiser = function getOrganiser() {
        return this._organiser;
    };

    Party.prototype.setOrganiser = function setOrganiser(organiser) {
        if (organiser instanceof eventsSystem._employee) {
            this._organiser = organiser;
        }else {
            throw new Error('Argument have to be an instance of Employee.')
        }
    };

    eventsSystem._party = Party;
    eventsSystem.party = function(options) {
        return new Party(options);
    }
})(app);
