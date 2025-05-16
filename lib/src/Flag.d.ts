import React from 'react';
import { CountryCode } from './types';
interface FlagType {
    countryCode: CountryCode;
    withEmoji?: boolean;
    withFlagButton?: boolean;
    flagSize: number;
}
export declare const Flag: ({ withEmoji, withFlagButton, countryCode, flagSize, }: FlagType) => React.JSX.Element | null;
export {};
