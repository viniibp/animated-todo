import React, { useCallback, useState } from "react"
import {
  VStack,
  useColorModeValue,
  Fab,
  Icon
} from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import AnimatedColorBox from "../components/animated-color-box"
import TaskList from "../components/task-list"
import shortid from "shortid"
import Masthead from "../components/masthead"
import NavBar from "../components/navbar"

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Criar tarefas',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'Terminar as tarefas',
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
      <Masthead
        title="Sua lista de tarefas!"
        image={require('../assets/masthead.png')}
      >
        <NavBar />
      </Masthead>
      <VStack
        flex={2}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        space={1}
        mt='-20px'
        borderTopRadius='20px'
        pt='20px'
      >
        <TaskList
          data={data}
          editingItemId={editingItemId}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          onToggleItem={handleToggleTaskItem}

        />
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