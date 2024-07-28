---
sidebar_label: '∞-Brush - ECCV 2024'
---

# ∞-Brush: Controllable Large Image Synthesis with Diffusion Models in Infinite Dimensions

<div className="infobox">

<span class="conference-title" color="red">ECCV 2024</span>
<span class="authors">
Minh-Quan Le*, Alexandros Graikos*, Srikar Yellapragada, Rajarsi Gupta, Joel Saltz, Dimitris Samaras
</span>

<div class="button-group"> 
  <button class="button_class" onClick={() => window.open('https://github.com/cvlab-stonybrook/infty-brush', '_blank')}>Code</button> 
    <button class="button_class" onClick={() => window.open('https://arxiv.org/abs/2407.14709', '_blank') }>arXiv</button> 
  </div>
</div>

## Abstract
Synthesizing high-resolution images from intricate, domain-specific information remains a significant challenge in generative modeling, particularly for applications in large-image domains such as digiital histopathology and remote sensing. Existing methods face critical limitations: conditional diffusion models in pixel or latent space cannot exceed the resolution on which they were trained without losing fidelity, and computational demands increase significantly for larger image sizes. Patch-based methods offer computational efficiency but fail to capture long-range spatial relationships due to their overreliance on local information. In this paper, we introduce a novel conditional diffusion model in infinite dimensions, ∞-Brush for controllable large image synthesis. We propose a cross-attention neural operator to enable conditioning in function space. Our model overcomes the constraints of traditional finite-dimensional diffusion models and patch-based methods, offering scalability and superior capability in preserving global image structures while maintaining fine details. To our best knowledge, ∞-Brush is the first conditional diffusion model in function space, that can controllably synthesize images at arbitrary resolutions of up to 4096 × 4096 pixels.

<br/>
## Model

![CVPR_figure](/img/eccv24/model-1.png)

## Results

## Citation

```bibtex
@article{le2024infty,
  title={$$\backslash$infty $-Brush: Controllable Large Image Synthesis with Diffusion Models in Infinite Dimensions},
  author={Le, Minh-Quan and Graikos, Alexandros and Yellapragada, Srikar and Gupta, Rajarsi and Saltz, Joel and Samaras, Dimitris},
  journal={arXiv preprint arXiv:2407.14709},
  year={2024}
}
```
