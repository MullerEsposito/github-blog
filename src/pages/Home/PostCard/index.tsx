import moment from "moment";
import { PostCardContainer } from "./style";

export type Issue = {
  id: number;
  number: number;
  html_url: string;
  user: {
    login: string;
  };
  title: string;
  created_at: string;
  body: string;
  comments: number;
}

interface PostCardProps {
  issue: Issue;
}

export function PostCard({ issue }: PostCardProps) {
  return (
    <PostCardContainer>
      <header>
        <h3>{issue.title}</h3>
        <span>{moment(issue.created_at).startOf("minutes").fromNow()}</span>
      </header>
      <p>
        {issue.body.slice(0, 90)}...
      </p>    
    </PostCardContainer>
  )
}