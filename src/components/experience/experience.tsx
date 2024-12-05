import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { IconDiscover } from '../../icons/common';
import { TIMELINES } from './data';

const Experience: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  const EXP_TOP = [TIMELINES[3], 'BLOCK', TIMELINES[1], 'BLOCK'];
  const EXP_BOT = ['BLOCK', TIMELINES[2], 'BLOCK', TIMELINES[0]];
  const isActive = activeIndex === 2;

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      w="100vw"
      h={{ xs: 'auto', lg: 'calc(100vh - 120px)' }}
      mt={{ xs: '140px', lg: '-70px' }}
      pb={{ xs: '100px', lg: 0 }}
      gap={5}
      px={{ xs: '20px', lg: 0 }}
    >
      <Flex direction="column" align="center" gap="4px" opacity={0} className={isActive ? 'section-title' : undefined}>
        <Text as="h1" color="#FFF" fontWeight={700} fontSize={26} letterSpacing="1px">
          Experiences
        </Text>
        <Box h="1px" bgColor="#7d7d7d" w="60px" />
      </Flex>
      <Flex
        className={isActive ? 'section-wrapper' : undefined}
        opacity={0}
        bgColor="#e6e6e617"
        w={{ xs: 'full', lg: '800px' }}
        h={{ xs: 'auto', lg: '420px' }}
        direction="column"
        align="center"
        justify="center"
        px={{ xs: 4, lg: 16 }}
        py={8}
        borderRadius={10}
      >
        <Flex
          direction={{ xs: 'column', lg: 'row' }}
          align="center"
          gap={{ xs: 6, lg: 3 }}
          borderBottom={{ xs: 'none', lg: '2px solid #a3a3a3' }}
          pb={5}
        >
          {EXP_TOP.map((item, index) => {
            if (typeof item === 'string') {
              return <Box key={index} display={{ xs: 'none', lg: 'block' }} w="135px" h="full" />;
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

                <Box
                  display={{ xs: 'none', lg: 'block' }}
                  pos="relative"
                  w={3.5}
                  h={3.5}
                  borderRadius="full"
                  bgColor="#f2f2f2"
                  top="46px"
                />
                <Text pos="relative" color="#ccc" top="6px" fontSize={12}>
                  {duration}
                </Text>
              </Flex>
            );
          })}
        </Flex>
        <Flex direction={{ xs: 'column', lg: 'row' }} align="center" gap={{ xs: 6, lg: 3 }}>
          {EXP_BOT.map((item, index) => {
            if (typeof item === 'string') {
              return <Box key={index} display={{ xs: 'none', lg: 'block' }} w="135px" h="full" />;
            }

            const { workplaceLogo, workplaceLink, duration, workplace } = item;
            return (
              <Flex key={index} direction="column" w="135px" align="center" pos="relative">
                <Box
                  display={{ xs: 'none', lg: 'block' }}
                  pos="relative"
                  w={3.5}
                  h={3.5}
                  borderRadius="full"
                  bgColor="#f2f2f2"
                  top="-8px"
                />
                <Text display={{ xs: 'none', lg: 'block' }} pos="relative" color="#ccc" top="-4px" fontSize={12}>
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
                <Text display={{ xs: 'block', lg: 'none' }} pos="relative" color="#ccc" top="6px" fontSize={12}>
                  {duration}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Experience;
