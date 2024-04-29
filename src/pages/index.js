import React from 'react';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';

import LightCard from '../../static/img/histodiff-social-card-light.png'
import DarkCard from '../../static/img/histodiff-social-card-dark.png'

export default function Hello() {
  return (
    <Layout title="Introduction" description="Intro page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '33vh',
          fontSize: '5px',
        }}>
        <ThemedImage
          alt="Card Image"
          width='33%'
          sources={{
            light: LightCard,
            dark: DarkCard,
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10vh',
          fontSize: '20px',
        }}>
        <p>
        We are the CVLab from Stony Brook University. Our goal is to build generative models in histopathology.
        </p>
      </div>
    </Layout>
  );
}
