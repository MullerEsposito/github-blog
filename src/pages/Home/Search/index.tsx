import { SearchContainer } from "./style";

export function Search() {
  return (
    <SearchContainer>
      <div>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}