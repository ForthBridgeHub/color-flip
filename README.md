# 🎨 Color Flipper

A beginner-friendly web project that changes the background color of the page every time you click a button.  
It displays the HEX color code of the current background color and updates it dynamically.

---

## 🧾 Overview

The **Color Flipper** app teaches basic **HTML**, **CSS**, and **JavaScript** concepts:

- DOM manipulation  
- Event handling  
- Random color generation  
- Basic layout & styling  

---

## 🎯 Objectives

- Build a simple, interactive webpage that updates in real time.  
- Practice working with user events (`click`).  
- Learn to generate and apply random colors dynamically.

---

## 🧩 Core Features

| Feature | Description | Priority |
|----------|--------------|----------|
| 🎨 Background color change | The page background changes to a random color when the button is clicked. | ✅ Must-have |
| 🏷️ Display current color code | The HEX color code updates dynamically with each new color. | ✅ Must-have |
| 🖱️ Button interaction | Clicking a button triggers the change. | ✅ Must-have |
| ✨ Smooth transition | Background fades smoothly between colors (≈0.3 s). | ✅ Nice-to-have |

---

## 🧱 Technical Requirements

### 1️⃣ HTML Structure

- A main container `.container` with:
  - A heading showing the current color code.
  - A “Change Color” button.  
- Link external `style.css` and `script.js` files.

**File:** `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Color Flipper</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>Background Color: <span id="color">#ffffff</span></h1>
    <button id="btn">Change Color</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
