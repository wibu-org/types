import { ObjectId } from "mongodb";
import { Document } from "mongoose";
import { BusinessDocument } from "./Business";

export interface PendingBusinessUserDocument extends Document {
  email: string;
  businessId: ObjectId | BusinessDocument;
}
