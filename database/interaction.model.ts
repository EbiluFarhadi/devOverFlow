import { Schema, models, model, Document } from "mongoose";

export interface IInteraction extends Document {
  user: Schema.Types.ObjectId; // refence to user
  action: string;
  question: Schema.Types.ObjectId; // refence to question
  answer: Schema.Types.ObjectId; // refence to answer
  tags: Schema.Types.ObjectId[]; // refence to tags
  createdAt: Date;
}

const InteractionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  action: { type: String, required: true },
  question: { type: Schema.Types.ObjectId, ref: "Question" },
  answer: { type: Schema.Types.ObjectId, ref: "answer" },
  tags: [{ type: Schema.Types.ObjectId, ref: "tags" }],
  createdAt: { type: Date, default: Date.now },
});

const Interaction =
  models.Interaction || model("Interaction", InteractionSchema);

export default Interaction;
