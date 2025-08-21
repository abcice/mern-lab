import mongoose from "mongoose";
const Schema = mongoose.Schema;
const hootSchema = new Schema ({
    text: { type : String,
         required: true
    },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
},
{
    timestamps: true
})

export default mongoose.model('Hoot', hootSchema)