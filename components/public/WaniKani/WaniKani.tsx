import React from 'react';
import { NextPage } from 'next';
import axios, { AxiosInstance } from 'axios';

import ContentHeader from '../../common/ContentHeader';
import PublicShell from '../../common/PublicShell';
import { WKProfile, ContentProps } from '../../../types';
import { WaniKaniReviews, WaniKaniProfile, WaniKaniAccuracy } from './WaniKani.data';

// Create Axios instance.
const api: AxiosInstance = axios.create({
  baseURL: 'https://kingofboxes.mxblue.net.au:4000/',
});

const contentProps: ContentProps = {
  heading: 'WaniKani Progression',
  description: `WaniKani is a tool for learning Japanese radicals, Kanji and vocabulary. I am currently
                learning this as a hobby and to supplement my existing knowledge of Chinese characters. The
                information below is generated by the backend using the WaniKani v2 API.`,
};

const WaniKani: NextPage<WKProfile> = (data) => {
  return (
    <PublicShell title="WaniKani Progression | Justin's Website">
      <ContentHeader data={contentProps} />
      <WaniKaniProfile data={data} />
      <WaniKaniReviews data={data} />
      <WaniKaniAccuracy data={data} />
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
