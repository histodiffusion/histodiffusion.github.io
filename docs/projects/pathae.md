---
sidebar_label: 'PathAE - Pathology image compression with autoencoders'
---

# Pathology Image Compression with Pre-trained Autoencoders

<div class="container mt-5">
    <div class="card bg-light"> 
        <div class="card-body justify-content-center">
            <h2 class="card-title text-center">Preprint</h2>
            <h3 class="card-text text-center">Srikar Yellapragada<sup>1</sup>, Alexandros Graikos<sup>1</sup>, Kostas Triaridis<sup>1</sup>,\
            Zilinghan Li<sup>2</sup>, Tarak Nath Nandi<sup>2,3</sup>, Ravi K Madduri<sup>2,3</sup>,\
            Prateek Prasanna<sup>1</sup>, Joel Saltz<sup>1</sup>, Dimitris Samaras<sup>1</sup></h3>
<h3 class="card-text text-center"><sup>1</sup>Stony Brook University, <sup>2</sup>Argonne National Laboratory, <sup>3</sup>University of Chicago</h3>
            <div class="d-flex justify-content-center">
                <a href="https://arxiv.org/abs/2503.11591" target="_blank"><button class="paper_button">arXiv</button> </a>
                <a href="https://huggingface.co/collections/StonyBrook-CVLab/pathology-fine-tuned-aes-67d45f223a659ff2e3402dd0" target="_blank"><button class="paper_button">🤗 Models</button> </a>
            </div>
        </div>
    </div>
</div>


## TL;DR
Large volumes of high-resolution digital histopathology whole-slide images are essential in developing large-scale machine learning models. However, storage, transmission, and computational efficiency are significant challenges that need to be overcome in order to efficiently utilize these vast repositories. We find that **existing autoencoders are better pathology image compressors than JPEG** and propose to use them to reduce the costs of storing large whole-slide image repositories.

<br/>

![ae_compression](/img/pathae/ae_compression.png)

<br></br> 

Furthermore, in cases where the AEs fail to preserve fine-grained phenotypic details, we show that **fine-tuning only the decoder** of existing AE models with a pathology-specific perceptual metric increases the quality of the reconstructions significantly.

<br></br> 

![dcae_vs_jpeg](/img/pathae/dcae_vs_jpeg.png)



## Using compressed images in downstream tasks

We systematically benchmark three autoencoders with varying compression levels on segmentation, patch classificationand and multiple instance learning by replacing the original images with their autoencoder reconstructions. Using AE-compressed images leads to minimal performance degradation. Employing a K-means clustering-based quantization method for the autoencoder latents, we reduce storage requirements by as much as 8x.

![downstream](/img/pathae/ae_downstream.png)
<div class="container justify-content-center text-center">
  <img src="/img/pathae/ae_similarity.png" alt="similarity" width="70%"/>
</div>



## Citation
```bibtex
@article{yellapragada2025pathology,
  title={Pathology Image Compression with Pre-trained Autoencoders}, 
  author={Srikar Yellapragada and Alexandros Graikos and Kostas Triaridis and Zilinghan Li and Tarak Nath Nandi and Ravi K Madduri and Prateek Prasanna and Joel Saltz and Dimitris Samaras},
  journal={arXiv preprint arXiv:2503.11591},
  year={2025},
}
```
