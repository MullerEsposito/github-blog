import { HeaderContainer } from "./style";
import coverImg from "../../assets/cover.png";

export function Header() {
  return (
    <HeaderContainer>
      <img src={coverImg} />
    </HeaderContainer>
  )
}