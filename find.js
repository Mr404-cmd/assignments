var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("viaan");
  dbo.collection("users").find({}).toArray(function(err, result) {
    if (err) throw err;
    dbo.collection("usersBackup").insertMany(result, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        dbo.collection("users").drop(function(err, delOK) {
            if (err) throw err;
            if (delOK) console.log("users deleted");
            db.close();
          });
      });
  });
});