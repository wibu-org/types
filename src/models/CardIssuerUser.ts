import { ObjectId } from "mongodb";
import { Document } from "mongoose";
import { CardIssuerDocument } from "./CardIssuer";

export interface CardIssuerUserDocument extends Document {
  email: string;
  firstName: string;
  lastName: string;
  cardIssuerId: ObjectId | CardIssuerDocument;
  firebaseId: string;
}
