/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
 import "zoom-vanilla.js/dist/zoom.css"

 export function addLinkToHead(href) {
  const iconLink = document.createElement("link");
  iconLink.rel = "stylesheet";
  iconLink.href = href;

  document.head.append(iconLink);
}

 export function registerCodeThemeCss(theme = "tomorrow") {
  const prismThemes = [
    "coy",
    "dark",
    "funky",
    "okaidia",
    "solarizedlight",
    "tomorrow",
    "twilight"
  ];
  let href;

  if (theme == "default") href = "//prismjs.com/themes/prism.css";
  else if (prismThemes.includes(theme))
    href = `//prismjs.com/themes/prism-${theme}.css`;
  else href = `/highlight/${theme}.css`;

  addLinkToHead(href);
}

 export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer
}) => {
  // ...apply enhancements to the app
  if (!isServer) {
    registerCodeThemeCss(siteData.themeConfig.codeTheme);
    require('zoom-vanilla.js/dist/zoom-vanilla.min.js');
  }
}