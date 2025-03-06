import { Info, ProfileContainer, SummaryContainer, } from "./style"

import avatarImg from "@assets/avatar.png"
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

interface SummaryProps {
  type: "profile" | "post";
}

export function Summary({ type }: SummaryProps) { 
  const renderProfile = () => (
    <ProfileContainer>
      <img src={avatarImg} alt=""/>

      <section>
        <header>
          <h1>Cameron Williamson</h1>
          <a href="#">
            GITHUB
            <img src={iconLink} alt="Ir para o Github" />
          </a>
        </header>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

        <Info>
          <div>
            <img src={iconUsername} />
            <p>cameronwll</p>
          </div>
          <div>
            <img src={iconCompany} width="14px"/>            
            <p>Rocketseat</p>
          </div>
          <div>
            <img src={iconFollowers} width="18px"/>
            <p>32 seguidores</p>
          </div>
        </Info>
      </section>
    </ProfileContainer>
  )

  const renderPost = () => (
    <PostContainer>
      <section>
        <header>
          <nav>
            <NavLink to="/">
              <img src={iconBack} />
              VOLTAR
            </NavLink>
            <a href="#">
              VER NO GITHUB
              <img src={iconGoTo} />
            </a>
          </nav>
        </header>
        <h3>JavaScript data types and data structures</h3>
        <Info>
          <div>
            <img src={iconUsername} />
            <p>cameronwll</p>
          </div>
          <div>
            <img src={iconCallendar} width="14px"/>            
            <p>Há 1 dia</p>
          </div>
          <div>
            <img src={iconBallon} width="18px"/>
            <p>5 comentários</p>
          </div>
        </Info>
      </section>
    </PostContainer>
  )

  return (
    <SummaryContainer>
      {type === "profile" ? renderProfile() : renderPost()}
    </SummaryContainer>
  )
}