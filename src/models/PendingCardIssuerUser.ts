import { ObjectId } from "mongodb";
import { Document } from "mongoose";
import { CardIssuerDocument } from "./CardIssuer";

export interface PendingCardIssuerUserDocument extends Document {
  email: string;
  cardIssuerId: ObjectId | CardIssuerDocument;
}
