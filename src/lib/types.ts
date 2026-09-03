export type ServiceCategory = 
  | 'Blouse Stitching'
  | 'Embroidery Work'
  | 'Custom Blouse Designs'
  | 'Bridal Blouse Designs'
  | '3 Month Blouse Design Course';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  duration: string;
  imageUrl: string;
  imagePath?: string;
  category: ServiceCategory | string;
  featured?: boolean;
}

export type GalleryCategory = 'Bridal' | 'Embroidery' | 'Traditional' | 'Modern';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  description?: string;
  stitchPrice?: string;
  timeRequired?: string;
  tags?: string[];
  featured?: boolean;
  createdAt?: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  location?: string;
  serviceUsed?: string;
}
