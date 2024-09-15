import mongoose, { Schema, Document } from 'mongoose';

interface IGuest extends Document {
    name: string;
    message: string;
    jumlah_tamu : number;
    date: Date;
}

const GuestSchema: Schema = new Schema({
    name: { type: String, required: true },
    message: { type: String, required: true },
    jumlah_tamu:{type:Number, required:true},
    date: { type: Date, default: Date.now }
});

export default mongoose.model<IGuest>('Guest', GuestSchema);
