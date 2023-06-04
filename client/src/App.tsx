import NavBar from './components/nav/NavBar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
    return (
        <div className='bg-zinc-800 text-white font-libreBaskerville flex'>
            <NavBar />
            <div className='flex-1 p-6 min-h-screen'>
                <AppRoutes />
            </div>
        </div>
    );
}

export default App;
