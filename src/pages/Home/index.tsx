import { NavLink } from "react-router-dom";
import { PostCard } from "./PostCard";
import { Search } from "./Search";
import { HomeContainer, PostsContainer } from "./style";

import { Summary } from "@components/Summary";

export function Home() {
  return (
    <HomeContainer>
      <Summary type="profile" />
      <Search />
      <PostsContainer>
        <NavLink to="/post">
          <PostCard />
        </NavLink>
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContainer>
    </HomeContainer>
  );
}
