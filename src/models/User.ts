import { ObjectId } from "mongodb";
import { Document } from "mongoose";
import { CardIssuerDocument } from "./CardIssuer";

export interface UserDocument extends Document {
  phoneNumber: string;
  cardIssuerId: ObjectId | CardIssuerDocument;
}
