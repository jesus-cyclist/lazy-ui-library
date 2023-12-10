import { FC, ReactNode } from "react";
export type TAccordionProps = {
    isOpen: boolean;
    open: Function;
    onToggle?: Function;
    children: ReactNode;
    title: string;
};
export declare const Accordion: FC<TAccordionProps>;
