module.exports = function(app, db){

  var myobj = [
    { name: 'Chocolate Heaven', price:20, type: 'icecream', description: 'chocolate'},
    { name: 'Tasty Lemon', price:30, type: 'icecream', description: 'lemon'},
    { name: 'Vanilla Dream', price:40, type: 'icecream', description: 'vanilla'}
  ];

  db.collection("products").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("data added");
    console.log(res);
  });
}
