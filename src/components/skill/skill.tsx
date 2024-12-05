import { Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { SKILLS, TABS } from './data';

const Skill: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const skills = SKILLS.filter((i) => i.type.includes(activeTab.value));

  return (
    <Flex align="center" justify="center" direction="column" w="100vw" h="calc(100vh - 120px)" mt="-70px" gap={5}>
      <Text as="h1" color="#FFF" fontWeight={700} fontSize={26} letterSpacing="1px">
        Skills
      </Text>
      <Flex bgColor="#e6e6e617" w="800px" h="420px" direction="column" px={16} py={10} gap={16} borderRadius={10}>
        <Flex align="center" justify="center" gap={7}>
          {TABS.map((item) => {
            const { title, value } = item;
            const isActive = activeTab.value === value;

            return (
              <Flex
                key={value}
                cursor="pointer"
                pb={2}
                borderBottom="1px solid"
                borderColor={isActive ? '#bdbdbd' : 'transparent'}
                onClick={() => setActiveTab(item)}
              >
                <Text color={isActive ? '#FFF' : '#ccc'} fontWeight={isActive ? 700 : 500} fontSize={16}>
                  {title}
                </Text>
              </Flex>
            );
          })}
        </Flex>

        <Grid templateColumns="repeat(6, 1fr)" columnGap={1} rowGap={10}>
          {skills.map((item) => {
            const { name, icon, iconAlt } = item;

            return (
              <GridItem key={name}>
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
