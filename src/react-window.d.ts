declare module 'react-window' {
    import * as React from 'react';
  
    export interface ListProps {
      children: React.FC<any>;
      height: number;
      itemCount: number;
      itemSize: number;
      width: number | string;
    }
  
    export const FixedSizeList: React.FC<ListProps>;
  }
  