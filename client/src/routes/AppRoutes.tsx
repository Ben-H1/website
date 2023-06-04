import { Route, Routes } from 'react-router-dom';
import NoPage from '../pages/NoPage';
import AboutPage from '../pages/about/AboutPage';
import BlogPage from '../pages/blog/BlogPage';
import ContactPage from '../pages/contact/ContactPage';
import HomePage from '../pages/home/HomePage';
import MusicPage from '../pages/music/MusicPage';
import ProjectsPage from '../pages/projects/ProjectsPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/music' element={<MusicPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/*' element={<NoPage />} />
        </Routes>
    );
};

export default AppRoutes;
