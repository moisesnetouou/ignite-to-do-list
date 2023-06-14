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
  ListTask,
  Tasks,
} from './styles'
import { Task } from '@/components/Task'
import { useState } from 'react'

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  function handleAddTask() {
    console.log('task')

    const currentTasks = [...tasks]

    setTasks(currentTasks.push({ newTask }))
  }

  return (
    <main>
      <Hero>
        <Image src={logoImg} alt="logo project todo" width={126} height={48} />
      </Hero>

      <Content>
        <FormAddTask>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setNewTask(e.target.value)}
          />

          <button type="button" onClick={handleAddTask}>
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

          {tasks.length <= 0 ? (
            <EmptyList>
              <Image src={clipboardImg} alt="" />

              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </EmptyList>
          ) : (
            <ListTask>
              <Task />
              <Task />
              <Task />
              <Task />
            </ListTask>
          )}
        </Tasks>
      </Content>
    </main>
  )
}
