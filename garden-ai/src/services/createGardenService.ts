// import { ENV_CONFIG } from '@/config/env';
// import { AI_PROMPTS } from '@/src/constants/prompts';

export interface CreateGardenRequest {
  style: string;
  customDescription?: string;
  size?: 'small' | 'medium' | 'large';
  preferences?: {
    plantTypes?: string[];
    colorScheme?: string;
    maintenance?: 'low' | 'medium' | 'high';
  };
}

export interface CreateGardenResponse {
  imageUrl: string;
  description: string;
  plantSuggestions?: string[];
  maintenanceTips?: string[];
  estimatedCost?: string;
}

export interface ChatMessage {
  id: string;
  message: string;
  isUser: boolean;
  timestamp: number;
}

export interface ChatResponse {
  message: string;
  suggestions?: string[];
}

// Mock configuration for development
const MOCK_CONFIG = {
  OPENAI_API_KEY: 'mock-key',
  ENDPOINTS: {
    BASE_URL: 'https://api.openai.com/v1',
  },
  MODELS: {
    CREATE_GARDEN: {
      model: 'dall-e-3',
      size: '1024x1024',
      quality: 'hd',
      style: 'natural',
    },
  },
};

class CreateGardenService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = MOCK_CONFIG.OPENAI_API_KEY;
    this.baseUrl = MOCK_CONFIG.ENDPOINTS.BASE_URL;
  }

  /**
   * Generate garden design image based on user input
   */
  async generateGardenDesign(request: CreateGardenRequest): Promise<CreateGardenResponse> {
    try {
      // For now, use mock implementation
      return await this.generateMockGardenDesign(request);
      
      // Real implementation would be:
      // const prompt = this.buildImagePrompt(request);
      // ... actual API call
      
    } catch (error) {
      console.error('Garden generation error:', error);
      throw new Error('Bahçe tasarımı oluşturulamadı. Lütfen tekrar deneyin.');
    }
  }

  /**
   * Handle chat interactions about the garden
   */
  async sendChatMessage(
    message: string,
    gardenContext?: CreateGardenResponse,
    chatHistory?: ChatMessage[]
  ): Promise<ChatResponse> {
    try {
      // Mock implementation for chat
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const responses = [
        'Bu bahçeniz gerçekten güzel görünüyor! Size nasıl yardımcı olabilirim?',
        'Bitki bakımı konusunda daha detaylı bilgi istiyorsanız, hangi bitkiler hakkında merak ettiğinizi söyleyebilirsiniz.',
        'Bu tasarımda kullanılan bitkiler Türkiye iklimi için çok uygun. Özellikle lavanta ve biberiye çok dayanıklı bitkilerdir.',
        'Bahçenizin bakımı için aylık bir program oluşturabiliriz. Bu konuda yardım ister misiniz?',
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      return {
        message: randomResponse,
        suggestions: ['Bakım takvimi oluştur', 'Bitki önerileri göster', 'Malzeme listesi hazırla'],
      };
      
    } catch (error) {
      console.error('Chat error:', error);
      throw new Error('Mesaj gönderilemedi. Lütfen tekrar deneyin.');
    }
  }

  /**
   * Build image generation prompt
   */
  private buildImagePrompt(request: CreateGardenRequest): string {
    let basePrompt = '';

    // Get predefined prompt based on style
    switch (request.style.toLowerCase()) {
      case 'bohemian':
      case 'bohem':
        basePrompt = 'Create a bohemian garden with eclectic plants, colorful flowers, natural materials, rustic elements, and relaxed atmosphere';
        break;
      case 'tropical':
      case 'tropikal':
        basePrompt = 'Design a lush tropical garden with large-leafed plants, vibrant colors, water features, and exotic vegetation';
        break;
      case 'zen':
      case 'minimalist':
        basePrompt = 'Design a minimalist zen garden with clean lines, simple plantings, natural stones, and peaceful atmosphere';
        break;
      default:
        basePrompt = `Create a garden design: ${request.customDescription || request.style}`;
        break;
    }

    // Add size preferences
    if (request.size) {
      basePrompt += ` Design for a ${request.size} sized space.`;
    }

    // Add plant preferences
    if (request.preferences?.plantTypes?.length) {
      basePrompt += ` Include these plant types: ${request.preferences.plantTypes.join(', ')}.`;
    }

    // Add quality specifications
    basePrompt += ' High-resolution, professional garden photography style, bright natural lighting, detailed textures.';

    return basePrompt;
  }

  /**
   * Mock function for development/testing
   */
  async generateMockGardenDesign(request: CreateGardenRequest): Promise<CreateGardenResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    const mockImages = [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1024&h=1024&fit=crop',
      'https://images.unsplash.com/photo-1558618047-9794b3e4eeae?w=1024&h=1024&fit=crop',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1024&h=1024&fit=crop',
      'https://images.unsplash.com/photo-1529408632840-5d0b8b84bf78?w=1024&h=1024&fit=crop',
    ];

    return {
      imageUrl: mockImages[Math.floor(Math.random() * mockImages.length)],
      description: `Modern ${request.style} bahçe tasarımınız hazır! Doğal malzemeler ve sürdürülebilir bitkiler kullanılarak tasarlandı.`,
      plantSuggestions: [
        'Lavanta (Lavandula)',
        'Biberiye (Rosmarinus)',
        'Adaçayı (Salvia)',
        'Kekik (Thymus)',
        'Nane (Mentha)',
        'Olive Tree (Olea europaea)',
      ],
      maintenanceTips: [
        'Haftada 2-3 kez sulayın',
        'Mevsimsel budama yapın',
        'Aylık gübreleme uygulayın',
        'Yabani otları düzenli temizleyin',
      ],
      estimatedCost: '₺8,000 - ₺20,000',
    };
  }
}

export const createGardenService = new CreateGardenService(); 