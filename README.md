# Mockury
[Demo](https://mockury.vercel.app) | [Code](https://github.com/kirillinoz/mockury)

## Overview
Mockury is a web application that allows you to create mockups for your books. You can choose format of the image, camera angle and background. As well as download a template to fill in your book design and upload it back to the website. Afterwards you can export the resulting image and share it anywhere you want. Mockury makes use of Three.js, so all 3D rendering happens locally on your machine.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Folder Structure](#folder-structure)
* [Packages Used](#packages-used)

## Installation
1) `git clone https://github.com/kirillinoz/mockury.git`
2) `cd mockury`
3) `npm install`

## Usage
1) `npm run start`
2) Open your browser and go to http://localhost:3000

## Folder Structure
```bash
- /assets
  - /scripts
- /components
  - /home
  - /studio
  - /utils
- /pages
- /public
  - /icons
  - /images
  - /models
  - /templates
  - /textures
- /styles
```
## Packages Used
```bash
mockury@0.1.0
├── @react-three/drei@9.36.0
├── @react-three/fiber@8.8.10
├── @splitbee/web@0.3.0
├── @supabase/auth-helpers-nextjs@0.4.4
├── @supabase/auth-helpers-react@0.3.1
├── @supabase/supabase-js@2.0.5
├── @types/node@18.11.0
├── @types/react-dom@18.0.6
├── @types/react@18.0.21
├── @types/three@0.144.0
├── autoprefixer@10.4.12
├── eslint-config-next@12.3.1
├── eslint@8.25.0
├── html-to-image@1.10.8
├── next@12.3.1
├── postcss@8.4.18
├── react-dom@18.2.0
├── react@18.2.0
├── tailwindcss@3.1.8
├── three@0.145.0
└── typescript@4.8.4
```
