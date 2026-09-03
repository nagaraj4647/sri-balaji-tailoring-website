import { ServiceItem, GalleryItem, Review } from './types';

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    name: 'Blouse Stitching',
    category: 'Blouse Stitching',
    priceRange: '',
    duration: '',
    description: 'Beautifully stitched blouses with accurate measurements, comfortable fitting, and neat finishing. From simple everyday styles to elegant designer patterns. Perfect for: Daily Wear • Party Wear • Designer Blouses',
    imageUrl: '/services-hero.webp',
    featured: true,
  },
  {
    id: 'srv-2',
    name: 'Designer Blouse Designs',
    category: 'Designer Blouse',
    priceRange: '',
    duration: '',
    description: 'Bring your favourite blouse design to life. Choose from modern neck patterns, sleeve designs, and customized styles to create a unique look. Custom Designs • New Patterns • Personalized Styling',
    imageUrl: '/designer-blouse.webp',
    featured: true,
  },
  {
    id: 'srv-3',
    name: 'Embroidery Work',
    category: 'Embroidery Work',
    priceRange: '',
    duration: '',
    description: 'Add a beautiful finishing touch to your blouse with detailed embroidery work. Designs can be customized based on your style and occasion. Thread Work • Decorative Designs • Custom Embroidery',
    imageUrl: '/embroidery-work.webp',
    featured: true,
  },
  {
    id: 'srv-4',
    name: 'Custom Stitching',
    category: 'Custom Stitching',
    priceRange: '',
    duration: '',
    description: 'Get your outfit stitched according to your measurements and preferred design. We create comfortable, well-fitted outfits with attention to detail. Ladies Wear • Custom Designs • Made-to-Measure Stitching',
    imageUrl: '/new-design.webp',
    featured: true,
  },
  {
    id: 'srv-5',
    name: 'Alteration & Fitting',
    category: 'Alterations',
    priceRange: '',
    duration: '',
    description: 'Need a better fit? We provide garment alterations and fitting adjustments to make your outfit more comfortable and suitable for you. Size Adjustment • Fitting Correction • Design Modification',
    imageUrl: '/alteration-fitting.avif',
    featured: true,
  },

  {
    id: 'srv-7',
    name: '3-Month Tailoring Course',
    category: 'Training',
    priceRange: '',
    duration: '',
    description: 'Learn tailoring and develop practical stitching skills through our 3-month tailoring course, with personal guidance and hands-on learning. Personal Training • Practical Learning • Design Guidance',
    imageUrl: '/tailoring-course.webp',
    featured: true,
  },
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-new-5',
    title: 'Red Bridal Beaded Chain Back Blouse',
    category: 'Bridal',
    imageUrl: '/gallery-user-5.webp',
    description: 'Stunning red silk blouse with an open back, heavy gold beadwork, and elegant dangling bead chains.',
    stitchPrice: '₹5,200',
    timeRequired: '9 Days',
    tags: ['Bridal', 'Beaded Chain', 'Open Back'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-6',
    title: 'Magenta Floral & Green Bead Embroidery',
    category: 'Embroidery',
    imageUrl: '/gallery-user-6.webp',
    description: 'Vibrant magenta silk blouse decorated with gold zardosi and contrasting green floral bead embroidery.',
    stitchPrice: '₹4,500',
    timeRequired: '7 Days',
    tags: ['Floral Embroidery', 'Magenta Silk', 'Contrast Beads'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-7',
    title: 'Blue Silk Heavy Beaded Border Blouse',
    category: 'Traditional',
    imageUrl: '/gallery-user-7.webp',
    description: 'Rich blue pure silk blouse featuring intricate gold borders and dense hanging pearl bead accents.',
    stitchPrice: '₹3,800',
    timeRequired: '6 Days',
    tags: ['Blue Silk', 'Pearl Accents', 'Traditional'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-1',
    title: 'Heavy Bridal Maggam Work Saree Blouse',
    category: 'Bridal',
    imageUrl: '/gallery-user-1.webp',
    description: 'Heavy bridal Maggam work on rich red silk featuring intricate beadwork and traditional circular motifs on the sleeve.',
    stitchPrice: '₹5,500',
    timeRequired: '10 Days',
    tags: ['Bridal', 'Maggam Work', 'Heavy Embroidery'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-2',
    title: 'Customized Initial & Jhumka Motif Blouse',
    category: 'Embroidery',
    imageUrl: '/gallery-user-2.webp',
    description: 'Customized bridal magenta blouse featuring personalized initials, hanging bell motifs (Jhumka), and dense gold bead embroidery.',
    stitchPrice: '₹4,800',
    timeRequired: '8 Days',
    tags: ['Custom Initials', 'Jhumka Motif', 'Aari Work'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-3',
    title: 'Sheer Net Back Designer Blouse',
    category: 'Modern',
    imageUrl: '/gallery-user-3.webp',
    description: 'Elegant designer magenta blouse with a sheer net back, vertical pearl lines, and beautiful zardosi floral borders.',
    stitchPrice: '₹3,500',
    timeRequired: '6 Days',
    tags: ['Sheer Back', 'Pearl Drops', 'Designer Cut'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-8',
    title: 'Hot Pink Paisley Zari Silk Blouse',
    category: 'Embroidery',
    imageUrl: '/gallery-user-8.webp',
    description: 'Vibrant hot pink silk blouse with gold bead neckline, gold jhumka ties, and intricate paisley zari embroidery on sleeves.',
    stitchPrice: '₹3,200',
    timeRequired: '5 Days',
    tags: ['Hot Pink', 'Paisley Embroidery', 'Jhumka Tassels'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-9',
    title: 'Grey & Navy Blue Floral Bead Blouse',
    category: 'Modern',
    imageUrl: '/gallery-user-9.webp',
    description: 'Elegant grey silk blouse with a contrast navy blue net panel featuring dense gold and navy floral bead embroidery border.',
    stitchPrice: '₹3,000',
    timeRequired: '5 Days',
    tags: ['Grey Silk', 'Navy Blue', 'Floral Beads'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-10',
    title: 'Teal & Peach Floral Organza Blouse',
    category: 'Modern',
    imageUrl: '/gallery-user-10.webp',
    description: 'Beautiful teal silk blouse with contrasting peach organza sleeves, adorned with delicate pink and gold floral bead embroidery.',
    stitchPrice: '₹2,800',
    timeRequired: '4 Days',
    tags: ['Teal', 'Organza Sleeves', 'Floral Beads'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-11',
    title: 'Red Kanchipuram Floral Aari Blouse',
    category: 'Bridal',
    imageUrl: '/gallery-user-11.webp',
    description: 'Rich red Kanchipuram silk blouse with gold zari border and beautiful scattered floral aari embroidery with green bead accents.',
    stitchPrice: '₹4,200',
    timeRequired: '7 Days',
    tags: ['Kanchipuram', 'Floral Aari', 'Gold Zari'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-12',
    title: 'Green Silk Diamond Grid Bead Blouse',
    category: 'Traditional',
    imageUrl: '/gallery-user-12.webp',
    description: 'Elegant bottle green silk blouse with gold diamond-grid bead embroidery, gold tassel ties, and delicate floral motif borders.',
    stitchPrice: '₹3,600',
    timeRequired: '6 Days',
    tags: ['Green Silk', 'Diamond Grid', 'Gold Tassels'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-13',
    title: 'Purple Mirror & Kundan Heavy Blouse',
    category: 'Bridal',
    imageUrl: '/gallery-user-13.webp',
    description: 'Luxurious purple silk blouse with dense diamond grid kundan embroidery, mirror work, gold leaf borders and heavy bridal detailing.',
    stitchPrice: '₹5,800',
    timeRequired: '10 Days',
    tags: ['Purple Silk', 'Kundan Work', 'Mirror Work'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-14',
    title: 'Blue Silk Pearl Tassel Blouse',
    category: 'Traditional',
    imageUrl: '/gallery-user-14.webp',
    description: 'Rich blue Kanchipuram silk blouse with dense golden pearl bead neckline, zari leaf border and hanging pearl tassel drops.',
    stitchPrice: '₹3,800',
    timeRequired: '6 Days',
    tags: ['Blue Silk', 'Pearl Tassels', 'Kanchipuram'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-15',
    title: 'Green Silk Red Floral Aari Blouse',
    category: 'Embroidery',
    imageUrl: '/gallery-user-15.webp',
    description: 'Elegant green silk blouse with dense gold and red floral aari embroidery all over sleeves and body with pearl bead drops.',
    stitchPrice: '₹4,500',
    timeRequired: '8 Days',
    tags: ['Green Silk', 'Floral Aari', 'Red Contrast'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-16',
    title: 'Pink Heavy Bridal Maggam Work Blouse',
    category: 'Bridal',
    imageUrl: '/gallery-user-16.webp',
    description: 'Stunning pink silk bridal blouse with heavy multi-colour maggam work, mirror embellishments and dense pearl bead fringe.',
    stitchPrice: '₹6,000',
    timeRequired: '12 Days',
    tags: ['Bridal', 'Maggam Work', 'Mirror Work'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-17',
    title: 'Teal Silk Green Stone Bead Blouse',
    category: 'Traditional',
    imageUrl: '/gallery-user-17.webp',
    description: 'Beautiful teal silk blouse with crown-shaped gold and green stone bead embroidery border and delicate gold zari band.',
    stitchPrice: '₹3,400',
    timeRequired: '5 Days',
    tags: ['Teal Silk', 'Green Stone', 'Crown Bead Design'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-18',
    title: 'Maroon Fabric Flower Back Neck Blouse',
    category: 'Modern',
    imageUrl: '/gallery-user-18.webp',
    description: 'Elegant maroon silk blouse with unique handmade fabric flower back neck design, gold dori border and tassel ties.',
    stitchPrice: '₹2,500',
    timeRequired: '4 Days',
    tags: ['Maroon Silk', 'Fabric Flowers', 'Back Neck Design'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-19',
    title: 'Teal Chain Drape Open Back Blouse',
    category: 'Bridal',
    imageUrl: '/gallery-user-19.webp',
    description: 'Stunning teal silk bridal blouse displayed on mannequin with elegant chain drape open back, floral kundan borders and green bead drops.',
    stitchPrice: '₹5,500',
    timeRequired: '9 Days',
    tags: ['Teal', 'Chain Drape', 'Open Back', 'Bridal'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-20',
    title: 'Pink Silk Vertical Bead Fringe Blouse',
    category: 'Embroidery',
    imageUrl: '/gallery-user-20.webp',
    description: 'Vibrant pink silk blouse with elegant vertical gold bead fringe sleeves, floral bead border and pink tassel ties.',
    stitchPrice: '₹3,500',
    timeRequired: '6 Days',
    tags: ['Pink Silk', 'Bead Fringe', 'Tassel Ties'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-21',
    title: 'Purple & Teal Net Stone Blouse',
    category: 'Modern',
    imageUrl: '/gallery-user-21.webp',
    description: 'Striking purple silk blouse with a contrast teal net sleeve panel, dense silver stone embroidery and elegant floral motifs.',
    stitchPrice: '₹3,200',
    timeRequired: '5 Days',
    tags: ['Purple Silk', 'Teal Net', 'Silver Stones'],
    featured: true,
    createdAt: '2026-08-29',
  },
  {
    id: 'gal-new-22',
    title: 'Digital Print Scallop Back Neck Blouse',
    category: 'Modern',
    imageUrl: '/gallery-user-22.webp',
    description: 'Unique digital print fabric blouse on mannequin with a stylish scallop-cut open back neck design.',
    stitchPrice: '₹2,000',
    timeRequired: '3 Days',
    tags: ['Digital Print', 'Scallop Back', 'Modern Cut'],
    featured: true,
    createdAt: '2026-08-29',
  },
];








export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    customerName: 'Priya Ramakrishnan',
    rating: 5,
    comment: 'J. Sundari akka stitched my bridal wedding blouse with heavy Aari peacock work! The fit was 100% perfect on the first trial without any alterations needed.',
    date: '2026-08-20',
    location: 'Sriperumbudur',
    serviceUsed: 'Bridal Blouse Designs',
  },
  {
    id: 'rev-2',
    customerName: 'Kavitha Sivasankar',
    rating: 5,
    comment: 'Exquisite embroidery and fast delivery! I ordered 5 designer blouses for my sister\'s marriage function in Nenmeli. Sundari ma\'am delivered right on time with supreme craftsmanship.',
    date: '2026-08-15',
    location: 'Nenmeli, Sriperumbudur',
    serviceUsed: 'Embroidery Work',
  },
  {
    id: 'rev-3',
    customerName: 'Anitha Varadhan',
    rating: 5,
    comment: 'Joined the 3 month tailoring & blouse design course. J. Sundari ma\'am teaches pattern drafting, cutting, and Aari work so clearly. Very happy with the learning experience.',
    date: '2026-08-08',
    location: 'Sunguvarchatram',
    serviceUsed: '3 Month Blouse Design Course',
  },
  {
    id: 'rev-4',
    customerName: 'Deepa Lakshmanan',
    rating: 5,
    comment: 'Very professional boutique experience right here in Sriperumbudur. Beautiful neck designs, neat hooks and lining. Sri Balaji Tailoring Centre is my go-to choice!',
    date: '2026-07-28',
    location: 'Sriperumbudur Town',
    serviceUsed: 'Custom Blouse Designs',
  },
];

const IS_CLIENT = typeof window !== 'undefined';

const STORAGE_KEYS = {
  SERVICES: 'sbt_services_v4',
  GALLERY: 'sbt_gallery_v11',
  REVIEWS: 'sbt_reviews',
  ADMIN_AUTH: 'sbt_admin_logged_in',
};

export const DataStore = {
  getServices: (): ServiceItem[] => {
    if (!IS_CLIENT) return INITIAL_SERVICES;
    const data = localStorage.getItem(STORAGE_KEYS.SERVICES);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(INITIAL_SERVICES));
      return INITIAL_SERVICES;
    }
    try {
      return JSON.parse(data);
    } catch {
      return INITIAL_SERVICES;
    }
  },

  saveServices: (services: ServiceItem[]) => {
    if (IS_CLIENT) {
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
    }
  },

  getGallery: (): GalleryItem[] => {
    if (!IS_CLIENT) return INITIAL_GALLERY;
    const data = localStorage.getItem(STORAGE_KEYS.GALLERY);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(INITIAL_GALLERY));
      return INITIAL_GALLERY;
    }
    try {
      return JSON.parse(data);
    } catch {
      return INITIAL_GALLERY;
    }
  },

  saveGallery: (gallery: GalleryItem[]) => {
    if (IS_CLIENT) {
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
    }
  },

  getReviews: (): Review[] => {
    if (!IS_CLIENT) return INITIAL_REVIEWS;
    const data = localStorage.getItem(STORAGE_KEYS.REVIEWS);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(INITIAL_REVIEWS));
      return INITIAL_REVIEWS;
    }
    try {
      return JSON.parse(data);
    } catch {
      return INITIAL_REVIEWS;
    }
  },

  addReview: (review: Omit<Review, 'id' | 'date'>): Review => {
    const current = DataStore.getReviews();
    const newReview: Review = {
      ...review,
      id: `rev-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
    };
    const updated = [newReview, ...current];
    if (IS_CLIENT) {
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(updated));
    }
    return newReview;
  },

  isAdminLoggedIn: (): boolean => {
    if (!IS_CLIENT) return false;
    return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  },

  setAdminLoggedIn: (status: boolean) => {
    if (IS_CLIENT) {
      if (status) {
        localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      } else {
        localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
      }
    }
  }
};
