import { Summary } from "@components/Summary";
import { Article, PostDetailContainer } from "./style";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { Issue } from "../Home/PostCard";
import { useEffect, useState } from "react";
import { gitHubApi } from "src/lib/axios";
import { useParams } from "react-router-dom";

export function PostDetail() {
  const [issue, setIssue] = useState<Issue>();
  const { id: issueNumber } = useParams();
  
  const fetchGitHubIssue = async () => {
    const response = await gitHubApi.get(`/repos/mulleresposito/stark_overflow/issues/${issueNumber}`);
    setIssue(response.data);
  }

  useEffect(() => {
    fetchGitHubIssue();
  }, []);

  return (
    <PostDetailContainer>
      <Summary type="post" issue={issue} />
      <Article>
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {issue && issue.body}
        </Markdown>
      </Article>
    </PostDetailContainer>
  );
}