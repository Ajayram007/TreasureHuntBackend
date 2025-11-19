const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://treasure_hunt:5k8rBTea1MIGCYiH@treasurehunt.0s7bsa2.mongodb.net/?appName=TreasureHunt');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
