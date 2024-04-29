"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[670],{2032:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=i(4848),a=i(8453);const o={sidebar_label:"Text Conditioned LDM - WACV 2024",sidebar_position:2},s="PathLDM: Text Conditioned Latent Diffusion Model for Histopathology",r={id:"publications/wacv_24",title:"PathLDM: Text Conditioned Latent Diffusion Model for Histopathology",description:"WACV 2024",source:"@site/docs/publications/wacv_24.md",sourceDirName:"publications",slug:"/publications/wacv_24",permalink:"/docs/publications/wacv_24",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Text Conditioned LDM - WACV 2024",sidebar_position:2},sidebar:"publicationsSidebar",next:{title:"Large Image Generation - CVPR 2024",permalink:"/docs/publications/cvpr_24"}},d={},l=[{value:"Abstract",id:"abstract",level:2},{value:"Model",id:"model",level:2},{value:"Results",id:"results",level:2},{value:"Citation",id:"citation",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pathldm-text-conditioned-latent-diffusion-model-for-histopathology",children:"PathLDM: Text Conditioned Latent Diffusion Model for Histopathology"}),"\n",(0,n.jsxs)("div",{className:"infobox",children:[(0,n.jsx)("span",{class:"conference-title",children:"WACV 2024"}),(0,n.jsx)(t.p,{children:"Srikar Yellapragada*, Alexandros Graikos*, Prateek Prasanna, Tahsin Kurc, Joel Saltz, Dimitris Samaras"}),(0,n.jsxs)("div",{class:"button-group",children:[(0,n.jsx)("button",{class:"button_class",onClick:()=>window.open("https://github.com/cvlab-stonybrook/PathLDM"),children:"Code"}),(0,n.jsx)("button",{class:"button_class",onClick:()=>window.open("https://openaccess.thecvf.com/content/WACV2024/papers/Yellapragada_PathLDM_Text_Conditioned_Latent_Diffusion_Model_for_Histopathology_WACV_2024_paper.pdf"),children:"Paper"}),(0,n.jsx)("button",{class:"button_class",onClick:()=>window.open("https://arxiv.org/abs/2309.00748"),children:"arXiv"})]})]}),"\n",(0,n.jsx)(t.h2,{id:"abstract",children:"Abstract"}),"\n",(0,n.jsx)(t.p,{children:"To achieve high-quality results, diffusion models must be trained on large datasets. This can be notably prohibitive for models in specialized domains, such as computational pathology. Conditioning on labeled data is known to help in data-efficient model training. Therefore, histopathology reports, which are rich in valuable clinical information, are an ideal choice as guidance for a histopathology generative model. In this paper, we introduce PathLDM, the first text-conditioned Latent Diffusion Model tailored for generating high-quality histopathology images. Leveraging the rich contextual information provided by pathology text reports, our approach fuses image and textual data to enhance the generation process. By utilizing GPT's capabilities to distill and summarize complex text reports, we establish an effective conditioning mechanism. Through strategic conditioning and necessary architectural enhancements, we achieved a SoTA FID score of 7.64 for text-to-image generation on the TCGA-BRCA dataset, significantly outperforming the closest text-conditioned competitor with FID 30.1."}),"\n",(0,n.jsx)(t.h2,{id:"model",children:"Model"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"PathLDM_figure",src:i(9529).A+"",width:"1786",height:"1025"})}),"\n",(0,n.jsx)(t.p,{children:"We start with a WSI and an accompanying Pathology report. We crop the WSI into 256 \xd7 256 patches at 10x resolution. Leveraging GPT, we summarize the pathology report. For each patch, we compute Tumor and TIL probabilities, fuse them with the slide-level summary, and condition the LDM with CLIP embeddings of the fused summary. The VAE and text encoder remain frozen, and only the U-Net is trained."}),"\n",(0,n.jsx)(t.h2,{id:"results",children:"Results"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"PathLDM_samples",src:i(448).A+"",width:"1623",height:"967"})}),"\n",(0,n.jsx)(t.p,{children:"We choose a single text report and produce synthetic samples using Medfusion [29], Stable Diffusion [37], and PathLDM. Samples generated by Medfusion and Stable Diffusion show artifacts (indicated by green boxes) that are not present in our outputs. Moghadam et al. [28] produces images in lower resolution (128 \xd7 128) and exhibits artifacts and blurriness (green boxes in the last row) in the output images. The first row contains the real samples from the corresponding WSI. See paper for citation details."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"PathLDM_res_1",src:i(6571).A+"",width:"2512",height:"580"})}),"\n",(0,n.jsx)(t.p,{children:"We demonstrate that our effective conditioning, coupled with the architectural refinements, enable PathLDM to achieve a state-of-the-art FID score of 7.64 for text-to-image generation on the TCGA-BRCA dataset."}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:"/img/wacv24/pathldm_res_2.png",alt:"drawing",style:{width:"500px"}})}),"\n",(0,n.jsx)(t.p,{children:"When compared using 10k synthetic images, PathLDM outperforms other methods by a huge margin. Training Medfusion with text-conditioning improved the FID, highlighting the efficacy of our text summaries."}),"\n",(0,n.jsx)(t.h2,{id:"citation",children:"Citation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bibtex",children:"@InProceedings{Yellapragada_2024_WACV,\n    author    = {Yellapragada, Srikar and Graikos, Alexandros and Prasanna, Prateek and Kurc, Tahsin and Saltz, Joel and Samaras, Dimitris},\n    title     = {PathLDM: Text Conditioned Latent Diffusion Model for Histopathology},\n    booktitle = {Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},\n    month     = {January},\n    year      = {2024},\n    pages     = {5182-5191}\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},9529:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/pathldm_figure-4739c2810c249510732ba35e410a86ae.png"},6571:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/pathldm_res_1-7b3e7a7f167cbfa380adef6f46d74483.png"},448:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/pathldm_samples-8bbf86b0be262bc4665a044dbb4064ee.png"},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var n=i(6540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);