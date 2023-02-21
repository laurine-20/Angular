export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  // major?: string;
  major?: major;
  archived?: boolean;
}

export enum major {
  SI = 'SI',
  GE = 'GE',
  GB = 'GB', 
}