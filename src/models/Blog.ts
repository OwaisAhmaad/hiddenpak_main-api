import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  authorImage: string;
  authorBio: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  published: boolean;
}

const BlogSchema = new Schema<IBlog>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String, default: '' },
    content: { type: String, default: '' },
    coverImage: { type: String, default: '' },
    author: { type: String, default: '' },
    authorImage: { type: String, default: '' },
    authorBio: { type: String, default: '' },
    date: { type: String, default: '' },
    readTime: { type: String, default: '' },
    category: { type: String, default: '' },
    tags: [{ type: String }],
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IBlog>('Blog', BlogSchema);
