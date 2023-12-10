import { FC, ReactNode } from "react";
export type TButtonProps = {
    type: "button" | "submit" | "reset";
    onClick: Function;
    isDisabled: boolean;
    children: ReactNode;
};
export declare const Button: FC<TButtonProps>;
