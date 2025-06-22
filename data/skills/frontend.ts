import { SkillCategory } from "@/types/skills.types";
import { getSkillIcon } from "./icon";
import { getSkillName } from "./name";

const LANGUAGE_SECTION = {
  name: "Языки",
  skills: [
    { name: getSkillName("html"), icon: getSkillIcon("html"), value: "html" },
    { name: getSkillName("css"), icon: getSkillIcon("css"), value: "css" },
    {
      name: getSkillName("javascript"),
      icon: getSkillIcon("javascript"),
      value: "javascript",
    },
    {
      name: getSkillName("typescript"),
      icon: getSkillIcon("typescript"),
      value: "typescript",
    },
    { name: getSkillName("elm"), icon: getSkillIcon("elm"), value: "elm" },
    {
      name: getSkillName("coffeescript"),
      icon: getSkillIcon("coffeescript"),
      value: "coffeescript",
    },
    { name: getSkillName("dart"), icon: getSkillIcon("dart"), value: "dart" },
    {
      name: getSkillName("reasonml"),
      icon: getSkillIcon("reasonml"),
      value: "reasonml",
    },
    {
      name: getSkillName("purescript"),
      icon: getSkillIcon("purescript"),
      value: "purescript",
    },
    { name: getSkillName("haxe"), icon: getSkillIcon("haxe"), value: "haxe" },
  ],
};

const FRAMEWORK_LIBRARIES_SECTION = {
  name: "Фреймворки и библиотеки",
  skills: [
    { name: getSkillName("vue"), icon: getSkillIcon("vue"), value: "vue" },
    {
      name: getSkillName("react"),
      icon: getSkillIcon("react"),
      value: "react",
    },
    {
      name: getSkillName("angular"),
      icon: getSkillIcon("angular"),
      value: "angular",
    },
    {
      name: getSkillName("svelte"),
      icon: getSkillIcon("svelte"),
      value: "svelte",
    },
    {
      name: getSkillName("nextjs"),
      icon: getSkillIcon("nextjs"),
      value: "nextjs",
    },
    {
      name: getSkillName("nuxtjs"),
      icon: getSkillIcon("nuxtjs"),
      value: "nuxtjs",
    },
    {
      name: getSkillName("sveltekit"),
      icon: getSkillIcon("sveltekit"),
      value: "sveltekit",
    },
    {
      name: getSkillName("redux"),
      icon: getSkillIcon("redux"),
      value: "redux",
    },
    { name: getSkillName("vuex"), icon: getSkillIcon("vuex"), value: "vuex" },
    {
      name: getSkillName("pinia"),
      icon: getSkillIcon("pinia"),
      value: "pinia",
    },
    { name: getSkillName("mobx"), icon: getSkillIcon("mobx"), value: "mobx" },
    {
      name: getSkillName("vueuse"),
      icon: getSkillIcon("vueuse"),
      value: "vueuse",
    },
    {
      name: getSkillName("jquery"),
      icon: getSkillIcon("jquery"),
      value: "jquery",
    },
    {
      name: getSkillName("ember"),
      icon: getSkillIcon("ember"),
      value: "ember",
    },
    {
      name: getSkillName("vuetify"),
      icon: getSkillIcon("vuetify"),
      value: "vuetify",
    },
    {
      name: getSkillName("backbone"),
      icon: getSkillIcon("backbone"),
      value: "backbone",
    },
    {
      name: getSkillName("preact"),
      icon: getSkillIcon("preact"),
      value: "preact",
    },
    {
      name: getSkillName("alpinejs"),
      icon: getSkillIcon("alpinejs"),
      value: "alpinejs",
    },
    {
      name: getSkillName("solidjs"),
      icon: getSkillIcon("solidjs"),
      value: "solidjs",
    },
    { name: getSkillName("lit"), icon: getSkillIcon("lit"), value: "lit" },
    {
      name: getSkillName("inferno"),
      icon: getSkillIcon("inferno"),
      value: "inferno",
    },
    {
      name: getSkillName("stimulus"),
      icon: getSkillIcon("stimulus"),
      value: "stimulus",
    },
    {
      name: getSkillName("marko"),
      icon: getSkillIcon("marko"),
      value: "marko",
    },
    {
      name: getSkillName("mithril"),
      icon: getSkillIcon("mithril"),
      value: "mithril",
    },
    {
      name: getSkillName("riotjs"),
      icon: getSkillIcon("riotjs"),
      value: "riotjs",
    },
    { name: getSkillName("dojo"), icon: getSkillIcon("dojo"), value: "dojo" },
    // Added libraries and frameworks
    {
      name: getSkillName("remix"),
      icon: getSkillIcon("remix"),
      value: "remix",
    },
    {
      name: getSkillName("gatsby"),
      icon: getSkillIcon("gatsby"),
      value: "gatsby",
    },
    {
      name: getSkillName("astro"),
      icon: getSkillIcon("astro"),
      value: "astro",
    },
    {
      name: getSkillName("electron"),
      icon: getSkillIcon("electron"),
      value: "electron",
    },
    {
      name: getSkillName("reactnative"),
      icon: getSkillIcon("reactnative"),
      value: "reactnative",
    },
    {
      name: getSkillName("cordova"),
      icon: getSkillIcon("cordova"),
      value: "cordova",
    },
    {
      name: getSkillName("ionic"),
      icon: getSkillIcon("ionic"),
      value: "ionic",
    },
    {
      name: getSkillName("stencil"),
      icon: getSkillIcon("stencil"),
      value: "stencil",
    },
    {
      name: getSkillName("knockout"),
      icon: getSkillIcon("knockout"),
      value: "knockout",
    },
    {
      name: getSkillName("polymer"),
      icon: getSkillIcon("polymer"),
      value: "polymer",
    },
    {
      name: getSkillName("recoil"),
      icon: getSkillIcon("recoil"),
      value: "recoil",
    },
    {
      name: getSkillName("nanostores"),
      icon: getSkillIcon("nanostores"),
      value: "nanostores",
    },
    {
      name: getSkillName("zustand"),
      icon: getSkillIcon("zustand"),
      value: "zustand",
    },
    {
      name: getSkillName("vuepress"),
      icon: getSkillIcon("vuepress"),
      value: "vuepress",
    },
    {
      name: getSkillName("eleventy"),
      icon: getSkillIcon("eleventy"),
      value: "eleventy",
    },
    {
      name: getSkillName("hugo"),
      icon: getSkillIcon("hugo"),
      value: "hugo",
    },
    {
      name: getSkillName("jekyll"),
      icon: getSkillIcon("jekyll"),
      value: "jekyll",
    },
    {
      name: getSkillName("docz"),
      icon: getSkillIcon("docz"),
      value: "docz",
    },
  ],
};

