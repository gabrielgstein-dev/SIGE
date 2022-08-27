import React, { Children } from 'react';
import * as S from './Paragraph.style';

import { ParagraphProps } from './Paragraph.interface';

export const Paragraph: React.FC<ParagraphProps> = ({
  size = "16px",
  children
}) => {
  return (
    <S.Paragraph style={{fontSize: size}}>
      {children}
    </S.Paragraph>
  );
};
