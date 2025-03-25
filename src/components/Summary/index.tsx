import { Info, ProfileContainer, SummaryContainer, } from "./style"

import iconCompany from "@icons/icon-company.svg"
import iconUsername from "@icons/icon-username.svg"
import iconFollowers from "@icons/icon-followers.svg"
import iconLink from "@icons/icon-link.svg"
import iconCallendar from "@icons/icon-calendar.svg"
import iconBallon from "@icons/icon-ballon.svg"
import iconBack from "@icons/icon-back.svg"
import iconGoTo from "@icons/icon-goto.svg"

import { PostContainer } from "./style";
import { NavLink } from "react-router-dom"
import { Issue } from "src/pages/Home/PostCard"
import moment from "moment"

export type Profile = {
  avatar_url: string;
  name: string;
  login: string;
  company: string;
  followers: number;
  bio: string;
}

interface SummaryProps {
  type: "profile" | "post";
  profile?: Profile;
  issue?: Issue;
}

export function Summary({ type, profile, issue }: SummaryProps) { 
  
  const renderProfile = () => {
    if (!profile) return null;
    return (
      <ProfileContainer>
        <img src={profile.avatar_url} alt=""/>

        <section>
          <header>
            <h1>{profile.name}</h1>
            <a href="#">
              GITHUB
              <img src={iconLink} alt="Ir para o Github" />
            </a>
          </header>
          <p>{profile.bio}</p>

          <Info>
            <div>
              <img src={iconUsername} />
              <p>{profile.login}</p>
            </div>
            <div>
              <img src={iconCompany} width="14px"/>            
              <p>{profile.company}</p>
            </div>
            <div>
              <img src={iconFollowers} width="18px"/>
              <p>{profile.followers} seguidores</p>
            </div>
          </Info>
        </section>
      </ProfileContainer>
    );
  }

  const renderPost = () => {
    if (!issue) return null;
    return (
      <PostContainer>
        <section>
          <header>
            <nav>
              <NavLink to="/">
                <img src={iconBack} />
                VOLTAR
              </NavLink>
              <a href={issue.html_url} target="_blank">
                VER NO GITHUB
                <img src={iconGoTo} />
              </a>
            </nav>
          </header>
          <h3>{issue.title}</h3>
          <Info>
            <div>
              <img src={iconUsername} />
              <p>{issue.user.login}</p>
            </div>
            <div>
              <img src={iconCallendar} width="14px"/>            
              <p>{moment(issue.created_at).startOf("minutes").fromNow()}</p>
            </div>
            <div>
              <img src={iconBallon} width="18px"/>
              <p>{issue.comments} comentários</p>
            </div>
          </Info>
        </section>
      </PostContainer>
    )
  };

  return (
    <SummaryContainer>
      {type === "profile" ? renderProfile() : renderPost()}
    </SummaryContainer>
  )
}