const CSS_SECTION = {
  name: "CSS препроцессоры и фреймворки",
  skills: [
    { name: getSkillName("sass"), icon: getSkillIcon("sass"), value: "sass" },
    { name: getSkillName("less"), icon: getSkillIcon("less"), value: "less" },
    {
      name: getSkillName("stylus"),
      icon: getSkillIcon("stylus"),
      value: "stylus",
    },
    {
      name: getSkillName("postcss"),
      icon: getSkillIcon("postcss"),
      value: "postcss",
    },
    {
      name: getSkillName("bootstrap"),
      icon: getSkillIcon("bootstrap"),
      value: "bootstrap",
    },
    {
      name: getSkillName("tailwind"),
      icon: getSkillIcon("tailwind"),
      value: "tailwind",
    },
    {
      name: getSkillName("materialui"),
      icon: getSkillIcon("materialui"),
      value: "materialui",
    },
    {
      name: getSkillName("chakraui"),
      icon: getSkillIcon("chakraui"),
      value: "chakraui",
    },
    {
      name: getSkillName("antDesign"),
      icon: getSkillIcon("antDesign"),
      value: "antDesign",
    },
    {
      name: getSkillName("quasar"),
      icon: getSkillIcon("quasar"),
      value: "quasar",
    },
    {
      name: getSkillName("bulma"),
      icon: getSkillIcon("bulma"),
      value: "bulma",
    },
    {
      name: getSkillName("semanticui"),
      icon: getSkillIcon("semanticui"),
      value: "semanticui",
    },
  ],
};

const BUILD_TOOLS_SECTION = {
  name: "Сборщики и инструменты сборки",
  skills: [
    {
      name: getSkillName("webpack"),
      icon: getSkillIcon("webpack"),
      value: "webpack",
    },
    {
      name: getSkillName("parcel"),
      icon: getSkillIcon("parcel"),
      value: "parcel",
    },
    { name: getSkillName("vite"), icon: getSkillIcon("vite"), value: "vite" },
    { name: getSkillName("gulp"), icon: getSkillIcon("gulp"), value: "gulp" },
    {
      name: getSkillName("grunt"),
      icon: getSkillIcon("grunt"),
      value: "grunt",
    },
    {
      name: getSkillName("rollup"),
      icon: getSkillIcon("rollup"),
      value: "rollup",
    },
    {
      name: getSkillName("snowpack"),
      icon: getSkillIcon("snowpack"),
      value: "snowpack",
    },
    {
      name: getSkillName("brunch"),
      icon: getSkillIcon("brunch"),
      value: "brunch",
    },
    {
      name: getSkillName("fusebox"),
      icon: getSkillIcon("fusebox"),
      value: "fusebox",
    },
    {
      name: getSkillName("browserify"),
      icon: getSkillIcon("browserify"),
      value: "browserify",
    },
  ],
};

