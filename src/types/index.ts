export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export interface CoalitionPartner {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
}

export interface FundingDisparity {
  district: string;
  perPupilFunding: number;
  type: 'basic-aid' | 'non-basic-aid';
}