import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/shipme', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('database connect'))
    .catch(err => console.log(err));