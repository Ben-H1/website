import { faBars, faChevronLeft, faChevronRight, faCode, faEnvelope, faHome, faMusic, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import NavLink from './NavLink';
import clsx from 'clsx';

const NavBar = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className={clsx(
            'sticky top-0 h-screen border-white border-r bg-zinc-700 flex flex-col shrink-0 group transition-all',
            isExpanded ? 'w-80' : 'w-24'
        )}>
            <div
                className='h-20 border-b flex items-center justify-center text-[24px] font-bold overflow-hidden truncate cursor-pointer select-none'
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? 'Benedict Hawthorn' : 'BH'}
            </div>
            <div className='flex flex-col space-y-4 overflow-y-auto overflow-x-hidden flex-1 py-6'>
                <NavLink
                    link='/home'
                    icon={faHome}
                    title='Home'
                    noTitle={!isExpanded}
                />
                <NavLink
                    link='/about'
                    icon={faUser}
                    title='About'
                    noTitle={!isExpanded}
                />
                <NavLink
                    link='/projects'
                    icon={faCode}
                    title='Projects'
                    noTitle={!isExpanded}
                />
                <NavLink
                    link='/music'
                    icon={faMusic}
                    title='Music'
                    noTitle={!isExpanded}
                />
                <NavLink
                    link='/blog'
                    icon={faNewspaper}
                    title='Blog'
                    noTitle={!isExpanded}
                />
                <NavLink
                    link='/contact'
                    icon={faEnvelope}
                    title='Contact'
                    noTitle={!isExpanded}
                />
            </div>
            <div
                className='absolute group-hover:visible invisible -right-16 border-t border-r border-b top-3 bg-zinc-700 w-16 h-14 rounded-e-xl cursor-pointer flex items-center justify-center'
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className='flex items-center'>
                    {isExpanded && <FontAwesomeIcon icon={faChevronLeft} />}
                    <FontAwesomeIcon icon={faBars} size='2x' fixedWidth />
                    {!isExpanded && <FontAwesomeIcon icon={faChevronRight} />}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
