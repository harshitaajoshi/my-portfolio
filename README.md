# My Portfolio

A personal portfolio website built for **CS 3365 — Software Engineering (Fall 2026), Assignment 1**.

The site is a single responsive page with five sections — Home, About Me, Skills,
Projects, and Contact — covering my background at Texas Tech University, the
languages and tools I work with, the projects I've built, and how to reach me.

Beyond the site itself, the purpose of this project was to practice a realistic
Git and GitHub development workflow: building each section on its own feature
branch, committing incrementally, merging finished work back into a stable `main`,
and deploying the result with GitHub Pages.

## Live Site

**https://harshitaajoshi.github.io/my-portfolio/**

## Technologies Used

- **HTML5** — semantic page structure
- **CSS3** — custom properties, CSS Grid and Flexbox, responsive media queries
- **JavaScript** — `IntersectionObserver` to highlight the active navigation link
- **Git & GitHub** — version control and remote repository hosting
- **GitHub Pages** — static site deployment from the `main` branch

No frameworks or build step — the page runs straight from the static files.

## Viewing the Project

**Online:** open the GitHub Pages link above in any browser.

**Locally:** clone the repository and open `index.html`.

```bash
git clone https://github.com/harshitaajoshi/my-portfolio.git
cd my-portfolio
open index.html          # macOS; use `start` on Windows or `xdg-open` on Linux
```

Or serve it over a local HTTP server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Repository Structure

```
my-portfolio/
├── index.html      # All five portfolio sections
├── css/
│   └── style.css   # Design tokens, layout, and component styles
├── js/
│   └── main.js     # Active navigation highlighting
├── .nojekyll       # Serve files as-is on GitHub Pages
├── .gitignore
└── README.md
```

## Git Workflow

Development happened on six feature branches, each scoped to one feature and
merged into `main` with a merge commit once it was finished:

| Branch | Work |
| --- | --- |
| `feature-home` | Navigation menu and home/intro section |
| `feature-about` | About Me section, education, and involvement |
| `feature-skills` | Skills section with categorized skill cards |
| `feature-projects` | Project cards and open-source contributions |
| `feature-contact` | Contact section and site footer |
| `feature-polish` | Active nav highlighting, responsive layout, Pages setup |

The workflow used for each one:

```bash
git switch main
git pull

git switch -c feature-skills
# edit files
git status
git add .
git commit -m "Add Skills section grouped by category"
git push -u origin feature-skills

git switch main
git merge feature-skills
git push origin main
```

The full history, including every branch and merge, is visible under the
repository's **Insights → Network** graph and in `git log --graph --oneline --all`.

## Author

**Harshita Joshi** — B.S. Computer Science & Mathematics, Texas Tech University
[GitHub](https://github.com/harshitaajoshi) · [LinkedIn](https://www.linkedin.com/in/harshitaajoshii/)
