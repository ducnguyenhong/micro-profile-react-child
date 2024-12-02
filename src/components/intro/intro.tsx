import { Box, Flex, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { type publicApiType, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { IconScrollNext } from '../../icons/common';
import IntroAbout from './intro-about';
import IntroProfile from './intro-profile';

const Intro: React.FC = () => {
  const visibility = useContext<publicApiType>(VisibilityContext);

  const onGoToItem = (index: number) => {
    const { scrollToItem, getItemByIndex } = visibility;
    scrollToItem(getItemByIndex(index));
  };

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      w="100vw"
      h="calc(100vh - 120px)"
      mt="-70px"
      pos="relative"
    >
      <Box
        pos="absolute"
        top="49%"
        my="auto"
        right={5}
        className="scroll-next"
        cursor="pointer"
        onClick={() => onGoToItem(1)}
      >
        <IconScrollNext w="45px" h="45px" color="#FFF" />
      </Box>

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
        <IntroProfile />
        <IntroAbout />
      </Flex>
    </Flex>
  );
};

export default Intro;
