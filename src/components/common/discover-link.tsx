import { Link } from '@chakra-ui/react';
import { IconDiscover } from '../../icons/common';

interface Props {
  href: string;
  title: string;
}

const DiscoverLink: React.FC<Props> = (props) => {
  const { href, title } = props;

  return (
    <Link
      href={href}
      display="inline-flex"
      alignItems="center"
      fontWeight={600}
      gap="0px"
      target="_blank"
      color="green.600"
      transitionDuration="250ms"
      _focus={{ border: 'none', outline: 'none' }}
      _hover={{ color: 'green.700' }}
    >
      {title}
      <IconDiscover w="12px" h="12px" color="green" style={{ position: 'relative', top: '-2px' }} />
    </Link>
  );
};

export default DiscoverLink;
