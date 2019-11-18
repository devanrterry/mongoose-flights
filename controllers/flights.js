var Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
}

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights});
    });
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
  }

function newFlight(req, res) {
    res.render('flights/new');
  }

