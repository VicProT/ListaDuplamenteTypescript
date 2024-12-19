export   class no<T> {
  data: T;
  next: no<T> | null = null;
  prev: no<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}
  

  