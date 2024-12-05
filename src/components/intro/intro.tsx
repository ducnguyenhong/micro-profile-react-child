import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import IntroAbout from './intro-about';
import IntroProfile from './intro-profile';

const Intro: React.FC = () => {
  const [openAbout, setOpenAbout] = useState<boolean>(false);
  const words1 = ['Welcome!'];
  const words2 = ['You', 'are', 'exploring', 'my', 'personal', 'profile.'];

  const [show1, setShow1] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);

  useEffect(() => {
    const showWords1 = setTimeout(() => setShow1(true), 1000);
    return () => clearTimeout(showWords1);
  }, []);

  useEffect(() => {
    const showWords2 = setTimeout(() => setShow2(true), 2000);
    return () => clearTimeout(showWords2);
  }, []);

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      w="100vw"
      h={{ xs: 'auto', lg: 'calc(100vh - 120px)' }}
      mt={{ xs: '200px', lg: '-70px' }}
      pos="relative"
    >
      <Flex direction="column" align="center" px="20px">
        <Flex direction="column" align="center" h="63px" lineHeight="34px">
          {show1 &&
            words1.map((word, index) => (
              <Text
                key={index}
                fontFamily="'Inter', sans-serif"
                color="#4ed734"
                fontWeight={700}
                fontSize={{ xs: 35, lg: 42 }}
                textAlign="center"
                className="show-word"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {word}
              </Text>
            ))}
        </Flex>

        <Flex mt={3} flexWrap="wrap" justify="center" h={{ xs: '75px', lg: '63px' }} gap={2.5} lineHeight="34px">
          {show2 &&
            words2.map((word, index) => (
              <Text
                key={index}
                fontFamily="'Inter', sans-serif"
                color="#FFF"
                fontWeight={700}
                fontSize={{ xs: 35, lg: 42 }}
                textAlign="center"
                className="show-word"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {word}
              </Text>
            ))}
        </Flex>

        <Text className="words3" as="h3" mt={8} color="#b9b9b9" fontWeight={600} fontSize={18} textAlign="center">
          Explore my profile, where I showcase my personal information, skills, and
          <br />
          work experience - as a software engineer.
        </Text>
      </Flex>

      <Flex direction={{ xs: 'column', lg: 'row' }} align="center" justify="center" gap={{ xs: 8, lg: 10 }} mt={12}>
        <IntroProfile onOpenAbout={() => setOpenAbout(true)} />
        <IntroAbout openAbout={openAbout} onClose={() => setOpenAbout(false)} />
      </Flex>
    </Flex>
  );
};

export default Intro;
