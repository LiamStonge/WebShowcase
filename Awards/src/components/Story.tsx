import gsap from 'gsap';
import { MouseEvent, useRef } from 'react';
import AnimatedTitle from './AnimatedTitle.tsx';
import Button from './Button.tsx';
import RoundedCorners from './RoundedCornsers.tsx';

const Story = () => {
    const frameRef: React.RefObject<HTMLImageElement | null> = useRef(null);

    const handleMouseLeave = () => {
        gsap.to(frameRef.current, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            trransformPerspective: 500,
            ease: 'power1.inOut',
        });
    };

    const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
        const { clientX, clientY } = e;

        if (!frameRef.current) return;

        const rect = frameRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        gsap.to(frameRef.current, {
            duration: 0.3,
            rotateX,
            rotateY,
            trransformPerspective: 500,
            ease: 'power1.inOut',
        });
    };

    return (
        <section
            id='story'
            className='min-h-dvh w-screen bg-black text-blue-50'
        >
            <div className='flex size-full flex-col items-center py-10 pb-24'>
                <p className='font-general text-sm uppercase md:text-[10px]'>
                    the multiversal ip world
                </p>

                <div className='relative size-full'>
                    <AnimatedTitle
                        title='The st<b>o</b>ry of <br /> a hideen real<b>m</b>'
                        sectionId='#story'
                        containerClass='mt-5 pointer-events-none mix-blend-difference relative z-10'
                    />

                    <div className='story-img-container'>
                        <div className='story-img-mask'>
                            <div className='story-img-content'>
                                <img
                                    ref={frameRef}
                                    src='/img/entrance.webp'
                                    alt='entrance'
                                    className='object-contain'
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                />
                            </div>
                        </div>

                        <RoundedCorners />
                    </div>
                </div>

                <div className='-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end'>
                    <div className='flex h-full w-fit flex-col items-center md:items-start'>
                        <p className='mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start'>
                            Where realms converge, lies Zentry and the boundless
                            pillar. Discover its secrets and shape your fate
                            amidst infinite opportunities.
                        </p>
                        <Button
                            id='realm-button'
                            title='discover prologue'
                            containerClassName='mt-5'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
