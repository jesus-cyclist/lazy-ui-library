import { FC } from "react";
export type TSelectProps = {
    isOpen: boolean;
    open: Function;
    options: Array<string>;
    onChange?: Function;
    placeholder?: string;
    isDisabled?: boolean;
    innerControl: boolean;
};
export declare const Select: FC<TSelectProps>;
