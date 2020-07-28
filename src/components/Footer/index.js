import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      by dordetto
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
