# 🌱 Garden AI - Bahçe Tasarımı Mobil Uygulaması

Modern ve kullanıcı dostu AI destekli bahçe tasarımı mobil uygulaması. React Native ve Expo Router ile geliştirilmektedir.

## 📱 Özellikler

- **Garden Design**: Fotoğraf yükleyip AI ile bahçe tasarımı
- **Plants for Location**: Lokasyona özel bitki önerileri
- **Replace Objects**: AI ile obje değiştirme (PRO)
- **Remove Objects**: İstenmeyen objeleri kaldırma
- **Style Reference**: Referans görsel ile tasarım
- **Create Garden**: Sıfırdan bahçe oluşturma

## 🛠 Teknoloji Stack

- **Framework**: React Native 0.79.2
- **Router**: Expo Router 5.0.6
- **Platform**: Expo SDK 53
- **Language**: TypeScript
- **Navigation**: Modern Bottom Tab Navigation (Custom Design)
- **Styling**: LinearGradient, Vector Icons, Custom Shadows
- **AI Integration**: OpenAI API (DALL-E 3, GPT-4o)

## 🤖 AI Modelleri ve Kullanım Alanları

### 🎨 **Garden Design** - Bahçe Tasarımı
- **Model**: DALL-E 3
- **Kullanım**: Fotoğraf yükleyip AI ile bahçe tasarımı oluşturma
- **Özellikler**: 
  - Yüksek kalite görsel üretimi (HD)
  - Vivid stil ile canlı renkler
  - 1024x1024 çözünürlük
  - Prompt engineering ile Türkçe bahçe tarzları

### 🌿 **Plants for Location** - Lokasyon Bazlı Bitki Önerileri
- **Model**: GPT-4o
- **Kullanım**: Konum bilgisine göre uygun bitki önerileri
- **Özellikler**:
  - İklim analizi
  - Toprak türü uyumluluğu
  - Bakım gereksinimleri
  - Mevsimsel öneriler
  - Türkçe açıklamalar

### 🔄 **Replace Objects** - Obje Değiştirme (PRO)
- **Model**: DALL-E 3 + DALL-E 2 (Edit)
- **Kullanım**: Bahçedeki objeleri AI ile değiştirme
- **Özellikler**:
  - Hassas obje seçimi
  - Doğal entegrasyon
  - Çoklu obje desteği
  - Stil koruma
  - **PRO özelliği** 💎

### 🗑️ **Remove Objects** - Obje Kaldırma
- **Model**: DALL-E 3 (Inpainting)
- **Kullanım**: İstenmeyen objeleri görsellerden kaldırma
- **Özellikler**:
  - Akıllı dolgu algoritması
  - Arka plan koruma
  - Çoklu obje kaldırma
  - Doğal sonuçlar

### 🎭 **Style Reference** - Stil Referansı
- **Model**: DALL-E 3
- **Kullanım**: Referans görsel ile stil transferi
- **Özellikler**:
  - Stil analizi
  - Renk paleti aktarımı
  - Kompozisyon uyarlama
  - Vivid stil optimizasyonu

### 🏗️ **Create Garden** - Sıfırdan Bahçe Oluşturma
- **Model**: DALL-E 3
- **Kullanım**: Parametrelerle sıfırdan bahçe tasarımı
- **Özellikler**:
  - Boyut spesifikasyonu
  - Stil seçimi (modern, klasik, doğal)
  - Bitki türü tercihleri
  - Natural stil optimizasyonu

## 🔧 AI Konfigürasyonu

```typescript
// config/env.example.ts
export const ENV_CONFIG = {
  OPENAI_API_KEY: 'your_api_key_here',
  
  MODELS: {
    GARDEN_DESIGN: {
      model: 'dall-e-3',
      size: '1024x1024',
      quality: 'hd',
      style: 'vivid'
    },
    PLANTS_LOCATION: {
      model: 'gpt-4o',
      maxTokens: 4000,
      temperature: 0.7
    },
    // ... diğer modeller
  }
};
```

## 💰 AI Maliyet Yönetimi

- **Günlük Limit**: $50
- **Aylık Limit**: $1000
- **Uyarı Eşiği**: %80
- **Rate Limiting**: 60 req/min, 1000 req/day
- **Fallback Modeller**: DALL-E 2, GPT-3.5-turbo

## 📂 Proje Yapısı

