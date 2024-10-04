import NavBar from '../components/NavBar'
import { exo2, orbitron } from './fonts';
import './globals.css';

export default function RootLayoutf({ children }) {
    return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
        <body className="bg-orange-100 flex flex-col px-4 py-2 min-h-screen">
            <header>
                <NavBar/>

            </header>
            <main className='grow py-3'>
            { children }
            </main>
            <footer className="border-t py-3 text-center text-xs text-slate-500">
                Game data and images cortesy of <a href="https://rawg.io" target="_blank"  className='text-orange-800 hover:underline'>RAWG</a>
            </footer>
        </body>

    </html>
    );
}