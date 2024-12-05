import { Box, Button, Flex, Grid, GridItem, Image, Link, Text } from '@chakra-ui/react';
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

  const VERSIONS = [
    {
      title: 'Version 5',
      isCurrent: true,
      technology: 'MicroFE'
    },
    {
      title: 'Version 4',
      technology: 'NuxtJS',
      href: 'https://v4.nguyenhongduc.net'
    },
    {
      title: 'Version 3',
      technology: 'ReactJS',
      href: 'https://v3.nguyenhongduc.net'
    },
    {
      title: 'Version 2',
      technology: 'ReactJS',
      href: 'https://v2.nguyenhongduc.net'
    },
    {
      title: 'Version 1',
      technology: 'HTML',
      href: 'https://v1.nguyenhongduc.net'
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
      {/* @ts-ignore:next-line */}
      <DrawerTrigger asChild>
        <Button
          className="button-about"
          visibility="hidden"
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
        <DrawerBody py={10}>
          <Flex h="full" direction="column" justify="space-between">
            <Box>
              <Text textAlign="center" fontSize={16} fontWeight={500} color="#828282">
                This website is built with micro-frontend technology, combining React, Vue, and Angular.
              </Text>

              <Image src="/images/diagram-tech.webp" w="full" h="auto" mt={10} />
            </Box>

            <Flex direction="column" align="center" justify="center" gap={4}>
              <Text
                textAlign="center"
                color="#a6a6a6"
                letterSpacing="2px"
                textTransform="uppercase"
                fontSize={13}
                fontWeight={700}
              >
                Other versions
              </Text>

              <Grid templateColumns={{ lg: 'repeat(3, 1fr)' }} gap={4}>
                {VERSIONS.map((item) => {
                  const { title, isCurrent, technology, href } = item;

                  return (
                    <GridItem
                      key={title}
                      borderRadius={4}
                      border="2px solid"
                      borderColor={isCurrent ? 'green.500' : '#e6e6e6'}
                      transitionDuration="250ms"
                      _hover={{ borderColor: 'green.500' }}
                    >
                      <Link href={href} target="_blank" _focus={{ outline: 'none' }}>
                        <Flex direction="column" align="center" justify="center" px={5} py={2}>
                          <Text fontWeight={700} color={isCurrent ? 'green.600' : '#828282'}>
                            {title}
                          </Text>
                          <Text fontSize={11} color={isCurrent ? 'green.600' : '#828282'}>
                            ({technology})
                          </Text>
                        </Flex>
                      </Link>
                    </GridItem>
                  );
                })}
              </Grid>
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default IntroAbout;
