// 🌱 Garden AI - Environment Configuration Template
// Copy this file to env.ts and fill in your actual values

export const ENV_CONFIG = {
  // ===========================================
  // OPENAI API CONFIGURATION
  // ===========================================
  
  // OpenAI API Key - Get from: https://platform.openai.com/api-keys
  OPENAI_API_KEY: 'your_openai_api_key_here',
  
  // OpenAI Organization ID (Optional)
  OPENAI_ORG_ID: 'your_organization_id_here',
  
  // OpenAI Project ID (Optional)
  OPENAI_PROJECT_ID: 'your_project_id_here',

  // ===========================================
  // AI MODELS FOR GARDEN AI FEATURES
  // ===========================================
  
  MODELS: {
    // 🎨 Garden Design - Image Generation
    GARDEN_DESIGN: {
      model: 'dall-e-3',
      version: 'latest',
      size: '1024x1024',
      quality: 'hd',
      style: 'vivid'
    },
    
    // 🌿 Plants for Location - Plant Recommendations
    PLANTS_LOCATION: {
      model: 'gpt-4o',
      version: 'latest',
      maxTokens: 4000,
      temperature: 0.7
    },
    
    // 🔄 Replace Objects - Image Editing (PRO Feature)
    REPLACE_OBJECTS: {
      model: 'dall-e-3',
      editModel: 'dall-e-2',
      version: 'latest',
      size: '1024x1024',
      quality: 'hd'
    },
    
    // 🗑️ Remove Objects - Image Inpainting
    REMOVE_OBJECTS: {
      model: 'dall-e-3',
      version: 'latest',
      size: '1024x1024',
      quality: 'hd'
    },
    
    // 🎭 Style Reference - Style Transfer
    STYLE_REFERENCE: {
      model: 'dall-e-3',
      version: 'latest',
      size: '1024x1024',
      quality: 'hd',
      style: 'vivid'
    },
    
    // 🏗️ Create Garden - Garden Creation
    CREATE_GARDEN: {
      model: 'dall-e-3',
      version: 'latest',
      size: '1024x1024',
      quality: 'hd',
      style: 'natural'
    }
  },

  // ===========================================
  // API ENDPOINTS
  // ===========================================
  
  ENDPOINTS: {
    BASE_URL: 'https://api.openai.com/v1',
    IMAGES_GENERATION: '/images/generations',
    IMAGES_EDIT: '/images/edits',
    IMAGES_VARIATIONS: '/images/variations',
    CHAT_COMPLETIONS: '/chat/completions'
  },

  // ===========================================
  // RATE LIMITING & COST MANAGEMENT
  // ===========================================
  
  LIMITS: {
    // Requests per minute
    RPM: 60,
    
    // Requests per day
    RPD: 1000,
    
    // Daily spending limit (USD)
    DAILY_SPENDING_LIMIT: 50,
    
    // Monthly spending limit (USD)
    MONTHLY_SPENDING_LIMIT: 1000,
    
    // Alert threshold (USD)
    SPENDING_ALERT_THRESHOLD: 80
  },

  // ===========================================
  // DEVELOPMENT SETTINGS
  // ===========================================
  
  DEV: {
    // Environment
    NODE_ENV: 'development',
    
    // Debug Mode
    DEBUG_AI: true,
    
    // Mock AI Responses (for development)
    MOCK_AI_RESPONSES: false,
    
    // Fallback models
    FALLBACK_IMAGE_MODEL: 'dall-e-2',
    FALLBACK_TEXT_MODEL: 'gpt-3.5-turbo'
  }
};

// Type definitions for better TypeScript support
export type ModelConfig = {
  model: string;
  version?: string;
  size?: string;
  quality?: string;
  style?: string;
  maxTokens?: number;
  temperature?: number;
  editModel?: string;
};

export type AIModels = {
  GARDEN_DESIGN: ModelConfig;
  PLANTS_LOCATION: ModelConfig;
  REPLACE_OBJECTS: ModelConfig;
  REMOVE_OBJECTS: ModelConfig;
  STYLE_REFERENCE: ModelConfig;
  CREATE_GARDEN: ModelConfig;
}; 