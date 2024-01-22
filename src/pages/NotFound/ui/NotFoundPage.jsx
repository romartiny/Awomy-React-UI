import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Logo from "../../../components/Logo";

const NotFoundPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [navigate]);

    return (
        <Logo />
    );
};

export default NotFoundPage;