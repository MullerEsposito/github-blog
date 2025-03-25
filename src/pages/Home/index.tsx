import { NavLink } from "react-router-dom";
import { Issue, PostCard } from "./PostCard";
import { Search } from "./Search";
import { HomeContainer, PostsContainer } from "./style";

import { Profile, Summary } from "@components/Summary";
import { useEffect, useState } from "react";
import { gitHubApi } from "src/lib/axios";

export function Home() {
  const [profile, setProfile] = useState<Profile>();
  const [issues, setIssues] = useState<Issue[]>([]);

  const fetchGitHubProfile = async () => {
    const response = await gitHubApi.get("/users/mulleresposito");
    setProfile(response.data);
  }

  const fetchGitHubIssues = async () => {
    const response = await gitHubApi.get("/search/issues?q=repo:mulleresposito/stark_overflow is:issue");
    setIssues(response.data.items);
  }
    

  useEffect(() => {
    fetchGitHubProfile();
    fetchGitHubIssues();
  }, []);
  
  return (
    <HomeContainer>
      <Summary type="profile" profile={profile}/>
      <Search />
      <PostsContainer>
        {issues && issues.map((issue: Issue) => (
          <NavLink key={issue.id} to={`/post/${issue.number}`}>
            <PostCard issue={issue}/>
          </NavLink>
        ))}
      </PostsContainer>
    </HomeContainer>
  );
}
