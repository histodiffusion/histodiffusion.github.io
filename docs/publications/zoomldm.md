---
sidebar_label: 'ZoomLDM - Preprint'
---

# ZoomLDM: Latent Diffusion Model for multi-scale image generation

<div class="container mt-5">
    <div class="card bg-light"> 
        <div class="card-body justify-content-center">
            <h2 class="card-title text-center">Preprint</h2>
            <h3 class="card-text text-center">Srikar Yellapragada*, Alexandros Graikos*, Kostas Triaridis,\
            Prateek Prasanna, Rajarsi Gupta, Joel Saltz, Dimitris Samaras</h3>
            <h3 class="card-text text-center">Stony Brook University</h3>
            <div class="d-flex justify-content-center">
                <a href="https://arxiv.org/abs/2411.16969" target="_blank"><button class="paper_button">arXiv</button> </a>
                <a href="/pages/zoomldm_large_images/large_images.html" target="_blank"><button class="paper_button">Large image viewer</button></a>
            </div>
        </div>
    </div>
</div>

## TL;DR

Using a diffusion model to generate **digital pathology** and **satellite** has been impractical due to their **gigapixel sizes**. Our previous works focused on generating small patches, which was limited to only capturing local context. Here we propose **ZoomLDM**, a **multi-scale latent diffusion model** that can synthesize large images in these domains. We introduce a novel magnification-aware conditioning mechanism that utilizes self-supervised learning (SSL) embeddings and allows the diffusion model to synthesize images at different 'zoom' levels. Using the multi-scale nature of ZoomLDM we also propose an algorithm for computationally tractable and globally coherent **image synthesis of up to 4096x4096 pixels**, achieving unparalleled quality. Finally, we demonstrate that the multi-scale features extracted from ZoomLDM are highly effective in multiple instance learning tasks.

## Model

![method_figure](/img/zoomldm/method.png)

We first extract 256 × 256 patches from large images at the initial scale (20× for pathology) and generate SSL embedding matrices using pretrained encoders (UNI). The large image is then progressively downsampled by a factor of 2, with patches at each scale paired with the SSL embeddings of all overlapping initial-scale patches. Then, the SSL embeddings and magnification level are fed to the Summarizer, which projects them into the cross-magnification Latent space. The diffusion model is trained to generate 256 × 256 patches conditioned on the Summarizer’s output.

## Generation Results

<div class="container text-center">
  <img src="/img/zoomldm/fid.png"/>
</div>

As indicated by the FID, ZoomLDM achieves superior performance across all magnifications compared to SoTA models. We see larger improvements for magnifications below 2.5x where the data scarcity severely impacts a model’s ability to synthesize diverse, high-quality images. By leveraging data and conditioning across all magnifications, we allow the low density data regions to benefit from the insights that the model gains from the entire dataset, improving both model performance and efficiency.

![patches](/img/zoomldm/brca_patches.png)

## Joint Multi-Scale Generation

![multi_scale_gen](/img/zoomldm/multi_scale_examples_brca.png)

We also introduce a joint sampling process that synthesizes images across two different scales. We jointly generate a 256×256 image at 1.25x and a 4096x4096 image at 20x, using the 1.25x generation to guide the global structure of the 20x image. Without this context each 20x patch is unaware of its surroundings and the generated image wouldn't be globally coherent. With our approach, the generated large 20x image has a realistic global arrangement of cells and tissue. You can view more examples in our <a href="/pages/zoomldm_large_images/large_images.html" target="_blank">large image viewer</a>.

## Multi-Scale Features

<div class="container text-center">
  <img src="/img/zoomldm/mil.png"/>
</div>


We utilize ZoomLDM as a feature extractor and apply an MIL approach for slide-level classification tasks of Breast cancer subtyping and Homologous Recombintion Deficiency (HRD) prediction. The results show that ZoomLDM’s multi-scale features (fusing 20x and 5x) outperform SoTA encoders in both tasks highlighting the effectiveness of ZoomLDM’s cross-magnification latent space in capturing multi-scale dependencies. Even in a single magnification, ZoomLD outperforms all SoTA encoders. We believe that by learning to synthesize images on top of the capabilities of the discriminative SSL encoders we can exceed previous models in representation learning. 

## Citation
```bibtex
@article{yellapragada2024zoomldm,
  title={ZoomLDM: Latent Diffusion Model for multi-scale image generation},
  author={Yellapragada, Srikar and Graikos, Alexandros and Triaridis, Kostas and Prasanna, Prateek and Gupta, Rajarsi R and Saltz, Joel and Samaras, Dimitris},
  journal={arXiv preprint arXiv:2411.16969},
  year={2024}
}
```
