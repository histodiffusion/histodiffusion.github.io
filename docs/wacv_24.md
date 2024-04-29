---
sidebar_label: 'WACV-24-PathLDM'
sidebar_position: 2
---

# PathLDM: Text Conditioned Latent Diffusion Model for Histopathology

<div className="infobox">

  <span class="conference-title">WACV 2024</span>

Srikar Yellapragada*, Alexandros Graikos*, Prateek Prasanna, Tahsin Kurc, Joel Saltz, Dimitris Samaras

<div class="button-group"> 
    <button class="button_class" onClick={() => window.location.href = 'https://github.com/cvlab-stonybrook/PathLDM'}>Code</button> 
    <button class="button_class" onClick={() => window.location.href = 'https://openaccess.thecvf.com/content/WACV2024/papers/Yellapragada_PathLDM_Text_Conditioned_Latent_Diffusion_Model_for_Histopathology_WACV_2024_paper.pdf'}>Paper</button>
    <button class="button_class" onClick={() => window.location.href = 'https://arxiv.org/abs/2309.00748'}>arXiv</button> 

  </div>
</div>

## Abstract
To achieve high-quality results, diffusion models must be trained on large datasets. This can be notably prohibitive for models in specialized domains, such as computational pathology. Conditioning on labeled data is known to help in data-efficient model training. Therefore, histopathology reports, which are rich in valuable clinical information, are an ideal choice as guidance for a histopathology generative model. In this paper, we introduce PathLDM, the first text-conditioned Latent Diffusion Model tailored for generating high-quality histopathology images. Leveraging the rich contextual information provided by pathology text reports, our approach fuses image and textual data to enhance the generation process. By utilizing GPT's capabilities to distill and summarize complex text reports, we establish an effective conditioning mechanism. Through strategic conditioning and necessary architectural enhancements, we achieved a SoTA FID score of 7.64 for text-to-image generation on the TCGA-BRCA dataset, significantly outperforming the closest text-conditioned competitor with FID 30.1. 
