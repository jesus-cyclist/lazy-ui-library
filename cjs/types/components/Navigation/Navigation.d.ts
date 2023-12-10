import { FC, ReactNode } from "react";
export type TNavigationProps = {
    options: Array<{
        link: string;
        icon?: ReactNode;
        text: string;
    }>;
    logo: ReactNode;
};
export declare const Navigation: FC<TNavigationProps>;
