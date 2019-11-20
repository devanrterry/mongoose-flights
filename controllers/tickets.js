var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
    // addTicket
}

// function addTicket(req, res){
//     Flight.findById(req.params.id, function(err, flight){
//         flight.ticket.push(req.body.ticketId);
//         flight.save(function(err){
//         res.redirect(`/flights/${flight._id}`);
//         });
//     });
// }

function create(req, res) {
    req.body.flight = req.params.id
    Ticket.create(req.body, function(err, ticket){
        res.redirect(`/flights/${req.params.id}`);
    });
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render('tickets/new', {
        title: 'Add Ticket',
        flight
      });
    })
  }