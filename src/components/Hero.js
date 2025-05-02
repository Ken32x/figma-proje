import React from "react";

const Hero = () => {
  return (
    <section style={styles.hero}>
      {/* Sol Kısım: Başlık, açıklama ve buton */}
      <div style={styles.left}>
        <div style={styles.textBox}>
          <h1 style={styles.heading}>
            Navigating the digital landscape<br />for success
          </h1>
          <p style={styles.description}>
            Our digital marketing agency helps businesses grow and succeed online through a range of
            services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button style={styles.ctaButton}>Book a consultation</button>
        </div>
      </div>

      {/* Sağ Kısım: Megafon görseli */}
      <div style={styles.right}>
        <img
          src="/megafon.png" // Görsel dosyası public klasöründe olmalı
          alt="Marketing Illustration"
          style={styles.image}
        />
      </div>
    </section>
  );
};

const styles = {
  hero: {
    display: "flex",                // Sol ve sağ içeriği yatay olarak hizalar
    alignItems: "center",           // Dikeyde ortalar
    justifyContent: "space-between",// İki kenara yaslar
    padding: "0 80px",              // Yatayda iç boşluk
    height: "515px",                // Hero yüksekliği
  },

  left: {
    flex: "1",                      // Sol alan genişliği eşit
    display: "flex",
    flexDirection: "column",       // Dikey hizalama
    justifyContent: "center",      // Ortaya alır
    alignItems: "flex-start",      // Sola yaslar
  },

  textBox: {
    width: "531px",                // Metin kutusu genişliği
    height: "481px",               // Metin kutusu yüksekliği
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",      // Dikeyde ortalama
    gap: "24px",                   // Elemanlar arası boşluk
  },

  heading: {
    textAlign: "left",             // Sola hizalanmış başlık
    fontSize: "48px",              // Büyük punto
    fontWeight: "bold",            // Kalın yazı
    lineHeight: "1.2",             // Satır aralığı
    color: "#000",                 // Siyah renk
  },

  description: {
    textAlign: "left",             // Açıklama da sola hizalı
    fontSize: "18px",
    color: "#333",                 // Açık siyah/grimsi ton
    maxWidth: "500px",            // Maksimum genişlik
  },

  ctaButton: {
    marginTop: "16px",             // Üst boşluk
    padding: "16px 24px",          // Buton iç boşluğu
    backgroundColor: "#000",       // Siyah arka plan
    color: "#fff",                 // Beyaz yazı
    border: "none",                // Kenarlık yok
    borderRadius: "12px",          // Yuvarlatılmış köşe
    cursor: "pointer",             // El işareti
    fontSize: "16px",
    fontWeight: "bold",
    alignSelf: "flex-start",       // Sol hizalı buton
  },

  right: {
    flex: "1",                     // Sağ alan da eşit genişlikte
    display: "flex",
    justifyContent: "center",     // Görseli yatayda ortalar
    alignItems: "center",         // Görseli dikeyde ortalar
  },

  image: {
    width: "100%",                 // Alanı kapla
    maxWidth: "600px",            // Maksimum 600px ile sınırla
    height: "auto",               // Oranlı küçültme
  },
};

export default Hero;