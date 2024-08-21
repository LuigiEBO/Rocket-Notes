
import {Container, Links} from "./style"
import { Header } from "../../components/header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
export function Details() {
  return (
    <Container>
      <Header/>
      <Section title="Links Úteis">
        <Links>
          <li>
            <a href="#">Link 1</a>
          </li>
        </Links>
      </Section>

      <Button title="Voltar" />
    </Container>
  )
}