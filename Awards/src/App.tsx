import About from './components/About.tsx';
import { FeatureData, Features } from './components/Features.tsx';
import Hero from './components/Hero.tsx';
import Navbar from './components/Navbar.tsx';
import Story from './components/Story.tsx';

const navItems = ['Nexus', 'Vault', 'Prologue', 'about', 'contact'];

const MyFeatureData: FeatureData[] = [
    {
        src: 'videos/feature-1.mp4',
        title: (
            <>
                radi<b>n</b>t
            </>
        ),
        description:
            'A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.',
        isComingSoon: true,
    },
    {
        src: 'videos/feature-2.mp4',
        title: (
            <>
                zig<b>m</b>a
            </>
        ),
        description:
            'An anime and gaming-inspired NFT collection - the IP primed for expansion.',
        isComingSoon: false,
    },
    {
        src: 'videos/feature-3.mp4',
        title: (
            <>
                n<b>e</b>xus
            </>
        ),
        description:
            'A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.',
        isComingSoon: false,
    },
    {
        src: 'videos/feature-4.mp4',
        title: (
            <>
                az<b>u</b>l
            </>
        ),
        description:
            'A cross-world AI Agent - elevating your gameplay to be more fun and productive.',
        isComingSoon: false,
    },
];

const App = () => {
    return (
        <main className='relative min-h-screen w-screen overflow-x-hidden'>
            <Navbar navItems={navItems} />
            <Hero />
            <About />
            <Features {...MyFeatureData} />
            <Story />
        </main>
    );
};

export default App;
