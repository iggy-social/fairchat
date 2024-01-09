# Fairchat.xyz

Fairchat is the first Web3 Social network on ZKFair L2 chain.

Fairchat is based on the [Iggy Social](https://iggy.social) template. It uses [Orbis SDK](https://useorbis.com) and [Ceramic Network](https://ceramic.network/) in the background. For usernames it uses [Punk Domains](https://punk.domains/).

Link: https://fairchat.xyz/

## List of deployed smart contracts

- `.fairchat` domain (FlexiPunkTLD): 0x4087fb91A1fBdef05761C02714335D232a2Bf3a1 
- Post NFT Metadata: 0x5e54CebB2612744cB56547bC7CC41466ad7ac557 
- Post NFT (ERC-1155): 0x2F103ec022a1d99291077a082b2DC24C734E58A3 
- Post NFT Minter: 0xF40284a811c82b4B9ab22E94Bb909Df6d2c66C08 
- Post NFT Stats: 0x99Dbf11aCd46baFBCE82506FaeB4F13E6Ea1726A 
- Activity Points: 0xc486B08Ed47fFe5c1b4b1A2ff5c671EA0083D9bA 
- General stats: 0x0BF6333Fc85159663A30Ac89FD02c5031B97c5ee 
- General stats middleware: 0x3Fa0EaC3058828Cc4BA97F51A33597C695bF6F9e 
- Friend keys: 0x1EB2Adc19eB3Df26D84427Be11F1eB1887c6631c 
- NFT Launchpad metadata: 0x498e0e6B245898c5E2dD0299d0456a8928F58ECC 
- NFT Launchpad directory: 0xBdaba8106cdC29420c9A7Bb31066ED79c9b6Be74 
- NFT Launchpad factory: 0x50045895e1983F39FDC149C9a5AC29C39BEA18fe 

## .env

Create a `.env` file from `.env.example`.

> Make sure to also enter these vars in your hosting settings!

## Hosting

We recommend to use Netlify for hosting the site. Netlify allows you to easily deploy the site from this repo (or from a fork of this repository).

Make sure to use the the `npm run generate` command instead of `npm run build` for build instructions on Netlify.

If you want to use optional features such as GIFs and image upload, make sure to enter proper environment variables (see `.env.example`).

Make sure to also select the proper serverless functions services in your environment variables, for example:

```bash
FILE_UPLOAD_SERVICE=netlify
LINK_PREVIEW_SERVICE=netlify
```

You can also set these in the Nuxt config file (`nuxt.config.ts`).

### 4everland

[4everland](https://4everland.org/) is a decentralized hosting provider which stores your website on IPFS.

If you have your code on GitHub, the `build.yml` script will build your app via GitHub Actions and create a `build` branch.

Make sure you add all the necessary env vars (tenor etc.) to the organization variables for actions on GitHub.

Also make sure you have Workflow permissions on the organization level on GitHub set to read & write.

Then, when you create a project on 4everland, make sure you select the `build` branch. 

And in the build section delete the command and set build folder to empty (or `./`). The preset can be set to `Other`. No install command is needed either.

![](https://bafkreid6mzglrk5hklraua267sker6gqsfpy2ezmjj7yc2oqmx2arbynru.ipfs.w3s.link)

## GIFs (Tenor)

If you want to have GIF search implemented, create your own Tenor API Key on Google Cloud Console. Follow the instructions here: https://developers.google.com/tenor/guides/quickstart. 

Then enter the key in environment variables (`TENOR_KEY`).

## Image upload (Spheron/IPFS)

To support image uploads on IPFS please create a key/token on Spheron Storage: https://app.spheron.network/#/storage 

Then add this key (and your bucket ID/name) to your environment variables:

```bash
SPHERON_BUCKET_NAME=
SPHERON_STORAGE_TOKEN=
```

Image uploads via Spheron work only if you have Netlify/Vercel background functions enabled (see `netlify/functions/imageUploader.js`).

## Image upload fallback

It is recommended to use ImageKit as the fallback option, in case Spheron has technical issues.

For this to work, create an account at [ImageKit.io](https://imagekit.io/) and add these environment variables to your project:

```bash
IMAGEKIT_ENDPOINT=
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
```

## Customize

- Project-specific settings in `nuxt.config.ts`
- CSS files in the `/public/css/` folder
- Favicon and cover/preview images in `/public/img/` folder

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

Or run Netlify dev server on http://localhost:8888 (to get link previews):

```bash
netlify dev
```

## Production

Build the application for production:

```bash
npm run generate
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Testing

Orbis test group:

```bash
https://app.orbis.club/group/kjzl6cwe1jw145e1i1agcrjp9375sjpyyk7imu281koehrpve0pr46lvr5e9xco
```
