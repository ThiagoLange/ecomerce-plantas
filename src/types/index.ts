// src/types/index.ts
export interface Plant {
  id: string;
  name: string;
  price: number;
  light: "sun" | "shade"; // Condição de luz: sol ou sombra
  image?: string; // URL da imagem da planta (opcional)
}