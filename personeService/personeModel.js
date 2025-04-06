import mongosee from "mongoose";
const { Schema } = mongosee;

export const personeSchema = new Schema({
  fistName: String,
  lastName: String,
  age: String,
  phone: [String],
  email: String,
  address: {
    city: String,
    street: String,
    postalCode: String,
  },
  hobbies: [String],
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Persone = mongosee.model("Persone", personeSchema);
export default Persone;
