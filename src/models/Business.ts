import { Document } from "mongoose";
import { merchantCategoryCodeEnum } from "../misc";

export interface BusinessDocument extends Document {
  name: string;
  categoryType: merchantCategoryCodeEnum;
  merchantName: string;
  acceptorId: string;
}
