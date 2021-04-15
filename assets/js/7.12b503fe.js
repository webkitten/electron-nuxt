(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{254:function(e,t,a){"use strict";a.r(t);var s=a(17),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guide"}},[e._v("#")]),e._v(" Guide")]),e._v(" "),a("h2",{attrs:{id:"renderer-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renderer-process"}},[e._v("#")]),e._v(" Renderer process")]),e._v(" "),a("h3",{attrs:{id:"application-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-structure"}},[e._v("#")]),e._v(" Application structure")]),e._v(" "),a("p",[e._v("Same as "),a("a",{attrs:{href:"https://nuxtjs.org/guide/directory-structure/",target:"_blank",rel:"noopener noreferrer"}},[e._v("default Nuxt.js application structure"),a("OutboundLink")],1),e._v(", but without "),a("strong",[e._v("Static Directory")]),e._v(". If you don't want to use Webpack assets from the "),a("code",[e._v("assets")]),e._v(" directory read section "),a("a",{attrs:{href:"#static-resources"}},[e._v("static resources")]),e._v(" and "),a("a",{attrs:{href:"#resolving-paths-in-HTML"}},[e._v("resolving paths in HTML")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"routing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routing"}},[e._v("#")]),e._v(" Routing")]),e._v(" "),a("p",[e._v("Nuxt.js automatically generates the vue-router configuration based on your file tree of Vue files inside the "),a("code",[e._v("src/renderer/pages")]),e._v(" directory.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://nuxtjs.org/guide/routing/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Read more"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"main-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-process"}},[e._v("#")]),e._v(" Main process")]),e._v(" "),a("p",[e._v("Entry point: "),a("code",[e._v("main/index.js")])]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/michalzaq12/electron-nuxt/blob/master/template/src/main/BrowserWinHandler.js",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("BrowserWinHandler")]),a("OutboundLink")],1),e._v(" is helper class, which wrap "),a("a",{attrs:{href:"https://electronjs.org/docs/api/browser-window",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("BrowserWindow")]),a("OutboundLink")],1),e._v(" to make it more self-manageable. This solution facilitates communication between the windows and doesn't require a window manager.")])]),e._v(" "),a("h2",{attrs:{id:"resolving-paths-in-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolving-paths-in-html"}},[e._v("#")]),e._v(" Resolving paths in HTML")]),e._v(" "),a("p",[e._v("If you would like to set the src of an "),a("code",[e._v("<img>")]),e._v(" to the path of an image, you must use "),a("code",[e._v("~/assets")]),e._v(" Webpack alias or provide full path with "),a("strong",[e._v("protocol")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Examples:")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v('<img src="~/assets/image.png" />')])]),e._v(" "),a("li",[a("code",[e._v('<img src="https://example.com/image.png" />')])])]),e._v(" "),a("h2",{attrs:{id:"static-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-resources"}},[e._v("#")]),e._v(" Static resources")]),e._v(" "),a("p",[e._v("Electron-nuxt (1.7.0) improves a global variable named "),a("a",{attrs:{href:"https://www.electronjs.org/docs/api/process#processresourcespath-readonly",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("process.resourcesPath")]),a("OutboundLink")],1),e._v(" that will yield a proper path to the "),a("code",[e._v("src/extraResources")]),e._v(" in renderer and main process. In this directory you can store all necessary resources with reliable path to them, but "),a("strong",[e._v("you must treat all assets in this directory as read only.")]),e._v(" (If you need also write access, use "),a("a",{attrs:{href:"https://electronjs.org/docs/api/app#appgetpathname",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("app.getPath('appData')")]),a("OutboundLink")],1),e._v(" instead).")]),e._v(" "),a("p",[a("strong",[e._v("Use case:")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://electronjs.org/docs/api/tray",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tray icon"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("External scripts")]),e._v(" "),a("li",[e._v("Binary data")])]),e._v(" "),a("h2",{attrs:{id:"building-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-notes"}},[e._v("#")]),e._v(" Building notes")]),e._v(" "),a("p",[e._v("Electron-nuxt support "),a("a",{attrs:{href:"https://github.com/electron-userland/electron-builder",target:"_blank",rel:"noopener noreferrer"}},[e._v("electron-builder"),a("OutboundLink")],1),e._v(" to build and distribute your production ready application. Further customization can be made in "),a("code",[e._v("builder.config.js")]),e._v(" file.")]),e._v(" "),a("h3",{attrs:{id:"electron-builder-arguments-1-6-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#electron-builder-arguments-1-6-0"}},[e._v("#")]),e._v(" Electron-builder arguments (1.6.0)")]),e._v(" "),a("p",[e._v("Any electron-builder command line argument can by passed through"),a("code",[e._v("build")]),e._v(" script.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("package.json")]),e._v(": "),a("code",[e._v('"build": "node ./electron-nuxt/build.js --win"')])]),e._v(" "),a("li",[e._v("cli: "),a("code",[e._v("yarn run build -- --win")])])]),e._v(" "),a("h3",{attrs:{id:"cross-platform-compilation-1-6-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cross-platform-compilation-1-6-0"}},[e._v("#")]),e._v(" Cross platform compilation (1.6.0)")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/michalzaq12/action-electron-nuxt",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Action"),a("OutboundLink")],1),e._v(" for building and releasing electron-nuxt apps")]),e._v(" "),a("p",[a("strong",[e._v("Add a workflow file")]),e._v(" to your project (e.g. "),a("code",[e._v(".github/workflows/build.yml")]),e._v(").\nUsing the workflow below, GitHub will build your app every time you push a commit to master branch.")]),e._v(" "),a("p",[e._v("See also: https://github.com/michalzaq12/action-electron-nuxt#configuration")]),e._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Build/release\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" master\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("release")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" matrix.os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("strategy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("matrix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("os")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("macos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("latest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("latest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("latest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Check out Git repository\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" actions/checkout@v1\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Install Node.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" NPM and Yarn\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("node@v1\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("node-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Build/release Electron app\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" michalzaq12/action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("electron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("nuxt@v1\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# GitHub token, automatically provided to the action")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# (No need to define this secret in the repo settings)")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# type: string")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("github_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" secrets.github_token "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# If the commit is tagged with a version (e.g. "v1.0.0")')]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# type: boolean")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("release")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" startsWith(github.ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" 'refs/tags/v') "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[a("strong",[e._v("If you use Travis CI this "),a("a",{attrs:{href:"https://gist.github.com/nwittwer/60aef18c9b4e9506534bdcc0e4a7c3f5",target:"_blank",rel:"noopener noreferrer"}},[e._v("example"),a("OutboundLink")],1),e._v(" may be useful")])]),e._v(" "),a("h3",{attrs:{id:"dependencies-vs-devdependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies-vs-devdependencies"}},[e._v("#")]),e._v(" "),a("code",[e._v("dependencies")]),e._v(" vs "),a("code",[e._v("devDependencies")])]),e._v(" "),a("p",[e._v("Due to "),a("a",{attrs:{href:"https://github.com/electron-userland/electron-builder",target:"_blank",rel:"noopener noreferrer"}},[e._v("electron-builder"),a("OutboundLink")],1),e._v(" the distinction between "),a("code",[e._v("dependencies")]),e._v(" and "),a("code",[e._v("devDependencies")]),e._v(" is very important. Incorrect assignment can cause the package to grow by several MB, the build time also increases.")]),e._v(" "),a("p",[a("strong",[e._v("Brief advice:")]),e._v(" Try to avoid adding a package to "),a("code",[e._v("dependencies")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Explanation")])]),e._v(" "),a("blockquote",[a("p",[e._v("If your package uses some modules only for build, test, or bundles them into a dist file (i.e. what will be used by the consumer project), then those modules should not be mentioned in dependencies. We still list them in devDependencies for development. "),a("a",{attrs:{href:"https://stackoverflow.com/a/50803712",target:"_blank",rel:"noopener noreferrer"}},[e._v("~ghybs"),a("OutboundLink")],1)])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("packages mentioned in "),a("code",[e._v("dependencies")]),e._v(" are packed into production build with all sub-dependencies "),a("em",[e._v("(this behavior can`t be configured)")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("packages mentioned in "),a("code",[e._v("devDependencies")]),e._v(" aren`t packed into production build.")])])]),e._v(" "),a("p",[e._v("In conclusion, we need to pack the necessary dependencies to production build, but without unneeded sub-packages, dead code, development tools and for example stylus files (we can compile them to css). To do this we use Webpack, which produce dist files (our entire application) and only these files will be copied (files are explicitly specified in "),a("code",[e._v("builder-config.js")]),e._v(") to production build.")]),e._v(" "),a("p",[a("strong",[e._v("Some "),a("code",[e._v("dependencies")]),e._v(" use case")])]),e._v(" "),a("ul",[a("li",[e._v("node native addon")]),e._v(" "),a("li",[e._v("package that contains files that "),a("strong",[e._v("can`t")]),e._v(" or "),a("em",[e._v("should not")]),e._v(" be bundled by webpack (eg. "),a("strong",[e._v("binary data")]),e._v(", "),a("strong",[e._v("images")]),e._v(", "),a("em",[e._v("some already minified scripts")]),e._v(")")])]),e._v(" "),a("h3",{attrs:{id:"dirname-and-filename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dirname-and-filename"}},[e._v("#")]),e._v(" "),a("code",[e._v("__dirname")]),e._v(" and "),a("code",[e._v("__filename")])]),e._v(" "),a("p",[e._v("Global variables "),a("code",[e._v("__dirname")]),e._v(" and "),a("code",[e._v("__filename")]),e._v(" are no longer reliable on production build. If you need reliable path to static assets read more about: "),a("a",{attrs:{href:"#static-resources"}},[e._v("static resources")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),a("p",[e._v("Electron-nuxt supports both unit testing and end-to-end testing for the renderer process. During vue-cli scaffolding you will have the option to include testing support.")])])}),[],!1,null,null,null);t.default=n.exports}}]);