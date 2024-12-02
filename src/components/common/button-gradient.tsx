import { Button } from '@chakra-ui/react';

interface Props {
  w?: string;
  h?: string;
  children?: React.ReactNode;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: string;
  px?: string | number;
}

const ButtonGradient: React.FC<Props> = (props) => {
  const { w, h, children, fontSize = 16, fontWeight = 600, letterSpacing, px } = props;

  return (
    <Button
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
      _hover={{ opacity: 0.9 }}
      _active={{ opacity: 0.9 }}
    >
      {children}
    </Button>
  );
};

export default ButtonGradient;
