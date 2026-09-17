// Locale-independent site data: URLs, contact details and project facts.
// Translatable copy lives in translations.js.

export const site = {
  url: "https://emregemici.com",
  name: "Emre Gemici",
  email: "emregemici5@gmail.com",
  social: {
    linkedin: "https://linkedin.com/in/emre-gemici",
    github: "https://github.com/gemiciemre",
    medium: "https://medium.com/@gemiciemre",
  },
};

export const techStack = [
  "Swift", "SwiftUI", "UIKit", "Combine", "Core Data",
  "MVVM", "VIPER", "Clean Architecture", "CI/CD", "Git",
];

// `key` matches the entries under `projects.items` in translations.js
export const projects = [
  {
    key: "abonesepeti",
    tech: ["Swift", "SwiftUI", "MVVM", "Core Data", "StoreKit", "WidgetKit"],
    link: "https://apps.apple.com/tr/app/abonesepeti-abonelik-y%C3%B6netimi/id1603237503?l=tr",
    linkType: "appstore",
    image: { src: "/images/projects/abonesepeti.png", alt: "Abonesepeti app icon" },
  },
  {
    key: "inventally",
    tech: ["SwiftUI", "Combine", "AVFoundation", "CloudKit", "Charts"],
    link: "https://www.inventally.app/",
    linkType: "website",
    image: { src: "/images/projects/inventally.png", alt: "Inventally logo" },
  },
  {
    key: "hundredDays",
    tech: ["SwiftUI", "Combine", "Core Data", "URLSession", "MapKit"],
    link: "https://github.com/gemiciemre/iOS_100DaysOfSwiftUI",
    linkType: "github",
    image: { src: "/images/projects/swiftui.png", alt: "SwiftUI icon" },
  },
];
