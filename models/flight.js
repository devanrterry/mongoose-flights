var mongoose = require('mongoose');

var Schema = mongoose.Schema;
 
var destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SD']
    },
    arrival: {
        type: Date
    }
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        require: true
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            let today = new Date();
            return new Date(today.setFullYear(today.getFullYear() + 1));
         }
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SD'],
        default: 'SAN'
    },
    destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);