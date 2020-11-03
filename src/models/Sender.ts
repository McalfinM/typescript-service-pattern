import mongoose from 'mongoose';

const SenderSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    country: {
        type: String
    },
    addressOne: {
        type: String
    },
    addressTwo: {
        type: String
    },
    addressThree: {
        type: String
    },
    city: {
        type: String
    },
    postCode: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: null
    }
});

const Sender = mongoose.model('Sender', SenderSchema);

export default Sender;
