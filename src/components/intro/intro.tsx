import { Box, Button, Flex, Text } from '@chakra-ui/react';

const Intro: React.FC = () => {
  return (
    <Flex align="center" justify="center" direction="column" w="full" h="full" mt="-70px">
      <Box>
        <Text
          as="h1"
          fontFamily="'Inter', sans-serif"
          color="#6eff7e"
          fontWeight={700}
          fontSize={42}
          textAlign="center"
        >
          Welcome!
        </Text>
        <Text
          as="h1"
          mt={3}
          fontFamily="'Inter', sans-serif"
          color="#FFF"
          fontWeight={700}
          fontSize={42}
          textAlign="center"
        >
          You are exploring my personal profile.
        </Text>
        <Text as="h3" mt={8} color="#b9b9b9" fontWeight={600} fontSize={18} textAlign="center">
          Explore my profile, where I showcase my personal information, skills, and
          <br />
          work experience - as a software engineer.
        </Text>
      </Box>

      <Flex align="center" justify="center" gap={10} mt={12}>
        <Button
          w="200px"
          h="56px"
          borderRadius={8}
          color="#FFF"
          bgColor="#16a34a"
          fontWeight={700}
          fontSize={18}
          letterSpacing="0.5px"
          transitionDuration="250ms"
          _hover={{ bgColor: '#1cca5b' }}
          _active={{ bgColor: '#1cca5b' }}
        >
          Discover Now
        </Button>
        <Button
          w="200px"
          h="56px"
          borderRadius={8}
          color="#16a34a"
          bgColor="#e6e6e617"
          border="1px solid"
          borderColor="#16a34a"
          fontSize={18}
          fontWeight={700}
          letterSpacing="0.5px"
          transitionDuration="250ms"
          _hover={{ bgColor: '#e6e6e64d' }}
          _active={{ bgColor: '#e6e6e64d' }}
        >
          About Website
        </Button>
      </Flex>
    </Flex>
  );
};

export default Intro;
