import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 864px;

  & > div {
    display: flex;
    gap: 2rem;  
    border-radius: 10px;
    margin-top: -6.5rem;
    height: 13.25rem;
    padding: 2rem;  
    background-color: ${(props) => props.theme.colors["base-profile"]};
    
    & > section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      
      & header {
      display: flex;
      justify-content: space-between;
  
        & a {
          ${mixins.fonts.link};
          border: 1px solid transparent;
          display: flex;
          align-items: center;
          gap: 0.5rem;
  
          transition: 0.2s;
  
          &:hover {
            border-bottom: 1px solid;
          }
  
          & img {
            width: 0.7rem;
          }
        }
      }
    }
  }
`;

export const Info = styled.footer`
  display: flex;
  gap: 2rem;

  & div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const ProfileContainer = styled.div`
  & > img {
    border-radius: 8px;
  }  
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  & nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;
  }
`;