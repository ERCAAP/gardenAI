// 🌱 Garden AI - AI Service
// OpenAI API Integration for all Garden AI features

import { ENV_CONFIG } from '../../config/env.example';
import { AI_PROMPTS, enhancePrompt, getPrompt } from '../constants/prompts';

// Types for AI requests and responses
export interface ImageGenerationRequest {
  prompt: string;
  size?: string;
  quality?: string;
  style?: string;
  n?: number;
}

export interface ImageEditRequest {
  image: string; // base64 or file path
  mask?: string; // base64 or file path
  prompt: string;
  size?: string;
  n?: number;
}

export interface ChatRequest {
  messages: Array<{
    role: 'system' | 'user' | 'assistant';
    content: string;
  }>;
  model?: string;
  maxTokens?: number;
  temperature?: number;
}

export interface AIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  usage?: {
    promptTokens?: number;
    completionTokens?: number;
    totalTokens?: number;
  };
}

class AIService {
  private apiKey: string;
  private baseUrl: string;
  private orgId?: string;
  private projectId?: string;

  constructor() {
    this.apiKey = ENV_CONFIG.OPENAI_API_KEY;
    this.baseUrl = ENV_CONFIG.ENDPOINTS.BASE_URL;
    this.orgId = ENV_CONFIG.OPENAI_ORG_ID;
    this.projectId = ENV_CONFIG.OPENAI_PROJECT_ID;
  }

