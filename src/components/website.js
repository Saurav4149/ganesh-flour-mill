import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, MapPin, ShoppingBag, MessageCircle } from 'lucide-react';
import logo from '../images/logo.png';

const branches = [
    {
      name: "Kalyan Branch",
      address: "123, Kalyan West, Near Railway Station, Mumbai, Maharashtra - 421301",
      phone: "+91 9876543210",
      whatsapp: "+919876543210",
      maps: "https://maps.google.com/?q=Kalyan+West+Mumbai",
    },
    {
      name: "Thane Branch",
      address: "456, Thane West, Lake City Mall Road, Mumbai, Maharashtra - 400601",
      phone: "+91 9876543211",
      whatsapp: "+919876543211",
      maps: "https://maps.google.com/?q=Thane+West+Mumbai",
    },
    {
      name: "Dombivli Branch",
      address: "789, Dombivli East, Market Road, Mumbai, Maharashtra - 421201",
      phone: "+91 9876543212",
      whatsapp: "+919876543212",
      maps: "https://maps.google.com/?q=Dombivli+East+Mumbai",
    },
    {
      name: "Ulhasnagar Branch",
      address: "101, Ulhasnagar Central, Main Market, Mumbai, Maharashtra - 421002",
      phone: "+91 9876543213",
      whatsapp: "+919876543213",
      maps: "https://maps.google.com/?q=Ulhasnagar+Mumbai",
    },
  ];

