
import {Container, Links, Content} from "./style"
import { Header } from "../../components/header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tags"
export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

            <h1>Introdução ao React</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas est aliquam ut consequuntur rem officiis enim aut quae tempora, qui, veniam obcaecati dolores consequatur adipisci explicabo nemo consectetur recusandae.
            </p>

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
        </Content>
      </main>
    </Container>
  )
}