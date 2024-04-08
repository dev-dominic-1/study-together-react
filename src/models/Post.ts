import { PostStatModel } from "../components/post-card/post-stat-icon/PostStatModel";

export class Post {
  username!: string;
  timestamp!: string;
  content!: string;
  images?: any[];
  stat?: PostStatModel;
  liked?: boolean;

  constructor(
    username: string,
    timestamp?: string,
    content?: string,
    images?: any[],
    stat?: PostStatModel,
  ) {
    this.username = username;
    this.timestamp = timestamp ?? new Date()?.toLocaleString();
    this.content = content ?? "";
    this.images = images;
    this.stat = stat;
  }
}
