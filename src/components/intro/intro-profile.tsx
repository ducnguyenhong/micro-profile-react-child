import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { useState } from 'react';
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerRoot,
  DrawerTrigger
} from '../../components/ui/drawer';
import { IconClose, IconDownload } from '../../icons/common';
import { ButtonGradient, DiscoverLink } from '../common';

interface Props {
  onOpenAbout: () => void;
}

const IntroProfile: React.FC<Props> = (props) => {
  const { onOpenAbout } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [showNews, setShowNews] = useState<boolean>(true);

  return (
    <DrawerRoot size="md" open={open} onOpenChange={(e: { open: boolean }) => setOpen(e.open)}>
      <DrawerBackdrop />
      {/* @ts-ignore:next-line */}
      <DrawerTrigger className="button-profile">
        <ButtonGradient w="200px" h="56px" fontWeight={700} fontSize={18} letterSpacing="0.5px">
          My Information
        </ButtonGradient>
      </DrawerTrigger>
      {/* @ts-ignore:next-line */}
      <DrawerContent>
        <DrawerBody p={8}>
          <Flex direction="column" gap={10}>
            <Flex gap={4} align="center">
              <Image src="/images/avatar.jpg" w={16} h={16} borderRadius="full" />
              <Box>
                <Text fontSize={20} fontWeight={700}>
                  Nguyen Hong Duc
                </Text>
                <Text fontSize={16} fontWeight={500} mt={2} color="#828282">
                  Front-End Developer
                </Text>
              </Box>
            </Flex>

            <Text fontSize={16} fontWeight={400} lineHeight="23px">
              Hi, I am a frontend developer with over 4.5 years of experience. As a curious learner, I aspire to develop
              and contribute my skills in a professional environment.
            </Text>

            <Flex direction="column" gap={3}>
              <Text fontSize={16} fontWeight={400}>
                • Date of birth:{' '}
                <Text as="span" fontSize={16} fontWeight={600}>
                  11/12/1999
                </Text>
              </Text>

              <Text fontSize={16} fontWeight={400}>
                • Phone:{' '}
                <Link href="tel:0389755202" fontSize={16} fontWeight={600} _focus={{ outline: 'none' }}>
                  0389755202
                </Link>
              </Text>

              <Text fontSize={16} fontWeight={400}>
                • Email:{' '}
                <Link
                  href="mailto:nguyenhongduc.work@gmail.com"
                  fontSize={16}
                  fontWeight={600}
                  _focus={{ outline: 'none' }}
                >
                  nguyenhongduc.work@gmail.com
                </Link>
              </Text>

              <Text fontSize={16} fontWeight={400}>
                • Address:{' '}
                <Text as="span" fontSize={16} fontWeight={600}>
                  Cau Giay, Ha Noi
                </Text>
              </Text>
            </Flex>

            <Text fontSize={16} fontWeight={400}>
              And I am the founder of <DiscoverLink title="Stormik" href="https://stormik.org" /> browser!
            </Text>

            {showNews && (
              <Flex mt={10} direction="column" gap={3} border="1px dashed #ccc" borderRadius={6} p={4} pos="relative">
                <Box pos="absolute" top={3} right={3} cursor="pointer" onClick={() => setShowNews(false)}>
                  <IconClose color="#b9b9b9" w="18px" h="18px" />
                </Box>

                <Text
                  w={10}
                  textAlign="center"
                  borderRadius={8}
                  color="#fff"
                  bgGradient="to-r"
                  gradientFrom="#56b617"
                  gradientTo="#068414"
                  fontSize={13}
                >
                  New
                </Text>

                <Text>This website is built with micro-frontend technology, combining React, Vue, and Angular.</Text>

                <Text
                  color="green.600"
                  fontWeight={600}
                  textDecor="underline"
                  cursor="pointer"
                  onClick={() => {
                    onOpenAbout();
                    setOpen(false);
                  }}
                >
                  Discover now!
                </Text>
              </Flex>
            )}
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <Flex justify="center" w="full">
            <Link href="https://nguyenhongduc.net/Nguyen-Hong-Duc-CV.pdf" target="_blank">
              <ButtonGradient w="170px" h="44px">
                <IconDownload w="18px" h="18px" color="#FFF" />
                <Text color="#FFF" fontWeight={500} fontSize={16}>
                  Download CV
                </Text>
              </ButtonGradient>
            </Link>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default IntroProfile;
