// 🌱 Garden AI - AI Prompts Collection
// Centralized prompt management for all AI features

export const AI_PROMPTS = {
  // 🎨 Garden Design Prompts
  GARDEN_DESIGN: {
    BASE: (userPrompt: string) => `Create a beautiful garden design: ${userPrompt}. 
      Style: Modern landscape architecture, lush greenery, vibrant flowers, 
      well-planned layout, Turkish garden elements, realistic lighting, 
      professional landscape photography style.`,
    
    ENHANCED: (userPrompt: string, style?: string) => `Design a stunning ${style || 'modern'} garden: ${userPrompt}.
      Requirements: Professional landscape design, balanced composition, 
      seasonal plant selection, proper spacing, Turkish climate considerations,
      realistic textures, natural lighting, high-quality architectural visualization.`,
    
    WITH_REFERENCE: (userPrompt: string, referenceStyle: string) => `Create a garden design inspired by ${referenceStyle}: ${userPrompt}.
      Maintain the reference style's characteristics while adapting to Turkish garden traditions.
      Focus on: Color harmony, plant selection, layout principles, material choices.`
  },

  // 🌿 Plants for Location Prompts
  PLANTS_LOCATION: {
    SYSTEM: `Sen bir bahçıvanlık uzmanısın. Verilen lokasyon, iklim ve toprak bilgilerine göre 
      en uygun bitki önerilerini Türkçe olarak ver. Her bitki için bakım gereksinimleri, 
      dikme zamanı ve özel notlar ekle. Türkiye'nin iklim koşullarını ve yerel bitki türlerini dikkate al.`,
    
    USER: (location: string, climate: string, soilType: string, season?: string) => `
      Lokasyon: ${location}
      İklim: ${climate}
      Toprak Türü: ${soilType}
      ${season ? `Mevsim: ${season}` : ''}
      
      Bu koşullara uygun 8-10 bitki önerisi ver. Her bitki için:
      - Bitki adı (Türkçe ve Latince)
      - Neden bu lokasyona uygun olduğu
      - Bakım gereksinimleri (sulama, budama, gübreleme)
      - En uygun dikme zamanı
      - Özel notlar ve ipuçları
      - Diğer bitkilerle uyumluluğu`,
    
    DETAILED: (location: string, climate: string, soilType: string, preferences: string[]) => `
      Detaylı Bilgiler:
      - Lokasyon: ${location}
      - İklim Koşulları: ${climate}
      - Toprak Türü: ${soilType}
      - Tercihler: ${preferences.join(', ')}
      
      Lütfen şunları içeren kapsamlı bir bitki listesi hazırla:
      1. Ağaçlar (2-3 adet)
      2. Çalılar (3-4 adet)
      3. Çiçekli bitkiler (4-5 adet)
      4. Yer örtücü bitkiler (2-3 adet)
      
      Her kategori için en uygun türleri seç ve detaylı açıklamalar yap.`
  },

  // 🔄 Replace Objects Prompts
  REPLACE_OBJECTS: {
    BASE: (replacement: string) => `Replace the selected area with: ${replacement}. 
      Maintain the garden style, lighting, and perspective. 
      Ensure natural integration with the existing landscape.`,
    
    DETAILED: (replacement: string, style: string) => `Carefully replace the masked area with ${replacement}.
      Style requirements: ${style}
      Integration rules: Match existing lighting, maintain perspective, 
      blend naturally with surrounding elements, preserve garden harmony.`,
    
    PLANT_REPLACEMENT: (oldPlant: string, newPlant: string) => `Replace ${oldPlant} with ${newPlant}.
      Maintain: Garden composition, seasonal harmony, size proportions,
      natural plant placement, realistic growth patterns, proper spacing.`
  },

  // 🗑️ Remove Objects Prompts
  REMOVE_OBJECTS: {
    BASE: `Remove the selected objects and fill the area naturally. 
      Maintain the garden background, grass, plants, and overall composition. 
      Ensure seamless blending with the surrounding landscape.`,
    
    DETAILED: `Intelligently remove the masked objects and reconstruct the background.
      Requirements: Natural grass/soil texture, consistent lighting,
      proper perspective, seamless edges, realistic plant continuation,
      maintain garden's overall aesthetic and balance.`,
    
    CLEAN_GARDEN: `Remove unwanted elements while preserving the garden's beauty.
      Fill with: Appropriate ground cover, natural textures, 
      consistent plant patterns, proper garden flow and composition.`
  },

  // 🎭 Style Reference Prompts
  STYLE_REFERENCE: {
    BASE: (description: string) => `Apply the style from the reference image to create: ${description}. 
      Maintain the composition and layout while adopting the color palette, 
      artistic style, and mood from the reference. Garden landscape style.`,
    
    TRANSFER: (description: string, styleElements: string[]) => `Transform the garden using reference style: ${description}.
      Adopt these elements: ${styleElements.join(', ')}
      Preserve: Garden functionality, plant health, practical layout,
      while applying: Color scheme, artistic mood, design philosophy.`,
    
    MOOD_TRANSFER: (description: string, mood: string) => `Create a ${mood} garden atmosphere: ${description}.
      Style transfer focus: Lighting mood, color temperature, 
      plant selection mood, overall ambiance, emotional impact.`
  },

  // 🏗️ Create Garden Prompts
  CREATE_GARDEN: {
    BASE: (size: string, style: string, plants: string[], features: string[]) => `
      Create a ${size} ${style} garden design with the following elements:
      Plants: ${plants.join(', ')}
      Features: ${features.join(', ')}
      
      Design a professional landscape with proper plant placement, 
      pathways, and garden features. Turkish garden style elements, 
      realistic proportions, beautiful lighting, top-down or perspective view.`,
    
    DETAILED: (specs: {
      size: string;
      style: string;
      plants: string[];
      features: string[];
      budget?: string;
      maintenance?: string;
    }) => `Design a comprehensive ${specs.size} garden in ${specs.style} style.
      
      Plant Selection: ${specs.plants.join(', ')}
      Garden Features: ${specs.features.join(', ')}
      ${specs.budget ? `Budget Level: ${specs.budget}` : ''}
      ${specs.maintenance ? `Maintenance Level: ${specs.maintenance}` : ''}
      
      Requirements: Professional landscape architecture, seasonal interest,
      sustainable design, Turkish climate adaptation, proper drainage,
      functional zones, aesthetic balance, realistic implementation.`,
    
    THEMED: (theme: string, size: string, requirements: string[]) => `
      Create a ${theme}-themed garden (${size}).
      Special Requirements: ${requirements.join(', ')}
      
      Design principles: Theme consistency, cultural authenticity,
      practical functionality, seasonal beauty, maintenance efficiency,
      environmental sustainability, visual impact.`
  },

  // 🎯 Common Enhancement Prompts
  ENHANCEMENTS: {
    TURKISH_GARDEN: `Incorporate traditional Turkish garden elements: 
      geometric patterns, water features, aromatic herbs, 
      Mediterranean plants, natural stone, pergolas.`,
    
    SEASONAL: `Design for four-season interest: 
      spring blooms, summer shade, autumn colors, winter structure.`,
    
    SUSTAINABLE: `Focus on sustainability: 
      native plants, water conservation, organic methods, 
      wildlife-friendly design, low maintenance.`,
    
    MODERN: `Apply modern design principles: 
      clean lines, minimalist approach, contemporary materials, 
      architectural plants, geometric layouts.`,
    
    NATURAL: `Embrace natural garden style: 
      organic shapes, native ecosystems, wildlife habitat, 
      informal planting, natural materials.`
  }
};

// Helper function to get prompt by feature and type
export const getPrompt = (
  feature: keyof typeof AI_PROMPTS,
  type: string,
  ...args: any[]
): string => {
  const featurePrompts = AI_PROMPTS[feature] as any;
  const promptFunction = featurePrompts[type.toUpperCase()];
  
  if (typeof promptFunction === 'function') {
    return promptFunction(...args);
  } else if (typeof promptFunction === 'string') {
    return promptFunction;
  }
  
  throw new Error(`Prompt not found: ${feature}.${type}`);
};

// Prompt validation and enhancement
export const enhancePrompt = (
  basePrompt: string,
  enhancements: (keyof typeof AI_PROMPTS.ENHANCEMENTS)[] = []
): string => {
  let enhanced = basePrompt;
  
  enhancements.forEach(enhancement => {
    enhanced += ` ${AI_PROMPTS.ENHANCEMENTS[enhancement]}`;
  });
  
  return enhanced;
}; 