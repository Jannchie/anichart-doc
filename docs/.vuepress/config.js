module.exports = {
  title: "Anichart.js",
  description: "Library for data visualisation animation.",
  themeConfig: {
    logo:
      "https://raw.githubusercontent.com/Jannchie/anichart.js/master/public/image/ANI.png",
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/zh/guide/" },
      { text: "Github", link: "https://github.com/Jannchie/anichart.js" },
    ],
    lastUpdated: "Last Updated", // string | boolean，
    smoothScroll: true,
    sidebar: {
      "/zh/guide/": ["", "start", "chart"],
    },
  },
};
