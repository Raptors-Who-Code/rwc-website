export interface Event {
  title: string;
  content: string;
  date: Date;
  userId: string;
  image?: File | undefined;
}
