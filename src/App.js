import { VStack, Flex, Heading, Spacer, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Link, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaRegUserCircle } from 'react-icons/fa';
import Header from "./Components/Header"
import Social from "./Components/Social"
import Profile from "./Components/Profile"

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <>
      <VStack p={5}>
        <Flex w="100%" >
          <a href="http://localhost:3000" >
            <Heading
              ml="8" size="md" fontWeight="semibold" color="cyan.400">SC_PORTFOLIO
            </Heading>
          </a>
          

          <Spacer />

          {/* <IconButton ml="8" icon={<FaInstagram />} isRound="true" onClick={() =>
            window.open("https://www.instagram.com/sumitchandila_o1/")
          }></IconButton>
          <IconButton ml="8" icon={<FaGithub />} isRound="true" onClick={() =>
            window.open("https://github.com/")
          }></IconButton> */}
          {/* <IconButton ml="8" icon={<FaLinkedin />} isRound="true"></IconButton> */}
          <IconButton ml="8" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
          <IconButton ml="8" onClick={onOpen} icon={<FaRegUserCircle />} isRound="true"></IconButton> 
        </Flex>

        <Header />
        <Social />
        <Profile />

        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" ml="8" size="md" fontWeight="semibold" color="cyan.400">SC PORTFOLIO</DrawerHeader>
            <br />
            <DrawerBody>
              <VStack>
                <Link href="#"><Button>Profile</Button></Link>
                <br />
                <Link href="#"><Button>Dashboard</Button></Link>
                <br />
                <Link href="#"><Button>Setting</Button></Link>
                <br />
                <Link href="#"><Button>Logout</Button></Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

      </VStack>

    </>

  );
}

export default App;
