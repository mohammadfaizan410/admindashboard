import mongoose from "mongoose";


export interface UserInterface extends mongoose.Document{
    username: string;
    password: string;
    email: string;
    fullname: string;
    date_of_birth: Date;
    user_type: string;
    token: string;
}
export interface ReviewInterface extends mongoose.Document{
    user_id: string;
    rating: number;
    content: string;
    creation_date: Date;
    helpfull: {
        total: number;
        users: string[];
    };
    business_id: string;
    product_id: string;
}
export interface CustomerInterface extends mongoose.Document{
    user_id: string;
    orders: string[];
    purchase_history: string[];
    billing_details: {
        invoiceNumber: string;
    };
    followed_businesses: string[];
    followed_products: string[];
    cart_items: {
        product_id: string;
        quantity: number;
    }[];
}
export interface ProductInterface extends mongoose.Document{
    business_id: string;
    name: string;
    brandName: string;
    cartUnit: string;
    price: number;
    description: string;
    productCategory: string;
    imageUrl: string;
    strainName: string;
    strainCategory: string;
    strainDescription: string;
    strainImage: string;
    followers: string[];
    reviews: string[];
    isFeatured: boolean;
}
export interface BusinessInterface extends mongoose.Document {
    user_id: string;
    name: string;
    address1: string;
    coverPhotoUrl: string;
    country: string;
    city: string;
    description: string;
    email: string;
    flags: string[];
    locations: Object[];
    logoUrl: string;
    mapMarkerLocations: Object[];
    phone: string;
    photos: Object[];
    primaryLocation: Object;
    state: string;
    tags: string[];
    website: string;
    zip: string;
    products: string[];
    instore_purchasing: boolean;
    claimed: boolean;
    business_type: string;
    deals: string[];
    reviews: string[];
    filters: string[];
    registration_date: Date;
    followers: string[];
    opening_hours: string[];
    isFeatured: boolean;
    isTopRated: boolean;
}
export interface BusinessClaimInterface extends mongoose.Document{
    business_id: string;
    name: string;
    email: string;
    submission_date: Date;
    business_ownership_document: string;
    government_issued_id: string;
    status: string;
}



const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },

  password: {
    type: String,
  },

  email: {
    type: String,
  },

  fullname: {
    type: String,
  },

  date_of_birth: {
    type: Date,
  },

  user_type: {
    type: String,
  },

  token: {
    type: String,
  },
});

const reviewSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  rating: {
    type: Number,
  },

  content: {
    type: String,
  },

  creation_date: {
    type: Date,
  },

  helpfull: {
    total: Number,
    users: [String],
  },
  business_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    default: null
  },
  product_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    default: null
  },
});

const customerSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  orders: {
    type: [String],
  },

  purchase_history: {
    type: [String],
  },

  billing_details: {
    invoiceNumber: String,
  },

  followed_businesses: {
    type: [String],
  },

  followed_products: {
    type: [String],
  },

  cart_items: [
    {
      product_id: String,
      quantity: Number,
    },
  ],
});

const productSchema = new mongoose.Schema({
  business_id: {
    type: String,
  },

  name: {
    type: String,
  },

  brandName: {
    type: String,
  },
  cartUnit: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  productCategory: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  strainName: {
    type: String,
  },
  strainCategory: {
    type: String,
  },
  strainDescription: {
    type: String,
  },
  strainImage: {
    type: String,
  },
  followers: {
    type: [String],
  },

  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  isFeatured: {
    type: Boolean,
  },
});

const businessSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  name: {
    type: String,
  },
  address1: {
    type: String,
  },
  coverPhotoUrl: {
    type: String,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  description: {
    type: String,
  },
  email: {
    type: String,
  },
  flags: {
    type: [String],
  },
  locations: {
    type: [Object],
  },
  logoUrl: {
    type: String,
  },
  mapMarkerLocations: {
    type: [Object],
  },
  phone: {
    type: String,
  },
  photos: {
    type: [Object],
  },
  primaryLocation: {
    type: Object,
  },
  state: {
    type: String,
  },
  tags: {
    type: [String],
  },
  website: {
    type: String,
  },
  zip: {
    type: String,
  },
  //TODO: Add a product schema
  products: {
    type: [String],
  },

  instore_purchasing: {
    type: Boolean,
  },

  claimed: {
    type: Boolean,
  },

  business_type: {
    type: String,
  },
  //TODO: Add a deals schema
  deals: {
    type: [String],
  },

  reviews: {
    type: [String],
  },

  filters: {
    type: [String],
  },

  registration_date: {
    type: Date,
  },

  followers: {
    type: [String],
  },

  opening_hours: {
    type: [String],
  },
  isFeatured: {
    type: Boolean,
  },
  isTopRated: {
    type: Boolean,
  },
});



const businessClaimSchema = new mongoose.Schema({
  business_id: {
    type: String,
  },

  name: {
    type: String,
  },

  email: {
    type: String,
  },

  submission_date: {
    type: Date,
  },

  business_ownership_document: {
    type: String,
  },

  government_issued_id: {
    type: String,
  },

  status: {
    type: String, //approved, pending, rejected
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
const Customer = mongoose.models.Customer || mongoose.model<CustomerInterface>("Customer", customerSchema);
const Business = mongoose.models.Business || mongoose.model<BusinessInterface>("Business", businessSchema);
const Product = mongoose.models.Product || mongoose.model<ProductInterface>("Product", productSchema);
const Review = mongoose.models.Review || mongoose.model<ReviewInterface>("Review", reviewSchema);
const BusinessClaim = mongoose.models.BusinessClaim || mongoose.model<BusinessClaimInterface>("BusinessClaim", businessClaimSchema);

export {User, Customer, Business, Product, Review, BusinessClaim};

