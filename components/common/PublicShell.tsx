import React from 'react';
import Head from 'next/head';

import 'semantic-ui-css/semantic.min.css';

import { ShellProps } from '../../types';
import NavigationBar from './NavigationBar';
import FooterBar from './FooterBar';

import styles from '../styling/PublicShell.module.css';

// Wrapper for all content.
const PublicShell = ({ children, title }: ShellProps): JSX.Element => (
  <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico?" />
    </Head>
    <header>
      <nav>
        <NavigationBar />
      </nav>
    </header>
    <div className={styles.body}>{children}</div>
    <footer>
      <FooterBar />
    </footer>
  </div>
);

export default PublicShell;
