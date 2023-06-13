import Image from 'next/image'

import logoImg from '@/assets/images/logo.svg'
import { Content, FormAddTask, Hero } from './styles'

export default function Home() {
  return (
    <main>
      <Hero>
        <Image src={logoImg} alt="logo project todo" width={126} height={48} />
      </Hero>

      <Content>
        <FormAddTask>
          <input type="text" placeholder="Adicione uma nova tarefa" />

          <button type="button">Criar</button>
        </FormAddTask>
      </Content>
    </main>
  )
}
