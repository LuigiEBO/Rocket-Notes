import {Container, Profile} from "./styles"
export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/luigiebo.png" alt="foto do usuario"/>
        <div>
          <span>Bem-vindo</span>
          <strong>Luigi Oliveira</strong>
        </div>
      </Profile>

    </Container>

  )
}