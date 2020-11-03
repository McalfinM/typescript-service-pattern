import mongoose from 'mongoose'

const ReceiverSchema = new mongoose.Schema({
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
    sender_id: {
        type: String,
        ref: 'sender'
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

const Receiver = mongoose.model('Receiver', ReceiverSchema);

export default Receiver;
