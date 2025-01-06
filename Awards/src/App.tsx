import About from './components/About.tsx';
import Hero from './components/Hero.tsx';
const App = () => {
    return (
        <main className='relative min-h-screen w-screen overflow-x-hidden'>
            <Hero />

            <About />
        </main>
    );
};

export default App;
