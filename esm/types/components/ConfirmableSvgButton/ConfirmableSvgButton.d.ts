import { ReactNode, FC } from "react";
export type TConfirmableSvgButtonProps = {
    withConfirm: boolean;
    icon: ReactNode;
    onClick: Function;
};
export declare const ConfirmableSvgButton: FC<TConfirmableSvgButtonProps>;
