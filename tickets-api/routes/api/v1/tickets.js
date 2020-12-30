// define all your endpoints for the ticket model in this file
let express = require('express');
let router = express.Router();

let controller = require('../../../controllers/ticketController');
let Ticket = require('../../../models/ticket');



router.route('/')
.get(controller.getTicketList)
.post(controller.createTicket);

router.route('/:id')
.get(controller.getTicket)
.put(controller.updateTicket)
.delete(controller.deleteTicket);



module.exports = router;