import{H as p,T as m,M as c}from"./components.3c93c43b.js";import{a as l,l as d,b as f,e,w as s,F as u,r as _,o as g,i as h,t as C}from"./entry.012632d4.js";import{C as T}from"./ChatFeed.28ed9142.js";import"./composables.9c00f84f.js";import"./ChatPost.8e676dfe.js";import"./user.94805c75.js";import"./ProfileImage.0a5a137b.js";import"./WaitingToast.1498a182.js";import"./storageUtils.42fc3251.js";import"./textUtils.eed93891.js";import"./MintedPostImage.c8d13e36.js";import"./SwitchChainButton.0d6861c1.js";import"./site.7c69544f.js";import"./ConnectWalletButton.2dc40b63.js";import"./FileUploadModal.644671e4.js";const $={name:"memesnfts",components:{ChatFeed:T},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.orbisContext}},setup(){const{address:t,chainId:o}=d();return{address:t,chainId:o}}};function x(t,o,w,F,M,b){const n=m,r=c,a=p,i=_("ChatFeed");return g(),f(u,null,[e(a,null,{default:s(()=>[e(n,null,{default:s(()=>[h("Memes & NFTs | "+C(t.$config.projectMetadataTitle),1)]),_:1}),e(r,{property:"og:title",content:"Memes & NFTs | "+t.$config.projectMetadataTitle},null,8,["content"])]),_:1}),e(i,{class:"mt-1",showQuotedPost:t.$config.showRepliesOnHomepage,allPosts:!0,orbisContext:"kjzl6cwe1jw146cone6md8rij8pe51xa33gyxyz599l2k4aadl4p6j990af1gxt"},null,8,["showQuotedPost"])],64)}const R=l($,[["render",x]]);export{R as default};