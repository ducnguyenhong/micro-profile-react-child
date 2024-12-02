import { Flex, Grid, GridItem, Image, Link, Text } from '@chakra-ui/react';
import MenuExperience from './menu-experience';
import MenuSkill from './menu-skill';

const Menu: React.FC = () => {
  return (
    <Flex align="center" justify="center" direction="column" w="100vw" h="calc(100vh - 120px)" mt="-70px">
      <Grid templateColumns={{ sm: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={7}>
        <MenuSkill />

        <MenuExperience />

        <GridItem
          bgColor="#e6e6e617"
          borderRadius={10}
          px={8}
          py={8}
          w="400px"
          cursor="pointer"
          transitionDuration="250ms"
          _hover={{ bgColor: '#e6e6e657' }}
        >
          <Link href="/project" display="block" w="full">
            <Image src="https://cdn-icons-png.flaticon.com/128/4119/4119046.png" w={10} h={10} />
            <Text color="#FFF" fontWeight={700} fontSize={24} mt={3}>
              Project
            </Text>
            <Text color="#f2f2f2" fontSize={16} mt={2}>
              The projects I have participated in
            </Text>
          </Link>
        </GridItem>

        <GridItem
          bgColor="#e6e6e617"
          borderRadius={10}
          px={8}
          py={8}
          w="400px"
          cursor="pointer"
          transitionDuration="250ms"
          _hover={{ bgColor: '#e6e6e657' }}
        >
          <Link href="/blog" display="block" w="full">
            <Image src="https://cdn-icons-png.flaticon.com/128/14292/14292054.png" w={10} h={10} />
            <Text color="#FFF" fontWeight={700} fontSize={24} mt={3}>
              Blog
            </Text>
            <Text color="#f2f2f2" fontSize={16} mt={2}>
              My experience-sharing blog
            </Text>
          </Link>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Menu;
