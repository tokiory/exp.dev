import { SkillCategory } from "@/types/skills.types";

const LANGUAGE_SECTION = {
  name: "Языки",
  skills: [
    { name: "HTML5", icon: "vscode-icons:file-type-html", value: "html" },
    { name: "CSS3", icon: "vscode-icons:file-type-css", value: "css" },
    {
      name: "JavaScript",
      icon: "vscode-icons:file-type-js-official",
      value: "javascript",
    },
    {
      name: "TypeScript",
      icon: "vscode-icons:file-type-typescript-official",
      value: "typescript",
    },
    { name: "Elm", icon: "vscode-icons:file-type-elm", value: "elm" },
    {
      name: "CoffeeScript",
      icon: "vscode-icons:file-type-coffeescript",
      value: "coffeescript",
    },
    { name: "Dart", icon: "vscode-icons:file-type-dartlang", value: "dart" },
    {
      name: "ReasonML",
      icon: "vscode-icons:file-type-reason",
      value: "reasonml",
    },
    {
      name: "PureScript",
      icon: "vscode-icons:file-type-purescript",
      value: "purescript",
    },
    { name: "Haxe", icon: "vscode-icons:file-type-haxe", value: "haxe" },
  ],
};

const FRAMEWORK_LIBRARIES_SECTION = {
  name: "Фреймворки и библиотеки",
  skills: [
    { name: "Vue.js", icon: "vscode-icons:file-type-vue", value: "vue" },
    { name: "React", icon: "vscode-icons:file-type-reactjs", value: "react" },
    {
      name: "Angular",
      icon: "vscode-icons:file-type-angular",
      value: "angular",
    },
    { name: "Svelte", icon: "vscode-icons:file-type-svelte", value: "svelte" },
    { name: "Next.js", icon: "vscode-icons:file-type-next", value: "nextjs" },
    { name: "Nuxt.js", icon: "vscode-icons:file-type-nuxt", value: "nuxtjs" },
    {
      name: "SvelteKit",
      icon: "vscode-icons:file-type-svelte",
      value: "sveltekit",
    },
    { name: "Redux", icon: "devicon:redux", value: "redux" },
    { name: "Vuex", icon: "material-icon-theme:vuex-store", value: "vuex" },
    { name: "Pinia", icon: "logos:pinia", value: "pinia" },
    { name: "MobX", icon: "logos:mobx", value: "mobx" },
    { name: "VueUse", icon: "logos:vueuse", value: "vueuse" },
    { name: "jQuery", icon: "devicon:jquery", value: "jquery" },
    { name: "Ember.js", icon: "vscode-icons:file-type-ember", value: "ember" },
    { name: "Vuetify", icon: "logos:vuetifyjs", value: "vuetify" },
    { name: "Backbone.js", icon: "devicon:backbonejs", value: "backbone" },
    { name: "Preact", icon: "vscode-icons:file-type-preact", value: "preact" },
    { name: "Alpine.js", icon: "devicon:alpinejs", value: "alpinejs" },
    { name: "SolidJS", icon: "devicon:solidjs", value: "solidjs" },
    { name: "Lit", icon: "skill-icons:lit-light", value: "lit" },
    { name: "Inferno", icon: "logos:inferno", value: "inferno" },
    { name: "Stimulus", icon: "logos:stimulus-icon", value: "stimulus" },
    { name: "Marko", icon: "vscode-icons:file-type-marko", value: "marko" },
    { name: "Mithril", icon: "logos:mithril", value: "mithril" },
    { name: "Riot.js", icon: "vscode-icons:file-type-riot", value: "riotjs" },
    { name: "Dojo", icon: "vscode-icons:file-type-dojo", value: "dojo" },
  ],
};

const CSS_SECTION = {
  name: "CSS препроцессоры и фреймворки",
  skills: [
    { name: "Sass", icon: "vscode-icons:file-type-sass", value: "sass" },
    { name: "Less", icon: "vscode-icons:file-type-less", value: "less" },
    { name: "Stylus", icon: "material-icon-theme:stylus", value: "stylus" },
    {
      name: "PostCSS",
      icon: "vscode-icons:file-type-postcss",
      value: "postcss",
    },
    { name: "Bootstrap", icon: "devicon:bootstrap", value: "bootstrap" },
    {
      name: "Tailwind CSS",
      icon: "vscode-icons:file-type-tailwind",
      value: "tailwind",
    },
    { name: "Material-UI", icon: "logos:material-ui", value: "materialui" },
    { name: "Chakra UI", icon: "devicon:chakraui", value: "chakraui" },
    { name: "Ant Design", icon: "logos:ant-design", value: "antDesign" },
    { name: "Quasar", icon: "vscode-icons:file-type-quasar", value: "quasar" },
    { name: "Bulma", icon: "logos:bulma", value: "bulma" },
    { name: "Semantic UI", icon: "logos:semantic-ui", value: "semanticui" },
  ],
};

