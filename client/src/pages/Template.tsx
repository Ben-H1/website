import { ReactNode } from 'react';

type TemplateProps = {
    title: string;
    children: ReactNode;
};

const Template = ({ title, children }: TemplateProps) => {
    return (
        <div>
            <div className='text-4xl font-bold mb-3'>{title}</div>
            {children}
        </div>
    );
};

export default Template;
