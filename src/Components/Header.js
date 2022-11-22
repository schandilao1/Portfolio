import React from 'react'
import { Stack, Circle, Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/color-mode'
import { useMediaQuery } from '@chakra-ui/media-query'


function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 750px)");
  return (

    <>
      <Stack >
        <Circle
        mt={55}
          position='absolute'
          bg="blue.100"
          opacity="0.5"
          w="300px"
          h="300px"
          alignSelf="flex-end"
        />
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          p={isNotSmallerScreen ? "32" : "0"}
          spacing="200px"
          alignSelf="flex-start"
          w="100%"
        >
          <Box mt={isNotSmallerScreen ? "0" : 15} alignSelf="flex-start" zIndex="2" p={isNotSmallerScreen ? "10" : "30"}>
            <Text fontSize="5xl" fontWeight="semibold">Hi, I am </Text>
            <Text fontSize="7xl" fontWeight="bold" bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' bgClip="text">sumit Chandila</Text>
            <Text color={isDark ? 'gray.200' : 'gray.900'} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, earum optio vel, iure tempore expedita nemo unde quaerat nesciunt repudiandae quidem! Amet eveniet perferendis eaque, explicabo nisi adipisci rerum sit.</Text>
            <Button mt={8} bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' color="white" colorScheme='linear(to-r, cyan.400, blue.500, purple.600)' onClick={() =>
              window.open("http://localhost:3000")
            }>Hire Me</Button>
          </Box>
          <Image alignSelf="center" mt={isNotSmallerScreen ? '0' : '12'}
           zIndex="2"
            mb={isNotSmallerScreen ? '0' : '12'} borderRadius="full"
            boxSize='300px' boxShadow="lg" backgroundColor="transparent"
            src='https://avatars.githubusercontent.com/u/115537878?s=400&u=1dbf786768394c40266d37515d1dfecf5eb15f57&v=4' />
        </Flex>
      </Stack>


    </>
  )
}

export default Header