const BUILD_TOOLS_SECTION = {
  name: "Сборщики и инструменты сборки",
  skills: [
    {
      name: "Webpack",
      icon: "vscode-icons:file-type-webpack",
      value: "webpack",
    },
    { name: "Parcel", icon: "logos:parcel-icon", value: "parcel" },
    { name: "Vite", icon: "vscode-icons:file-type-vite", value: "vite" },
    { name: "Gulp", icon: "vscode-icons:file-type-gulp", value: "gulp" },
    { name: "Grunt", icon: "vscode-icons:file-type-grunt", value: "grunt" },
    { name: "Rollup", icon: "vscode-icons:file-type-rollup", value: "rollup" },
    {
      name: "Snowpack",
      icon: "material-icon-theme:snowpack",
      value: "snowpack",
    },
    { name: "Brunch", icon: "logos:brunch", value: "brunch" },
    {
      name: "FuseBox",
      icon: "vscode-icons:file-type-fusebox",
      value: "fusebox",
    },
    { name: "Browserify", icon: "logos:browserify-icon", value: "browserify" },
  ],
};

const TESTING_SECTION = {
  name: "Тестирование",
  skills: [
    {
      name: "Storybook",
      icon: "vscode-icons:file-type-storybook",
      value: "storybook",
    },
    { name: "Jest", icon: "vscode-icons:file-type-jest", value: "jest" },
    { name: "Mocha", icon: "vscode-icons:file-type-mocha", value: "mocha" },
    {
      name: "Cypress",
      icon: "vscode-icons:file-type-cypress",
      value: "cypress",
    },
    { name: "Karma", icon: "vscode-icons:file-type-karma", value: "karma" },
    {
      name: "Playwright",
      icon: "vscode-icons:file-type-playwright",
      value: "playwright",
    },
  ],
};

const API_SECTION = {
  name: "API и БД",
  skills: [
    {
      name: "GraphQL",
      icon: "vscode-icons:file-type-graphql",
      value: "graphql",
    },
    { name: "Apollo", icon: "material-icon-theme:apollo", value: "apollo" },
    { name: "REST", icon: "vscode-icons:file-type-rest", value: "rest" },
    { name: "WebSockets", icon: "logos:websocket", value: "ws" },
    { name: "Axios", icon: "devicon-plain:axios", value: "axios" },
    { name: "SWR", icon: "simple-icons:swr", value: "swr" },
    {
      name: "React Query",
      icon: "logos:react-query-icon",
      value: "reactquery",
    },
    { name: "Relay", icon: "simple-icons:relay", value: "relay" },
    {
      name: "Firebase",
      icon: "vscode-icons:file-type-firebase",
      value: "firebase",
    },
    { name: "Supabase", icon: "devicon:supabase", value: "supabase" },
    { name: "PouchDB", icon: "logos:pouchdb", value: "pouchdb" },
  ],
};

const OTHER_SECTION = {
  name: "Другие инструменты и утилиты",
  skills: [
    { name: "Lodash", icon: "devicon:lodash", value: "lodash" },
    { name: "Moment.js", icon: "logos:momentjs", value: "momentjs" },
    { name: "D3.js", icon: "devicon:d3js", value: "d3js" },
    { name: "Chart.js", icon: "devicon:chartjs", value: "chartjs" },
    { name: "Three.js", icon: "tabler:brand-threejs", value: "threejs" },
    { name: "PixiJS", icon: "devicon:pixijs", value: "pixijs" },
    { name: "GreenSock", icon: "logos:greensock-icon", value: "greensock" },
    { name: "WebRTC", icon: "logos:webrtc", value: "webrtc" },
    { name: "WebGL", icon: "simple-icons:webgl", value: "webgl" },
  ],
};

export const FRONTEND_SKILL_CATEGORIES: SkillCategory[] = [
  LANGUAGE_SECTION,
  FRAMEWORK_LIBRARIES_SECTION,
  CSS_SECTION,
  BUILD_TOOLS_SECTION,
  TESTING_SECTION,
  API_SECTION,
  OTHER_SECTION,
];
