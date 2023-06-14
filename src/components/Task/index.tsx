import { Check, CheckCircle, Trash } from 'phosphor-react'
import { CheckboxIndicator, CheckboxRoot, Container } from './styles'
import * as Checkbox from '@radix-ui/react-checkbox'
import { useState } from 'react'

export function Task() {
  const [checked, setChecked] = useState('indeterminate')

  return (
    <Container>
      <CheckboxRoot checked={checked} onCheckedChange={setChecked}>
        <CheckboxIndicator>
          <Checkbox.Indicator>
            {checked === 'indeterminate' && <Check />}
            {checked && <Check />}
          </Checkbox.Indicator>
        </CheckboxIndicator>
      </CheckboxRoot>

      <span>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>

      <button>
        <Trash size={24} />
      </button>
    </Container>
  )
}