const productCategories = {
    wheatFlours: {
      title: "Wheat Flours",
      products: [
        {
          name: "WHEAT LOKWAN ATTA",
          description: "Premium quality wheat flour made from selected Lokwan wheat grains",
          benefits: [
            "Rich in dietary fiber",
            "High protein content",
            "Perfect for daily rotis",
            "Excellent dough consistency"
          ],
          nutritionalValue: {
            protein: "12g per 100g",
            fiber: "2.7g per 100g",
            carbs: "71g per 100g",
            minerals: "2.1g per 100g"
          },
          usageInstructions: "Best for making soft rotis and chapatis",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Wheat M.P Sheor (Atta)",
          description: "Premium Madhya Pradesh wheat flour known for its rich texture",
          benefits: [
            "Superior taste",
            "Excellent binding properties",
            "Good for digestive health",
            "Rich in natural nutrients"
          ],
          nutritionalValue: {
            protein: "11.5g per 100g",
            fiber: "2.5g per 100g",
            carbs: "72g per 100g",
            minerals: "1.9g per 100g"
          },
          usageInstructions: "Ideal for all types of Indian breads",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Wheat P.C Sheor (Atta)",
          description: "Premium quality Sheor wheat flour for perfect rotis",
          benefits: [
            "Balanced nutrition",
            "Great taste",
            "Good shelf life",
            "Optimal protein content"
          ],
          nutritionalValue: {
            protein: "11g per 100g",
            fiber: "2.4g per 100g",
            carbs: "71g per 100g",
            minerals: "1.8g per 100g"
          },
          usageInstructions: "Perfect for daily roti making",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Wheat Sharbati (Atta) with Soya mix",
          description: "Premium blend of Sharbati wheat and soya for enhanced nutrition",
          benefits: [
            "Enhanced protein content",
            "Better nutritional profile",
            "Improved texture",
            "Added soya benefits"
          ],
          nutritionalValue: {
            protein: "13g per 100g",
            fiber: "2.8g per 100g",
            carbs: "69g per 100g",
            minerals: "2.2g per 100g"
          },
          usageInstructions: "Excellent for health-conscious individuals",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Ganesh Special Protein (ATTA)",
          description: "Special blend with Wheat, Oats, Barley, Black peas, and Soyabean",
          benefits: [
            "High protein content",
            "Multiple grain benefits",
            "Perfect for health conscious",
            "Enhanced nutritional value"
          ],
          nutritionalValue: {
            protein: "14g per 100g",
            fiber: "3.2g per 100g",
            carbs: "68g per 100g",
            minerals: "2.4g per 100g"
          },
          usageInstructions: "Ideal for daily use and fitness enthusiasts",
          image: "/api/placeholder/400/300"
        },
        {
          name: "PUNJABI JADA WHEAT ATTA",
          description: "Authentic Punjabi-style thick wheat flour",
          benefits: [
            "Traditional taste",
            "Perfect for North Indian dishes",
            "Rich texture",
            "Good absorption"
          ],
          nutritionalValue: {
            protein: "12.5g per 100g",
            fiber: "2.6g per 100g",
            carbs: "70g per 100g",
            minerals: "2.0g per 100g"
          },
          usageInstructions: "Best for making traditional Punjabi rotis",
          image: "/api/placeholder/400/300"
        },
        {
          name: "WHEAT KHAPLI ATTA",
          description: "Ancient variety wheat flour with superior nutrition",
          benefits: [
            "Ancient grain benefits",
            "Rich in nutrients",
            "Unique taste",
            "High mineral content"
          ],
          nutritionalValue: {
            protein: "12.8g per 100g",
            fiber: "3g per 100g",
            carbs: "69g per 100g",
            minerals: "2.3g per 100g"
          },
          usageInstructions: "Perfect for those seeking ancient grain benefits",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Wheat Laddu Atta",
          description: "Special flour blend perfect for making traditional laddus",
          benefits: [
            "Perfect for sweets",
            "Ideal texture",
            "Traditional taste",
            "Good binding properties"
          ],
          nutritionalValue: {
            protein: "11g per 100g",
            fiber: "2.3g per 100g",
            carbs: "73g per 100g",
            minerals: "1.8g per 100g"
          },
          usageInstructions: "Specifically formulated for laddu preparation",
          image: "/api/placeholder/400/300"
        },
        {
          name: "WHEAT BATTI ATTA",
          description: "Specially crafted flour for perfect battis",
          benefits: [
            "Perfect for battis",
            "Good binding properties",
            "Traditional taste",
            "Optimal texture"
          ],
          nutritionalValue: {
            protein: "11.2g per 100g",
            fiber: "2.4g per 100g",
            carbs: "72g per 100g",
            minerals: "1.9g per 100g"
          },
          usageInstructions: "Ideal for making traditional battis",
          image: "/api/placeholder/400/300"
        }
      ]
    },
    bhakriFlours: {
      title: "Bhakri Flours",
      products: [
        {
          name: "Jawari (Solapuri) Atta",
          description: "Traditional Solapuri-style jowar flour for authentic bhakris",
          benefits: [
            "Gluten-free",
            "Rich in fiber",
            "Traditional taste",
            "Good for diabetics"
          ],
          nutritionalValue: {
            protein: "10g per 100g",
            fiber: "2g per 100g",
            carbs: "72g per 100g",
            minerals: "1.8g per 100g"
          },
          usageInstructions: "Perfect for making traditional bhakris",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Bajri (Atta)",
          description: "Fresh ground pearl millet flour for nutritious bhakris",
          benefits: [
            "High in minerals",
            "Good for diabetes",
            "Rich in antioxidants",
            "Natural cooling properties"
          ],
          nutritionalValue: {
            protein: "11g per 100g",
            fiber: "2.3g per 100g",
            carbs: "71g per 100g",
            minerals: "2.2g per 100g"
          },
          usageInstructions: "Ideal for making bajra bhakri and rotla",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Nachani (Atta)",
          description: "Nutritious finger millet flour rich in calcium",
          benefits: [
            "Rich in calcium",
            "Good for bones",
            "High in fiber",
            "Diabetic friendly"
          ],
          nutritionalValue: {
            protein: "9g per 100g",
            fiber: "3.6g per 100g",
            carbs: "70g per 100g",
            minerals: "2.7g per 100g"
          },
          usageInstructions: "Great for making nachani bhakri and dosa",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Chaval (Atta)",
          description: "Finely ground rice flour for various preparations",
          benefits: [
            "Easy to digest",
            "Gluten-free",
            "Versatile use",
            "Light on stomach"
          ],
          nutritionalValue: {
            protein: "6g per 100g",
            fiber: "0.6g per 100g",
            carbs: "80g per 100g",
            minerals: "0.6g per 100g"
          },
          usageInstructions: "Suitable for neer dosa and rice rotis",
          image: "/api/placeholder/400/300"
        },
        {
          name: "Makka (Atta)",
          description: "Pure corn flour for traditional recipes",
          benefits: [
            "Rich in fiber",
            "Gluten-free",
            "Good for diabetes",
            "Rich in antioxidants"
          ],
          nutritionalValue: {
            protein: "8g per 100g",
            fiber: "2g per 100g",
            carbs: "75g per 100g",
            minerals: "1.3g per 100g"
          },
          usageInstructions: "Perfect for makki ki roti and cornbread",
          image: "/api/placeholder/400/300"
        },
        {
          name: "MIX MULTIGRAIN ATTA (PANCHRATNA)",
          description: "Special blend of Jawari, Bajri, Nachani, Chaval, and Makka",
          benefits: [
            "Complete nutrition",
            "Multiple grain benefits",
            "Balanced taste",
            "Enhanced fiber content"
          ],
          nutritionalValue: {
            protein: "11g per 100g",
            fiber: "3g per 100g",
            carbs: "72g per 100g",
            minerals: "2.2g per 100g"
          },
          usageInstructions: "Versatile flour for various preparations",
          image: "/api/placeholder/400/300"
        },
        {
          name: "GLUTEN FREE ATTA",
          description: "Special blend with Jawari, Bajri, Nachani, Alasi, Kala chana, Oats, Jav, and Soyabean",
          benefits: [
            "Gluten-free",
            "High protein",
            "Rich in nutrients",
            "Multiple grain benefits"
          ],
          nutritionalValue: {
            protein: "12g per 100g",
            fiber: "3.5g per 100g",
            carbs: "70g per 100g",
            minerals: "2.4g per 100g"
          },
          usageInstructions: "Perfect for gluten-sensitive individuals",
          image: "/api/placeholder/400/300"
        }
      ]
    },
  
    // Adding Breakfast Atta category...
  breakfastAtta: {
    title: "Breakfast Atta",
    products: [
      {
        name: "Medu Wada Atta",
        description: "Perfect blend for crispy medu vadas",
        benefits: [
          "Crispy texture",
          "Easy to prepare",
          "Authentic taste",
          "Consistent results"
        ],
        nutritionalValue: {
          protein: "12g per 100g",
          fiber: "2.5g per 100g",
          carbs: "65g per 100g",
          minerals: "2g per 100g"
        },
        usageInstructions: "Mix with water to make perfect vada batter",
        image: "/api/placeholder/400/300"
      },
      {
        name: "Jada Poha",
        description: "Thick flattened rice for traditional breakfast",
        benefits: [
          "Quick cooking",
          "Easy to digest",
          "Rich in iron",
          "Good source of carbs"
        ],
        nutritionalValue: {
          protein: "6.5g per 100g",
          fiber: "1.2g per 100g",
          carbs: "76g per 100g",
          minerals: "1.5g per 100g"
        },
        usageInstructions: "Wash and soak briefly before cooking",
        image: "/api/placeholder/400/300"
      },
      {
        name: "Rava Atta",
        description: "Premium quality semolina for various preparations",
        benefits: [
          "Versatile use",
          "Perfect texture",
          "Good for upma",
          "Suitable for sweets"
        ],
        nutritionalValue: {
          protein: "9g per 100g",
          fiber: "1.8g per 100g",
          carbs: "72g per 100g",
          minerals: "1.2g per 100g"
        },
        usageInstructions: "Ideal for upma, sheera, and other preparations",
        image: "/api/placeholder/400/300"
      },
      {
        name: "Ghavan (Atta)",
        description: "Special mix for perfect ghavan/dosa",
        benefits: [
          "Crispy texture",
          "Easy spreading",
          "Perfect fermentation",
          "Traditional taste"
        ],
        nutritionalValue: {
          protein: "8g per 100g",
          fiber: "2g per 100g",
          carbs: "74g per 100g",
          minerals: "1.4g per 100g"
        },
        usageInstructions: "Mix and ferment for best results",
        image: "/api/placeholder/400/300"
      },
      {
        name: "Moong Dal (Atta)",
        description: "Finely ground moong dal flour",
        benefits: [
          "High protein content",
          "Easy to digest",
          "Versatile use",
          "Rich in minerals"
        ],
        nutritionalValue: {
          protein: "24g per 100g",
          fiber: "4g per 100g",
          carbs: "59g per 100g",
          minerals: "3.5g per 100g"
        },
        usageInstructions: "Perfect for pakoras and other snacks",
        image: "/api/placeholder/400/300"
      },
      {
        name: "Green Moong Atta",
        description: "Ground green moong for healthy preparations",
        benefits: [
          "High nutritional value",
          "Rich in antioxidants",
          "Good protein source",
          "Easy digestibility"
        ],
        nutritionalValue: {
          protein: "24g per 100g",
          fiber: "4.2g per 100g",
          carbs: "58g per 100g",
          minerals: "3.8g per 100g"
        },
        usageInstructions: "Ideal for healthy snacks and breakfast items",
        image: "/api/placeholder/400/300"
      },
      {
        name: "Channa Besan (Atta)",
        description: "100% pure Chana dal flour",
        benefits: [
          "High protein content",
          "Gluten-free",
          "Rich in minerals",
          "Versatile use"
        ],
        nutritionalValue: {
          protein: "22g per 100g",
          fiber: "3.5g per 100g",
          carbs: "60g per 100g",
          minerals: "3g per 100g"
        },
        usageInstructions: "Perfect for pakoras, kadhi, and other dishes",
        image: "/api/placeholder/400/300"
      },
      {
        name: "KANDA BHAJI ATTA (PRE MIX)",
        description: "Ready-to-use mix for perfect onion pakoras",
        benefits: [
          "Convenient preparation",
          "Perfect spice blend",
          "Crispy texture",
          "Consistent taste"
        ],
        nutritionalValue: {
          protein: "14g per 100g",
          fiber: "3g per 100g",
          carbs: "65g per 100g",
          minerals: "2.5g per 100g"
        },
        usageInstructions: "Just add water and onions for perfect bhajis",
        image: "/api/placeholder/400/300"
      },
      {
        name: "MANCHURIAN ATTA (PRE MIX)",
        description: "Special blend for perfect manchurian balls",
        benefits: [
          "Perfect binding",
          "Ideal texture",
          "Easy to prepare",
          "Restaurant style results"
        ],
        nutritionalValue: {
          protein: "12g per 100g",
          fiber: "2.8g per 100g",
          carbs: "68g per 100g",
          minerals: "2.2g per 100g"
        },
        usageInstructions: "Mix with vegetables for perfect manchurian",
        image: "/api/placeholder/400/300"
      },
      {
        name: "Maida (Atta)",
        description: "Fine refined wheat flour",
        benefits: [
          "Perfect for baking",
          "Smooth texture",
          "Versatile use",
          "Good binding properties"
        ],
        nutritionalValue: {
          protein: "10g per 100g",
          fiber: "0.3g per 100g",
          carbs: "74g per 100g",
          minerals: "0.5g per 100g"
        },
        usageInstructions: "Ideal for breads, cakes, and pastries",
        image: "/api/placeholder/400/300"
      },
      {
        name: "Masur Dal (Atta)",
        description: "Finely ground masur dal flour",
        benefits: [
          "High protein content",
          "Rich in iron",
          "Easy to digest",
          "Versatile use"
        ],
        nutritionalValue: {
          protein: "25g per 100g",
          fiber: "3.8g per 100g",
          carbs: "57g per 100g",
          minerals: "3.2g per 100g"
        },
        usageInstructions: "Perfect for various dal preparations",
        image: "/api/placeholder/400/300"
      }
    ]
  },
  
    // Adding Ganesh Grains category...
  ganeshGrains: {
      title: "Ganesh Grains",
      products: [
        {
          name: "WADA KOLAM RICE (OLD)",
          description: "Premium aged wada kolam rice known for its superior quality and texture",
          benefits: [
            "Premium aged quality",
            "Perfect grain length",
            "Superior aroma",
            "Non-sticky texture"
          ],
          nutritionalValue: {
            protein: "6.8g per 100g",
            fiber: "0.2g per 100g",
            carbs: "78g per 100g",
            minerals: "0.6g per 100g"
          },
          usageInstructions: "Wash thoroughly before cooking, ideal for daily consumption",
          image: "/api/placeholder/400/300"
        },
        {
          name: "JEERA KOLAM RICE (OLD)",
          description: "Fine quality aged jeera kolam rice with distinctive aroma",
          benefits: [
            "Aromatic flavor",
            "Long grain quality",
            "Perfect for biryani",
            "Well-aged for taste"
          ],
          nutritionalValue: {
            protein: "7g per 100g",
            fiber: "0.2g per 100g",
            carbs: "77g per 100g",
            minerals: "0.7g per 100g"
          },
          usageInstructions: "Best for biryani and pulao preparations",
          image: "/api/placeholder/400/300"
        },
        {
          name: "SURTI KOLAM RICE (OLD)",
          description: "Traditional Surti kolam rice known for its unique taste",
          benefits: [
            "Traditional variety",
            "Excellent cooking quality",
            "Rich taste",
            "Perfect grain separation"
          ],
          nutritionalValue: {
            protein: "6.5g per 100g",
            fiber: "0.2g per 100g",
            carbs: "78g per 100g",
            minerals: "0.6g per 100g"
          },
          usageInstructions: "Ideal for daily rice preparations",
          image: "/api/placeholder/400/300"
        },
        {
          name: "LASHKARI KOLAM RICE",
          description: "Premium quality Lashkari kolam rice for special occasions",
          benefits: [
            "Premium quality",
            "Special occasion rice",
            "Excellent taste",
            "Superior grain quality"
          ],
          nutritionalValue: {
            protein: "6.9g per 100g",
            fiber: "0.2g per 100g",
            carbs: "77g per 100g",
            minerals: "0.7g per 100g"
          },
          usageInstructions: "Perfect for special occasions and festivities",
          image: "/api/placeholder/400/300"
        },
        {
          name: "INDRAYANI RICE",
          description: "Popular Maharashtra variety known for its taste",
          benefits: [
            "Local favorite",
            "Medium grain",
            "Good cooking quality",
            "Economical choice"
          ],
          nutritionalValue: {
            protein: "6.7g per 100g",
            fiber: "0.2g per 100g",
            carbs: "78g per 100g",
            minerals: "0.6g per 100g"
          },
          usageInstructions: "Suitable for daily cooking",
          image: "/api/placeholder/400/300"
        },
        {
          name: "AMBEMOHAR RICE",
          description: "Traditional aromatic rice variety with mango blossom fragrance",
          benefits: [
            "Natural fragrance",
            "Traditional variety",
            "Unique taste",
            "Short grain texture"
          ],
          nutritionalValue: {
            protein: "6.6g per 100g",
            fiber: "0.2g per 100g",
            carbs: "78g per 100g",
            minerals: "0.6g per 100g"
          },
          usageInstructions: "Best for special dishes and festivals",
          image: "/api/placeholder/400/300"
        },
        {
          name: "GOLDEN BASMATI RICE",
          description: "Premium long-grain aromatic basmati rice",
          benefits: [
            "Premium aroma",
            "Extra long grains",
            "Perfect for biryanis",
            "Superior quality"
          ],
          nutritionalValue: {
            protein: "7.5g per 100g",
            fiber: "0.4g per 100g",
            carbs: "77g per 100g",
            minerals: "0.7g per 100g"
          },
          usageInstructions: "Ideal for biryani and special rice dishes",
          image: "/api/placeholder/400/300"
        },
        {
          name: "WHEAT DALIYA",
          description: "Broken wheat grains for healthy preparations",
          benefits: [
            "High in fiber",
            "Nutritious breakfast option",
            "Easy to digest",
            "Rich in minerals"
          ],
          nutritionalValue: {
            protein: "12g per 100g",
            fiber: "12.5g per 100g",
            carbs: "71g per 100g",
            minerals: "2.2g per 100g"
          },
          usageInstructions: "Perfect for healthy breakfast porridge",
          image: "/api/placeholder/400/300"
        },
        {
          name: "TOOR DAL",
          description: "Premium quality split pigeon peas",
          benefits: [
            "High protein content",
            "Easy to cook",
            "Rich in nutrients",
            "Daily essential"
          ],
          nutritionalValue: {
            protein: "22g per 100g",
            fiber: "3.5g per 100g",
            carbs: "63g per 100g",
            minerals: "2.7g per 100g"
          },
          usageInstructions: "Wash and pressure cook for dal preparations",
          image: "/api/placeholder/400/300"
        },
        {
          name: "WHOLE MOONG DAL (yellow)",
          description: "Premium quality whole yellow mung beans",
          benefits: [
            "Rich in protein",
            "Easy digestibility",
            "Versatile use",
            "Nutritious choice"
          ],
          nutritionalValue: {
            protein: "24g per 100g",
            fiber: "4g per 100g",
            carbs: "59g per 100g",
            minerals: "3.5g per 100g"
          },
          usageInstructions: "Soak before cooking, ideal for sprouts",
          image: "/api/placeholder/400/300"
        },
        {
          name: "WHOLE GREEN MOONG",
          description: "Premium quality whole green mung beans",
          benefits: [
            "High nutritional value",
            "Perfect for sprouting",
            "Rich in antioxidants",
            "Good protein source"
          ],
          nutritionalValue: {
            protein: "24g per 100g",
            fiber: "4.2g per 100g",
            carbs: "58g per 100g",
            minerals: "3.8g per 100g"
          },
          usageInstructions: "Ideal for sprouting and curry preparations",
          image: "/api/placeholder/400/300"
        },
        {
          name: "WHOLE MASOOR DAL",
          description: "Premium quality whole red lentils",
          benefits: [
            "Rich in iron",
            "High protein content",
            "Quick cooking",
            "Nutritious choice"
          ],
          nutritionalValue: {
            protein: "25g per 100g",
            fiber: "3.8g per 100g",
            carbs: "57g per 100g",
            minerals: "3.2g per 100g"
          },
          usageInstructions: "Cook directly or split for faster cooking",
          image: "/api/placeholder/400/300"
        },
        {
          name: "WHOLE CHANA DAL",
          description: "Premium quality whole chickpeas",
          benefits: [
            "High fiber content",
            "Rich in protein",
            "Versatile use",
            "Traditional favorite"
          ],
          nutritionalValue: {
            protein: "20g per 100g",
            fiber: "12.2g per 100g",
            carbs: "61g per 100g",
            minerals: "2.7g per 100g"
          },
          usageInstructions: "Soak overnight before cooking",
          image: "/api/placeholder/400/300"
        }
      ]
    },
    coldPressedOils: {
      title: "Ganesh Cold Pressed Oils",
      products: [
        {
          name: "ALMOND OIL COLD PRESSED",
          description: "Pure cold pressed almond oil extracted from premium quality almonds",
          benefits: [
            "Rich in Vitamin E and antioxidants",
            "Natural skin moisturizer",
            "Promotes healthy hair growth",
            "Great for massage therapy"
          ],
          nutritionalValue: {
            fats: "100g per 100g",
            vitaminE: "26mg per 100g",
            omega6: "12g per 100g",
            omega9: "70g per 100g"
          },
          usageInstructions: "For external use in skin care and hair care. Can be used for massage",
          image: "/api/placeholder/400/300"
        },
        {
          name: "CASTOR OIL COLD PRESSED",
          description: "Pure cold pressed castor oil for therapeutic uses",
          benefits: [
            "Promotes hair growth and thickness",
            "Natural skin moisturizer",
            "Anti-inflammatory properties",
            "Improves scalp health"
          ],
          nutritionalValue: {
            fats: "100g per 100g",
            ricinoleicAcid: "85g per 100g",
            vitaminE: "5mg per 100g",
            omega9: "3g per 100g"
          },
          usageInstructions: "Apply externally for hair and skin care. Do not consume",
          image: "/api/placeholder/400/300"
        },
        {
          name: "COLD PRESSED GROUND NUT OIL",
          description: "Natural peanut oil extracted through traditional cold pressing",
          benefits: [
            "High smoke point ideal for cooking",
            "Rich in heart-healthy fats",
            "Natural nutty flavor",
            "Preserves nutrients due to cold pressing"
          ],
          nutritionalValue: {
            fats: "100g per 100g",
            vitaminE: "15.7mg per 100g",
            omega6: "32g per 100g",
            omega9: "46g per 100g"
          },
          usageInstructions: "Excellent for cooking, frying, and traditional recipes",
          image: "/api/placeholder/400/300"
        },
        {
          name: "COLD PRESSED MUSTARD OIL",
          description: "Traditional cold pressed mustard oil with authentic flavor",
          benefits: [
            "Strong natural flavor",
            "High in omega-3 fatty acids",
            "Traditional health benefits",
            "Antibacterial properties"
          ],
          nutritionalValue: {
            fats: "100g per 100g",
            omega3: "6g per 100g",
            omega6: "21g per 100g",
            omega9: "59g per 100g"
          },
          usageInstructions: "Use in traditional cooking, especially North Indian cuisine",
          image: "/api/placeholder/400/300"
        },
        {
          name: "COLD PRESSED COCONUT OIL",
          description: "Pure virgin coconut oil extracted through cold pressing",
          benefits: [
            "Contains healthy MCTs",
            "Natural antimicrobial properties",
            "Excellent for skin and hair",
            "Stable at high temperatures"
          ],
          nutritionalValue: {
            fats: "100g per 100g",
            mcfa: "62g per 100g",
            lauricAcid: "49g per 100g",
            vitaminE: "0.1mg per 100g"
          },
          usageInstructions: "Versatile use - cooking, skin care, hair care",
          image: "/api/placeholder/400/300"
        },
        {
          name: "COLD PRESSED SUNFLOWER OIL",
          description: "Natural sunflower oil extracted without heat",
          benefits: [
            "Light neutral taste",
            "High in Vitamin E",
            "Good for heart health",
            "Suitable for all cooking methods"
          ],
          nutritionalValue: {
            fats: "100g per 100g",
            vitaminE: "41.08mg per 100g",
            omega6: "65.7g per 100g",
            omega9: "19.5g per 100g"
          },
          usageInstructions: "Perfect for daily cooking and deep frying",
          image: "/api/placeholder/400/300"
        },
        {
          name: "COLD PRESSED SAFFLOWER OIL",
          description: "Pure safflower oil extracted through cold pressing",
          benefits: [
            "High in linoleic acid",
            "Neutral flavor profile",
            "Good for heart health",
            "High smoke point"
          ],
          nutritionalValue: {
            fats: "100g per 100g",
            vitaminE: "34.1mg per 100g",
            omega6: "74.6g per 100g",
            omega9: "14.4g per 100g"
          },
          usageInstructions: "Ideal for cooking, baking, and salad dressings",
          image: "/api/placeholder/400/300"
        },
        {
          name: "COLD PRESSED SESAME OIL",
          description: "Traditional cold pressed sesame oil with rich flavor",
          benefits: [
            "Rich in antioxidants",
            "Natural preservative properties",
            "Traditional medicinal uses",
            "Stable at high temperatures"
          ],
          nutritionalValue: {
            fats: "100g per 100g",
            vitaminE: "1.4mg per 100g",
            omega6: "41g per 100g",
            omega9: "39g per 100g"
          },
          usageInstructions: "Great for cooking, traditional recipes, and hair oil",
          image: "/api/placeholder/400/300"
        },
        {
          name: "COLD PRESSED FLAXSEED OIL",
          description: "Nutrient-rich flaxseed oil extracted through cold pressing",
          benefits: [
            "Highest plant source of omega-3",
            "Anti-inflammatory properties",
            "Supports heart health",
            "Rich in lignans"
          ],
          nutritionalValue: {
            fats: "100g per 100g",
            omega3: "53g per 100g",
            omega6: "12.7g per 100g",
            omega9: "19.3g per 100g"
          },
          usageInstructions: "Use unheated in dressings or as a supplement",
          image: "/api/placeholder/400/300"
        },
        {
          name: "COLD PRESSED KALONJI OIL",
          description: "Pure black seed oil extracted through cold pressing",
          benefits: [
            "Traditional immunity booster",
            "Natural anti-inflammatory",
            "Respiratory health support",
            "Rich in thymoquinone"
          ],
          nutritionalValue: {
            fats: "100g per 100g",
            thymoquinone: "3.8g per 100g",
            omega6: "58g per 100g",
            omega9: "24g per 100g"
          },
          usageInstructions: "Can be consumed or used externally",
          image: "/api/placeholder/400/300"
        },
        {
          name: "PURE COW GHEE",
          description: "Traditional clarified butter made from pure cow's milk",
          benefits: [
            "Rich in fat-soluble vitamins",
            "High smoke point",
            "Enhances food flavor",
            "Ayurvedic properties"
          ],
          nutritionalValue: {
            fats: "99.5g per 100g",
            vitaminA: "3400IU per 100g",
            vitaminE: "2.8mg per 100g",
            vitaminK: "8.6mcg per 100g"
          },
          usageInstructions: "Use for cooking, traditional recipes, and religious purposes",
          image: "/api/placeholder/400/300"
        }
      ]
    },
    fastingFlours: {
      title: "Fasting Flours",
      products: [
        {
          name: "RAJGIRA (ATTA)",
          description: "Pure amaranth flour suitable for fasting days",
          benefits: [
            "High protein content",
            "Rich in minerals and fiber",
            "Gluten-free nature",
            "Complete protein source"
          ],
          nutritionalValue: {
            protein: "13g per 100g",
            fiber: "7g per 100g",
            carbs: "65g per 100g",
            minerals: "2.5g per 100g"
          },
          usageInstructions: "Perfect for making fasting recipes like puris and rotis",
          image: "/api/placeholder/400/300"
        },
        {
          name: "BHAGAR (ATTA)",
          description: "Barnyard millet flour for fasting preparations",
          benefits: [
            "Low glycemic index",
            "High fiber content",
            "Rich in minerals",
            "Easy digestibility"
          ],
          nutritionalValue: {
            protein: "11g per 100g",
            fiber: "9g per 100g",
            carbs: "65g per 100g",
            minerals: "4.4g per 100g"
          },
          usageInstructions: "Ideal for making khichdi and other fasting dishes",
          image: "/api/placeholder/400/300"
        },
        {
          name: "UPVAS THALIPITH",
          description: "Special blend of Rajgira, Bhagar, and Sabudana for fasting",
          benefits: [
            "Balanced nutrition",
            "Easy to prepare",
            "Perfect for fasting",
            "Traditional recipe blend"
          ],
          nutritionalValue: {
            protein: "10g per 100g",
            fiber: "6g per 100g",
            carbs: "72g per 100g",
            minerals: "2.2g per 100g"
          },
          usageInstructions: "Ready-to-use mix for making thalipeeth during fasts",
          image: "/api/placeholder/400/300"
        },
        {
          name: "SABUDANA ATTA",
          description: "Fine sago flour for fasting preparations",
          benefits: [
            "Quick energy source",
            "Easy to digest",
            "Cooling properties",
            "Versatile usage"
          ],
          nutritionalValue: {
            protein: "0.2g per 100g",
            fiber: "0.4g per 100g",
            carbs: "88g per 100g",
            minerals: "0.1g per 100g"
          },
          usageInstructions: "Use for making vadas, khichdi, and other fasting dishes",
          image: "/api/placeholder/400/300"
        },
        {
          name: "SINGHADA ATTA",
          description: "Water chestnut flour for fasting preparations",
          benefits: [
            "Naturally gluten-free",
            "Low in calories",
            "Rich in antioxidants",
            "Cooling properties"
          ],
          nutritionalValue: {
            protein: "4.5g per 100g",
            fiber: "3g per 100g",
            carbs: "78g per 100g",
            minerals: "1.2g per 100g"
          },
          usageInstructions: "Perfect for making puris and pakoras during fasts",
          image: "/api/placeholder/400/300"
        },
        {
          name: "KUTTU ATTA (BUCKWHEAT)",
          description: "Pure buckwheat flour for fasting days",
          benefits: [
            "Rich in rutin",
            "High protein content",
            "Gluten-free nature",
            "Rich in antioxidants"
          ],
          nutritionalValue: {
            protein: "13g per 100g",
            fiber: "10g per 100g",
            carbs: "70g per 100g",
            minerals: "2.4g per 100g"
          },
          usageInstructions: "Ideal for making parathas and pakoras during fasts",
          image: "/api/placeholder/400/300"
        },
        {
          name: "WHOLE SABUDANA",
          description: "Premium quality whole sago pearls",
          benefits: [
            "Energy-rich food",
            "Easy digestibility",
            "Cooling properties",
            "Perfect for fasting"
          ],
          nutritionalValue: {
            protein: "0.2g per 100g",
            fiber: "0.4g per 100g",
            carbs: "88g per 100g",
            minerals: "0.1g per 100g"
          },
          usageInstructions: "Soak before use, perfect for khichdi and vada",
          image: "/api/placeholder/400/300"
        }
      ]
    }
  };

  const ProductCard = ({ product }) => {
    const [showDetails, setShowDetails] = useState(false);
  
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-bold text-red-900 mb-2">{product.name}</h4>
        </div>
        <p className="text-gray-800 mb-4">{product.description}</p>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-red-600 hover:text-red-800 flex items-center gap-2 mb-4"
        >
          {showDetails ? 'Show Less' : 'Show More'}
          {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {showDetails && (
          <div className="space-y-4">
            <div className="bg-red-50/90 p-4 rounded-lg">
              <h5 className="font-semibold text-red-800 mb-2">Benefits</h5>
              <ul className="list-disc list-inside space-y-1">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-gray-700">{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/90 p-4 rounded-lg">
              <h5 className="font-semibold text-red-800 mb-2">Nutritional Value</h5>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(product.nutritionalValue).map(([key, value], idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-gray-700 capitalize">{key}: {value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-red-50/90 p-4 rounded-lg">
              <h5 className="font-semibold text-red-800 mb-2">Usage Instructions</h5>
              <p className="text-gray-700">{product.usageInstructions}</p>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  const ProductSection = ({ title, products, isOpen, onToggle }) => (
    <div className="mb-8 mx-16 bg-white/70 backdrop-blur-sm rounded-lg shadow-md overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-6 flex justify-between items-center bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all"
      >
        <h3 className="text-2xl font-bold flex items-center gap-2 mx-auto">
          <ShoppingBag className="w-6 h-6" />
          {title}
        </h3>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
  
  const BranchCard = ({ branch }) => (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
      <h4 className="text-xl font-bold text-red-800 mb-2">{branch.name}</h4>
      <p className="text-gray-700 mb-4">{branch.address}</p>
      <div className="flex flex-col gap-3">
        <a
          href={`tel:${branch.phone}`}
          className="flex items-center gap-2 text-red-600 hover:text-red-800"
        >
          <Phone className="w-5 h-5" />
          {branch.phone}
        </a>
        <a
          href={`https://wa.me/${branch.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-red-600 hover:text-red-800"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
        <a
          href={branch.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-red-600 hover:text-red-800"
        >
          <MapPin className="w-5 h-5" />
          View on Maps
        </a>
      </div>
    </div>
  );
  
  const App = () => {
    const [openSections, setOpenSections] = useState({});
  
    const toggleSection = (section) => {
      setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };
  
    return (
      <div
        className="min-h-screen bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('/backgroundjgfm.jpeg')`,
        }}
      >
        <header className="fixed w-full bg-white/50 backdrop-blur-sm shadow-lg z-50">
          <div className="container mx-auto px-4 flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Logo" className="h-16 w-16" />
              <h1 className="text-2xl font-bold text-red-800">JAI GANESH FLOUR MILL</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#home" className="text-gray-700 hover:text-red-800 text-lg">Home</a>
              <a href="#products" className="text-gray-700 hover:text-red-800 text-lg">Products</a>
              <a href="#branches" className="text-gray-700 hover:text-red-800 text-lg">Our Branches</a>
            </nav>
          </div>
        </header>
        <main className="pt-20">
          <section id="home" className="bg-white/50 backdrop-blur-sm py-20 text-center">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold text-red-800 mb-4">JAI GANESH FLOUR MILL</h1>
              <p className="text-2xl text-red-600 mb-8">चवीने खाणार त्याला गणेशच देणार !!</p>
              <p className="text-xl text-gray-800 mb-8">Premium Quality Flours for Your Daily Needs</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#products"
                  className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 text-lg"
                >
                  Explore Products
                </a>
                <a
                  href="#branches"
                  className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 text-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>
          <section id="products" className="py-16">
  <div className="w-full text-center mb-12">
    <h2 className="text-4xl font-bold text-white bg-red-800/80 py-2 px-8 rounded-lg inline-block mb-8">Our Products</h2>

    {Object.entries(productCategories).map(([key, category]) => (
      <ProductSection
        key={key}
        title={category.title}
        products={category.products}
        isOpen={openSections[key]}
        onToggle={() => toggleSection(key)}
      />
    ))}
  </div>
</section>

<section id="branches" className="py-16 bg-white/50 backdrop-blur-sm">
  <div className="w-full text-center mb-12">
    <h2 className="text-4xl font-bold text-white bg-red-800/80 py-2 px-8 rounded-lg inline-block mb-8">Our Branches</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {branches.map((branch, index) => (
        <BranchCard key={index} branch={branch} />
      ))}
    </div>
  </div>
</section>
        </main>
        <footer className="bg-gradient-to-r from-red-800 to-red-600 text-white py-6 text-center">
          <div className="container mx-auto px-4">
            <p className="text-lg">© 2024 JAI GANESH FLOUR MILL. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  };
  
  export default App;