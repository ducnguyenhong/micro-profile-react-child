interface IconProps {
  w?: string;
  h?: string;
  color?: string;
}

export const IconScrollNext: React.FC<IconProps> = (props) => {
  const { w = '1em', h = '1em', color = 'currentColor' } = props;

  return (
    <svg viewBox="0 0 24 24" fill={color} height={h} width={w} {...props}>
      <path fill="currentColor" d="M7.757 5.636L6.343 7.05 12 12.707l5.657-5.657-1.414-1.414L12 9.88 7.757 5.636z" />
      <path
        fill="currentColor"
        d="M6.343 12.707l1.414-1.414L12 15.536l4.243-4.243 1.414 1.414L12 18.364l-5.657-5.657z"
      />
    </svg>
  );
};
