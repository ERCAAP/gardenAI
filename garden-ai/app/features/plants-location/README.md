# Plants Location Feature

Bu özellik kullanıcıların lokasyon seçmelerine ve AI tabanlı bitki önerileri almalarına olanak tanır.

## 🏗️ Modüler Yapı

### Dosya Organizasyonu
```
app/features/plants-location/
├── index.tsx                 # Ana screen bileşeni
├── types.ts                  # TypeScript type tanımları
├── data.ts                   # Statik veriler
├── README.md                 # Bu dosya
└── components/
    ├── index.ts              # Bileşen exports
    ├── ProgressIndicator.tsx  # Progress bar bileşeni
    ├── LocationStep.tsx       # Lokasyon seçimi (liste tabanlı)
    ├── SpaceTypeStep.tsx      # Alan türü seçimi
    ├── EnvironmentStep.tsx    # Ortam türü seçimi
    └── RecommendationsStep.tsx # AI önerileri görüntüleme
```

## 📍 Lokasyon Seçimi

### Özellikler
- **Lista Tabanlı Seçim**: Önceden tanımlanmış lokasyonlar arasından seçim
- **Görsel Kartlar**: Her lokasyon için detaylı bilgi kartları
- **Koordinat Gösterimi**: Lat/Lng koordinatları
- **Responsive Tasarım**: Tüm ekran boyutlarına uyumlu

> **Not**: Harita entegrasyonu geçici olarak devre dışı bırakıldı. Expo SDK 52'de react-native-maps ile uyumluluk sorunları nedeniyle liste tabanlı seçim kullanılıyor.

## 🎨 UI Bileşenleri

### LocationStep
- Interactive location list
- Visual location cards
- Address display
- Coordinate information

### SpaceTypeStep
- Visual cards with gradients
- Space type selection
- Responsive design

### EnvironmentStep
- Grid layout
- Environment type selection
- Icon-based cards

### RecommendationsStep
- AI-generated plant recommendations
- Detailed plant cards
- Action buttons (Save, Details)
- Pro tips section

## 🔧 Kullanım

```tsx
import { LocationData } from './types';
import { LocationStep } from './components';

const [selectedLocation, setSelectedLocation] = useState<LocationData>(defaultLocation);

<LocationStep
  selectedLocation={selectedLocation}
  onLocationChange={setSelectedLocation}
/>
```

## 🚀 Geliştirme

### Yeni Bileşen Ekleme
1. `components/` klasörüne yeni dosya ekleyin
2. `components/index.ts`'e export ekleyin
3. Ana bileşende kullanın

### API Entegrasyonu
- `handleGetRecommendations` fonksiyonunu gerçek AI servisi ile değiştirin
- Gelecekte harita entegrasyonu için Expo Maps kullanılması planlanıyor

## 📱 Platform Desteği
- ✅ iOS
- ✅ Android  
- ✅ Web

## 🔗 Bağımlılıklar
- `expo-linear-gradient`: Gradient efektleri
- `@expo/vector-icons`: Icon seti
- `expo-router`: Navigation

## 🔮 Gelecek Planları
- Expo Maps entegrasyonu (SDK 52 uyumluluk sorunları çözüldüğünde)
- GPS tabanlı konum tespiti
- Gerçek zamanlı adres çevirisi (Geocoding)
- Özel koordinat girişi 