```
garden-ai/
├── app/                          # Expo Router sayfaları
│   ├── _layout.tsx              # ✅ Ana layout
│   ├── (tabs)/                  # ✅ Tab sayfaları
│   │   ├── _layout.tsx          # ✅ Modern Bottom Tab Navigation
│   │   ├── index.tsx            # ✅ Ana sayfa (Home)
│   │   ├── explore.tsx          # ✅ Explore sayfası
│   │   └── history.tsx          # ✅ History sayfası
│   ├── garden-design.tsx        # ✅ Garden Design modal
│   ├── plants-location.tsx      # ✅ Plants Location modal
│   ├── replace-objects.tsx      # ✅ Replace Objects modal (PRO)
│   ├── remove-objects.tsx       # ✅ Remove Objects modal
│   ├── style-reference.tsx      # ✅ Style Reference modal
│   └── create-garden.tsx        # ✅ Create Garden modal
├── src/
│   ├── components/              # ✅ Yeniden kullanılabilir component'ler
│   │   ├── common/             # ✅ Genel component'ler
│   │   │   └── ProBadge.tsx    # ✅ Pro rozeti
│   │   └── cards/              # ✅ Kart component'leri
│   │       └── FeatureCard.tsx # ✅ Feature kartları (gradient destekli)
│   ├── constants/              # ✅ Sabitler ve tema
│   │   ├── Colors.ts           # ✅ Renk paleti
│   │   ├── Typography.ts       # ✅ Typography sistemi
│   │   ├── Spacing.ts          # ✅ Spacing sistemi
│   │   └── index.ts            # ✅ Export dosyası
│   ├── types/                  # ✅ TypeScript type'lar
│   │   └── index.ts            # ✅ Temel type'lar
│   └── data/                   # ✅ Mock data ve sabitler
│       └── features.ts         # ✅ Feature kartları (gradient destekli)
├── assets/                     # Görsel dosyaları
└── README.md                   # ✅ Proje dokümantasyonu
```

## 🎯 YAPILACAKLAR LİSTESİ

### ✅ TAMAMLANAN GÖREVLER
- [x] Proje temel yapısı
- [x] Design system (Colors, Typography, Spacing)
- [x] TypeScript type definitions
- [x] Feature cards data yapısı
- [x] ProBadge component
- [x] FeatureCard component (gradient destekli)
- [x] Modern Bottom Tab Navigation (Custom Design)
- [x] Tab bar icon'ları ve animasyonlar
- [x] Stack Navigation konfigürasyonu
- [x] Ana Sayfa (Home) - Feature cards grid
- [x] Garden Design sayfası
- [x] Plants for Location sayfası
- [x] Replace Objects sayfası (PRO)
- [x] Remove Objects sayfası
- [x] Style Reference sayfası
- [x] Create Garden sayfası
- [x] Explore sayfası
- [x] History sayfası
- [x] Gradient placeholder görseller

## 📋 SIRADA EKLENECEK SAYFALAR VE ÖZELLİKLER

### 🔥 1. ÖNCELİKLİ SAYFALAR (Hemen Eklenecek)

#### 📸 **Image Picker & Camera Integration**
```typescript
// app/components/ImagePicker.tsx
- Kamera erişimi
- Galeri seçimi
- Image cropping
- Image compression
- Preview modal
```

#### 🔐 **Authentication System**
```typescript
// app/(auth)/
├── login.tsx           # Giriş sayfası
├── register.tsx        # Kayıt sayfası
├── forgot-password.tsx # Şifre sıfırlama
└── _layout.tsx         # Auth layout
```

#### 👤 **Profile & Settings**
```typescript
// app/(tabs)/profile.tsx
- Kullanıcı profili
- Ayarlar menüsü
- Pro subscription durumu
- Hesap yönetimi
- Çıkış yapma
```

#### 💳 **Pro Subscription System**
```typescript
// app/subscription/
├── plans.tsx           # Pro planları
├── payment.tsx         # Ödeme sayfası
├── success.tsx         # Başarılı ödeme
└── manage.tsx          # Abonelik yönetimi
```

### 🎨 2. UI/UX İYİLEŞTİRMELERİ

#### 🔄 **Loading & Error States**
```typescript
// src/components/states/
├── LoadingSpinner.tsx  # Loading animasyonu
├── ErrorBoundary.tsx   # Hata yakalama
├── EmptyState.tsx      # Boş durum
└── SkeletonLoader.tsx  # Skeleton loading
```

#### 🎭 **Animations & Transitions**
```typescript
// src/components/animations/
├── FadeIn.tsx          # Fade animasyonu
├── SlideUp.tsx         # Slide animasyonu
├── ScaleButton.tsx     # Button animasyonu
└── PageTransition.tsx  # Sayfa geçişleri
```

#### 📱 **Responsive Design**
```typescript
// src/hooks/
├── useScreenSize.tsx   # Ekran boyutu
├── useOrientation.tsx  # Yönlendirme
└── useKeyboard.tsx     # Klavye durumu
```

### 🚀 3. FONKSİYONEL ÖZELLİKLER

#### 🤖 **AI Integration**
```typescript
// src/services/
├── aiService.ts        # AI API entegrasyonu
├── imageProcessing.ts  # Görsel işleme
├── plantRecognition.ts # Bitki tanıma
└── styleTransfer.ts    # Stil transferi
```

