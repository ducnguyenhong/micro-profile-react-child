import { Flex, GridItem, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { DrawerBackdrop, DrawerBody, DrawerContent, DrawerRoot, DrawerTrigger } from '../../components/ui/drawer';

const MenuSkill: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DrawerRoot size="lg" open={open} onOpenChange={(e: { open: boolean }) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerTrigger>
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
          <Image src="https://cdn-icons-png.flaticon.com/128/11073/11073376.png" w={10} h={10} />
          <Text color="#FFF" textAlign="left" fontWeight={700} fontSize={24} mt={3}>
            Skill
          </Text>
          <Text color="#f2f2f2" textAlign="left" fontSize={16} mt={2}>
            All my personal programming skills
          </Text>
        </GridItem>
      </DrawerTrigger>
      {/* @ts-ignore:next-line */}
      <DrawerContent>
        <DrawerBody>
          <Flex align="center" justify="center" direction="column" gap={8}>
            aaaaaaaaa
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default MenuSkill;
