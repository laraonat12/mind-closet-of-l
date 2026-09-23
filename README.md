# Mind Closet of L

İstanbul, moda/stil ve ekrandaki hikayeler üzerine kişisel bir blog. [Astro](https://astro.build) ile kurulu, statik bir site — yazılar Markdown olarak `src/content/posts/` altında tutulur.

## Yapı

```text
src/
├── components/       # Header, Footer, PostCard, ana sayfadaki pasta/kiraz animasyonu (CakeHero)
├── content/posts/    # Blog yazıları (.md) — her biri title/excerpt/date/category ile
├── content.config.ts # Yazı şeması (kategori: sehir | moda | ekran)
├── layouts/          # Ortak sayfa iskeleti
└── pages/
    ├── index.astro       # Ana sayfa
    ├── hakkimda.astro    # Hakkımda
    └── yazilar/          # Arşiv + tekil yazı sayfası
```

## Yeni bir yazı eklemek

`src/content/posts/` altına yeni bir `.md` dosyası ekle, örnek:

```md
---
title: "Başlık"
excerpt: "Yazının kısa özeti (kart görünümünde çıkar)."
date: 2026-10-01
category: sehir # sehir | moda | ekran
---

Yazının gövdesi burada, normal Markdown olarak.
```

Örnek yazılar (`istanbul-sali-aksami.md`, `kislik-dolap-degisimi.md`, `dizi-finali-ve-hayat.md`) placeholder'dır — silinip gerçek yazılarla değiştirilebilir.

## Komutlar

| Komut             | Ne yapar                                  |
| :---------------- | :----------------------------------------- |
| `npm install`     | Bağımlılıkları kurar                       |
| `npm run dev`     | `localhost:4321`'de geliştirme sunucusu    |
| `npm run build`   | `./dist/` altına production build alır     |
| `npm run preview` | Build'i lokal olarak önizler               |

## Yayınlama (GitHub Pages)

`.github/workflows/deploy.yml` her `main` push'unda siteyi otomatik build edip GitHub Pages'e yayınlar. Kurulum:

1. Repo ayarlarında **Settings → Pages → Source**'u **GitHub Actions** yap.
2. `astro.config.mjs` içindeki `site` değerini kendi kullanıcı adınla güncelle (ör. `https://kullaniciadi.github.io`). Repo adı `kullaniciadi.github.io` değilse `base: '/repo-adi'` satırını da aç.
3. `main`'e push et — Actions sekmesinden deploy'u izleyebilirsin.
