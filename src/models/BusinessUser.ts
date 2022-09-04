import { ObjectId } from "mongodb";
import { Document } from "mongoose";
import { BusinessDocument } from "./Business";

export interface BusinessUserDocument extends Document {
  email: string;
  firstName: string;
  lastName: string;
  businessId: ObjectId | BusinessDocument;
  firebaseId: string;
}
