---
sidebar_label: 'PixCell - Generative foundation model'
---

# PixCell: A generative foundation model for digital histopathology images

<div class="container mt-5">
    <div class="card bg-light"> 
        <div class="card-body justify-content-center">
            <h2 class="card-title text-center">Preprint</h2>
            <h3 class="authors card-title text-center">Srikar Yellapragada<sup>1</sup>, Alexandros Graikos<sup>1</sup>, Zilinghan Li<sup>2</sup>, Kostas Triaridis<sup>1</sup>,\
            Varun Belagali<sup>1</sup>, Saarthak Kapse<sup>1</sup>, Tarak Nath Nandi<sup>2,3</sup>, Ravi K Madduri<sup>2,3</sup>,\
            Prateek Prasanna<sup>1</sup>, Tahsin Kurc<sup>1</sup>, Rajarsi R. Gupta<sup>1</sup>, Joel Saltz<sup>1</sup>, Dimitris Samaras<sup>1</sup></h3>
            <h3 class="authors card-text text-center"><sup>1</sup>Stony Brook University, <sup>2</sup>Argonne National Laboratory, <sup>3</sup>University of Chicago</h3>
            <div class="d-flex justify-content-center">
                <a href="https://arxiv.org/abs/2506.05127" target="_blank"><button class="paper_button">arXiv</button> </a>
                <a href="https://huggingface.co/StonyBrook-CVLab/PixCell-1024" target="_blank"><button class="paper_button">PixCell-1024 🤗</button></a>
                <a href="https://huggingface.co/StonyBrook-CVLab/PixCell-256" target="_blank"><button class="paper_button">PixCell-256 🤗</button></a>
            </div>
            <div class="d-flex justify-content-center">
                <a href="https://huggingface.co/StonyBrook-CVLab/PixCell-256-Cell-ControlNet" target="_blank"><button class="paper_button">PixCell-256-Cell-ControlNet 🤗</button></a>
                <a href="https://huggingface.co/datasets/StonyBrook-CVLab/Synthetic-SBU-1M" target="_blank"><button class="paper_button">Synthetic-SBU-1M 🤗</button></a>
            </div>
        </div>
    </div>
</div>


<br /><br />

We present **PixCell**, the first generative foundation model for digital histopathology. We progressively train our model to generate from 256x256 to 1024x1024 pixel images conditioned on [UNI2-h](https://huggingface.co/MahmoodLab/UNI2-h) embeddings. PixCell achieves state-of-the-art quality in digital pathology image generation and can be seamlessly used to perform targeted data augmentation and generative downstream tasks.

---
![overview](/img/pixcell/pixcell_overview.png)

We curate a dataset of 30 million patches at 1024x1024 resolution from public and internal digital histopathology datasets, **PanCan-30M**. We pair each sample in the dataset with its corresponding 16 UNI-2h embeddings to construct the training data. We progressively train a diffusion transformer model, starting from 256x256 resolution and scaling up to 1024x1024. We release the weights for both the 256x256 model ([PixCell-256](https://huggingface.co/StonyBrook-CVLab/PixCell-256)) and the 1024x1024 model ([PixCell-1024](https://huggingface.co/StonyBrook-CVLab/PixCell-1024)).

<br />
---
![256_variations](/img/pixcell/256_variations.png)
<br />
![1024_variations](/img/pixcell/1024_variations.png)

Given a UNI embedding from a reference image, PixCell generates images with similar appearance and content. Using the PixCell-256 model we generate a synthetic variant of our SBU-1M dataset, [Synthetic SBU-1M](https://huggingface.co/datasets/StonyBrook-CVLab/Synthetic-SBU-1M). We show that we can train an encoder on the synthetic data only without losing any performance on downstream tasks.

<div class="container text-center">
  <img src="/img/pixcell/ssl_results.png" width="700"/>
</div>
<br />

---
![controlnet](/img/pixcell/controlnet_images.png)

Using a pre-trained cell segmentation model, we construct a dataset of 10,000 image-cell mask pairs. We train a cell mask ControlNet ([PixCell-256-Cell-ControlNet](https://huggingface.co/StonyBrook-CVLab/PixCell-256-Cell-ControlNet)) on this dataset to guide image generation. Using the UNI embedding from a reference image to control the **style** and a cell mask to control the **layout**, we can generate targeted synthetic data using the appearances from the test set and masks from training set to improve the downstream cell segmentation task.

<br />
---
![stain_translation](/img/pixcell/translation_images.png)

Our PixCell models, although never trained explicitly on IHC-stained data, can generalize to IHC images. Using a dataset of "roughly" paired H&E and IHC patches we learn a transformation between H&E UNI embeddings and IHC UNI embeddings. We use this learned transformation to perform stain translation between the two different staining techniques, significantly outperforming previous GAN-based models.


### Citation
```bibtex
TBA
```
