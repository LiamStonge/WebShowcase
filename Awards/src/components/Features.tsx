import { TiLocationArrow } from 'react-icons/ti';

export type FeatureData = {
    src: string;
    title: React.ReactNode;
    description: string;
    isComingSoon: boolean;
};

const BentoCard = (
    props: FeatureData,
) => {
    return (
        <div className='relative size-full'>
            <video
                src={props.src}
                loop
                muted
                autoPlay
                className='absolute left-0 top-0 size-full object-cover object-center'
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h1 className='bento-title special-font'>{props.title}</h1>
                    {props.description && (
                        <p className='mt-3 max-w-64 text-xs md:text-base'>
                            {props.description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export const Features = (props: FeatureData[]) => {
    return (
        <section className='bg-black pb-52'>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-5 py-32'>
                    <p className='font-circular-web text-lg text-blue-50'>
                        Into the Metagame Layer
                    </p>
                    <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
                        Immerse yourself in a rich and ever-expanding universe
                        where a vibrant array of products converge into an
                        interconnected overlay experience on your world
                    </p>
                </div>

                <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[64vh]'>
                    <BentoCard
                        {...props[0]}
                    />
                </div>

                <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                    <div className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                        <BentoCard {...props[1]} />
                    </div>
                    <div className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                        <BentoCard {...props[2]} />
                    </div>
                    <div className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                        <BentoCard {...props[3]} />
                    </div>

                    <div className='bento-tilt_2'>
                        <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
                            <h1 className='bento-title special-font max-w-64 text-black'>
                                M<b>o</b>re co<b>m</b>ing s<b>o</b>on!
                            </h1>

                            <TiLocationArrow className='m-5 scale-[5] self-end' />
                        </div>
                    </div>
                    <div className='bento-tilt_2'>
                        <video
                            src='videos/feature-5.mp4'
                            loop
                            muted
                            autoPlay
                            className='size-full object-cover object-center'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
