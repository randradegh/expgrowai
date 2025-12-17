export interface HashnodePost {
  _id: string
  title: string
  slug: string
  brief: string
  coverImage?: string
  dateAdded: string
  dateFeatured?: string
  totalReactions: number
  replyCount: number
  responseCount: number
  readingTime: number
  tags: Array<{
    name: string
    slug: string
  }>
  author: {
    username: string
    name: string
    photo: string
  }
  contentMarkdown?: string
}

export interface HashnodeResponse {
  data: {
    user: {
      publication: {
        posts: HashnodePost[]
      }
    }
  }
}

