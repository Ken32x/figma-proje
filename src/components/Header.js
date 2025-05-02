// React kütüphanesini import ediyoruz, çünkü JSX yazabilmek için gerekiyor
import React from "react";


// Header adında bir React fonksiyonel component oluşturuyoruz
const Header = () => {
  return (
    // Header ana kapsayıcı: Üst barı oluşturuyoruz
    <header style={styles.header}>
  <div style={styles.left}>
    <span style={styles.logo}>★ Positivus</span>
  </div>

  {/* Yeni kapsayıcı div: Menü + Buton */}
  <div style={styles.navigationContainer}>
    <nav style={styles.nav}>
      <a href="#" style={styles.link}>About us</a>
      <a href="#" style={styles.link}>Services</a>
      <a href="#" style={styles.link}>Use Cases</a>
      <a href="#" style={styles.link}>Pricing</a>
      <a href="#" style={styles.link}>Blog</a>
    </nav>

    <button style={styles.button}>Request a quote</button>
  </div>
</header>

  );
};

// Sayfanın stillerini burada bir nesne (object) olarak tanımlıyoruz
const styles = {
  
  // Header container'ın stilleri
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 80px", 
    borderBottom: "1px solid #e5e5e5",
    backgroundColor: "#ffffff",
    position: "sticky",
    top: 0,
    zIndex: 10,
    marginBottom: "70px",
  },

  // Sol kısım: Logo için ayarlar
  left: {
    flex: "1",                     // Sol alan 1 birim yer kaplar
    display: "flex",
    alignItems: "center",
    marginRight: "100px",
  },

  // Logo yazısının stili
  logo: {
    fontWeight: "bold",
    fontSize: "30px",
  },

  navigationContainer: {
    display: "flex",           // Menü ve butonu yan yana hizala
    alignItems: "center",      // Dikey ortala
    gap: "40px",              // Menü ile buton arasında 100px boşluk
  },

  // Navigation (menu) linklerinin container'ı
  nav: {
    display: "flex",
    gap: "40px",                   // Menü itemları arasında 30px boşluk
    fontSize: "16px",
    justifyContent: "flex-end", // Sağ tarafa yasla
    
    
  },

  // Sağ kısım: Buton için container
  right: {
    flex: "1",                     // Sağ alan 1 birim yer kaplar
    display: "flex",
    justifyContent: "flex-start",
    
  },

  // Butonun kendisi
  button: {
    padding: "14px 25px",
    backgroundColor: "#ffffff",    // Buton beyaz
    border: "2px solid #000",       // Siyah kenarlık
    borderRadius: "8px",           // Hafif oval kenarlar
    cursor: "pointer",             // Üzerine gelince el işareti
    fontWeight: "bold",
    marginLeft: "40px",          // Menü ile buton arasında boşluk
    
  },

  // Linklerin (menü itemlarının) ortak stili
  link: {
    textDecoration: "none",        // Altı çizili olmasın
    color: "black",                // Siyah yazı
    fontWeight: "500",
    transition: "color 0.3s",      // Hoverda yumuşak renk geçişi
  },

  // (Henüz uygulanmadı) Hover durumunda linkin rengi değişecek
  linkHover: {
    color: "#0070f3",              // Hover olduğunda mavi renk
  },
};


// Header component'ini dışa aktarıyoruz ki başka dosyalarda kullanılabilsin
export default Header;