import React from 'react';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';

import LightCard from '../../static/img/histodiff-social-card-light.png'
import DarkCard from '../../static/img/histodiff-social-card-dark.png'

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
          height: '10vh',
          fontSize: '1.5vh',
          margin: '0 15vw',
        }}>
        AI Gen:
        <p>
      We at the CVLab focus on leveraging cutting-edge artificial intelligence techniques to enhance the accuracy and efficiency of diagnosing diseases from histopathological images. Our work primarily revolves around creating and refining generative models that can produce highly realistic and varied synthetic histopathological data. This initiative not only aids in training robust diagnostic algorithms but also helps in overcoming some of the significant challenges in medical image analysis, such as data scarcity and privacy issues.
        </p>
        <p>
Our team consists of a diverse group of talented researchers, including computer scientists, biologists, and medical professionals. By combining our expertise, we aim to bridge the gap between technical innovations and clinical applications. Our current projects involve the development of generative adversarial networks (GANs) and variational autoencoders (VAEs), which are adept at generating new, unseen images that retain the complex structures and patterns characteristic of real biological tissues.
        </p>
        <p>
Furthermore, we are exploring how these generative models can be utilized not just for data augmentation, but also for anomaly detection and unsupervised learning. By detecting outliers and learning from unlabeled data, we hope to unlock new insights into disease mechanisms and improve diagnostic workflows.
        </p>
        <p>
Our research also extends to the ethical implications of using AI in medical settings, ensuring that our models are not only effective but also fair and transparent. By closely collaborating with healthcare professionals, we continuously refine our algorithms to meet clinical needs and maintain patient trust.
        </p>
        <p>
We actively publish our findings in leading scientific journals and present at international conferences to share knowledge and foster collaboration within the scientific community. Through these efforts, we aspire to set new standards for AI applications in histopathology, ultimately contributing to more accurate, efficient, and accessible healthcare solutions.
        </p>
      </div>
    </Layout>
  );
}
