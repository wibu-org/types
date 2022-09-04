import { Document } from "mongoose";

export interface CardIssuerDocument extends Document {
  name: string;
  publishableApiKey: string;
  encryptedSecretKey: string | null;
}
