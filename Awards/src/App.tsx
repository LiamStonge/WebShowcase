import About from './components/About.tsx';
import Hero from './components/Hero.tsx';
import Navbar from './components/Navbar.tsx';

const navItems = ['Nexus', 'Vault', 'Prologue', 'about', 'contact'];

const App = () => {
    return (
        <main className='relative min-h-screen w-screen overflow-x-hidden'>
            <Navbar navItems={navItems} />
            <Hero />
            <About />
        </main>
    );
};

export default App;
