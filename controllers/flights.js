var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
    delete: deleteFlight
}

function deleteFlight(req, res){
    Flight.findByIdAndDelete(req.params.id, function(err){
      res.redirect('/flights');
    });
}

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights});
    });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render('flights/show', { title: 'Flight Detail', flight, tickets });
    });
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

