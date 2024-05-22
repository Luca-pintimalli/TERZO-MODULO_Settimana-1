import { Post } from "./post"

export interface JsonContent {
    posts: Post[]
  total: number
  skip: number
  limit: number
}
