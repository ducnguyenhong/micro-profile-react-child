import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { IconDiscover } from '../../icons/common';
import { TIMELINES } from './data';

const Experience: React.FC = () => {
  const EXP_TOP = [TIMELINES[3], 'BLOCK', TIMELINES[1], 'BLOCK'];
  const EXP_BOT = ['BLOCK', TIMELINES[2], 'BLOCK', TIMELINES[0]];

  return (
    <Flex align="center" justify="center" direction="column" w="100vw" h="calc(100vh - 120px)" mt="-70px" gap={5}>
      <Text as="h1" color="#FFF" fontWeight={700} fontSize={26} letterSpacing="1px">
        Experiences
      </Text>
      <Flex
        bgColor="#e6e6e617"
        w="800px"
        h="420px"
        direction="column"
        align="center"
        justify="center"
        px={16}
        py={8}
        borderRadius={10}
      >
        <Flex align="center" gap={3} borderBottom="2px solid #a3a3a3" pb={5}>
          {EXP_TOP.map((item, index) => {
            if (typeof item === 'string') {
              return <Box key={index} w="135px" h="full" />;
            }

            const { workplaceLogo, workplaceLink, duration, workplace } = item;
            return (
              <Flex key={index} direction="column" w="135px" align="center">
                <Image src={workplaceLogo} w={10} h={10} borderRadius="full" />

                <Link
                  href={workplaceLink}
                  target="_blank"
                  _focus={{ outline: 'none' }}
                  transitionDuration="250ms"
                  _hover={{ opacity: 0.8 }}
                >
                  <Flex align="center" gap="2px">
                    <Text color="#FFF" fontWeight={700} fontSize={16} textAlign="center" mt={1}>
                      {workplace}
                    </Text>
                    <IconDiscover w="10px" h="10px" color="#FFF" />
                  </Flex>
                </Link>

                <Box pos="relative" w={5} h={5} borderRadius="full" bgColor="#f2f2f2" top="49px" />
                <Text pos="relative" color="#ccc" top="6px" fontSize={12}>
                  {duration}
                </Text>
              </Flex>
            );
          })}
        </Flex>
        <Flex align="center" gap={3}>
          {EXP_BOT.map((item, index) => {
            if (typeof item === 'string') {
              return <Box key={index} w="135px" h="full" />;
            }

            const { workplaceLogo, workplaceLink, duration, workplace } = item;
            return (
              <Flex key={index} direction="column" w="135px" align="center" pos="relative">
                <Box pos="relative" w={5} h={5} borderRadius="full" bgColor="#f2f2f2" top="-10px" />
                <Text pos="relative" color="#ccc" top="-4px" fontSize={12}>
                  {duration}
                </Text>
                <Image src={workplaceLogo} w={10} h={10} borderRadius="full" mt={5} />

                <Link
                  href={workplaceLink}
                  target="_blank"
                  _focus={{ outline: 'none' }}
                  transitionDuration="250ms"
                  _hover={{ opacity: 0.8 }}
                >
                  <Flex align="center" gap="2px">
                    <Text color="#FFF" fontWeight={700} fontSize={16} textAlign="center" mt={1}>
                      {workplace}
                    </Text>
                    <IconDiscover w="10px" h="10px" color="#FFF" />
                  </Flex>
                </Link>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Experience;
