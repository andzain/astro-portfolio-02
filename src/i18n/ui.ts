export const languages = {
  en: "English",
  hy: "Հայերեն",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.works": "Works",
    "nav.about": "CV / Bio",
    "nav.contact": "Contact",
    "site.description":
      "Vahram Aghasyan — contemporary art, conceptual photography, and text installations.",
    "about.title": "CV / Bio",
    "about.cvLink": "View full CV as PDF ↗",
    "about.portraitCaption":
      "Vahram Aghasyan in Dilijan, in the Impuls Factory",
    "contact.title": "Contact",
    "contact.intro":
      "Write an email to get in touch, for exhibition proposals, collaborations, press, or residency inquiries — or use the form below.",
    "contact.name": "Full Name *",
    "contact.email": "Email address *",
    "contact.message": "Message *",
    "contact.link": "Website / Instagram / other",
    "contact.submit": "Submit",
    "work.medium": "Medium",
    "work.dimensions": "Dimensions",
    "work.location": "Location",
    "work.collaborators": "Collaborators",
    "footer.rights": "All rights reserved.",
    "404.title": "Page not found",
    "404.message":
      "The page you're looking for doesn't exist or may have moved.",
    "404.cta": "Back to Works",
    "filter.all": "All",
    "category.installation": "Installation",
    "category.photography": "Photography",
    "category.text": "Text",
    "category.video": "Video",
    "category.performance": "Performance",
  },
  hy: {
    "nav.works": "Աշխատանքներ",
    "nav.about": "Ինքնակենսագրություն",
    "nav.contact": "Կապ",
    "site.description":
      "Վահրամ Աղասյան — ժամանակակից արվեստ, կոնցեպտուալ լուսանկարչություն և տեքստային ինստալացիաներ։",
    "about.title": "Ինքնակենսագրություն",
    "about.cvLink": "Ամբողջական CV-ն որպես PDF ↗",
    "about.portraitCaption": "Վահրամ Աղասյանը Դիլիջանում, Իմպուլս գործարանում",
    "contact.title": "Կապ",
    "contact.intro":
      "Կապվեք էլ. նամակով՝ ցուցահանդեսների առաջարկների, համագործակցության, մամուլի կամ ռեզիդենցիայի հարցերով, կամ լրացրեք ստորև բերված ձևը։",
    "contact.name": "Անուն Ազգանուն *",
    "contact.email": "Էլ. հասցե *",
    "contact.message": "Հաղորդագրություն *",
    "contact.link": "Կայք / Instagram / այլ",
    "contact.submit": "Ուղարկել",
    "work.medium": "Միջոց",
    "work.dimensions": "Չափսեր",
    "work.location": "Վայր",
    "work.collaborators": "Համահեղինակներ",
    "footer.rights": "Բոլոր իրավունքները պաշտպանված են։",
    "404.title": "Էջը չի գտնվել",
    "404.message": "Փնտրած էջը գոյություն չունի կամ տեղափոխվել է։",
    "404.cta": "Վերադառնալ Աշխատանքներին",
    "filter.all": "Բոլորը",
    "category.installation": "Ինստալացիա",
    "category.photography": "Լուսանկարչություն",
    "category.text": "Տեքստ",
    "category.video": "Տեսանյութ",
    "category.performance": "Պերֆորմանս",
  },
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof typeof ui.en;

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}
