import { Info, ProfileContainer } from "./style"

import avatarImg from "../../../assets/avatar.png"
import iconCompany from "../../../assets/icon-company.svg"
import iconUsername from "../../../assets/icon-username.svg"
import iconFollowers from "../../../assets/icon-followers.svg"
import iconLink from "../../../assets/icon-link.svg"

export function Profile() { 
  return (
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
}