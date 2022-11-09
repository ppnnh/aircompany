const Plane = require('./Plane');

class PassengerPlane extends Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.passengersCapacity = passengersCapacity;
    }

    get PassengersCapacity() {
        return this.passengersCapacity;
    }

    set assengersCapacity(value){
        this.passengersCapacity=value;
    }
}

module.exports = PassengerPlane;