const TESTING_SECTION = {
  name: "Тестирование",
  skills: [
    {
      name: getSkillName("storybook"),
      icon: getSkillIcon("storybook"),
      value: "storybook",
    },
    { name: getSkillName("jest"), icon: getSkillIcon("jest"), value: "jest" },
    {
      name: getSkillName("mocha"),
      icon: getSkillIcon("mocha"),
      value: "mocha",
    },
    {
      name: getSkillName("cypress"),
      icon: getSkillIcon("cypress"),
      value: "cypress",
    },
    {
      name: getSkillName("karma"),
      icon: getSkillIcon("karma"),
      value: "karma",
    },
    {
      name: getSkillName("playwright"),
      icon: getSkillIcon("playwright"),
      value: "playwright",
    },
    {
      name: getSkillName("vitest"),
      icon: getSkillIcon("vitest"),
      value: "vitest",
    },
    {
      name: getSkillName("ava"),
      icon: getSkillIcon("ava"),
      value: "ava",
    },
    {
      name: getSkillName("testing-library"),
      icon: getSkillIcon("testing-library"),
      value: "testing-library",
    },
    {
      name: getSkillName("selenium"),
      icon: getSkillIcon("selenium"),
      value: "selenium",
    },
    {
      name: getSkillName("chai"),
      icon: getSkillIcon("chai"),
      value: "chai",
    },
    {
      name: getSkillName("testcafe"),
      icon: getSkillIcon("testcafe"),
      value: "testcafe",
    },
    {
      name: getSkillName("webdriverio"),
      icon: getSkillIcon("webdriverio"),
      value: "webdriverio",
    },
  ],
};

const API_SECTION = {
  name: "API и БД",
  skills: [
    {
      name: getSkillName("graphql"),
      icon: getSkillIcon("graphql"),
      value: "graphql",
    },
    {
      name: getSkillName("apollo"),
      icon: getSkillIcon("apollo"),
      value: "apollo",
    },
    { name: getSkillName("rest"), icon: getSkillIcon("rest"), value: "rest" },
    { name: getSkillName("ws"), icon: getSkillIcon("ws"), value: "ws" },
    {
      name: getSkillName("axios"),
      icon: getSkillIcon("axios"),
      value: "axios",
    },
    { name: getSkillName("swr"), icon: getSkillIcon("swr"), value: "swr" },
    {
      name: getSkillName("reactquery"),
      icon: getSkillIcon("reactquery"),
      value: "reactquery",
    },
    {
      name: getSkillName("relay"),
      icon: getSkillIcon("relay"),
      value: "relay",
    },
    {
      name: getSkillName("firebase"),
      icon: getSkillIcon("firebase"),
      value: "firebase",
    },
    {
      name: getSkillName("supabase"),
      icon: getSkillIcon("supabase"),
      value: "supabase",
    },
    {
      name: getSkillName("pouchdb"),
      icon: getSkillIcon("pouchdb"),
      value: "pouchdb",
    },
  ],
};

const OTHER_SECTION = {
  name: "Другие инструменты и утилиты",
  skills: [
    {
      name: getSkillName("lodash"),
      icon: getSkillIcon("lodash"),
      value: "lodash",
    },
    {
      name: getSkillName("momentjs"),
      icon: getSkillIcon("momentjs"),
      value: "momentjs",
    },
    { name: getSkillName("d3js"), icon: getSkillIcon("d3js"), value: "d3js" },
    {
      name: getSkillName("chartjs"),
      icon: getSkillIcon("chartjs"),
      value: "chartjs",
    },
    {
      name: getSkillName("threejs"),
      icon: getSkillIcon("threejs"),
      value: "threejs",
    },
    {
      name: getSkillName("pixijs"),
      icon: getSkillIcon("pixijs"),
      value: "pixijs",
    },
    {
      name: getSkillName("greensock"),
      icon: getSkillIcon("greensock"),
      value: "greensock",
    },
    {
      name: getSkillName("webrtc"),
      icon: getSkillIcon("webrtc"),
      value: "webrtc",
    },
    {
      name: getSkillName("webgl"),
      icon: getSkillIcon("webgl"),
      value: "webgl",
    },
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
