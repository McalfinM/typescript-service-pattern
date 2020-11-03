import mongoose from 'mongoose'

const PaymentSchema = new mongoose.Schema({
    sender_id: {
        type: String
    },
    purpose: {
        type: String
    },
    service: {
        type: String
    },
    type: {
        type: String,
    },
    items: {
        type: String,
    },
    volume: {
        type: String
    },
    weights: {
        type: String
    },
    price: {
        type: String
    },
    packageName: {
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

const Payment = mongoose.model('Payment', PaymentSchema);

export default Payment
