# TikGuest: موقع التطبيق (Next.js)

موقع ثابت (بلا قاعدة بيانات) فيه:

| الصفحة | الرابط العربي (الافتراضي) | الفرنسية | الإنجليزية |
|---|---|---|---|
| Landing page | `/` | `/fr` | `/en` |
| القواعد (Règles) | `/regles` | `/fr/regles` | `/en/regles` |
| الشروط (Conditions) | `/conditions` | `/fr/conditions` | `/en/conditions` |
| سياسة الخصوصية | `/privacy` | `/fr/privacy` | `/en/privacy` |
| حذف الحساب | `/delete-account` | `/fr/delete-account` | `/en/delete-account` |

كما يولّد تلقائياً `sitemap.xml` و`robots.txt` وعلامات SEO وhreflang.

## 1) قبل النشر: ثلاث قيم فقط (مهم)
تُضبط في Vercel (لا تعدّل الكود): **Project → Settings → Environment Variables**

| الاسم | القيمة | إلزامي؟ |
|---|---|---|
| `NEXT_PUBLIC_CONTACT_EMAIL` | بريد التواصل الذي يظهر في الصفحات | نعم (Google تطلبه) |
| `NEXT_PUBLIC_DEVELOPER_NAME` | اسمك أو اسم شركتك | نعم |
| `NEXT_PUBLIC_PLAY_URL` | رابط التطبيق في Play بعد نشره | لا (قبله يظهر «قريباً») |
| `NEXT_PUBLIC_SITE_URL` | دومينك النهائي إن وُجد | لا |

ثم أعد النشر (Redeploy) ليظهر البريد والاسم.

## 2) الرفع على GitHub
```bash
cd tikguest-web
git init
git add .
git commit -m "TikGuest website"
git branch -M main
git remote add origin https://github.com/<حسابك>/tikguest-web.git
git push -u origin main
```
> المستودع يجب أن يكون **منفصلاً** عن مستودع التطبيق. ولا ترفع `upload.jks` أو أي مفتاح أبداً (`.gitignore` يحميك هنا).

## 3) النشر على Vercel (دقيقتان)
1. vercel.com ← **Add New → Project** ← اختر المستودع ← **Import**.
2. Vercel يتعرف على Next.js تلقائياً. أضف المتغيرات أعلاه ثم **Deploy**.
3. تحصل على رابط مثل `https://tikguest-web.vercel.app`. (اختياري: Settings → Domains لربط دومين خاص.)

## 4) أين تضع الروابط (استبدل `DOMAIN` بدومينك)
**Google Play Console**
- App content → **Privacy policy**: `https://DOMAIN/privacy`
- App content → **Data safety → Account deletion**: `https://DOMAIN/delete-account`
- Store listing → Website: `https://DOMAIN`

**Google Cloud Console → Google Auth Platform → Branding**
- Application home page: `https://DOMAIN`
- Privacy policy link: `https://DOMAIN/privacy`
- Terms of service link: `https://DOMAIN/conditions`
- Authorized domains: أضف `DOMAIN` (الدومين فقط، دون https). ملاحظة: Google لا تقبل عادةً `vercel.app` كدومين مصرّح به، فاستعمل دومينك الخاص هنا.

**داخل التطبيق:** ضع `https://DOMAIN/privacy` في `Config.PRIVACY_URL` (ملف `Config.kt`) ثم ابنِ نسخة جديدة.

## 5) تعديل النصوص
كل النصوص في `src/content/ar.ts` و`fr.ts` و`en.ts`. بعد أي تعديل جوهري في الصفحات القانونية حدّث `updated` في `src/lib/site.ts`.
مراجعة مختص قانوني قبل النشر الرسمي موصى بها.

## تشغيل محلي
```bash
npm install
npm run dev     # http://localhost:3000
```
