import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const NoPage = () => {
    const navigate = useNavigate();

    return (
        <div className='flex justify-center items-center h-full'>
            <div className='flex flex-col items-center'>
                <div className='font-bold text-3xl mb-6'>
                    This page does not exist.
                </div>
                <Button onClick={() => navigate('/home')}>
                    Return to home page
                </Button>
            </div>
        </div>
    );
};

export default NoPage;
