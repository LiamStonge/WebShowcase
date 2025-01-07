import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import Button from './Button.tsx';

const Navbar = (props: { navItems: string[] }) => {
    const [isAudioPlaying, setisAudioPlaying] = useState(false);
    const [isIndicatorActive, setisIndicatorActive] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const navContainerRef = useRef<HTMLDivElement>(null);
    const audioElementRef = useRef<HTMLAudioElement>(null);

    const { y: currentScrollY } = useWindowScroll();

    const toggleAudioIndicator = () => {
        setisAudioPlaying((prev) => !prev);
        setisIndicatorActive((prev) => !prev);
    };

    useEffect(() => {
        if (currentScrollY == 0) {
            setIsNavVisible(true);
            navContainerRef.current?.classList.remove('float-nav');
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current?.classList.add('float-nav');
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current?.classList.add('float-nav');
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        });
    }, [isNavVisible]);

    useEffect(() => {
        if (isAudioPlaying) {
            audioElementRef.current?.play();
        } else {
            audioElementRef.current?.pause();
        }
    }, [isAudioPlaying]);

    return (
        <div
            ref={navContainerRef}
            className='bg-black fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'
        >
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex size-full items-center justify-between p-4'>
                    <div className='flex items-center gap-7'>
                        <img src='/img/logo.png' alt='logo' className='w-10' />
                        <Button
                            id='product-button'
                            title='Products'
                            rightIcon={<TiLocationArrow />}
                            containerClassName='bg-blue-50 md:flex hidden items-center justify-center gap-1'
                        />
                    </div>

                    <div className='flex h-full items-center'>
                        <div className='hidden md:block'>
                            {props.navItems.map((item: string) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className='nav-hover-btn'
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button
                            className='ml-10 flex items-center space-x-0.5'
                            onClick={toggleAudioIndicator}
                        >
                            <audio
                                ref={audioElementRef}
                                className='hidden'
                                src='/audio/loop.mp3'
                                loop
                            />

                            {[1, 2, 3, 4].map((bar) => (
                                <div
                                    key={bar}
                                    className={`indicator-line ${
                                        isIndicatorActive ? 'active' : ''
                                    }`}
                                    style={{
                                        animationDelay: `${bar * 0.1}s`,
                                    }}
                                />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
