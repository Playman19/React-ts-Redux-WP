import React from 'react';
import { Ecolors } from '../Ecolors/Ecolors';
import './styles.css'
import classNames from 'classnames';

type TSizes = 28 | 20 | 16 | 14 | 12 | 10; 

interface ITextProps {
  As?: 'span' | 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
  children?: React.ReactNode,
  size: TSizes,
  mobilesize?: TSizes,
  tabletsize?: TSizes,
  desktopsize?: TSizes,
  color?: Ecolors,
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const {
    As='span',
    children,
    size, 
    mobilesize, 
    tabletsize, 
    desktopsize, 
    color= Ecolors.black,
    bold=false
  } = props;
  
  const classes = classNames(
    `s${size}`,
    {[`m${mobilesize}`]: mobilesize},
    {[`m${tabletsize}`]:tabletsize},
    {[`m${desktopsize}`]: desktopsize},
    color,
    {bold}
  );

  return (
    <As className={classes}>
      {children}
    </As>
  );
}
