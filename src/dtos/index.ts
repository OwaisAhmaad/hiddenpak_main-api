/**
 * @swagger
 * components:
 *   schemas:
 *     LoginDto:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: Admin email address
 *           example: admin@hiddenpak.com
 *         password:
 *           type: string
 *           format: password
 *           description: Admin password
 *           example: admin123
 *
 *     CreatePlaceDto:
 *       type: object
 *       required:
 *         - slug
 *         - name
 *         - region
 *         - description
 *         - image
 *         - category
 *       properties:
 *         slug:
 *           type: string
 *           description: Unique URL-friendly identifier
 *           example: hunza-valley
 *         name:
 *           type: string
 *           description: Place name
 *           example: Hunza Valley
 *         region:
 *           type: string
 *           description: Geographic region
 *           example: Gilgit-Baltistan
 *         description:
 *           type: string
 *           description: Short description
 *           example: A breathtaking valley in the Karakoram mountains
 *         longDescription:
 *           type: string
 *           description: Detailed description
 *         image:
 *           type: string
 *           description: Main image URL
 *         gallery:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of image URLs
 *         rating:
 *           type: number
 *           minimum: 0
 *           maximum: 5
 *           description: Rating from 0 to 5
 *           example: 4.8
 *         altitude:
 *           type: string
 *           description: Altitude information
 *           example: 2,500m
 *         bestTime:
 *           type: string
 *           description: Best time to visit
 *           example: April to October
 *         category:
 *           type: string
 *           description: Place category
 *           example: valley
 *         featured:
 *           type: boolean
 *           description: Whether place is featured on homepage
 *           example: true
 *
 *     UpdatePlaceDto:
 *       type: object
 *       properties:
 *         slug:
 *           type: string
 *           description: Unique URL-friendly identifier
 *         name:
 *           type: string
 *           description: Place name
 *         region:
 *           type: string
 *           description: Geographic region
 *         description:
 *           type: string
 *           description: Short description
 *         longDescription:
 *           type: string
 *           description: Detailed description
 *         image:
 *           type: string
 *           description: Main image URL
 *         gallery:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of image URLs
 *         rating:
 *           type: number
 *           minimum: 0
 *           maximum: 5
 *           description: Rating from 0 to 5
 *         altitude:
 *           type: string
 *           description: Altitude information
 *         bestTime:
 *           type: string
 *           description: Best time to visit
 *         category:
 *           type: string
 *           description: Place category
 *         featured:
 *           type: boolean
 *           description: Whether place is featured on homepage
 *
 *     CreateBlogDto:
 *       type: object
 *       required:
 *         - slug
 *         - title
 *       properties:
 *         slug:
 *           type: string
 *           description: Unique URL-friendly identifier
 *           example: exploring-hunza
 *         title:
 *           type: string
 *           description: Blog title
 *           example: Exploring Hunza Valley
 *         excerpt:
 *           type: string
 *           description: Short excerpt
 *         content:
 *           type: string
 *           description: Full blog content (HTML or markdown)
 *         coverImage:
 *           type: string
 *           description: Cover image URL
 *         author:
 *           type: string
 *           description: Author name
 *         authorImage:
 *           type: string
 *           description: Author profile image URL
 *         authorBio:
 *           type: string
 *           description: Author biography
 *         date:
 *           type: string
 *           description: Publication date
 *         readTime:
 *           type: string
 *           description: Estimated read time
 *           example: 5 min read
 *         category:
 *           type: string
 *           description: Blog category
 *           example: Travel
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: Blog tags
 *         published:
 *           type: boolean
 *           description: Whether blog is published
 *           example: true
 *
 *     UpdateBlogDto:
 *       type: object
 *       properties:
 *         slug:
 *           type: string
 *         title:
 *           type: string
 *         excerpt:
 *           type: string
 *         content:
 *           type: string
 *         coverImage:
 *           type: string
 *         author:
 *           type: string
 *         authorImage:
 *           type: string
 *         authorBio:
 *           type: string
 *         date:
 *           type: string
 *         readTime:
 *           type: string
 *         category:
 *           type: string
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *         published:
 *           type: boolean
 *
 *     CreateGalleryImageDto:
 *       type: object
 *       required:
 *         - src
 *         - alt
 *         - location
 *       properties:
 *         src:
 *           type: string
 *           description: Image source URL
 *         alt:
 *           type: string
 *           description: Alt text for the image
 *         location:
 *           type: string
 *           description: Location where photo was taken
 *           example: Hunza Valley, GB
 *         height:
 *           type: string
 *           description: Height variant for masonry layout
 *           enum: [normal, tall]
 *           default: normal
 *
 *     CreateTestimonialDto:
 *       type: object
 *       required:
 *         - name
 *         - text
 *       properties:
 *         name:
 *           type: string
 *           description: Person's name
 *         location:
 *           type: string
 *           description: Person's location
 *         avatar:
 *           type: string
 *           description: Avatar image URL
 *         rating:
 *           type: number
 *           minimum: 1
 *           maximum: 5
 *           description: Rating from 1 to 5
 *           example: 5
 *         text:
 *           type: string
 *           description: Testimonial text
 *
 *     CreateContactMessageDto:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - subject
 *         - message
 *       properties:
 *         name:
 *           type: string
 *           description: Sender's name
 *         email:
 *           type: string
 *           format: email
 *           description: Sender's email
 *         subject:
 *           type: string
 *           description: Message subject
 *         message:
 *           type: string
 *           description: Message content
 *
 *     UpdateSettingsDto:
 *       type: object
 *       properties:
 *         siteName:
 *           type: string
 *           description: Website name
 *         siteDescription:
 *           type: string
 *           description: Website description
 *         contactEmail:
 *           type: string
 *           format: email
 *           description: Contact email address
 *         contactPhone:
 *           type: string
 *           description: Contact phone number
 *         socialFacebook:
 *           type: string
 *           description: Facebook page URL
 *         socialInstagram:
 *           type: string
 *           description: Instagram profile URL
 *         socialX:
 *           type: string
 *           description: X (Twitter) profile URL
 *         socialPinterest:
 *           type: string
 *           description: Pinterest profile URL
 *         socialYoutube:
 *           type: string
 *           description: YouTube channel URL
 *         socialTikTok:
 *           type: string
 *           description: TikTok profile URL
 *
 *     CreateAnalyticsEventDto:
 *       type: object
 *       required:
 *         - eventType
 *         - page
 *       properties:
 *         eventType:
 *           type: string
 *           description: Type of analytics event
 *           example: page_view
 *         page:
 *           type: string
 *           description: Page where event occurred
 *           example: /places/hunza-valley
 *         data:
 *           type: object
 *           description: Additional event data
 *           additionalProperties: true
 *
 *     Place:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         slug:
 *           type: string
 *         name:
 *           type: string
 *         region:
 *           type: string
 *         description:
 *           type: string
 *         longDescription:
 *           type: string
 *         image:
 *           type: string
 *         gallery:
 *           type: array
 *           items:
 *             type: string
 *         rating:
 *           type: number
 *         altitude:
 *           type: string
 *         bestTime:
 *           type: string
 *         category:
 *           type: string
 *         featured:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     Blog:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         slug:
 *           type: string
 *         title:
 *           type: string
 *         excerpt:
 *           type: string
 *         content:
 *           type: string
 *         coverImage:
 *           type: string
 *         author:
 *           type: string
 *         authorImage:
 *           type: string
 *         authorBio:
 *           type: string
 *         date:
 *           type: string
 *         readTime:
 *           type: string
 *         category:
 *           type: string
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *         published:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     GalleryImage:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         src:
 *           type: string
 *         alt:
 *           type: string
 *         location:
 *           type: string
 *         height:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     Testimonial:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         location:
 *           type: string
 *         avatar:
 *           type: string
 *         rating:
 *           type: number
 *         text:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     ContactMessage:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         subject:
 *           type: string
 *         message:
 *           type: string
 *         isRead:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     SiteSetting:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         siteName:
 *           type: string
 *         siteDescription:
 *           type: string
 *         contactEmail:
 *           type: string
 *         contactPhone:
 *           type: string
 *         socialFacebook:
 *           type: string
 *         socialInstagram:
 *           type: string
 *         socialX:
 *           type: string
 *         socialPinterest:
 *           type: string
 *         socialYoutube:
 *           type: string
 *         socialTikTok:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     AnalyticsEvent:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         eventType:
 *           type: string
 *         page:
 *           type: string
 *         data:
 *           type: object
 *         timestamp:
 *           type: string
 *           format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         error:
 *           type: string
 *
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
export {};
