# Flat Design Archive

A clean, colorful, two-dimensional UI project inspired by the principles of early-2010s Flat Design and influences like iOS 7 and Microsoft's Metro design.

This site was built using **Eleventy (11ty)**, **Nunjucks**, and vanilla **CSS/JavaScript**.

## 🚀 Live Demo

The site is currently deployed via GitHub Pages and is live at:
**https://natorbit.github.io/flat-design-archive/**

---

## 💻 Local Development

To run this project on your own computer:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/natorbit/flat-design-archive.git](https://github.com/natorbit/flat-design-archive.git)
    cd flat-design-archive
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the local development server:**
    ```bash
    npm start
    ```
    The site will be available at `http://localhost:8080/`. Changes you make to files in the `src/` or `public/` folders will automatically refresh the browser.

---

## ⚙️ Deployment Notes (GitHub Pages)

This project is configured to deploy directly to GitHub Pages from the `master` branch.

**Critical Configuration Fixes:**

* **Path Prefix:** Links are dynamically prefixed using the `{{ baseurl }}` variable defined in `.eleventy.js` to account for the `/flat-design-archive/` subdirectory on GitHub.
* **No Jekyll:** The **`.nojekyll`** file is present in the root to prevent GitHub from running the default Jekyll build, ensuring Eleventy's output is served correctly.
* **Production Build:** Use the following command to build the site for deployment (which sets the necessary `baseurl` variable):
    ```bash
    npm run build
    ```

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details (if applicable).