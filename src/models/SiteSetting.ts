import mongoose, { Schema, Document } from 'mongoose';

export interface ISiteSetting extends Document {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  socialFacebook: string;
  socialInstagram: string;
  socialX: string;
  socialPinterest: string;
  socialYoutube: string;
  socialTikTok: string;
}

const SiteSettingSchema = new Schema<ISiteSetting>(
  {
    siteName: { type: String, default: '' },
    siteDescription: { type: String, default: '' },
    contactEmail: { type: String, default: '' },
    contactPhone: { type: String, default: '' },
    socialFacebook: { type: String, default: '' },
    socialInstagram: { type: String, default: '' },
    socialX: { type: String, default: '' },
    socialPinterest: { type: String, default: '' },
    socialYoutube: { type: String, default: '' },
    socialTikTok: { type: String, default: '' },
  },
  { timestamps: true }
);

export default mongoose.model<ISiteSetting>('SiteSetting', SiteSettingSchema);
