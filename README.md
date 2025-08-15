# 🌸 DarLee — An AI-Powered Period & Mood Companion App

**DarLee** is more than a period tracker — it’s a gentle, emotionally intelligent companion for women’s health. Powered by AI, it tracks cycles, understands mood patterns, and offers soft predictions for what’s ahead, all within a serene, privacy-first experience.

🎬 [Watch Demo on YouTube](https://youtu.be/x2PoAyUutzo?feature=shared)  
📱 [Watch Insta Reel](https://www.instagram.com/reel/DMfvV2apPjU/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==)

---

## ✨ Features

• AI-powered period & mood prediction and tracking
• Daily mental + physical health tracking
• Caring AI chat companion
• Curated articles on hormones, self-care, and cycles
• Privacy-first design and soft UI

---

## 🖼️ Banner Preview

![Queeny Banner](./media/Queeny%20Banner.png)

---

## 🧠 Tech Stack

**React Native CLI** (Expo Bare Workflow)
**Expo Modules** (video, linear gradient, etc.)
**Firebase Android SDK** (Auth, Firestore)
**React Native Firebase** (native integration)
**Google Sign-In** (@react-native-google-signin)
**TanStack Query** – API control & caching
**Zustand** – global state
**Axios** – network requests
**React Native Paper**
**Gorhom Bottom Sheet**
**Reanimated v3 + RN Gesture Handler**
**Lottie RN**
**React Native Calendars, TabView, DatePicker, SVG**
**RN Toast Message**
**Formik + Yup**
**date-fns, ordinal**
**Gemini API** – predictive mood & cycle features

---

## 🛠️ Setup Instructions

### 1. Clone the repo:
```
git clone https://github.com/bharat2005/queeny-app.git
cd darlee-app
```



### 2. Install dependencies
```
npm install
```
   Or use yarn if that's your preferred package manager.



### 3. Add Firebase config:
   Download your own google-services.json file from the Firebase Console and place it at
```
android/app/google-services.json
```
   ⚠️ This file is ignored in .gitignore, so you'll need to add your own.



### 4. Set up environment variables:
   Rename the file:
```
example.env ➜ .env
```
   Update .env with your own config, like so:
 ```
# Replace XXXX with your Gemini API Key
GEMINI_API_KEY=XXXX
```



### 5. Run the Android app:
```
npx expo run:android
```
   Make sure you have an Android device or emulator running.



---

### ⚠️ Note on Firestore Data

This app uses Firestore to fetch magzine cards feed data.
If you're running the app locally with your own Firebase project, you'll need to manually seed your Firestore with magzines/cards documents — otherwise, the feed may appear empty.

---

## 📄 License  
This project is licensed under the [MIT License](./LICENSE).


