import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const PostCardContainer = styled.div`
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors["base-post"]};
  height: 16.25rem;
  padding: 2rem;
  transition: 0.2s;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors["base-label"]};
  }

  & header {
    display: flex;
    gap: 1rem;
  }

  & h3 {
    ${mixins.fonts.titleM};
  }

  & p {
    ${mixins.fonts.textM};
    color: ${(props) => props.theme.colors["base-text"]};
    margin-top: 1.75rem;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }

  & span {
    ${mixins.fonts.textS};
    color: ${(props) => props.theme.colors["base-span"]};
    width: 5rem;
    padding-top: 3px;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
