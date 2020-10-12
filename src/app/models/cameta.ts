export interface Camera {
  id: string;
  status: 'fail' | 'pass';
  images: string[];
}
