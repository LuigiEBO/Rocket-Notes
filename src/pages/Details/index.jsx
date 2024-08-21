
import {Container, Links} from "./style"
import { Header } from "../../components/header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tags"
export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Links Úteis">
        <Links>
          <li>
            <a href="#">Link 1</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="Express" />
        <Tag title="React" />
      </Section>

      <Button title="Voltar" />
    </Container>
  )
}