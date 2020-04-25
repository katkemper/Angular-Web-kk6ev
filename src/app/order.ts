export class Order {
   constructor(
      public name: string,
      public type: string,
      public days: string,
      public dues: number,
      public locations: string,
      public about: string,
      public uploadfile: string,
   ){}
}
