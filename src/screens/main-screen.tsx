import React, { useCallback, useState } from "react"
import {
  Center,
  VStack,
  useColorModeValue,
  Fab,
  Icon
} from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import AnimatedColorBox from "../components/animated-color.box"
import ThemeToggle from '../components/theme-toggle'
import TaskList from "../components/task-list"
import shortid from "shortid"

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Fazer um aplicativo de ToDo-List',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'Testar o aplicativo em forma de apk',
    done: false
  },
]

export default function MainScreen() {
  const [data, setData] = useState(initialData);
  const [editingItemId, setEditingItemId] = useState<string | null>(null)

  const handleToggleTaskItem = useCallback(item => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)

      newData[index] = {
        ...item,
        done: !item.done
      }

      return newData
    })
  }, [])

  const handleChangeTaskItemSubject = useCallback((item, newSubject) => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)

      newData[index] = {
        ...item,
        subject: newSubject
      }

      return newData
    })
  }, [])

  const handleFinishEditingTaskItem = useCallback(_item => {
    setEditingItemId(null)
  }, [])

  const handlePressTaskItemLabel = useCallback(item => {
    setEditingItemId(item.id)
  }, [])

  const handleRemoveItem = useCallback(item => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item)
      return newData
    })
  }, [])

  return (
    <AnimatedColorBox
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w='full'
      flex={1}
    >
      <VStack space={5} alignItems='center' w='full'>
        <TaskList
          data={data}
          editingItemId={editingItemId}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          onToggleItem={handleToggleTaskItem}

        />
        <ThemeToggle />
      </VStack>
      <Fab
        position='absolute'
        renderInPortal={false}
        size='sm'
        icon={<Icon color='white' as={<AntDesign name='plus' />} size='sm' />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.500', 'blue.400')}
        onPress={() => {
          const id = shortid.generate()
          setData([
            {
              id,
              subject: '',
              done: false
            },
            ...data
          ])
          setEditingItemId(id)
        }}
      />
    </AnimatedColorBox>
  )
}