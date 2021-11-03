import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Ellie',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'ellie@gmail.com',
      fileName: 'ellie',
      fileURL: null,
    },
    {
      id: '2',
      name: 'YeHwan',
      company: 'Tmax',
      theme: 'light',
      title: 'Front End Developer',
      email: 'oyh0470@gmail.com',
      fileName: 'yehwan',
      fileURL: null,
    },
    {
      id: '3',
      name: 'Ordin',
      company: 'Naver',
      theme: 'colorful',
      title: 'Front-End Developer',
      email: 'ordin@gmail.com',
      fileName: 'ordin',
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
