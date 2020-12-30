// Define all of your ticket controller methods in this file that
// will be used as callbacks to your endpoints

let Ticket = require('../models/ticket');


function getTicketList(req, res){//display all tix in database
    Ticket.find({}, (err, tickets) => {
        if (err){
            res.status(500).send('Failed to retrieve tickets');

        }
        else{
            res.json(tickets);
        }
    });
}


function createTicket(req,res) {
    let ticket = new Ticket(req.body);
    ticket.save(function(err){
        if (err){
            res.status(500).send('Failed to create ticket');
        }
        else{
            res.status(201).json(ticket);
        }
    });
}


function getTicket(req, res){
    Ticket.findById(req.params.id, function(err, ticket){
        if (ticket){
            res.json(ticket);
        }
        else{
            res.status(500).send('Ticket with specified ID does not exist');
            
        }

    })
        

}



function updateTicket(req, res){
    Ticket.findByIdAndUpdate(req.params.id,
        { $set: req.body },
        { new: true },
        function (err, updatedTicket){
            if (updatedTicket){
                res.status(204).send('');
            }
            else{
                res.status(500).send('Failed to update ticket, ticket with specified ID does not exist') 
            }
        });
}




function deleteTicket(req, res){
    Ticket.findById(req.params.id, function(err, ticket){
        if (ticket) {
            ticket.remove(err => {
                if (err){
                    res.status(500).send('Failed to delete ticket')
                }
                else{
                    res.status(204).send('');
                }
            })
        }
        else{
            res.status(500).send('No such ticket exists');
        }

    })

}



exports.getTicketList= getTicketList;
exports.createTicket = createTicket;
exports.getTicket = getTicket;
exports.updateTicket = updateTicket;
exports.deleteTicket = deleteTicket;