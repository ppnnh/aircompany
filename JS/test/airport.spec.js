const assert = require('chai').assert;

const Plane = require('../Planes/Plane');
const MilitaryPlane = require('../Planes/MilitaryPlane');
const PassengerPlane = require('../Planes/PassengerPlane');
const Airport = require('../Airport');
const MilitaryType = require('../models/MilitaryType');
const experimentalPlane = require('../Planes/experimentalPlane');
const ExperimentalTypes = require('../models/ExperimentalTypes');
const ClassificationLevel = require('../models/ClassificationLevel');

describe('My Test', () => {

    let planes = [
        new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
        new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
        new PassengerPlane('Boeing-747', 980, 16100, 70500, 242),
        new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
        new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
        new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
        new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
        new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
        new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, MilitaryType.TYPE_BOMBER),
        new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, MilitaryType.TYPE_BOMBER),
        new MilitaryPlane('B-52 Stratofortress', 1000, 20000, 80000, MilitaryType.TYPE_BOMBER),
        new MilitaryPlane('F-15', 1500, 12000, 10000, MilitaryType.TYPE_FIGHTER),
        new MilitaryPlane('F-22', 1550, 13000, 11000, MilitaryType.TYPE_FIGHTER),
        new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, MilitaryType.TYPE_TRANSPORT),
        new experimentalPlane("Bell X-14", 277, 482, 500, ExperimentalTypes.HIGH_ALTITUDE, ClassificationLevel.SECRET),
        new experimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, ExperimentalTypes.VTOL, ClassificationLevel.TOP_SECRET)
    ];
    let planeWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242);

    it('should have military Planes with transport type', () => {
        let airport = new Airport(planes);
        assert.isTrue(airport.getTransportMilitaryPlanes().MilitaryType() === MilitaryType.TYPE_TRANSPORT);
    });

    it('should check passenger plane with max capacity', () => {
        let airport = new Airport(planes);
        assert.isFalse(airport.getPassengerPlaneWithMaxPassengersCapacity() === planeWithMaxPassengerCapacity);
    });


    it('should get passenger plane with max capacity', () => {
        let airport = new Airport(planes);
        airport.sortByMaxLoadCapacity();
        assert.isTrue(airport.Planes()[i].MaxLoadCapacity() > airport.Planes()[i + 1].MaxLoadCapacity());
    })

    it('should check has at least one bomber in military planes', () => {
        let airport = new Airport(planes);
        assert.isTrue(airport.getBomberMilitaryPlanes().getMilitaryType() === MilitaryType.TYPE_BOMBER);
    })

    it('should check that experimentsl planes has classification level higher than unclassified', () => {
        let airport = new Airport(planes);
        assert.isFalse(airport.getExperimentalPlanes().classificationLevel === ClassificationLevel.UNCLASSIFIED);
    });
});



