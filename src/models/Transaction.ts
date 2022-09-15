import { ObjectId } from "mongodb";
import { Document } from "mongoose";
import { CardIssuerDocument } from "./CardIssuer";
import { OfferRedemptionDocument } from "./OfferRedemption";
import { UserDocument } from "./User";

export type Merchant = {
  name: string;
  acceptorId: string;
  city: string;
  state: string;
};

export enum transactionStatusEnum {
  Pending = "PENDING",
  Settled = "SETTLED",
  Voided = "VOIDED",
}

export interface TransactionDocument extends Document {
  userId: ObjectId | UserDocument;
  cardIssuerId: ObjectId | CardIssuerDocument;
  offerRedemptionId: ObjectId | OfferRedemptionDocument | null;
  amountInDollars: number;
  mcc: string;
  issuerTransactionId: string;
  merchant: Merchant;
  status: transactionStatusEnum;
}
