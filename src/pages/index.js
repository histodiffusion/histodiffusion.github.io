import React from 'react';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';

import LightCard from '../../static/img/histodiff-social-card-light.png'
import DarkCard from '../../static/img/histodiff-social-card-dark.png'

import Content from './index.md';

export default function Hello() {
  return (
    <Layout title="Home" description="Intro page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '20vh',
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
          margin: '0 25vw 0.25vw',
          fontSize: '18px',
        }}
      >
        <Content />
      </div>
    </Layout>
  );
}
