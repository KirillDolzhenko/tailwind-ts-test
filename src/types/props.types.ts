import { ReactNode } from "react";
import { EnumSize } from "./enums";

export interface IPropsClassName {
  className?: string;
}

export interface IPropsChildren extends IPropsClassName {
  children: ReactNode;
}

export interface IPropsIconBlock extends IPropsChildren {
  Icon: JSX.ElementType;
}

export interface IPropsGradientButton extends IPropsChildren {
  size?: EnumSize;
  onClick?: () => void;
}

export interface IPropsNFTBlock extends IPropsClassName {
  title: string;
  price: number;
  src: string;
}

export interface IPropsFooterList extends IPropsClassName {
  title: string,
  elements: string[]
}
