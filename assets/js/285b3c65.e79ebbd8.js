"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[265],{2366:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>m});var n=a(4848),i=a(8453);const t={sidebar_label:"Large Image Generation - CVPR 2024"},r="Learned representation-guided diffusion models for large-image generation",l={id:"publications/cvpr_24",title:"Learned representation-guided diffusion models for large-image generation",description:"CVPR 2024",source:"@site/docs/publications/cvpr_24.md",sourceDirName:"publications",slug:"/publications/cvpr_24",permalink:"/docs/publications/cvpr_24",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Large Image Generation - CVPR 2024"},sidebar:"publicationsSidebar",next:{title:"Text Conditioned LDM - WACV 2024",permalink:"/docs/publications/wacv_24"}},c={},m=[{value:"Abstract",id:"abstract",level:2},{value:"Model",id:"model",level:2},{value:"Results",id:"results",level:2},{value:"Qualitative results",id:"qualitative-results",level:3},{value:"FID scores",id:"fid-scores",level:3},{value:"Image Augmentation results",id:"image-augmentation-results",level:3},{value:"Text-to-Large image generation",id:"text-to-large-image-generation",level:3},{value:"Citation",id:"citation",level:2}];function d(e){const s={annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"learned-representation-guided-diffusion-models-for-large-image-generation",children:"Learned representation-guided diffusion models for large-image generation"}),"\n",(0,n.jsxs)("div",{className:"infobox",children:[(0,n.jsx)("span",{class:"conference-title",children:"CVPR 2024"}),(0,n.jsx)("span",{class:"authors",children:(0,n.jsx)(s.p,{children:"Alexandros Graikos*, Srikar Yellapragada*, Minh-Quan Le, Saarthak Kapse, Prateek Prasanna, Joel Saltz, Dimitris Samaras"})}),(0,n.jsxs)("div",{class:"button-group",children:[(0,n.jsx)("button",{class:"button_class",onClick:()=>window.open("https://github.com/cvlab-stonybrook/Large-Image-Diffusion","_blank"),children:"Code"}),(0,n.jsx)("button",{class:"button_class",onClick:()=>window.open("https://arxiv.org/abs/2312.07330","_blank"),children:"arXiv"})]})]}),"\n",(0,n.jsx)(s.h2,{id:"abstract",children:"Abstract"}),"\n",(0,n.jsx)(s.p,{children:"To synthesize high-fidelity samples, diffusion models typically require auxiliary data to guide the generation process. However, it is impractical to procure the painstaking patch-level annotation effort required in specialized domains like histopathology and satellite imagery; it is often performed by domain experts and involves hundreds of millions of patches. Modern-day self-supervised learning (SSL) representations encode rich semantic and visual information. In this paper, we posit that such representations are expressive enough to act as proxies to fine-grained human labels. We introduce a novel approach that trains diffusion models conditioned on embeddings from SSL. Our diffusion models successfully project these features back to high-quality histopathology and remote sensing images. In addition, we construct larger images by assembling spatially consistent patches inferred from SSL embeddings, preserving long-range dependencies. Augmenting real data by generating variations of real images improves downstream classifier accuracy for patch-level and larger, image-scale classification tasks. Our models are effective even on datasets not encountered during training, demonstrating their robustness and generalizability. Generating images from learned embeddings is agnostic to the source of the embeddings. The SSL embeddings used to generate a large image can either be extracted from a reference image, or sampled from an auxiliary model conditioned on any related modality (e.g. class labels, text, genomic data). As proof of concept, we introduce the text-to-large image synthesis paradigm where we successfully synthesize large pathology and satellite images out of text descriptions."}),"\n",(0,n.jsx)(s.h2,{id:"model",children:"Model"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"CVPR_figure",src:a(6539).A+"",width:"10192",height:"5554"})}),"\n",(0,n.jsx)(s.p,{children:"Overview of our method."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["(a) We train diffusion models on patches ",(0,n.jsx)(s.em,{children:"I"})," taken from a large image conditioned on SSL embeddings (shown in the blue box)."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"(b) We present our large image generation framework in 4 steps (shown in the orange box):"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"(i) We extract a set of spatially arranged embeddings from a reference image or sample them from an auxiliary model."}),"\n",(0,n.jsxs)(s.li,{children:["(ii) For every location ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"i"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"j"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"(i, j)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", we compute a conditioning vector ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsxs)(s.msub,{children:[(0,n.jsx)(s.mi,{children:"\u03bb"}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"i"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"j"})]})]})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\u03bb_{i,j}"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.9805em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",children:"\u03bb"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(s.span,{className:"mord mtight",children:[(0,n.jsx)(s.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(s.span,{className:"mpunct mtight",children:","}),(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})]})})]})}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(s.span,{})})})]})})]})]})})]})," by interpolating the spatial grid of embeddings."]}),"\n",(0,n.jsxs)(s.li,{children:["(iii) At every diffusion step, we denoise the patch ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"F"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"i"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"j"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"F(i, j)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]})," using the conditioning ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsxs)(s.msub,{children:[(0,n.jsx)(s.mi,{children:"\u03bb"}),(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"i"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"j"})]})]})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\u03bb_{i,j}"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.9805em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",children:"\u03bb"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(s.span,{className:"mord mtight",children:[(0,n.jsx)(s.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(s.span,{className:"mpunct mtight",children:","}),(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})]})})]})}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(s.span,{})})})]})})]})]})})]})," ."]}),"\n",(0,n.jsxs)(s.li,{children:["(iv) The next step is computed by averaging the denoising updates of all patches that overlap at ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"i"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"j"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"(i, j)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"results",children:"Results"}),"\n",(0,n.jsx)(s.h3,{id:"qualitative-results",children:"Qualitative results"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"CVPR_res",src:a(5211).A+"",width:"3839",height:"1750"})}),"\n",(0,n.jsx)(s.p,{children:"(Top) Patches (256 \xd7 256) from our models, and the corresponding reference real patches used to generate them. The SSLguided LDM replicates the semantics of the reference patch."}),"\n",(0,n.jsx)(s.p,{children:"(Bottom) Large images (1024 \xd7 1024) from our models, and the corresponding reference real images used to generate them."}),"\n",(0,n.jsx)(s.p,{children:"We preserve the global arrangement of the semantics defined in the reference image."}),"\n",(0,n.jsx)(s.h3,{id:"fid-scores",children:"FID scores"}),"\n",(0,n.jsxs)(s.p,{children:["For patches, we measure FID against the real images (",(0,n.jsx)(s.em,{children:"Vanilla FID"}),"). For large images, we follow the evaluation strategy of MultiDiffusion [3] and use FID to compare the distribution of 256 \xd7 256 crops from synthesized large images to that of real image patches of the same size (",(0,n.jsx)(s.em,{children:"Crop FID"}),"). We also measure FID directly between the large images and ground truth data using CLIP [35] (",(0,n.jsx)(s.em,{children:"CLIP FID"}),")."]}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:"/img/cvpr24/cvpr_fid_scores.png",alt:"drawing",style:{width:"500px"}})}),"\n",(0,n.jsx)(s.p,{children:"Our patch-level BRCA model is on par with SoTA [49] (7.64 at 10 \xd7). \u201cCLIP FID\u201d and \u201cEmbedding Similarity\u201d demonstrate our large images\u2019 realism and contextual accuracy."}),"\n",(0,n.jsx)(s.h3,{id:"image-augmentation-results",children:"Image Augmentation results"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"CVPR_figure",src:a(7288).A+"",width:"1678",height:"269"})}),"\n",(0,n.jsx)(s.p,{children:"The inclusion of synthetic data consistently enhances AUC across various MIL architectures and BRCA tasks. The dataset contains 1000 real images, so \u201c10% + synthetic\u201d indicates training with 100 real and 100 synthetic WSIs, with the remainder used for testing."}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:"/img/cvpr24/cvpr_res_2.png",alt:"drawing",style:{width:"500px"}})}),"\n",(0,n.jsx)(s.p,{children:"Our data augmentations provide notable improvements for the BACH (a) and CRC-VAL-HE (b) datasets. Notably, the diffusion training data does not overlap with the data of the augmented datasets."}),"\n",(0,n.jsx)(s.h3,{id:"text-to-large-image-generation",children:"Text-to-Large image generation"}),"\n",(0,n.jsxs)(s.p,{children:["Although the grid of self-supervised embeddings z cannot be manipulated in a human-interpretable manner, we argue that it is simple to assert more control over the generated images. This control can be attained by training auxiliary models ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"p"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mi,{children:"z"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(s.mi,{children:"c"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"p(z | c)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,n.jsx)(s.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]})," that translate higher-level conditioning signals, such as text captions ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"c"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"c"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"c"})]})})]}),", to learned patch representations ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"z"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"z"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"})]})})]}),"."]}),"\n",(0,n.jsx)(s.p,{children:"We train an auxilliary diffusion model that learns to map text conditions (using pathology Vision-Language models) to a grid of self-supervised embeddings and showcase examples of text-to-large image generation."}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:"/img/cvpr24/cvpr_text_to_large.jpg",alt:"drawing"})}),"\n",(0,n.jsx)(s.h2,{id:"citation",children:"Citation"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bibtex",children:"@article{graikos2023learned,\n  title={Learned representation-guided diffusion models for large-image generation},\n  author={Graikos, Alexandros and Yellapragada, Srikar and Le, Minh-Quan and Kapse, Saarthak and Prasanna, Prateek and Saltz, Joel and Samaras, Dimitris},\n  journal={arXiv preprint arXiv:2312.07330},\n  year={2023}\n}\n"})})]})}function o(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},6539:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/cvpr_method-e1be7bbe93ce8f2c3c5bc377c12508a7.jpg"},5211:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/cvpr_real_synth-783c846d79ebf14b5361e32598bf4e6e.png"},7288:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/cvpr_res_1-fd027857f231a195fd531c9d9a50024a.png"},8453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>l});var n=a(6540);const i={},t=n.createContext(i);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);