import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-top: 4.43rem;  
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & div {
    display: flex;
    justify-content: space-between;
  }

  & input {
    border: solid 1px ${props => props.theme.colors["base-border"]};
    border-radius: 6px;
    background-color: ${props => props.theme.colors["base-input"]};
    color: ${props => props.theme.colors["base-label"]};
    padding: 12px 16px;
    outline: none;
    transition: 0.2s;

    &:focus {
      border-color: ${props => props.theme.colors.blue};
    }
  }
`