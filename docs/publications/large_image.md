---
sidebar_label: 'Large Image Generation - CVPR 2024'
---

# Learned representation-guided diffusion models for large-image generation

<div class="container mt-5">
    <div class="card bg-light"> 
        <div class="card-body justify-content-center">
            <h2 class="card-title text-center">CVPR 2024</h2>
            <h3 class="card-text text-center">Alexandros Graikos*, Srikar Yellapragada*, Minh-Quan Le, Saarthak Kapse,\
            Prateek Prasanna, Joel Saltz, Dimitris Samaras</h3>
            <h3 class="card-text text-center">Stony Brook University</h3>
            <div class="d-flex justify-content-center">
                <a href="https://github.com/cvlab-stonybrook/Large-Image-Diffusion" target="_blank"><button class="paper_button">Code</button></a>
                <a href="https://openaccess.thecvf.com/content/CVPR2024/papers/Graikos_Learned_Representation-Guided_Diffusion_Models_for_Large-Image_Generation_CVPR_2024_paper.pdf" target="_blank"><button class="paper_button">Paper</button></a>
                <a href="https://arxiv.org/abs/2312.07330" target="_blank"><button class="paper_button">arXiv</button></a>
            </div>
        </div>
    </div>
</div>

## Abstract
To synthesize high-fidelity samples, diffusion models typically require auxiliary data to guide the generation process. However, it is impractical to procure the painstaking patch-level annotation effort required in specialized domains like histopathology and satellite imagery; it is often performed by domain experts and involves hundreds of millions of patches. Modern-day self-supervised learning (SSL) representations encode rich semantic and visual information. In this paper, we posit that such representations are expressive enough to act as proxies to fine-grained human labels. We introduce a novel approach that trains diffusion models conditioned on embeddings from SSL. Our diffusion models successfully project these features back to high-quality histopathology and remote sensing images. In addition, we construct larger images by assembling spatially consistent patches inferred from SSL embeddings, preserving long-range dependencies. Augmenting real data by generating variations of real images improves downstream classifier accuracy for patch-level and larger, image-scale classification tasks. Our models are effective even on datasets not encountered during training, demonstrating their robustness and generalizability. Generating images from learned embeddings is agnostic to the source of the embeddings. The SSL embeddings used to generate a large image can either be extracted from a reference image, or sampled from an auxiliary model conditioned on any related modality (e.g. class labels, text, genomic data). As proof of concept, we introduce the text-to-large image synthesis paradigm where we successfully synthesize large pathology and satellite images out of text descriptions. 

## Model

![CVPR_figure](/img/cvpr24/cvpr_method.jpg)

Overview of our method. 

- (a) We train diffusion models on patches *I* taken from a large image conditioned on SSL embeddings (shown in the blue box). 

- (b) We present our large image generation framework in 4 steps (shown in the orange box): 
  - (i) We extract a set of spatially arranged embeddings from a reference image or sample them from an auxiliary model. 
  - (ii) For every location $(i, j)$, we compute a conditioning vector $λ_{i,j}$ by interpolating the spatial grid of embeddings. 
  - (iii) At every diffusion step, we denoise the patch $F(i, j)$ using the conditioning $λ_{i,j}$ .
  - (iv) The next step is computed by averaging the denoising updates of all patches that overlap at $(i, j)$.

## Results

### Qualitative results

![CVPR_res](/img/cvpr24/cvpr_real_synth.png)

(Top) Patches (256 × 256) from our models, and the corresponding reference real patches used to generate them. The SSLguided LDM replicates the semantics of the reference patch. 

(Bottom) Large images (1024 × 1024) from our models, and the corresponding reference real images used to generate them.

We preserve the global arrangement of the semantics defined in the reference image.

### FID scores


For patches, we measure FID against the real images (*Vanilla FID*). For large images, we follow the evaluation strategy of MultiDiffusion [3] and use FID to compare the distribution of 256 × 256 crops from synthesized large images to that of real image patches of the same size (*Crop FID*). We also measure FID directly between the large images and ground truth data using CLIP [35] (*CLIP FID*).

<center>
<img src="/img/cvpr24/cvpr_fid_scores.png" alt="drawing" style={{width:"500px"}} />
</center>

Our patch-level BRCA model is on par with SoTA [49] (7.64 at 10 ×). “CLIP FID” and “Embedding Similarity” demonstrate our large images’ realism and contextual accuracy.

### Image Augmentation results

![CVPR_figure](/img/cvpr24/cvpr_res_1.png)

The inclusion of synthetic data consistently enhances AUC across various MIL architectures and BRCA tasks. The dataset contains 1000 real images, so “10% + synthetic” indicates training with 100 real and 100 synthetic WSIs, with the remainder used for testing.


<center>
<img src="/img/cvpr24/cvpr_res_2.png" alt="drawing" style={{width:"500px"}} />
</center>

Our data augmentations provide notable improvements for the BACH (a) and CRC-VAL-HE (b) datasets. Notably, the diffusion training data does not overlap with the data of the augmented datasets.


### Text-to-Large image generation 

Although the grid of self-supervised embeddings z cannot be manipulated in a human-interpretable manner, we argue that it is simple to assert more control over the generated images. This control can be attained by training auxiliary models $p(z | c)$ that translate higher-level conditioning signals, such as text captions $c$, to learned patch representations $z$.

We train an auxilliary diffusion model that learns to map text conditions (using pathology Vision-Language models) to a grid of self-supervised embeddings and showcase examples of text-to-large image generation.

<center>
<img src="/img/cvpr24/cvpr_text_to_large.jpg" alt="drawing"/>
</center>

## Citation
```bibtex
@inproceedings{graikos2024learned,
  title={Learned representation-guided diffusion models for large-image generation},
  author={Graikos, Alexandros and Yellapragada, Srikar and Le, Minh-Quan and Kapse, Saarthak and Prasanna, Prateek and Saltz, Joel and Samaras, Dimitris},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={8532--8542},
  year={2024}
}
```
