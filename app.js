/* Load the app */

var APP_PORT = 1337;

var express = require('express');
var app = express();
app.use(express.bodyParser());

app.get('/hello', function(req,res) {
	res.send('Hello World!');
});

app.post('/order/new', function(req,res){
	var quantity = req.body.quantity;
	var price = req.body.price;
	var order_total = price * quantity;
	res.send("Your order total: $" + order_total.toString());
});

app.listen(APP_PORT);
console.log('Listening on port ' + APP_PORT.toString());