import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger
} from '../../components/ui/drawer';

interface Props {
  openAbout: boolean;
  onClose: () => void;
}

const IntroAbout: React.FC<Props> = (props) => {
  const { openAbout, onClose } = props;
  const [open, setOpen] = useState<boolean>(false);

  const TECHNOLOGIES = [
    {
      title: 'Webpack Module Federation',
      image: '/images/Webpack.webp'
    },
    {
      title: 'React',
      image: '/images/React.webp'
    },
    {
      title: 'Vue',
      image: '/images/Vue.webp'
    },
    {
      title: 'Angular',
      image: '/images/Angular.webp'
    },
    {
      title: 'TypeScript',
      image: '/images/Typescript.webp'
    }
  ];

  useEffect(() => {
    if (openAbout) {
      setOpen(true);
    }
  }, [openAbout]);

  return (
    <DrawerRoot
      placement="start"
      size="md"
      open={open}
      onOpenChange={(e: { open: boolean }) => {
        setOpen(e.open);
        if (!e.open) {
          onClose();
        }
      }}
    >
      <DrawerBackdrop />
      <DrawerTrigger>
        <Button
          className="button-about"
          w="200px"
          h="56px"
          borderRadius={8}
          color="#16c029"
          bgColor="transparent"
          border="2px solid"
          borderColor="#117a1d"
          fontSize={18}
          fontWeight={700}
          letterSpacing="0.5px"
          transitionDuration="250ms"
          _hover={{ bgColor: '#e6e6e61c' }}
          _active={{ bgColor: '#e6e6e61c' }}
        >
          About Website
        </Button>
      </DrawerTrigger>
      {/* @ts-ignore:next-line */}
      <DrawerContent>
        <DrawerHeader>
          <Text as="h1" fontSize={20} fontWeight={700} textTransform="uppercase">
            About website
          </Text>
        </DrawerHeader>
        <Box w="full" h="1px" bgColor="#e6e6e6" />
        <DrawerBody pt={10}>
          <Text textAlign="center" fontSize={16} fontWeight={600} color="#828282">
            This website is built with micro-frontend technology, combining React, Vue, and Angular.
          </Text>

          <Image src="/images/diagram-tech.webp" w="full" h="auto" mt={10} />

          <Flex direction="column" align="center" justify="center" mt={10} gap={4}>
            <Text
              textAlign="center"
              color="#a6a6a6"
              letterSpacing="2px"
              textTransform="uppercase"
              fontSize={13}
              fontWeight={700}
            >
              Technologies
            </Text>

            <Flex align="center" gap={4}>
              {TECHNOLOGIES.map((item) => {
                const { title, image } = item;

                return <Image key={title} src={image} w={8} h={8} title={title} />;
              })}
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default IntroAbout;
