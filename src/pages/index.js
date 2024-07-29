import React from 'react';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';

import LightCard from '../../static/img/histodiff-social-card-light.png'
import DarkCard from '../../static/img/histodiff-social-card-dark.png'

import Content from './index.md';

export default function Home() {
  return (
    <Layout title="Home" description="Intro page">
      <div
        style={{
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30vh',
          margin: '2vh 0 2vh 0',
        }}>
        <ThemedImage
          alt="Card Image"
          width='auto'
          height='100%'
          sources={{
            light: LightCard,
            dark: DarkCard,
          }}
        />
      </div>
      <div
        style={{
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'left',
          margin: '0 20vw 0 20vw',
          fontSize: '1.3em',
        }}
      >
        <br/>
        <Content />
      </div>
    </Layout>
  );
}
