
import {Container, Links} from "./style"
import { Header } from "../../components/header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tags"
export function Details() {
  return (
    <Container>
      <Header />
      <ButtonText title="Excluir Nota"/>
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