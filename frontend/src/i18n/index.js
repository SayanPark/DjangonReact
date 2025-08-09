import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import globalTranslations from '../translations/global.json';

// Translation resources
<<<<<<< HEAD
const resources = globalTranslations;
=======
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
        language: 'زبان',
        search: 'جستجو کنید',
        dashboard: 'داشبورد',
        profile: 'پروفایل',
        workspace: 'میزکار',
        login: 'ورود',
        logout: 'خروج',
        loading: 'در حال بارگذاری...',
        aboutUs: 'درباره ما',
        contactUs: 'تماس با ما'
      },
      
      // Categories based on actual website
      categories: {
        news: 'اخبار',
        creativeIndustries: 'صنایع خلاق',
        international: 'بین الملل',
        socialResponsibility: 'رسالت اجتماعی',
        fashion: 'مد و پوشاک',
        health: 'سلامت',
        foodIndustry: 'صنایع غذایی'
      },
      
      // Common UI
      common: {
        readMore: 'ادامه مطلب',
        search: 'جستجو',
        loading: 'در حال بارگذاری...',
        noResults: 'نتیجه‌ای یافت نشد',
        error: 'خطا در بارگذاری',
        retry: 'تلاش مجدد',
        save: 'ذخیره',
        cancel: 'لغو',
        delete: 'حذف',
        edit: 'ویرایش',
        add: 'افزودن',
        submit: 'ارسال',
        close: 'بستن',
        confirm: 'تایید',
        back: 'بازگشت',
        next: 'بعدی',
        previous: 'قبلی'
      },
      
      // Auth
      auth: {
        login: 'ورود',
        register: 'ثبت‌نام',
        email: 'ایمیل',
        password: 'رمز عبور',
        confirmPassword: 'تایید رمز عبور',
        forgotPassword: 'فراموشی رمز عبور',
        createPassword: 'ایجاد رمز عبور',
        rememberMe: 'مرا به خاطر بسپار',
        signIn: 'ورود',
        signUp: 'ثبت‌نام',
        signOut: 'خروج',
        profile: 'پروفایل',
        dashboard: 'داشبورد'
      },
      
      // Messages
      messages: {
        success: 'عملیات با موفقیت انجام شد',
        error: 'خطا در انجام عملیات',
        confirmDelete: 'آیا از حذف مطمئن هستید؟',
        noData: 'داده‌ای یافت نشد',
        loading: 'در حال بارگذاری...'
      },
      
      // Languages
      languages: {
        persian: 'فارسی',
        english: 'English',
        arabic: 'العربية'
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
        language: 'Language',
        search: 'Search...',
        dashboard: 'Dashboard',
        profile: 'Profile',
        workspace: 'Workspace',
        login: 'Login',
        logout: 'Logout',
        loading: 'Loading...',
        aboutUs: 'About Us',
        contactUs: 'Contact Us'
      },
      
      // Categories based on actual website
      categories: {
        news: 'News',
        creativeIndustries: 'Creative Industries',
        international: 'International',
        socialResponsibility: 'Social Responsibility',
        fashion: 'Fashion & Clothing',
        health: 'Health',
        foodIndustry: 'Food Industry'
      },
      
      // Common UI
      common: {
        readMore: 'Read More',
        search: 'Search',
        loading: 'Loading...',
        noResults: 'No results found',
        error: 'Error loading',
        retry: 'Retry',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        add: 'Add',
        submit: 'Submit',
        close: 'Close',
        confirm: 'Confirm',
        back: 'Back',
        next: 'Next',
        previous: 'Previous'
      },
      
      // Auth
      auth: {
        login: 'Login',
        register: 'Register',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        forgotPassword: 'Forgot Password',
        createPassword: 'Create Password',
        rememberMe: 'Remember Me',
        signIn: 'Sign In',
        signUp: 'Sign Up',
        signOut: 'Sign Out',
        profile: 'Profile',
        dashboard: 'Dashboard'
      },
      
      // Messages
      messages: {
        success: 'Operation completed successfully',
        error: 'Error in operation',
        confirmDelete: 'Are you sure you want to delete?',
        noData: 'No data found',
        loading: 'Loading...'
      },
      
      // Languages
      languages: {
        persian: 'Persian',
        english: 'English',
        arabic: 'Arabic'
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
        language: 'اللغة',
        search: 'ابحث...',
        dashboard: 'لوحة التحكم',
        profile: 'الملف الشخصي',
        workspace: 'مساحة العمل',
        login: 'تسجيل الدخول',
        logout: 'تسجيل الخروج',
        loading: 'جاري التحميل...',
        aboutUs: 'من نحن',
        contactUs: 'اتصل بنا'
      },
      
      // Categories based on actual website
      categories: {
        news: 'الأخبار',
        creativeIndustries: 'الصناعات الإبداعية',
        international: 'الدولية',
        socialResponsibility: 'المسؤولية الاجتماعية',
        fashion: 'الموضة والملابس',
        health: 'الصحة',
        foodIndustry: 'الصناعات الغذائية'
      },
      
      // Common UI
      common: {
        readMore: 'اقرأ المزيد',
        search: 'بحث',
        loading: 'جاري التحميل...',
        noResults: 'لم يتم العثور على نتائج',
        error: 'خطأ في التحميل',
        retry: 'إعادة المحاولة',
        save: 'حفظ',
        cancel: 'إلغاء',
        delete: 'حذف',
        edit: 'تعديل',
        add: 'إضافة',
        submit: 'إرسال',
        close: 'إغلاق',
        confirm: 'تأكيد',
        back: 'رجوع',
        next: 'التالي',
        previous: 'السابق'
      },
      
      // Auth
      auth: {
        login: 'تسجيل الدخول',
        register: 'التسجيل',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
        confirmPassword: 'تأكيد كلمة المرور',
        forgotPassword: 'نسيت كلمة المرور',
        createPassword: 'إنشاء كلمة المرور',
        rememberMe: 'تذكرني',
        signIn: 'تسجيل الدخول',
        signUp: 'التسجيل',
        signOut: 'تسجيل الخروج',
        profile: 'الملف الشخصي',
        dashboard: 'لوحة التحكم'
      },
      
      // Messages
      messages: {
        success: 'تمت العملية بنجاح',
        error: 'خطأ في العملية',
        confirmDelete: 'هل أنت متأكد من الحذف؟',
        noData: 'لم يتم العثور على بيانات',
        loading: 'جاري التحميل...'
      },
      
      // Languages
      languages: {
        persian: 'الفارسية',
        english: 'الإنجليزية',
        arabic: 'العربية'
      }
    }
  }
};
>>>>>>> e85edc181ff1070298cc7d5e55130ffddb7a4a47

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fa', // default language
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
