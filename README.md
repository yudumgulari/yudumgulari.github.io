# Yudum Güları — Kişisel Web Sitesi

Statik bir site (HTML/CSS/JS). Build adımı yok — `site/` klasörünü olduğu gibi yayınlayabilirsin.

## Dosyalar
- `index.html` — ana sayfa (Hero, Günün Hatırlatması, Ben Kimim, Leblebi Tozu, İçimden Geçen, Atölye & Yoga, İletişim)
- `yazilar.html` — İçimden Geçen yazıları
- `styles.css` — tasarım
- `script.js` — hatırlatmalar, menü, animasyonlar
- `assets/img/` — optimize edilmiş görseller

## Yayın (GitHub Pages)
Site şurada yayında: **https://yudumgulari.github.io/**
Depo: https://github.com/yudumgulari/yudumgulari.github.io (main dalı, kök klasör).

Değişiklikler `main` dalına push edildiğinde ~1 dakikada otomatik yayına girer:

```bash
cd site
git add -A
git commit -m "güncelleme"
git push
```

## Yeni yazı eklemek (birlikte yapıyoruz)
`yazilar.html` içinde bir yazı bloğu şöyle görünür:

```html
<article class="article reveal" id="yeni-yazi">
  <span class="a-date">İçimden Geçen</span>
  <h2>Başlık</h2>
  <p>Paragraf…</p>
  <p class="sign">— Yudum</p>
</article>
```

Bu bloğu kopyala, metni değiştir, en üste ekle. Ana sayfada öne çıkarmak istersen
`index.html` içindeki "İçimden Geçen" bölümüne aynı şekilde bir kart ekleriz.
Kaydettikten sonra yukarıdaki `git push` adımıyla yayına alırız.

## Hatırlatmalar
Günlük hatırlatmalar ve haftalık davetler `script.js` başındaki
`dailyReminders` ve `weeklyExperiences` listelerinde. İstediğin kadar cümle ekleyip çıkarabiliriz.
