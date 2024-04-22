import { FC } from 'react'
import { Switch } from '@headlessui/react'
import { cn } from '@/lib/utils'

interface CheckboxProps {
  enabled: boolean, 
  setEnabled: (bol: boolean) => void,
  className?: string
}

const Checkbox: FC<CheckboxProps> = (props) => {
  const { enabled, setEnabled, className } = props;

  return ( 
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={cn(
        enabled ? 'bg-black' : 'bg-black',
        "relative inline-flex h-6 w-11 items-center rounded-full",
        className,
      )}
    >
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}

export { Checkbox }