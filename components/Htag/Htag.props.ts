import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: ReactNode;
    tag: 'h1' | 'h2' | 'h3';
}