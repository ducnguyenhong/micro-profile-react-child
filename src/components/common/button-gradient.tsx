import { Box, Button } from '@chakra-ui/react';

interface Props {
  w?: string;
  h?: string;
  children?: React.ReactNode;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: string;
  px?: string | number;
  className?: string;
}

const ButtonGradient: React.FC<Props> = (props) => {
  const { w, h, children, fontSize = 16, fontWeight = 600, letterSpacing, px, className } = props;

  return (
    <Button
      position="relative"
      overflow="hidden"
      w={w}
      h={h}
      px={px}
      borderRadius={8}
      color="#FFF"
      fontWeight={fontWeight}
      fontSize={fontSize}
      letterSpacing={letterSpacing}
      transitionDuration="250ms"
      bgGradient="to-r"
      gradientFrom="#56b617"
      gradientTo="#068414"
      className={className}
      _hover={{ opacity: 0.95 }}
      _active={{ opacity: 0.95 }}
    >
      {children}
      <Box
        position="absolute"
        top="0"
        left="-50%"
        w="200%"
        h="100%"
        bg="linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.6), transparent)"
        animation="lightSweep 4s infinite"
      />
    </Button>
  );
};

export default ButtonGradient;
