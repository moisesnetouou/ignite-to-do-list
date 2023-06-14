import Image from 'next/image'
import { PlusCircle } from 'phosphor-react'

import logoImg from '@/assets/images/logo.svg'
import clipboardImg from '@/assets/images/clipboard.svg'
import {
  Content,
  EmptyList,
  FormAddTask,
  Hero,
  InfoTask,
  Tasks,
} from './styles'

export default function Home() {
  return (
    <main>
      <Hero>
        <Image src={logoImg} alt="logo project todo" width={126} height={48} />
      </Hero>

      <Content>
        <FormAddTask>
          <input type="text" placeholder="Adicione uma nova tarefa" />

          <button type="button">
            Criar <PlusCircle size={18} />
          </button>
        </FormAddTask>

        <Tasks>
          <header>
            <InfoTask variant="blue">
              <p>Tarefas criadas</p>
              <mark>0</mark>
            </InfoTask>

            <InfoTask variant="purple">
              <p>Tarefas criadas</p>
              <mark>0</mark>
            </InfoTask>
          </header>

          <EmptyList>
            <Image src={clipboardImg} alt="" />

            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </EmptyList>
        </Tasks>
      </Content>
    </main>
  )
}
