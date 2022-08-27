type PostData = {
  title: string;
  description: string;
  location: string;
  date: string;
  keywords: string[];
  images: string[];
  isSaved: boolean;
  isLiked: boolean;
  author: string;
  profile: string;
  userType: string;
  id: string;
};

type SalesData = {
  images: string[];
  title: string;
  date: string;
  location: string;
  description: string;
  keywords: string[];
  userType?: string;
  profile?: string;
  author: string;
  price?: string;
  otherFields?: string[];
  contact?: string;
  id: string;
};

export type { PostData, SalesData };
