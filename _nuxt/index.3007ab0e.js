import{a as r,l as n,c as i,r as p,o as a}from"./entry.77f86b38.js";import{C as c}from"./ChatFeed.177952bd.js";import"./ChatPost.bf4c29d0.js";import"./user.de38e1eb.js";import"./ProfileImage.37013d17.js";import"./WaitingToast.7d9bad31.js";import"./storageUtils.682e164b.js";import"./textUtils.68eb7cff.js";import"./MintedPostImage.a45f01c8.js";import"./SwitchChainButton.8ebe69fa.js";import"./site.9e81b89f.js";import"./ConnectWalletButton.efd20f72.js";import"./FileUploadModal.45a1785c.js";const m={name:"index",components:{ChatFeed:c},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.orbisContext}},setup(){const{address:t,chainId:o}=n();return{address:t,chainId:o}}};function d(t,o,u,f,h,e){const s=p("ChatFeed");return a(),i(s,{class:"mt-1",allPosts:!0,showQuotedPost:t.$config.showRepliesOnHomepage,orbisContext:e.getOrbisContext},null,8,["showQuotedPost","orbisContext"])}const Q=r(m,[["render",d]]);export{Q as default};
