import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'mips-bag-01',
    name: 'Blush Blossom Crochet Tote Bag',
    category: 'bags',
    categoryName: 'Bags',
    price: 18500,
    originalPrice: 22000,
    description: 'Handcrafted chunky cotton yarn tote with reinforced straps and floral textured stitch.',
    fullDescription: 'Our signature Blush Blossom Tote is meticulously hand-crocheted using 100% premium mercerized cotton cord. Spacious enough for your daily essentials, tablets, and beach day favorites. Comes with sturdy reinforced handles that do not stretch out.',
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Rose Pink', hex: '#E85D88' },
      { name: 'Soft Cream', hex: '#FAF4E8' },
      { name: 'Dusty Lilac', hex: '#B39DDB' },
      { name: 'Mocha Tan', hex: '#8D6E63' },
      { name: 'Sage Green', hex: '#81C784' }
    ],
    sizes: ['Standard (38cm x 34cm)', 'Mini Petite (25cm x 22cm)', 'Overnight Grande (46cm x 40cm)'],
    rating: 4.9,
    reviewCount: 42,
    inStock: true,
    isBestSeller: true,
    estimatedCraftDays: 3,
    material: '100% Premium Eco-Friendly Mercerized Cotton',
    dimensions: '38cm (H) x 34cm (W) x 10cm (D)',
    careInstructions: [
      'Gentle hand wash in cool water with mild wool detergent',
      'Do not wring or twist; press flat with a towel to remove water',
      'Reshape and dry flat away from direct harsh sunlight',
      'Do not machine tumble dry or bleach'
    ]
  },
  {
    id: 'mips-cloth-01',
    name: 'Aura Halter Crochet Top',
    category: 'clothing',
    categoryName: 'Clothing',
    price: 24000,
    originalPrice: 28000,
    description: 'Bespoke scalloped backless halter top with adjustable lace-up ties and breathable stitch.',
    fullDescription: 'Elevate your summer wardrobe with the Aura Halter Top. Hand-crocheted stitch-by-stitch with ultra-soft milk cotton yarn that feels silky against the skin. Features a secure corset-style back tie for a custom tailored fit to your body silhouette.',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Pastel Pink', hex: '#F48FB1' },
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Sunset Peach', hex: '#FFAB91' },
      { name: 'Midnight Black', hex: '#212121' }
    ],
    sizes: ['XS (Bust 30-32")', 'S (Bust 33-35")', 'M (Bust 36-38")', 'L (Bust 39-42")', 'Custom Measurements'],
    rating: 5.0,
    reviewCount: 28,
    inStock: true,
    isBestSeller: true,
    estimatedCraftDays: 4,
    material: 'Ultra-Soft Organic Milk Cotton Yarn (Breathable & Non-itchy)',
    careInstructions: [
      'Hand wash only in lukewarm water',
      'Lay flat on clean surface to dry',
      'Store folded rather than on a hanger to preserve stitch elasticity'
    ]
  },
  {
    id: 'mips-flower-01',
    name: 'Eternal Roses Crochet Bouquet (6 Stems)',
    category: 'gifts',
    categoryName: 'Gifts',
    price: 15000,
    originalPrice: 18000,
    description: 'Everlasting handcrafted crochet floral bouquet with delicate leaves and luxury gift wrapping.',
    fullDescription: 'Never wilting, always blooming. The MIPS Eternal Rose Bouquet features 6 hand-knitted rose stems wrapped in luxury Korean matte wrapping paper with satin ribbons. A timeless, sentimental gift for birthdays, anniversaries, graduations, and Valentine.',
    images: [
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Romantic Pink & Cream', hex: '#F06292' },
      { name: 'Classic Crimson Red', hex: '#D32F2F' },
      { name: 'Sunbeam Yellow & White', hex: '#FDD835' },
      { name: 'Lavender & White', hex: '#CE93D8' }
    ],
    sizes: ['6 Stems Bouquet', '9 Stems Deluxe', '12 Stems Grand Royal'],
    rating: 5.0,
    reviewCount: 56,
    inStock: true,
    isNew: true,
    isBestSeller: true,
    estimatedCraftDays: 2,
    material: 'High-Grade Anti-Pilling Acrylic & Milk Yarn Blend, Flexible Floral Stems',
    careInstructions: [
      'Dust lightly with a soft brush or gentle hairdryer on cool setting',
      'Keep indoors away from direct continuous rain or moisture'
    ]
  },
  {
    id: 'mips-cloth-02',
    name: 'Riviera Maxi Crochet Skirt & Top Set',
    category: 'clothing',
    categoryName: 'Clothing',
    price: 45000,
    originalPrice: 52000,
    description: 'High-fashion two-piece crochet set featuring an open lace skirt and matching sweetheart top.',
    fullDescription: 'The pinnacle of slow fashion luxury. The Riviera Set features intricate fan-lace crochet motifs that drape effortlessly. Perfect for vacations, resort wear, beach dinners, and memorable photoshoot looks.',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Warm Cream & Pink Accent', hex: '#FCE4EC' },
      { name: 'Oatmeal Beige', hex: '#E0D6CC' },
      { name: 'Seafoam Teal', hex: '#80CBC4' }
    ],
    sizes: ['S (UK 8-10)', 'M (UK 12-14)', 'L (UK 16-18)', 'Custom Tailored Fit'],
    rating: 4.9,
    reviewCount: 19,
    inStock: true,
    estimatedCraftDays: 6,
    material: 'Silky Bamboo Cotton Yarn',
    careInstructions: [
      'Hand wash with extreme care in cold water',
      'Dry flat on a dry towel',
      'Do not hang when wet'
    ]
  },
  {
    id: 'mips-acc-01',
    name: 'Daisy Meadow Ruffle Bucket Hat',
    category: 'accessories',
    categoryName: 'Accessories',
    price: 9500,
    originalPrice: 12000,
    description: 'Playful wavy brim bucket hat with 3D crochet daisy appliques in dreamy pastels.',
    fullDescription: 'Protect yourself from the sun in style with our whimsical Daisy Bucket Hat. Hand-stitched with structured cotton yarn that holds its playful wavy brim shape throughout the day.',
    images: [
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Candy Pink & Daisies', hex: '#F8BBD0' },
      { name: 'Vanilla Cream', hex: '#FFFDE7' },
      { name: 'Baby Blue', hex: '#BBDEFB' },
      { name: 'Matcha Green', hex: '#C8E6C9' }
    ],
    sizes: ['Standard Adult (56-58cm)', 'Petite / Teen (52-55cm)'],
    rating: 4.8,
    reviewCount: 34,
    inStock: true,
    isBestSeller: true,
    estimatedCraftDays: 2,
    material: '100% Breathable Cotton Yarn',
    careInstructions: [
      'Spot clean with a damp cloth or hand wash gently',
      'Stuff with a small towel while drying to maintain crown shape'
    ]
  },
  {
    id: 'mips-baby-01',
    name: 'Heirloom Baby Romper & Booties Set',
    category: 'baby',
    categoryName: 'Baby Items',
    price: 22000,
    originalPrice: 26000,
    description: 'Hypoallergenic organic cotton baby set with matching bear ears beanie and soft booties.',
    fullDescription: 'Crafted with the gentlest hypoallergenic organic baby yarn for sensitive newborn skin. An unforgettable baby shower gift and homecoming keepsake outfit.',
    images: [
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Blush Blossom', hex: '#F48FB1' },
      { name: 'Warm Cream', hex: '#FFF9C4' },
      { name: 'Mint Breeze', hex: '#B2DFDB' },
      { name: 'Oatmeal', hex: '#D7CCC8' }
    ],
    sizes: ['0-3 Months', '3-6 Months', '6-12 Months', '12-18 Months'],
    rating: 5.0,
    reviewCount: 39,
    inStock: true,
    estimatedCraftDays: 3,
    material: 'Certified Hypoallergenic Organic Baby Cotton',
    careInstructions: [
      'Gentle baby-safe hand wash',
      'Do not use harsh detergents or bleach',
      'Air dry flat'
    ]
  },
  {
    id: 'mips-home-01',
    name: 'Boho Petal Throw Pillow Cover',
    category: 'home-decor',
    categoryName: 'Home Décor',
    price: 13500,
    originalPrice: 16000,
    description: 'Textured mandala flower crochet cushion cover with invisible zip and plush finish.',
    fullDescription: 'Bring artisanal warmth into your living room or bedroom. Textured relief stitches create a stunning 3D petal relief on the front panel.',
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Dusty Rose & Cream', hex: '#E85D88' },
      { name: 'Ivory White', hex: '#FAF9F6' },
      { name: 'Terracotta Rust', hex: '#BF360C' },
      { name: 'Mustard Gold', hex: '#F57F17' }
    ],
    sizes: ['40cm x 40cm (16x16")', '45cm x 45cm (18x18")', '50cm x 50cm (20x20")'],
    rating: 4.8,
    reviewCount: 15,
    inStock: true,
    estimatedCraftDays: 3,
    material: 'Heavy-Duty Cotton Macrame & Velvet Yarn',
    careInstructions: [
      'Turn inside out before hand washing',
      'Dry flat away from direct heat'
    ]
  },
  {
    id: 'mips-bag-02',
    name: 'Petite Pearl Clasp Crochet Clutch',
    category: 'bags',
    categoryName: 'Bags',
    price: 16000,
    originalPrice: 19500,
    description: 'Evening wristlet purse featuring a vintage kiss-lock metal frame and pearl handle embellishment.',
    fullDescription: 'The perfect evening statement piece. Fitted with satin inner lining, internal pocket, and a detachable faux-pearl wristlet chain.',
    images: [
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Blush Pink', hex: '#F48FB1' },
      { name: 'Champagne Gold', hex: '#FFF8E1' },
      { name: 'Onyx Black', hex: '#212121' },
      { name: 'Emerald', hex: '#2E7D32' }
    ],
    sizes: ['Standard Evening (22cm x 15cm)'],
    rating: 4.9,
    reviewCount: 22,
    inStock: true,
    isNew: true,
    estimatedCraftDays: 3,
    material: 'Lustrous Silk-Cotton Yarn with Gold-Tone Hardware & Satin Lining',
    careInstructions: [
      'Wipe clean with a soft dry cloth',
      'Keep metal hardware dry to prevent tarnishing'
    ]
  },
  {
    id: 'mips-cloth-03',
    name: 'Sunset Gradient Crochet Cardigan',
    category: 'clothing',
    categoryName: 'Clothing',
    price: 38000,
    originalPrice: 44000,
    description: 'Cozy oversized balloon-sleeve cardigan with ombré pink and cream hexagonal granny squares.',
    fullDescription: 'Our viral hexagonal cardigan combines warm nostalgia with contemporary street-chic aesthetics. Crafted with plush lightweight wool blend that keeps you cozy without feeling heavy.',
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Pink Sunset Ombré', hex: '#F06292' },
      { name: 'Earth Tone Neutral', hex: '#A1887F' },
      { name: 'Pastel Sorbet Multi', hex: '#81D4FA' }
    ],
    sizes: ['Oversized Fit (S-M)', 'Oversized Fit (L-XL)', 'Custom Sizing'],
    rating: 5.0,
    reviewCount: 31,
    inStock: true,
    isBestSeller: true,
    estimatedCraftDays: 5,
    material: 'Plush Feather-Soft Acrylic & Merino Wool Blend',
    careInstructions: [
      'Hand wash cold only',
      'Never tumble dry; dry flat over a mesh rack',
      'Do not hang from shoulders'
    ]
  },
  {
    id: 'mips-acc-02',
    name: 'Floral Garden Crochet Headband & Scrunchie Duo',
    category: 'accessories',
    categoryName: 'Accessories',
    price: 6500,
    originalPrice: 8000,
    description: 'Matching cottagecore bandana hair tie and matching scrunchie adorned with mini crochet blossoms.',
    fullDescription: 'Complete your everyday hair styling with our darling botanical hair tie duo. Comfortable elastic fit that prevents hair breakage and adds instant charm.',
    images: [
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Blush & White Flowers', hex: '#F48FB1' },
      { name: 'Sage & Daisy', hex: '#A5D6A7' },
      { name: 'Lavender Sprigs', hex: '#E1BEE7' }
    ],
    sizes: ['One Size Fits All (Adjustable Tie)'],
    rating: 4.9,
    reviewCount: 47,
    inStock: true,
    isNew: true,
    estimatedCraftDays: 1,
    material: '100% Gentle Combed Cotton',
    careInstructions: ['Hand wash with mild soap and dry flat']
  },
  {
    id: 'mips-gift-02',
    name: 'Fluffy Strawberry Amigurumi Plushie',
    category: 'gifts',
    categoryName: 'Gifts',
    price: 8500,
    originalPrice: 10500,
    description: 'Irresistibly squishy velvet yarn strawberry with safety eyes and adorable green leaf topper.',
    fullDescription: 'Hand-stuffed with hypoallergenic polyester fiberfill. Makes a sweet desk companion, bag charm, baby nursery accent, or gift for crochet lovers.',
    images: [
      'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535572290543-960a8046f5af?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Strawberry Pink', hex: '#FF4081' },
      { name: 'Pastel Lilac', hex: '#CE93D8' },
      { name: 'Sky Blue', hex: '#80D8FF' }
    ],
    sizes: ['Mini (12cm)', 'Medium (18cm)', 'Jumbo Squish (28cm)'],
    rating: 5.0,
    reviewCount: 63,
    inStock: true,
    isBestSeller: true,
    estimatedCraftDays: 2,
    material: 'Super Chenille Velvet Yarn with Safety Washers',
    careInstructions: ['Surface spot clean with a warm damp cloth']
  },
  {
    id: 'mips-custom-01',
    name: 'Bespoke Custom Crochet Creation',
    category: 'custom',
    categoryName: 'Custom Crochet',
    price: 25000,
    description: 'Have a dream crochet design or Pinterest reference? Order your unique custom piece tailored to you.',
    fullDescription: 'Bring your Pinterest boards, fashion dreams, or unique gift ideas to life! At MIPS, we specialize in custom crochet commissions: from bespoke wedding garments, festival swimwear, custom cartoon amigurumi, to exact color-matched home decor. You pick the yarn, stitch pattern, dimensions, and colors.',
    images: [
      'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Custom Palette (Any Color)', hex: '#E85D88' },
      { name: 'Custom Duo / Multi-Tone', hex: '#F472B6' }
    ],
    sizes: ['Custom Sized to Your Body or Space'],
    rating: 5.0,
    reviewCount: 88,
    inStock: true,
    estimatedCraftDays: 4,
    material: 'Tailored to your choice (Cotton, Velvet, Silk-Blend, Acrylic, Wool)',
    careInstructions: [
      'Custom care instructions provided tailored to your selected yarn'
    ]
  }
];
