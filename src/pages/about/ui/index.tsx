import React from 'react';
import styles from './styles.module.scss';
import { Header } from '@/widgets/header';
import { AboutFrame } from '@/shared/ui/about-frame';
import { Footer } from '@/widgets/footer';
import { Button } from '@/shared/ui/button';
import { useNavigate } from 'react-router-dom';

/**
 * Renders the AboutPage component.
 *
 * @return {ReactElement} The rendered AboutPage component.
 */
export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const handleMainPage = () => {
    // routing to the medicine search page
    navigate('/');
  };

  return (
    <>
      <Header />
      <section className={styles.main}>
        <AboutFrame />
        <Button onClick={handleMainPage} type="submit" size="default">
          Найти лучшую цену
        </Button>
      </section>
      <Footer />
    </>
  );
};
