import { ReactNode, FC } from 'react';

type TButtonProps = {
    type: "button" | "submit" | "reset";
    onClick: Function;
    isDisabled: boolean;
    children: ReactNode;
};
declare const Button: FC<TButtonProps>;

type TAccordionProps = {
    isOpen: boolean;
    open: Function;
    onToggle?: Function;
    children: ReactNode;
    title: string;
};
declare const Accordion: FC<TAccordionProps>;

type TSelectProps = {
    isOpen: boolean;
    open: Function;
    options: Array<string>;
    onChange?: Function;
    placeholder?: string;
    isDisabled?: boolean;
    innerControl: boolean;
};
declare const Select: FC<TSelectProps>;

type TConfirmableSvgButtonProps = {
    withConfirm: boolean;
    icon: ReactNode;
    onClick: Function;
};
declare const ConfirmableSvgButton: FC<TConfirmableSvgButtonProps>;

type TInputProps = {
    value: string;
    placeholder: string;
    type: "text" | "email" | "password";
    onChange: Function;
    onClear: Function;
    name: string;
    disabled: boolean;
};
declare const Input: FC<TInputProps>;

type TNavigationProps = {
    options: Array<{
        link: string;
        icon?: ReactNode;
        text: string;
    }>;
    logo: ReactNode;
};
declare const Navigation: FC<TNavigationProps>;

export { Accordion, Button, ConfirmableSvgButton, Input, Navigation, Select, type TAccordionProps, type TButtonProps, type TConfirmableSvgButtonProps, type TInputProps, type TNavigationProps, type TSelectProps };
