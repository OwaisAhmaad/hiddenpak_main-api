import mongoose, { Schema, Document } from 'mongoose';

export interface IGalleryImage extends Document {
  src: string;
  alt: string;
  location: string;
  height: string;
}

const GalleryImageSchema = new Schema<IGalleryImage>(
  {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    location: { type: String, required: true },
    height: { type: String, default: 'normal' },
  },
  { timestamps: true }
);

export default mongoose.model<IGalleryImage>('GalleryImage', GalleryImageSchema);
