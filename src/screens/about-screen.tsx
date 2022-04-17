import React from 'react';
import {
  ScrollView,
  Box, Text,
  VStack,
  Icon,
  Image,
  useColorModeValue,
  Divider
} from 'native-base';
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead';
import LinkButton from '../components/link-button'

export default function AboutScreen() {

  return (
    <AnimatedColorBox
      flex={1} w='full'
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
    >
      <Masthead
        title='Sobre esse app!'
        image={require('../assets/about-masthead.png')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopRadius='20px'
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt='-20px'
        pt='30px'
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems='center'>
            <Image
              source={require('../assets/vinicius.jpg')}
              borderRadius='full'
              resizeMode='cover'
              w={120} h={120}
              alt='new author'
            />
          </Box>
          <Text fontSize='md' w='full' textAlign='center'>
            Esse projeto é um tutorial de React Native baseado no canal do YouTube DevAsLife.
          </Text>
          <LinkButton
            href='https://github.com/viniibp?tab=repositories'
            colorScheme={useColorModeValue('trueGray', 'coolGray')}
            size='lg'
            borderRadius='full'
            leftIcon={
              <Icon as={Feather} name='github' size='sm' opacity={0.5} />
            }
          >
            GitHub!
          </LinkButton>
          <LinkButton
            href='https://www.linkedin.com/in/vinícius-batista-400481177/'
            colorScheme={useColorModeValue('blue', 'darkBlue')}
            size='lg'
            borderRadius='full'
            leftIcon={
              <Icon as={Feather} name='linkedin' size='sm' opacity={0.5} />
            }
          >
            LinkedIn
          </LinkButton>
          <Divider />
          <LinkButton
            href='https://www.youtube.com/devaslife'
            colorScheme='red'
            size='lg'
            borderRadius='full'
            leftIcon={
              <Icon as={Feather} name='youtube' size='sm' opacity={0.5} />
            }
          >
            Ir ao canal do YouTube DevAsLife
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  );
};
