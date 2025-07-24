# 🌸 DarLee — Ai Based Menstural Cycle and Mood traker and predictor

**DarLee** is a ....

🎬 [Watch Demo on YouTube](https://youtu.be/IhErMg8jaLU?feature=shared)  
📱 [Watch Insta Reel Part 1](https://www.instagram.com/reel/DLSoEDrSxya/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
📱 [Watch Insta Reel Part 2](https://www.instagram.com/reel/DLSr0DyyDIk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)

---

## ✨ Features

- 

---

## 🖼️ Banner Preview

![Queeny Banner](./media/Queeny%20Banner.png)

---

## 🧠 Tech Stack

- 
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


