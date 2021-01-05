import React from 'react';
import { NextPage } from 'next';
import axios, { AxiosInstance } from 'axios';

import { WKProfile } from '../../../types';

import { WaniKaniReviews, WaniKaniProfile, WaniKaniAccuracy } from './WaniKani.data';

import PublicShell from '../../common/PublicShell';

import styles from '../../styling/WaniKani.module.css';

// Create Axios instance.
const api: AxiosInstance = axios.create({
  baseURL: 'https://kingofboxes.mxblue.net.au:4000/',
});

const WaniKani: NextPage<WKProfile> = (data: WKProfile) => {
  return (
    <PublicShell title="WaniKani Progression | kingofboxes's Website">
      <div className={styles.container}>
        <div className={styles.wkcontainer}>
          <h1>WaniKani</h1>
          <p>
            WaniKani is a tool for learning Japanese radicals, Kanji and vocabulary. I am currently
            learning this as a hobby and to supplement my existing knowledge of Chinese characters.
            The information below is generated by the{' '}
            <a href="https://github.com/kingofboxes/website-project/blob/master/backend/controller.js">
              {' '}
              backend
            </a>{' '}
            automatically using the WaniKani v2 API.
          </p>
          <WaniKaniProfile data={data} />
          <WaniKaniReviews data={data} />
          <WaniKaniAccuracy data={data} />
        </div>
      </div>
    </PublicShell>
  );
};

// Fetch data before load.
WaniKani.getInitialProps = async () => {
  const res = await api.get('/wanikani');
  const data: WKProfile = res.data;
  return data;
};

export default WaniKani;
