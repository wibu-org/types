import { ObjectId } from "mongodb";
import { Document } from "mongoose";
import { OfferDocument } from "./Offer";
import { TransactionDocument } from "./Transaction";
import { UserDocument } from "./User";

export interface OfferRedemptionDocument extends Document {
  userId: ObjectId | UserDocument;
  transactionId: ObjectId | TransactionDocument;
  offerId: ObjectId | OfferDocument;
  cashBackEarnedInDollars: number;
  businessName: string;
}
