import { User } from "./User"

export interface PostInterface {
    $id: string,
    title: string,
    prompt: string,
    thumbnail: string,
    video: string
    creator: User
  
  }
