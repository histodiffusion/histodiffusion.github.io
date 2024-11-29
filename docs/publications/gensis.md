---
sidebar_label: 'Gen-SIS - Preprint'
---


# Gen-SIS: Generative Self-augmentation Improves Self-supervised Learning

<div class="container mt-5">
    <div class="card bg-light"> 
        <div class="card-body justify-content-center">
            <h2 class="card-title text-center">Preprint</h2>
            <h3 class="card-text text-center">Varun Belagali*<sup>1</sup>, Srikar Yellapragada*<sup>1</sup>, Alexandros Graikos<sup>1</sup>, Saarthak Kapse<sup>1</sup>,\
            Zilinghan Li<sup>2</sup>, Tarak Nath Nandi<sup>2,3</sup>, Ravi K Madduri<sup>2,3</sup>,\
            Prateek Prasanna<sup>1</sup>, Joel Saltz<sup>1</sup>, Dimitris Samaras<sup>1</sup></h3>
<h3 class="card-text text-center"><sup>1</sup>Stony Brook University, <sup>2</sup>Argonne National Laboratory, <sup>3</sup>University of Chicago</h3>
            <div class="d-flex justify-content-center">
                <button class="paper_button">Coming Soon</button> 
            </div>
        </div>
    </div>
</div>

## Abstract
Self-supervised learning (SSL) methods have emerged as strong visual representation learners by training an image encoder to maximize similarity between features of different views of the same image. To perform this view-invariance task, current SSL algorithms rely on hand-crafted augmentations such as random cropping and color jittering to create multiple views of an image. Recently, generative diffusion models have been shown to improve SSL by providing a wider range of data augmentations. However, these diffusion models require pre-training on large-scale image-text datasets, which might not be available for many specialized domains like histopathology. In this work, we introduce Gen-SIS, a diffusion-based augmentation technique trained exclusively on unlabeled image data, eliminating any reliance on external sources of supervision such as text captions. We first train an initial SSL encoder on a dataset using only hand-crafted augmentations. We then train a diffusion model conditioned on embeddings from that SSL encoder. Following training, given an embedding of the source image, this diffusion model can synthesize its diverse views. We show that these `self-augmentations', i.e. generative augmentations based on the vanilla SSL encoder embeddings, facilitate the training of a stronger SSL encoder. Furthermore, based on the ability to interpolate between images in the encoder latent space, we introduce the novel pretext task of disentangling the two source images of an interpolated synthetic image. We validate Gen-SIS's effectiveness by demonstrating performance improvements across various downstream tasks in both natural images, which are generally object-centric, as well as digital histopathology images, which are typically context-based. 

## Method

<div class="container justify-content-center text-center">
  <video width="100%" controls>
    <source src="/video/gensis/method.mp4" type="video/mp4"></source>
  </video>
</div>

We propose two types of self-augmentations:
- Generative Augmentations: In the generative augmentation setting, a synthetic image is generated using a single real image as the source. This involves first extracting an embedding $e$ from the source image using the conditioning-encoder, and then guiding the image generation process with that embedding to create a synthetic image I<sub>s</sub> = E-LDM(z,e). Generative augmentations introduce novel variations in the shape, size, and position of objects, as well as changes in the background, while preserving the semantic content of the objects in the image. 
- Interpolated Augmentations: An interesting property of diffusion models is their ability to generate an image that partially resembles each source image when conditioned on embeddings interpolated from two sources. We leverage this property to produce an interpolated synthetic image from two real source images, which we use to perform a new pretext task during the SSL training. With embeddings e<sub>1</sub> and e<sub>2</sub> representing the two source images (I<sub>1</sub>, I<sub>2</sub>), and an interpolation ratio α, we compute an interpolated embedding e<sub>int</sub> using spherical linear interpolation (SLERP), e<sub>int</sub> = SLERP(e<sub>1</sub>, e<sub>2</sub>, α). We choose SLERP over linear interpolation since high-dimensional vectors are concentrated near the surface of the unit sphere. This interpolated embedding serves as the conditioning to generate the synthetic interpolated image, I<sub>int</sub> = E-LDM(e<sub>int</sub>). 

## Training

<div class="container justify-content-center text-center">
  <video width="50%" controls>
    <source src="/video/gensis/training.mp4" type="video/mp4"></source>
  </video>
</div>

We use DINO our vanilla SSL method. To integrate generative augmentations into SSL, we use the real image and a corresponding synthetic image as an input pair for the SSL pretext task. We also apply hand-crafted augmentations to both real and synthetic images. <br></br>
Since the interpolated image contains components of both source images, we propose a disentanglement task where the network learns to separate the distinct features of each source image used in the interpolation.

<div class="container text-center">
  <img src="/img/gensis/pseudo_code.png"/>
</div>

## Results
For our enhanced SSL training, we improve DINO with the Gen-SIS framework and call
the method Gen-DINO. In Gen-DINO, we pre-train the ViT-S/16 model with generative and interpolated augmentations. 
<div class="container text-center">
  <img src="/img/gensis/results.png"/>
</div>

