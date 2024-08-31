import {FiPlus, FiSearch} from 'react-icons/fi'


import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"


import { Header } from "../../components/header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Notes"
export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar Pelo Título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "React" },
                { id: "2", name: "Node" },
              ],
            }}
          />
        </Section>
      </Content>

      
        <NewNote to="/new">
          <FiPlus />
          Criar Nota
        </NewNote>
    </Container>
  )
}
