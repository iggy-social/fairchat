import{a as r,l as n,c as i,r as p,o as a}from"./entry.c6a790a2.js";import{C as c}from"./ChatFeed.d8d34000.js";import"./ChatPost.6f09bd61.js";import"./user.1a73d850.js";import"./ProfileImage.a40d7b04.js";import"./MintedPostImage.87238cf8.js";import"./WaitingToast.703b78ef.js";import"./textUtils.31c4a063.js";import"./storageUtils.e873e54e.js";import"./chat.bd6f91ec.js";import"./site.40519005.js";import"./ConnectWalletButton.166e3244.js";import"./FileUploadModal.85578132.js";const m={name:"index",components:{ChatFeed:c},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.orbisContext}},setup(){const{address:t,chainId:o}=n();return{address:t,chainId:o}}};function d(t,o,u,f,h,e){const s=p("ChatFeed");return a(),i(s,{class:"mt-1",allPosts:!0,showQuotedPost:t.$config.showRepliesOnHomepage,orbisContext:e.getOrbisContext},null,8,["showQuotedPost","orbisContext"])}const Q=r(m,[["render",d]]);export{Q as default};
