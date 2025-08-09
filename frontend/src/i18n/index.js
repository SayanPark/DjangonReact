import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  fa: {
    translation: {
      nav: {
        home: 'خانه',
        articles: 'مقالات',
        news: 'اخبار',
        departments: 'دپارتمان‌ها',
        about: 'درباره ما',
        contact: 'تماس با ما',
        language: 'زبان'
      },
      languages: {
        persian: 'فارسی',
        english: 'English',
        arabic: 'العربية'
      },
      search: {
        placeholder: 'جستجو کنید'
      },
      dashboard: {
        title: 'داشبورد',
        profile: 'پروفایل',
        workspace: 'میزکار'
      },
      auth: {
        login: 'ورود',
        logout: 'خروج'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        articles: 'Articles',
        news: 'News',
        departments: 'Departments',
        about: 'About Us',
        contact: 'Contact Us',
        language: 'Language'
      },
      languages: {
        persian: 'Persian',
        english: 'English',
        arabic: 'Arabic'
      },
      search: {
        placeholder: 'Search...'
      },
      dashboard: {
        title: 'Dashboard',
        profile: 'Profile',
        workspace: 'Workspace'
      },
      auth: {
        login: 'Login',
        logout: 'Logout'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        articles: 'المقالات',
        news: 'الأخبار',
        departments: 'الأقسام',
        about: 'من نحن',
        contact: 'اتصل بنا',
        language: 'اللغة'
      },
      languages: {
        persian: 'الفارسية',
        english: 'الإنجليزية',
        arabic: 'العربية'
      },
      search: {
        placeholder: 'ابحث...'
      },
      dashboard: {
        title: 'لوحة التحكم',
        profile: 'الملف الشخصي',
        workspace: 'مساحة العمل'
      },
      auth: {
        login: 'تسجيل الدخول',
        logout: 'تسجيل الخروج'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fa', // default language
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
