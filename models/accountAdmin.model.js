import mongoose from "mongoose";
import slug from "mongoose-slug-updater"
const { Schema } = mongoose;
mongoose.plugin(slug);
//plugin == add
const schema = new Schema(
  {
    fullName: String,
    email: String,
    password: String,
    roleId: String,
    address: String,
    phone: String,
    status: {
      type: String,
      default: "active"
    }, //active or inactive
    deleted: {
      type: Boolean,
      default: false
    },
    deletedAt: Date,
    deletedBy: String,
    createdBy: String,
    updateBy: String,
   slug: {
      type: String,
      slug: "fullName"
    } 
  },
  {
    timestamps: true //ngay tao, ngay chinh sua cua san pham
  }
)

const AccountAdmin = mongoose.model("AccountAdmin", schema , "account-admin");

export default AccountAdmin;