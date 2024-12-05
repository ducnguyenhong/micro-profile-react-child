import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { SKILLS, TABS } from './data';

const Skill: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const skills = SKILLS.filter((i) => i.type.includes(activeTab.value));
  const isActive = activeIndex === 1;

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      w="100vw"
      h={{ xs: 'auto', lg: 'calc(100vh - 120px)' }}
      mt={{ xs: '140px', lg: '-70px' }}
      gap={5}
      px={{ xs: '20px', lg: 0 }}
    >
      <Flex direction="column" align="center" gap="4px" opacity={0} className={isActive ? 'section-title' : undefined}>
        <Text as="h1" color="#FFF" fontWeight={700} fontSize={26} letterSpacing="1px">
          Skills
        </Text>
        <Box h="1px" bgColor="#7d7d7d" w="40px" />
      </Flex>

      <Flex
        className={isActive ? 'section-wrapper' : undefined}
        opacity={0}
        bgColor="#e6e6e617"
        w={{ xs: 'full', lg: '800px' }}
        h={{ xs: 'auto', lg: '420px' }}
        direction="column"
        px={{ xs: 4, lg: 16 }}
        py={{ xs: 5, lg: 10 }}
        gap={{ xs: 6, lg: 16 }}
        borderRadius={10}
      >
        <Flex
          align="center"
          justify={{ xs: 'flex-start', lg: 'center' }}
          gap={7}
          overflowX="auto"
          // className={isActive ? 'skill-tabs' : undefined}
          // opacity={0}
        >
          {TABS.map((item) => {
            const { title, value } = item;
            const isActive = activeTab.value === value;

            return (
              <Flex
                key={value}
                cursor="pointer"
                pb={2}
                py={{ xs: 2, lg: 0 }}
                borderBottom="1px solid"
                borderColor={isActive ? '#bdbdbd' : 'transparent'}
                onClick={() => setActiveTab(item)}
              >
                <Text
                  whiteSpace="nowrap"
                  color={isActive ? '#FFF' : '#ccc'}
                  fontWeight={isActive ? 700 : 500}
                  fontSize={16}
                >
                  {title}
                </Text>
              </Flex>
            );
          })}
        </Flex>

        <Grid templateColumns={{ xs: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }} columnGap={1} rowGap={{ xs: 8, lg: 10 }}>
          {skills.map((item) => {
            const { name, icon, iconAlt } = item;

            return (
              <GridItem
                key={name}
                // className={isActive && endEffect ? 'skill-item' : undefined}
                // opacity={isActive && endEffect ? 1 : 0}
              >
                <Flex mx="auto" w={12} h={12} bgColor="#ffffff30" borderRadius={4} align="center" justify="center">
                  <Image src={icon} w={7} h={7} alt={iconAlt} />
                </Flex>
                <Text color="#bdbdbd" textAlign="center" mt={1} fontSize={14} fontWeight={500}>
                  {name}
                </Text>
              </GridItem>
            );
          })}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Skill;
