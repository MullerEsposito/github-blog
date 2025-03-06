import styled from "styled-components";

export const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 54rem;
  margin: 0 auto 8rem;
`

export const Article = styled.article`
  width: 100%;
  padding: 40px 32px;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  & p {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`