import mongoose, { Schema, Document } from 'mongoose';

export interface ITestimonial extends Document {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
}

const TestimonialSchema = new Schema<ITestimonial>(
  {
    name: { type: String, required: true },
    location: { type: String, default: '' },
    avatar: { type: String, default: '' },
    rating: { type: Number, default: 5 },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);
