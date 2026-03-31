export interface Book{
    id:number;
    title: string;
    price: string;
    rating?: number | string;
    available?: boolean;
    cover_url?: string;
    source_url?: string;
  }
