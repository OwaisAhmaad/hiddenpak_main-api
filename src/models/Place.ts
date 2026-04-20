import mongoose, { Schema, Document } from 'mongoose';

export interface IPlace extends Document {
  slug: string;
  name: string;
  region: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  rating: number;
  altitude: string;
  bestTime: string;
  category: string;
  featured: boolean;
}

const PlaceSchema = new Schema<IPlace>(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    region: { type: String, required: true },
    description: { type: String, required: true },
    longDescription: { type: String, default: '' },
    image: { type: String, required: true },
    gallery: [{ type: String }],
    rating: { type: Number, default: 0 },
    altitude: { type: String, default: '' },
    bestTime: { type: String, default: '' },
    category: { type: String, required: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IPlace>('Place', PlaceSchema);
