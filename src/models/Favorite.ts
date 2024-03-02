import { Cat } from "./Cat";


export default interface Favorite {
  _id?: string;
  cat: Cat;
  userId?: string;
}
