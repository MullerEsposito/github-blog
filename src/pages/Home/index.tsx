import { Post } from "../../components/Post";
import { Profile } from "./Profile"
import { Search } from "./Search";
import { HomeContainer, PostsContainer } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <Search />
      <PostsContainer>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsContainer>
    </HomeContainer>
  )
}