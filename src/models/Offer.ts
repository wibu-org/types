import { ObjectId } from "mongodb";
import { Document } from "mongoose";
import { merchantCategoryCodeEnum } from "../misc";
import { BusinessDocument } from "./Business";

export enum transactionWithMeConditionEnum {
  NeverBefore = "NEVER_BEFORE",
  AtLeastOnceBefore = "AT_LEAST_ONCE_BEFORE",
  DoesNotMatter = "DOES_NOT_MATTER",
}

export interface OfferDocument extends Document {
  isActive: boolean;
  cashBackPercentage: number;
  expirationDate: Date | null;
  businessId: ObjectId | BusinessDocument;
  categoryType: merchantCategoryCodeEnum;
  merchantName: string | null;
  acceptorId: string | null;
  transactionWithMeCondition: transactionWithMeConditionEnum;
}
