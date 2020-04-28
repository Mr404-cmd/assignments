var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,{ useUnifiedTopology: true } ,function(err, db) {
  if (err) throw err;
  var dbo = db.db("viaan");
  var myobj = [
    { name: 'shubham', address: 'Mumbai'},
    { name: 'Saurav', address: 'Pune'},
    { name: 'Rohit', address: 'Nagpur'},
    { name: 'Shivam', address: 'Nasik'},
    { name: 'Rahul', address: 'Varanasi'},
    { name: 'Mansi', address: 'Surat'},
    { name: 'Hemlata', address: 'Jaipur'},
    { name: 'Shraddha', address: 'Bhopal'},
    { name: 'Abhishek', address: 'Jaunpur'},
    { name: 'sushil', address: 'Thane'},
    { name: 'Ajit', address: 'Mumbai'},
    { name: 'Praful', address: 'vapi'},
    { name: 'vishal', address: 'chhatishgadh'},
    { name: 'Ashok', address: 'Mirzapur'}
  ];
  dbo.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});