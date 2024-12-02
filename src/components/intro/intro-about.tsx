import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerRoot,
  DrawerTrigger
} from '../../components/ui/drawer';

const IntroAbout = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DrawerRoot placement="start" size="lg" open={open} onOpenChange={(e: { open: boolean }) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerTrigger>
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
      </DrawerTrigger>
      {/* @ts-ignore:next-line */}
      <DrawerContent>
        <DrawerBody>
          <Flex align="center" justify="center" direction="column" gap={8}>
            <Flex align="center" justify="center" gap={4}>
              <Image
                src="https://nguyenhongduc.net/_vercel/image?url=%2Fimages%2Favatar.jpg&w=1536&q=100"
                w={16}
                h={16}
                borderRadius="full"
              />
              <Box>
                <Text fontSize={20} fontWeight={700}>
                  Nguyen Hong Duc
                </Text>
                <Text fontSize={16} fontWeight={500}>
                  Front-End Developer
                </Text>
              </Box>
            </Flex>

            <Text textAlign="center" fontSize={16} fontWeight={500}>
              Hi, I am a frontend developer with over 4.5 years of experience.
              <br />
              As a curious learner, I aspire to develop and contribute my skills in a professional environment.
            </Text>

            <Text textAlign="center" fontSize={16} fontWeight={500}>
              And I am the founder of Stormik browser!
            </Text>
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <Button>CV</Button>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default IntroAbout;
