import React from 'react';

import NavBar from '../../component/NavBar';
import Layout from './Layout';
import Dina from '../Home/components/dinamic'

import './index.css';

export default () => (
    <>
        <NavBar image='https://cdn.bulbagarden.net/upload/thumb/1/1e/Detective_Pikachu_artwork_3.png/153px-Detective_Pikachu_artwork_3.png' text="Notícia"/>
        <Layout />
        <Dina/>

    </>
)