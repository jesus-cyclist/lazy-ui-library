import { FC } from "react";
export type TInputProps = {
    value: string;
    placeholder: string;
    type: "text" | "email" | "password";
    onChange: Function;
    onClear: Function;
    name: string;
    disabled: boolean;
};
export declare const Input: FC<TInputProps>;
