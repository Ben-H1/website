import { MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
    className?: string;
    onClick?: MouseEventHandler;
    children?: ReactNode;
};

const Button = ({ className, onClick, children }: ButtonProps) => {
    return (
        <div
            className={clsx(
                'py-2 px-4 bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-900 rounded-lg select-none cursor-pointer',
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Button;
