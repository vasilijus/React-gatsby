const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/sergio/code/Coding Practices/JavaScript/React/React-gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/sergio/code/Coding Practices/JavaScript/React/React-gatsby/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/sergio/code/Coding Practices/JavaScript/React/React-gatsby/src/pages/index.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/sergio/code/Coding Practices/JavaScript/React/React-gatsby/src/pages/blog.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/sergio/code/Coding Practices/JavaScript/React/React-gatsby/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/sergio/code/Coding Practices/JavaScript/React/React-gatsby/src/pages/contact.js")))
}

