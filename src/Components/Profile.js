import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import Icon from "@chakra-ui/icon";
import { FaReact, FaJsSquare, FaHtml5 } from 'react-icons/fa';


function Profile() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 750px)");

    return (
        <>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
                <Box alignSelf="center" px="32" py="16">
                    <Heading fontWeight="extrabold" color="cyan.500" size="4xl">1+</Heading>
                    <Text color="cyan.400" size="2xl">Years Of Experience</Text>
                </Box>
                <Box alignSelf="center" px="16" py="16" >
                    <Text fontWeight="bold" p={4} > --: Specialised in Website Developer <br />--: What Skills I Have  </Text>
                    <Flex direction={isNotSmallerScreen ? "row" : "column"}>
                        <Flex rounded="xl" direction="column" bg="blue.400" h="30vh" w="30vh" justify="flex-end" mb={isNotSmallerScreen ? "0" : "3"} ml={isNotSmallerScreen ? "4" : "0"} _hover={{ bgGradient:'linear(to-r, orange.400, red.400)' }}>
                            <Icon as={FaHtml5} color="white" p={4} w="24" h="24" />
                            <Text color="white" p={4} fontWeight="semibold" fontSize="xl">HTML</Text>
                        </Flex>
                        <Flex rounded="xl" direction="column" bg="blue.400" h="30vh" w="30vh" justify="flex-end" mb={isNotSmallerScreen ? "0" : "3"} ml={isNotSmallerScreen ? "4" : "0"} _hover={{ bgGradient:'linear(to-r, yellow.400, yellow.600)' }}>
                            <Icon as={FaJsSquare} color="white" p={4} w="24" h="24" />
                            <Text color="white" p={4} fontWeight="semibold" fontSize="xl">JAVASCRIPT</Text>
                        </Flex>
                        <Flex rounded="xl" direction="column" bg="blue.400" h="30vh" w="30vh" justify="flex-end" mb={isNotSmallerScreen ? "0" : "3"} ml={isNotSmallerScreen ? "4" : "0"} _hover={{ bgGradient:'linear(to-r, blue.500, blue.50)' }}>
                            <Icon as={FaReact} color="white" p={4} w="24" h="24" />
                            <Text color="white" p={4} fontWeight="semibold" fontSize="xl">REACT.JS</Text>
                        </Flex>
                        
                    </Flex>
                </Box>

            </Flex>
            
        </>
    )
}

export default Profile