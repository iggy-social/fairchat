import{a as r,l as n,c as i,r as p,o as a}from"./entry.7474f132.js";import{C as c}from"./ChatFeed.e748da2a.js";import"./ChatPost.a56ed8e2.js";import"./user.e2fdcbec.js";import"./ProfileImage.a72c5f87.js";import"./WaitingToast.2f6c8b8b.js";import"./storageUtils.0983f6af.js";import"./textUtils.47860a6b.js";import"./MintedPostImage.73d77fa6.js";import"./SwitchChainButton.3dc31fed.js";import"./site.093d0a06.js";import"./ConnectWalletButton.0c85b3e8.js";import"./FileUploadModal.a38fdfaa.js";const m={name:"index",components:{ChatFeed:c},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.orbisContext}},setup(){const{address:t,chainId:o}=n();return{address:t,chainId:o}}};function d(t,o,u,f,h,e){const s=p("ChatFeed");return a(),i(s,{class:"mt-1",allPosts:!0,showQuotedPost:t.$config.showRepliesOnHomepage,orbisContext:e.getOrbisContext},null,8,["showQuotedPost","orbisContext"])}const Q=r(m,[["render",d]]);export{Q as default};
