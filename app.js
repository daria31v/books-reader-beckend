const mongoose = require('mongoose');

    
const DB_HOST = "mongodb+srv://Daria:VY5lGgyUxKTKXngM@cluster0.pz3wbxy.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.connect(DB_HOST)
.then (()=> console.log('Connected to MongoDB'))
.catch (error => console.log(error.message));