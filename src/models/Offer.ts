import { ObjectId } from "mongodb";
import { Document } from "mongoose";
import { merchantCategoryCodeEnum } from "../misc";
import { BusinessDocument } from "./Business";

export interface OfferDocument extends Document {
  isActive: boolean;
  cashBackPercentage: number;
  expirationDate: Date | null;
  businessId: ObjectId | BusinessDocument;
  categoryType: merchantCategoryCodeEnum;
  merchantName: string | null;
  acceptorId: string | null;
  madeTransactionWithMeAlready: boolean;
}
