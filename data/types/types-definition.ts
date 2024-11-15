// Basic Types
export type Contrast = "Low" | "Low-Medium" | "Medium" | "Medium-High" | "High" | "Very High";
export type Undertone = "Warm" | "Cool" | "Neutral";
export type SkinDepth = "Very Fair" | "Fair" | "Light" | "Medium" | "Medium-Deep" | "Deep" | "Very Deep";
export type FaceShape = "Oval" | "Round" | "Square" | "Heart" | "Diamond" | "Rectangle" | "Triangle";
export type EyeColor = "Blue" | "Green" | "Brown" | "Hazel" | "Gray" | "Amber";

// Season Subtypes
export type SpringSubtype = "Light Spring" | "Clear Spring" | "Warm Spring";
export type SummerSubtype = "Light Summer" | "Cool Summer" | "Soft Summer";
export type AutumnSubtype = "Warm Autumn" | "Deep Autumn" | "Soft Autumn";
export type WinterSubtype = "Cool Winter" | "Clear Winter" | "Deep Winter";
export type SeasonSubtype = SpringSubtype | SummerSubtype | AutumnSubtype | WinterSubtype;

// Coverage and Occasion Types
export type Coverage = "light" | "light-medium" | "medium" | "medium-full" | "full";
export type Occasion = "casual" | "dressy" | "versatile" | "everyday" | "formal" | "special" | "statement" | "romantic" | "bold" | "polished" | "modern";

// Style and Material Types
export type AccessoryStyle = "delicate" | "statement" | "classic" | "modern" | "bold" | "drop" | "geometric" | "organic" | "minimal";
export type AccessoryType = "necklace" | "earrings" | "bracelet" | "ring" | "sunglasses";
export type Material = "gold" | "silver" | "pearl" | "crystal" | "metal" | "coral" | "gemstone" | "yellow gold" | "white gold" | "platinum";
