export interface IProjectCard {
  name: string;
  id: string;
  description: string;
  featureCount: number;
  createdAt: string;
  updatedAt?: string;
  favorite?: boolean;
}