#### 💾 **Data Management**
```typescript
// src/store/
├── userStore.ts        # Kullanıcı durumu
├── projectStore.ts     # Proje durumu
├── settingsStore.ts    # Ayarlar
└── cacheStore.ts       # Cache yönetimi
```

#### 🌐 **API Integration**
```typescript
// src/api/
├── authApi.ts          # Kimlik doğrulama
├── projectApi.ts       # Proje API'si
├── paymentApi.ts       # Ödeme API'si
└── plantApi.ts         # Bitki veritabanı
```

### 📊 4. ANALYTICS & MONITORING

#### 📈 **Analytics Integration**
```typescript
// src/analytics/
├── events.ts           # Event tracking
├── userBehavior.ts     # Kullanıcı davranışı
├── performance.ts      # Performans metrikleri
└── crashReporting.ts   # Hata raporlama
```

#### 🔍 **Search & Filter System**
```typescript
// app/search/
├── index.tsx           # Arama sayfası
├── filters.tsx         # Filtre seçenekleri
├── results.tsx         # Arama sonuçları
└── suggestions.tsx     # Öneriler
```

### 🎯 5. GELECEK ÖZELLİKLER

#### 🌍 **Social Features**
```typescript
// app/social/
├── community.tsx       # Topluluk
├── share.tsx           # Paylaşım
├── likes.tsx           # Beğeniler
└── comments.tsx        # Yorumlar
```

#### 🏆 **Gamification**
```typescript
// app/achievements/
├── badges.tsx          # Rozetler
├── levels.tsx          # Seviyeler
├── challenges.tsx      # Meydan okumalar
└── leaderboard.tsx     # Lider tablosu
```

#### 🔔 **Notifications**
```typescript
// src/notifications/
├── pushNotifications.ts # Push bildirimleri
├── inAppNotifications.ts # Uygulama içi
├── emailNotifications.ts # E-posta
└── notificationCenter.tsx # Bildirim merkezi
```

## 🎨 Design System Güncellemeleri

### Yeni Renkler
```typescript
// src/constants/Colors.ts
export const Colors = {
  // Mevcut renkler...
  
  // Yeni eklenecek
  success: '#10B981',
  warning: '#F59E0B', 
  error: '#EF4444',
  info: '#3B82F6',
  
  // Gradient'ler
  gradients: {
    primary: ['#4A7C59', '#8FBC8F'],
    success: ['#10B981', '#34D399'],
    warning: ['#F59E0B', '#FBBF24'],
  }
};
```

### Yeni Component'ler
```typescript
// src/components/ui/
├── Button.tsx          # Standart buton
├── Input.tsx           # Form input
├── Modal.tsx           # Modal component
├── Toast.tsx           # Toast mesajları
├── Slider.tsx          # Kaydırıcı
├── Switch.tsx          # Anahtar
├── Picker.tsx          # Seçici
└── ProgressBar.tsx     # İlerleme çubuğu
```

## 📅 UYGULAMA ZAMANLAMA

### 🗓 Hafta 1-2: Temel Altyapı
- [x] Navigation sistemi ✅
- [x] Design system ✅
- [x] Temel sayfalar ✅
- [ ] Image picker entegrasyonu
- [ ] Authentication sistemi

### 🗓 Hafta 3-4: Core Features
- [ ] AI service entegrasyonu
- [ ] Pro subscription sistemi
- [ ] Profile & settings
- [ ] Data management

### 🗓 Hafta 5-6: UI/UX Polish
- [ ] Animasyonlar
- [ ] Loading states
- [ ] Error handling
- [ ] Responsive design

### 🗓 Hafta 7-8: Advanced Features
- [ ] Search & filter
- [ ] Analytics
- [ ] Notifications
- [ ] Performance optimization

## 🎯 Proje Durumu

**Temel Yapı**: %100 Tamamlandı ✅
**Navigation**: %100 Tamamlandı ✅
**UI Components**: %90 Tamamlandı ✅
**Sayfalar**: %100 Tamamlandı ✅
**Authentication**: %0 Başlanmadı 🔄
**AI Integration**: %0 Başlanmadı 🔄
**Pro Features**: %10 Başlandı 🔄
**Fonksiyonellik**: %25 Tamamlandı 🚧

## 🚀 Kurulum

```bash
# Proje klonlama
git clone [repo-url]
cd garden-ai

# Bağımlılık kurulumu
npm install

# Geliştirme sunucusu
npm start

# Platform spesifik çalıştırma
npm run ios     # iOS
npm run android # Android
npm run web     # Web
```

## 📱 Platform Desteği

- ✅ iOS
- ✅ Android  
- ✅ Web (PWA)

## 📄 Lisans

MIT License

---

**Son Güncelleme**: 2024
**Proje Durumu**: MVP Tamamlandı! Sıradaki: Authentication & Image Picker 🎉
