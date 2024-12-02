import { CSSProperties } from 'react';

interface IconProps {
  w?: string;
  h?: string;
  color?: string;
  style?: CSSProperties;
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

export const IconDiscover: React.FC<IconProps> = (props) => {
  const { w = '1em', h = '1em', color = 'currentColor' } = props;

  return (
    <svg viewBox="0 0 24 24" fill={color} height={h} width={w} {...props}>
      <path
        fill="currentColor"
        d="M10.525 5.495l-.004 2 4.557.01-9.603 9.585 1.413 1.415 9.63-9.61-.012 4.614 2 .004.02-8-8-.018z"
      />
    </svg>
  );
};

export const IconDownload: React.FC<IconProps> = (props) => {
  const { w = '1em', h = '1em', color = 'currentColor' } = props;

  return (
    <svg viewBox="0 0 24 24" fill={color} height={h} width={w} {...props}>
      <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z" />
    </svg>
  );
};

export const IconClose: React.FC<IconProps> = (props) => {
  const { w = '1em', h = '1em', color = 'currentColor' } = props;

  return (
    <svg viewBox="0 0 24 24" fill={color} height={h} width={w} {...props}>
      <path
        fill="currentColor"
        d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
      />
    </svg>
  );
};
