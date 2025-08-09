# Global Translation Implementation Guide

## Overview
This guide explains how to implement global translation across the entire website using i18next and React context.

## Files Created
1. `frontend/src/contexts/TranslationContext.jsx` - Global translation context
2. `frontend/src/translations/global.json` - Comprehensive translation files
3. `frontend/src/hooks/useTranslation.js` - Custom translation hook
4. Updated `frontend/src/i18n/index.js` - Enhanced i18next configuration
5. Updated `frontend/src/main.jsx` - Added translation provider
6. Updated `frontend/src/views/partials/Header.jsx` - Uses global translation

## How to Use Global Translation in Any Component

### 1. Import the translation hook
```javascript
import { useGlobalTranslation } from '../hooks/useTranslation';
```

### 2. Use translations in your component
```javascript
const { t, changeLanguage, getCurrentLanguage } = useGlobalTranslation();

// Use t() function for translations
const title = t('nav.home');
const buttonText = t('common.save');
```

### 3. Add new translations
Add new keys to `frontend/src/translations/global.json` in all language sections.

## Language Switching
The language can be changed programmatically:
```javascript
changeLanguage('en'); // Switch to English
changeLanguage('fa'); // Switch to Persian
changeLanguage('ar'); // Switch to Arabic
```

## Current Translation Structure
- **nav**: Navigation items
- **categories**: Category names
- **common**: Common UI elements
- **auth**: Authentication related
- **messages**: System messages
- **languages**: Language names

## Next Steps for Complete Implementation
1. Update all components to use the global translation system
2. Replace hardcoded text with translation keys
3. Test language switching across the entire application
4. Add missing translations for dynamic content

## Example Usage in Components
```javascript
// Before
<h1>Welcome to our website</h1>

// After
import { useGlobalTranslation } from '../hooks/useTranslation';
const { t } = useGlobalTranslation();
<h1>{t('welcome.title')}</h1>
```

## Testing
Test the translation system by:
1. Switching languages using the language dropdown in Header
2. Verifying all text updates correctly
3. Checking that dynamic content is properly translated
