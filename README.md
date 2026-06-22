# Yudum Güları — Kişisel Web Sitesi

Statik bir site (HTML/CSS/JS). Build adımı yok — `site/` klasörünü olduğu gibi yayınlayabilirsin.

## Dosyalar
- `index.html` — ana sayfa (Hero, Günün Hatırlatması, Ben Kimim, Leblebi Tozu, İçimden Geçen, Atölye & Yoga, İletişim)
- `yazilar.html` — İçimden Geçen yazıları
- `styles.css` — tasarım
- `script.js` — hatırlatmalar, menü, animasyonlar
- `assets/img/` — optimize edilmiş görseller

## Cloudflare Pages'e yayınlama
1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages**.
2. **Direct Upload** seç (Git deposu gerekmez).
3. Bu `site/` klasörünün **içeriğini** sürükle-bırak.
4. Yayınla. Hazır olan adresi (`*.pages.dev`) kendi alan adına bağlayabilirsin.

> Git ile çalışmak istersen: depoyu bağla, **Build command** boş bırak, **Output directory** = `site` (veya site'ı köke taşı).

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

## Hatırlatmalar
Günlük hatırlatmalar ve haftalık davetler `script.js` başındaki
`dailyReminders` ve `weeklyExperiences` listelerinde. İstediğin kadar cümle ekleyip çıkarabiliriz.
