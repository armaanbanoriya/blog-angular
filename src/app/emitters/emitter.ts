import { EventEmitter } from "@angular/core";
import { Category } from "../interface/category";
import { User } from "../interface/user";

export class Emitter {

  static authEmitter = new EventEmitter<User>();
  static categoryEmitter = new EventEmitter<Category>();

}
