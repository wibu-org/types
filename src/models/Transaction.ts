import { ObjectId } from "mongodb";
import { Document } from "mongoose";
import { CardIssuerDocument } from "./CardIssuer";
import { UserDocument } from "./User";

type Merchant = {
  name: string;
  acceptorId: string;
  city: string;
  state: string;
};

export interface TransactionDocument extends Document {
  userId: ObjectId | UserDocument;
  cardIssuerId: ObjectId | CardIssuerDocument;
  amountInDollars: number;
  mcc: string;
  issuerTransactionId: string;
  merchant: Merchant;
}
