import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 54rem;
  margin: 0 auto 8rem;
`

export const PostsContainer = styled.main`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.875rem;
`
