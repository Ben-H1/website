import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

type NavLinkProps = {
    className?: string;
    link: string;
    icon: IconProp;
    title: string;
    noTitle?: boolean;
};

const NavLink = ({ className, link, icon, title, noTitle }: NavLinkProps) => {
    const navigate = useNavigate();

    return (
        <div
            className={clsx(
                'py-2 pl-6 flex items-center cursor-pointer hover:bg-zinc-600 select-none',
                className
            )}
            onClick={() => navigate(link)}
        >
            <div className='w-12 h-12 mr-6 flex items-center justify-center'>
                <FontAwesomeIcon icon={icon} size='2x' fixedWidth />
            </div>
            {!noTitle && (
                <div className='text-lg font-bold'>
                    {title}
                </div>
            )}
        </div>
    );
};

export default NavLink;
