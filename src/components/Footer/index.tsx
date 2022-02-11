import React from 'react';
import Additionaltext from '../../parts/Footer/AdditionalText';
import ContactsList from '../../parts/Footer/ContactsList';
import FooterBackgroundTransition from '../../parts/Footer/FooterbackgroundTransition';
import useStyles from './styles';

export default function Footer() {
  const { footerContentWrapper } = useStyles()

  return (
    <>
      <FooterBackgroundTransition />

      <footer className={footerContentWrapper}>
        <ContactsList />
        <Additionaltext />
      </footer>
    </>
  )
}
