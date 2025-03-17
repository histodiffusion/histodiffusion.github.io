---
sidebar_label: 'Gen-SIS - Generative augmentations for self-supervised learning'
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
                <a href="https://arxiv.org/abs/2412.01672" target="_blank"><button class="paper_button">arXiv</button> </a>
            </div>
        </div>
    </div>
</div>

## TL;DR
Self-supervised learning (SSL) learns visual representations by training an image encoder to maximize similarity between features of different views of the same image. While SoTA SSL algorithms rely on hand-crafted augmentations (cropping, color jittering), recently, generative diffusion models have been shown to improve SSL by providing a wider range of *generative* data augmentations <a href="https://arxiv.org/abs/2312.17742">[1]</a>. The downside is that this usually requires pre-training the diffusion model on large-scale image-text datasets, which might not be available for many specialized domains like histopathology.

To solve this, we introduce Gen-SIS, a **diffusion-based augmentation technique trained exclusively on unlabeled image data**. We train an initial SSL encoder using only hand-crafted augmentations. We then use this encoder to train an embedding-conditioned diffusion model. The embedding-conditioned diffusion model can synthesize diverse views of an image as well as interpolate between images in the encoder latent space. We show that these *self-augmentations*, i.e. generative augmentations based on the vanilla SSL encoder embeddings, facilitate the training of a stronger SSL encoder which we complement with our novel distantanglement pretext task. We showcase Gen-SIS's effectiveness by demonstrating performance improvements in both natural images and digital histopathology.

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

We use DINO as our vanilla SSL method. To integrate generative augmentations into SSL, we use the real image and a corresponding synthetic image as an input pair for the SSL pretext task. We also apply hand-crafted augmentations to both real and synthetic images.

Since the interpolated image contains components of both source images, we propose a disentanglement task where the network learns to separate the distinct features of each source image used in the interpolation.

```py title="PyTorch-style pseudocode for the disentanglement pretext task" showLineNumbers
# Parameters:
# gs, gt: student and teacher networks
# tps, tpt: student and teacher temperatures
# c: center
# alpha: interpolation ratio

# Load an image from the dataset
for img_1 in loader:
    # Read secondary source image -- Another random image from the dataset
    img_2 = ReadImage(secondary(img_1))
    # Read interpolated image of primary and secondary source image
    # Can be generated on-the-fly but we pre-generate to reduce training time
    img_int = ReadInterpImage(img_1, img_2, alpha)

    # Apply vanilla DINO augmentation to get a view of the primary image
    img_1_view = vanilla_augment(img_1)
    # Apply vanilla DINO augmentation to get a view of secondary image
    img_2_view = vanilla_augment(img_2)
    # Apply vanilla DINO augmentation to get a view of the interpolated image
    img_int_view = vanilla_augment(img_int)

    # Get student output for interpolated image 
    stud_int = gs(img_int_view)
    # Get teacher output for primary and secondary images
    teach_1 = gt(img_1_view).detach()
    teach_2 = gt(img_2_view).detach()

    # Student sharpening
    stud_int = softmax(stud_int / tps, dim=1)
    # Entanglement of teacher output
    teach_ent = alpha * teach_1 + (1-alpha) * teach_2
    # Teacher sharpening and centering
    teach_ent = softmax((teach_ent - c) / tpt, dim=1)

    # Compute disentanglement loss
    disentanglement_loss = - (teach_ent * log(stud_int)).sum(dim=1).mean()
```

## Results
For our enhanced SSL training, we improve DINO with the Gen-SIS framework and call
the method Gen-DINO. In Gen-DINO, we pre-train the ViT-S/16 model with generative and interpolated augmentations. 
<div class="container text-center">
  <img src="/img/gensis/results.png"/>
</div>

## Citation
```bibtex
@article{belagali2024gen,
  title={Gen-SIS: Generative Self-augmentation Improves Self-supervised Learning},
  author={Belagali, Varun and Yellapragada, Srikar and Graikos, Alexandros and Kapse, Saarthak and Li, Zilinghan and Nandi, Tarak Nath and Madduri, Ravi K and Prasanna, Prateek and Saltz, Joel and Samaras, Dimitris},
  journal={arXiv preprint arXiv:2412.01672},
  year={2024}
}
```
