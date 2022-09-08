import { Category } from "./category"

export interface Post {
  id:number,
  name:string,
  description:any,
  image:any,
  created_at : any,
  category: Category

}
