import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import Button from './button.tsx';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [backgroundIndex, setbackgroundIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const lotalVideos = 0;
    const nextVideodRef = useRef<HTMLVideoElement>(null);
    const backgroundVideoRef = useRef<HTMLVideoElement>(null);
    const totalVideos = 3;

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex);
    };

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    const handleBackgroundVideoLoad = () => {
        if (backgroundVideoRef.current) {
            backgroundVideoRef.current.pause(); // Pause the background video
            backgroundVideoRef.current.currentTime =
                nextVideodRef.current?.currentTime ?? 0; // Update the current time
            backgroundVideoRef.current.play(); // Play the background video again
        }
    };

    const getVideoSource = (index: number) => `videos/hero-${index}.mp4`;

    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' });
            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideodRef?.current?.play(),
                onComplete: () => {
                    console.log('on end');
                    setbackgroundIndex(currentIndex);
                },
            });

            gsap.from('#current-video', {
                transofrmOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            });
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true });

    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            <div
                id='video-frame'
                className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'
            >
                <div>
                    <div className='mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div
                            onClick={handleMiniVdClick}
                            className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'
                        >
                            <video
                                loop
                                muted
                                ref={nextVideodRef}
                                src={getVideoSource(upcomingVideoIndex)}
                                id='current-video'
                                className='size-64 origin-center scale-150 object-cover object-center'
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>
                    <video
                        ref={nextVideodRef}
                        src={getVideoSource(currentIndex)}
                        loop
                        muted
                        id='next-video'
                        className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
                        onLoadedData={handleVideoLoad}
                    />
                    <video
                        ref={backgroundVideoRef}
                        src={getVideoSource(backgroundIndex)}
                        autoPlay
                        loop
                        muted
                        id='background-video'
                        className='absolute left-0 top-0 size-full object-cover object-center'
                        onLoadedData={handleBackgroundVideoLoad}
                    />
                </div>
                <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
                    G<b>a</b>ming
                </h1>

                <div className='absolute left-0 top-0 z-40 size-full'>
                    <div className='mt-24 px-5 sm:px-10'>
                        <h1 className='special-font hero-heading text-blue-100'>
                            redefi<b>n</b>e
                        </h1>
                        <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
                            Enter the Metagame Layer <br />{' '}
                            Unleash the Play Economy
                        </p>
                        <Button
                            id='watch-trailer'
                            title='Watch Trailer'
                            leftIcon={<TiLocationArrow />}
                            rightIcon={<TiLocationArrow />}
                            containerClassName='!bg-yellow-300 flex-center gap-1'
                        />
                    </div>
                </div>
            </div>

            <h1 className='special-font hero-heading absolute bottom-5 right-5 text-black'>
                G<b>a</b>ming
            </h1>
        </div>
    );
};

export default Hero;
