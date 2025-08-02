export interface CardConfig {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number | string | null;
  votes:  number;
  popular: boolean;
  available: boolean;
}