  // Common headers for OpenAI API
  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    };

    if (this.orgId) {
      headers['OpenAI-Organization'] = this.orgId;
    }

    if (this.projectId) {
      headers['OpenAI-Project'] = this.projectId;
    }

    return headers;
  }

  // 🎨 Garden Design - Image Generation
  async generateGardenDesign(
    prompt: string, 
    style?: string,
    enhancements: (keyof typeof AI_PROMPTS.ENHANCEMENTS)[] = ['TURKISH_GARDEN']
  ): Promise<AIResponse> {
    try {
      const config = ENV_CONFIG.MODELS.GARDEN_DESIGN;
      
      // Get optimized prompt from prompts collection
      const basePrompt = getPrompt('GARDEN_DESIGN', 'ENHANCED', prompt, style);
      const enhancedPrompt = enhancePrompt(basePrompt, enhancements);

      const requestBody: ImageGenerationRequest = {
        prompt: enhancedPrompt,
        size: config.size,
        quality: config.quality,
        style: config.style,
        n: 1
      };

      const response = await fetch(`${this.baseUrl}${ENV_CONFIG.ENDPOINTS.IMAGES_GENERATION}`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({
          model: config.model,
          ...requestBody
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Garden design generation failed');
      }

      return {
        success: true,
        data: data.data,
        usage: data.usage
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // 🌿 Plants for Location - GPT-4o for plant recommendations
  async getPlantsForLocation(
    location: string, 
    climate: string, 
    soilType: string,
    season?: string,
    preferences: string[] = []
  ): Promise<AIResponse> {
    try {
      const config = ENV_CONFIG.MODELS.PLANTS_LOCATION;
      
      // Get optimized prompts from prompts collection
      const systemPrompt = getPrompt('PLANTS_LOCATION', 'SYSTEM');
      const userPrompt = preferences.length > 0 
        ? getPrompt('PLANTS_LOCATION', 'DETAILED', location, climate, soilType, preferences)
        : getPrompt('PLANTS_LOCATION', 'USER', location, climate, soilType, season);

      const requestBody: ChatRequest = {
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        model: config.model,
        maxTokens: config.maxTokens,
        temperature: config.temperature
      };

      const response = await fetch(`${this.baseUrl}${ENV_CONFIG.ENDPOINTS.CHAT_COMPLETIONS}`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Plant recommendations failed');
      }

      return {
        success: true,
        data: data.choices[0]?.message?.content,
        usage: data.usage
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // 🔄 Replace Objects - Image Editing (PRO Feature)
  async replaceObjects(
    image: string, 
    mask: string, 
    prompt: string,
    style?: string
  ): Promise<AIResponse> {
    try {
      const config = ENV_CONFIG.MODELS.REPLACE_OBJECTS;
      
      // Get optimized prompt from prompts collection
      const enhancedPrompt = style 
        ? getPrompt('REPLACE_OBJECTS', 'DETAILED', prompt, style)
        : getPrompt('REPLACE_OBJECTS', 'BASE', prompt);

      const requestBody: ImageEditRequest = {
        image,
        mask,
        prompt: enhancedPrompt,
        size: config.size,
        n: 1
      };

      const response = await fetch(`${this.baseUrl}${ENV_CONFIG.ENDPOINTS.IMAGES_EDIT}`, {
        method: 'POST',
        headers: {
          ...this.getHeaders(),
          'Content-Type': 'multipart/form-data'
        },
        body: JSON.stringify({
          model: config.editModel,
          ...requestBody
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Object replacement failed');
      }

      return {
        success: true,
        data: data.data,
        usage: data.usage
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // 🗑️ Remove Objects - Image Inpainting
  async removeObjects(image: string, mask: string, detailed: boolean = false): Promise<AIResponse> {
    try {
      // Get optimized prompt from prompts collection
      const prompt = detailed 
        ? getPrompt('REMOVE_OBJECTS', 'DETAILED')
        : getPrompt('REMOVE_OBJECTS', 'BASE');

      return await this.replaceObjects(image, mask, prompt);
    } catch (error) {
      return this.handleApiError(error);
    }
  }

  // 🎭 Style Reference - Style Transfer
  async applyStyleReference(
    baseImage: string, 
    styleReference: string, 
    prompt: string,
    styleElements: string[] = [],
    mood?: string
  ): Promise<AIResponse> {
    try {
      const config = ENV_CONFIG.MODELS.STYLE_REFERENCE;
      
      // Get optimized prompt from prompts collection
      let enhancedPrompt: string;
      if (mood) {
        enhancedPrompt = getPrompt('STYLE_REFERENCE', 'MOOD_TRANSFER', prompt, mood);
      } else if (styleElements.length > 0) {
        enhancedPrompt = getPrompt('STYLE_REFERENCE', 'TRANSFER', prompt, styleElements);
      } else {
        enhancedPrompt = getPrompt('STYLE_REFERENCE', 'BASE', prompt);
      }

      const requestBody: ImageGenerationRequest = {
        prompt: enhancedPrompt,
        size: config.size,
        quality: config.quality,
        style: config.style,
        n: 1
      };

      const response = await fetch(`${this.baseUrl}${ENV_CONFIG.ENDPOINTS.IMAGES_GENERATION}`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({
          model: config.model,
          ...requestBody
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Style transfer failed');
      }

      return {
        success: true,
        data: data.data,
        usage: data.usage
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // 🏗️ Create Garden - Garden Creation from Scratch
  async createGarden(
    size: string, 
    style: string, 
    plantTypes: string[], 
    features: string[],
    theme?: string,
    budget?: string,
    maintenance?: string
  ): Promise<AIResponse> {
    try {
      const config = ENV_CONFIG.MODELS.CREATE_GARDEN;
      
      // Get optimized prompt from prompts collection
      let prompt: string;
      if (theme) {
        prompt = getPrompt('CREATE_GARDEN', 'THEMED', theme, size, features);
      } else if (budget || maintenance) {
        const specs = { size, style, plants: plantTypes, features, budget, maintenance };
        prompt = getPrompt('CREATE_GARDEN', 'DETAILED', specs);
      } else {
        prompt = getPrompt('CREATE_GARDEN', 'BASE', size, style, plantTypes, features);
      }

      const requestBody: ImageGenerationRequest = {
        prompt,
        size: config.size,
        quality: config.quality,
        style: config.style,
        n: 1
      };

      const response = await fetch(`${this.baseUrl}${ENV_CONFIG.ENDPOINTS.IMAGES_GENERATION}`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({
          model: config.model,
          ...requestBody
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Garden creation failed');
      }

      return {
        success: true,
        data: data.data,
        usage: data.usage
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Rate limiting and cost management
  async checkUsageLimits(): Promise<boolean> {
    // Implementation for checking daily/monthly limits
    // This would typically involve storing usage data locally or on a backend
    return true;
  }

  // Rate limiting and error handling
  private async handleApiError(error: any): Promise<AIResponse> {
    console.error('AI Service Error:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'AI service temporarily unavailable'
    };
  }
}

export const aiService = new AIService();
export default aiService; 