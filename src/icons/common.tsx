interface IconProps {
  w?: string;
  h?: string;
  color?: string;
}

export const IconScrollNext: React.FC<IconProps> = (props) => {
  const { w = '1em', h = '1em', color = 'currentColor' } = props;

  return (
    <svg viewBox="0 0 24 24" fill={color} height={h} width={w} {...props}>
      <path d="M5.59 7.41L7 6l6 6-6 6-1.41-1.41L10.17 12 5.59 7.41m6 0L13 6l6 6-6 6-1.41-1.41L16.17 12l-4.58-4.59z" />
    </svg>
  );
};

export const IconScrollPrev: React.FC<IconProps> = (props) => {
  const { w = '1em', h = '1em', color = 'currentColor' } = props;

  return (
    <svg viewBox="0 0 24 24" fill={color} height={h} width={w} {...props}>
      <path d="M18.41 7.41L17 6l-6 6 6 6 1.41-1.41L13.83 12l4.58-4.59m-6 0L11 6l-6 6 6 6 1.41-1.41L7.83 12l4.58-4.59z" />
    </svg>
  );
};
