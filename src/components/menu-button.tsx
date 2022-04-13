import React from "react"
import {
  Button,
  Icon,
  useColorModeValue,
  IButtonProps
} from "native-base"
import { Feather } from '@expo/vector-icons'

type Props = {
  active: boolean
  icon: string
  children: React.ReactNode
} & IButtonProps

const MenuButton = ({ active, icon, children, ...props }: Props) => {
  const colorScheme = useColorModeValue('blue', 'darkBlue')
  const inactiveTextColor = useColorModeValue('blue.500', undefined)
  const pressedBgColor = useColorModeValue('primary.100', 'primary.600')

  return (
    <Button
      size='lg'
      colorScheme={colorScheme}
      bg={active ? undefined : 'transparent'}
      _pressed={{
        bg: pressedBgColor
      }}
      _text={{
        color: active ? 'red.50' : inactiveTextColor
      }}
      variant='solid'
      justifyContent='flex-start'
      leftIcon={<Icon as={Feather} name={icon} size='sm' opacity={.5} />}
      {...props}
    >
      {children}
    </Button>
  )
}

export default MenuButton