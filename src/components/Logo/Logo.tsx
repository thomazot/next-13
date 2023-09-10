import React from "react";

import IconLogo from './svgs/logo.svg';
import { SizeEnum } from "@/types";
import classNames from "classnames";

type LogoProps = {
    size: SizeEnum
}

const DICTIONARY = {
    'XXL': 'h-36',
    'XL': 'h-28',
    'LG': 'h-20',
    'MD': 'h-14',
    'SM': 'h-11',
    'XS': 'h-9',
    'XXS': 'h-7'
}

export const Logo: React.FC<LogoProps> = ({ size=SizeEnum.MD }) => <IconLogo className={classNames(DICTIONARY[size], 'w-auto')} />