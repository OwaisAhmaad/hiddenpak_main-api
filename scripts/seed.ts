import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Admin from '../src/models/Admin';
import Place from '../src/models/Place';
import Blog from '../src/models/Blog';
import GalleryImage from '../src/models/GalleryImage';
import Testimonial from '../src/models/Testimonial';
import SiteSetting from '../src/models/SiteSetting';
import AnalyticsEvent from '../src/models/AnalyticsEvent';
import ContactMessage from '../src/models/ContactMessage';

const seed = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hiddenpak';
    await mongoose.connect(mongoURI);
    console.log('MongoDB Connected for seeding...');

    // Clear all collections
    await Admin.deleteMany({});
    await Place.deleteMany({});
    await Blog.deleteMany({});
    await GalleryImage.deleteMany({});
    await Testimonial.deleteMany({});
    await SiteSetting.deleteMany({});
    await AnalyticsEvent.deleteMany({});
    await ContactMessage.deleteMany({});

    // Seed Admin
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await Admin.create({
      email: 'admin@hiddenpak.com',
      password: hashedPassword,
      name: 'HiddenPak Admin',
      role: 'admin',
    });
    console.log('✅ Admin seeded');

    // Seed Places
    await Place.insertMany([
      {
        slug: 'hunza-valley',
        name: 'Hunza Valley',
        region: 'Gilgit-Baltistan',
        description: 'A breathtaking valley in the Karakoram mountains known for its stunning landscapes and warm hospitality.',
        longDescription: 'Hunza Valley is a mountainous valley in the Gilgit-Baltistan region of Pakistan. The valley is surrounded by snow-capped mountains, including Rakaposhi, Ultar Sar, and Diran. The people of Hunza are known for their exceptional longevity and hospitality. The valley offers stunning views, pristine lakes, and ancient forts.',
        image: 'https://images.unsplash.com/photo-1583965738ode1-1?w=800',
        gallery: ['https://images.unsplash.com/photo-1583965738ode1-2?w=800'],
        rating: 4.9,
        altitude: '2,500m',
        bestTime: 'April to October',
        category: 'valley',
        featured: true,
      },
      {
        slug: 'skardu',
        name: 'Skardu',
        region: 'Gilgit-Baltistan',
        description: 'Gateway to the Karakoram, home to some of the world\'s highest peaks and stunning lakes.',
        longDescription: 'Skardu is a city in the Gilgit-Baltistan region of Pakistan, serving as the gateway to the Karakoram mountain range. It is home to some of the world\'s highest peaks including K2, and features the stunning Shangrila Lake and Satpara Lake.',
        image: 'https://images.unsplash.com/photo-1566837945700-300542278692?w=800',
        gallery: [],
        rating: 4.8,
        altitude: '2,228m',
        bestTime: 'May to September',
        category: 'mountain',
        featured: true,
      },
      {
        slug: 'fairytale-meadows',
        name: 'Fairy Meadows',
        region: 'Gilgit-Baltistan',
        description: 'A lush green plateau at the base of Nanga Parbat, offering one of the most spectacular views in Pakistan.',
        longDescription: 'Fairy Meadows, named by German climbers, is a grassy meadow at an altitude of 3,300m above sea level. It offers a breathtaking view of Nanga Parbat, the ninth highest mountain in the world.',
        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
        gallery: [],
        rating: 4.7,
        altitude: '3,300m',
        bestTime: 'May to September',
        category: 'meadow',
        featured: true,
      },
      {
        slug: 'swat-valley',
        name: 'Swat Valley',
        region: 'Khyber Pakhtunkhwa',
        description: 'Known as the Switzerland of the East, Swat Valley offers lush green landscapes and rich cultural heritage.',
        longDescription: 'Swat Valley is a high-altitude forested region in Khyber Pakhtunkhwa. Known for its stunning natural beauty, it features cascading waterfalls, crystal-clear lakes, and snow-capped mountains. The valley has a rich history dating back to ancient Buddhist civilizations.',
        image: 'https://images.unsplash.com/photo-1568702846914-96b305d2bad1?w=800',
        gallery: [],
        rating: 4.6,
        altitude: '980m',
        bestTime: 'March to October',
        category: 'valley',
        featured: false,
      },
      {
        slug: 'lahore',
        name: 'Lahore',
        region: 'Punjab',
        description: 'The cultural heart of Pakistan, known for its Mughal architecture, vibrant food scene, and rich history.',
        longDescription: 'Lahore is the capital of Punjab province and one of Pakistan\'s most vibrant cities. It is home to the magnificent Badshahi Mosque, Lahore Fort, and Shalimar Gardens — all UNESCO World Heritage Sites. The city is famous for its food street, colorful bazaars, and warm hospitality.',
        image: 'https://images.unsplash.com/photo-1587381420270-cdd3a8fdc3c0?w=800',
        gallery: [],
        rating: 4.5,
        altitude: '217m',
        bestTime: 'October to March',
        category: 'city',
        featured: true,
      },
      {
        slug: 'mohenjo-daro',
        name: 'Mohenjo-daro',
        region: 'Sindh',
        description: 'An ancient Indus Valley Civilization city, one of the world\'s earliest major urban settlements.',
        longDescription: 'Mohenjo-daro is an archaeological site in Sindh, Pakistan. Built around 2500 BCE, it was one of the largest settlements of the ancient Indus Valley Civilization. It is a UNESCO World Heritage Site and offers a fascinating glimpse into one of the world\'s oldest urban centers.',
        image: 'https://images.unsplash.com/photo-1590005354167-6da97870c757?w=800',
        gallery: [],
        rating: 4.3,
        altitude: '50m',
        bestTime: 'November to February',
        category: 'heritage',
        featured: false,
      },
      {
        slug: 'karakoram-highway',
        name: 'Karakoram Highway',
        region: 'Gilgit-Baltistan',
        description: 'The Eighth Wonder of the World — the highest paved international road connecting Pakistan to China.',
        longDescription: 'The Karakoram Highway (KKH) is a 1,300km national highway that extends from Hasan Abdal in Punjab to the Khunjerab Pass in Gilgit-Baltistan. At an elevation of 4,693m, it is the highest paved international road in the world and offers breathtaking views of some of the tallest mountains on Earth.',
        image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800',
        gallery: [],
        rating: 4.8,
        altitude: '4,693m',
        bestTime: 'May to October',
        category: 'adventure',
        featured: true,
      },
      {
        slug: 'gwadar',
        name: 'Gwadar',
        region: 'Balochistan',
        description: 'A port city with pristine beaches and dramatic coastal landscapes on the Arabian Sea.',
        longDescription: 'Gwadar is a port city on the southwestern coast of Balochistan. It features the stunning Gwadar Beach, the hammerhead-shaped Ormara Beach, and the dramatic Buzi Pass. The city is rapidly developing as a major economic hub.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        gallery: [],
        rating: 4.2,
        altitude: '0m',
        bestTime: 'October to March',
        category: 'coastal',
        featured: false,
      },
    ]);
    console.log('✅ Places seeded');

    // Seed Blogs
    await Blog.insertMany([
      {
        slug: 'exploring-hunza',
        title: 'Exploring Hunza Valley: A Traveler\'s Guide',
        excerpt: 'Discover the magic of Hunza Valley, from ancient forts to pristine lakes.',
        content: '<p>Hunza Valley is one of the most beautiful places on Earth...</p>',
        coverImage: 'https://images.unsplash.com/photo-1583965738ode1-1?w=800',
        author: 'Sarah Ahmed',
        authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
        authorBio: 'Travel writer and photographer with 10+ years of exploring Pakistan.',
        date: '2024-01-15',
        readTime: '8 min read',
        category: 'Travel Guide',
        tags: ['hunza', 'valley', 'gilgit-baltistan', 'travel-guide'],
        published: true,
      },
      {
        slug: 'karakoram-highway-journey',
        title: 'The Karakoram Highway: Journey to the Roof of the World',
        excerpt: 'Experience the world\'s highest paved international road through the Karakoram mountains.',
        content: '<p>The Karakoram Highway is an engineering marvel...</p>',
        coverImage: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800',
        author: 'Ali Khan',
        authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
        authorBio: 'Adventure traveler and road trip enthusiast.',
        date: '2024-02-20',
        readTime: '12 min read',
        category: 'Adventure',
        tags: ['karakoram', 'highway', 'road-trip', 'adventure'],
        published: true,
      },
      {
        slug: 'pakistani-cuisine-guide',
        title: 'A Foodie\'s Guide to Pakistani Cuisine',
        excerpt: 'From spicy biryani to sweet gulab jamun — explore the flavors of Pakistan.',
        content: '<p>Pakistani cuisine is a rich tapestry of flavors...</p>',
        coverImage: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800',
        author: 'Fatima Noor',
        authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
        authorBio: 'Food blogger and culinary explorer.',
        date: '2024-03-10',
        readTime: '6 min read',
        category: 'Food',
        tags: ['food', 'cuisine', 'biryani', 'culinary'],
        published: true,
      },
      {
        slug: 'trekking-pakistan',
        title: 'Top 10 Trekking Routes in Pakistan',
        excerpt: 'From easy walks to challenging multi-day treks, Pakistan has it all.',
        content: '<p>Pakistan offers some of the best trekking in the world...</p>',
        coverImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
        author: 'Omar Shah',
        authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
        authorBio: 'Professional mountaineer and trekking guide.',
        date: '2024-04-05',
        readTime: '10 min read',
        category: 'Adventure',
        tags: ['trekking', 'hiking', 'mountains', 'adventure'],
        published: true,
      },
      {
        slug: 'mughal-heritage-lahore',
        title: 'Mughal Heritage: Exploring Lahore\'s Architectural Gems',
        excerpt: 'Journey through centuries of Mughal architecture in the cultural capital of Pakistan.',
        content: '<p>Lahore\'s Mughal heritage is unparalleled...</p>',
        coverImage: 'https://images.unsplash.com/photo-1587381420270-cdd3a8fdc3c0?w=800',
        author: 'Ayesha Malik',
        authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
        authorBio: 'Historian and heritage conservation advocate.',
        date: '2024-05-18',
        readTime: '7 min read',
        category: 'Heritage',
        tags: ['lahore', 'mughal', 'heritage', 'architecture'],
        published: true,
      },
      {
        slug: 'safety-travel-pakistan',
        title: 'Is Pakistan Safe for Tourists? A Comprehensive Guide',
        excerpt: 'Everything you need to know about traveling safely in Pakistan.',
        content: '<p>Safety is a common concern for travelers visiting Pakistan...</p>',
        coverImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
        author: 'Sarah Ahmed',
        authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
        authorBio: 'Travel writer and photographer with 10+ years of exploring Pakistan.',
        date: '2024-06-01',
        readTime: '9 min read',
        category: 'Travel Tips',
        tags: ['safety', 'travel-tips', 'guide'],
        published: true,
      },
    ]);
    console.log('✅ Blogs seeded');

    // Seed Gallery Images
    await GalleryImage.insertMany([
      { src: 'https://images.unsplash.com/photo-1583965738ode1-1?w=800', alt: 'Hunza Valley panorama', location: 'Hunza Valley, GB', height: 'tall' },
      { src: 'https://images.unsplash.com/photo-1566837945700-300542278692?w=800', alt: 'Skardu mountains', location: 'Skardu, GB', height: 'normal' },
      { src: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800', alt: 'Fairy Meadows', location: 'Fairy Meadows, GB', height: 'tall' },
      { src: 'https://images.unsplash.com/photo-1568702846914-96b305d2bad1?w=800', alt: 'Swat Valley greenery', location: 'Swat Valley, KPK', height: 'normal' },
      { src: 'https://images.unsplash.com/photo-1587381420270-cdd3a8fdc3c0?w=800', alt: 'Badshahi Mosque', location: 'Lahore, Punjab', height: 'normal' },
      { src: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800', alt: 'Karakoram Highway', location: 'KKH, GB', height: 'tall' },
      { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', alt: 'Gwadar Beach', location: 'Gwadar, Balochistan', height: 'normal' },
      { src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800', alt: 'Mountain trekking', location: 'Gilgit-Baltistan', height: 'normal' },
      { src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800', alt: 'Pakistani cuisine', location: 'Lahore, Punjab', height: 'normal' },
      { src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800', alt: 'Road trip Pakistan', location: 'Karakoram Highway', height: 'tall' },
      { src: 'https://images.unsplash.com/photo-1590005354167-6da97870c757?w=800', alt: 'Ancient ruins', location: 'Mohenjo-daro, Sindh', height: 'normal' },
      { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800', alt: 'Local culture', location: 'Northern Pakistan', height: 'normal' },
    ]);
    console.log('✅ Gallery images seeded');

    // Seed Testimonials
    await Testimonial.insertMany([
      {
        name: 'Emma Thompson',
        location: 'London, UK',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
        rating: 5,
        text: 'HiddenPak made my trip to Pakistan absolutely unforgettable. The recommendations were spot-on and the local insights were invaluable!',
      },
      {
        name: 'Marco Rossi',
        location: 'Rome, Italy',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
        rating: 5,
        text: 'I never knew Pakistan had such incredible beauty until I found HiddenPak. The Karakoram Highway trip was the adventure of a lifetime!',
      },
      {
        name: 'Yuki Tanaka',
        location: 'Tokyo, Japan',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
        rating: 4,
        text: 'The travel guides and blog posts on HiddenPak helped me plan the perfect trip to Hunza Valley. Highly recommended!',
      },
      {
        name: 'Ahmed Hassan',
        location: 'Dubai, UAE',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
        rating: 5,
        text: 'As someone who loves adventure travel, HiddenPak opened my eyes to the amazing trekking opportunities in Northern Pakistan. Fantastic resource!',
      },
    ]);
    console.log('✅ Testimonials seeded');

    // Seed Site Settings
    await SiteSetting.create({
      siteName: 'HiddenPak',
      siteDescription: "Pakistan's Hidden Gems — Discover the breathtaking beauty, rich culture, and untold stories of Pakistan's most spectacular destinations.",
      contactEmail: 'info@hiddenpak.com',
      contactPhone: '+92 300 1234567',
      socialFacebook: 'https://facebook.com/hiddenpak',
      socialInstagram: 'https://instagram.com/hiddenpak',
      socialX: 'https://x.com/hiddenpak',
      socialPinterest: 'https://pinterest.com/hiddenpak',
      socialYoutube: 'https://youtube.com/@hiddenpak',
      socialTikTok: 'https://tiktok.com/@hiddenpak',
    });
    console.log('✅ Site settings seeded');

    // Seed some analytics events
    await AnalyticsEvent.insertMany([
      { eventType: 'page_view', page: '/home', data: { source: 'direct' }, timestamp: new Date() },
      { eventType: 'page_view', page: '/places', data: { source: 'nav' }, timestamp: new Date() },
      { eventType: 'place_view', page: '/places/hunza-valley', data: { placeId: 'hunza-valley' }, timestamp: new Date() },
      { eventType: 'blog_view', page: '/blogs/exploring-hunza', data: { blogId: 'exploring-hunza' }, timestamp: new Date() },
      { eventType: 'contact_submit', page: '/contact', data: {}, timestamp: new Date() },
    ]);
    console.log('✅ Analytics events seeded');

    // Seed some contact messages
    await ContactMessage.insertMany([
      {
        name: 'John Smith',
        email: 'john@example.com',
        subject: 'Travel Inquiry',
        message: 'I am interested in visiting Hunza Valley next spring. Can you provide more information about guided tours?',
        isRead: true,
      },
      {
        name: 'Lisa Chen',
        email: 'lisa@example.com',
        subject: 'Partnership Request',
        message: 'We are a travel agency and would like to explore partnership opportunities with HiddenPak.',
        isRead: false,
      },
    ]);
    console.log('✅ Contact messages seeded');

    console.log('\n🎉 Seeding completed successfully!');
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seed();
