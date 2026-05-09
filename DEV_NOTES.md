setup

```
npm i
```

dev
```
npm run dev
```

build
```
npm run build
```

publish
```
npm run deploy
```



توضیح
در این پروژه، دیپلوی شدن صرفاً با git push کردن روی برنچ اصلی اتفاق نمی‌افتد.
این پروژه از پکیج npm به نام gh-pages برای دیپلوی استفاده می‌کند.
برای اینکه سایت روی گیت‌هاب به‌روز شود، باید دستور npm run deploy را اجرا کنید.


دامین
Commit 7bf1b83 fix config for hosting on github
https://github.com/fardm/PromptSaz/commit/7bf1b8310bb0cd2d041dccd70cf87fb5d8ede901

توی این کامیت کاستوم دامین رو حذف کردم و روی خود گیت هاب قرار دادم:
1. فایل CNAME رو حذف کردم
2. توی vite.config.ts baseurl رو اضافه کردم.
3. توی package.json مقدار //CSNAME رو حذف کردم.