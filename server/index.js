import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const linkClasses = "text-center py-2 px-6 bg-[#D3DADC] border border-[#D3DADC] rounded-[10px] drop-shadow text-lg font-medium hover:underline shadow-md transition-all";
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: "text-[#435576] shadow-md",
      style: { backgroundColor: "rgba(67, 85, 118, 0.15)" },
      children: [
        /* @__PURE__ */ jsx("div", { className: "items-center max-w-6xl mx-auto px-4 py-4", children: /* @__PURE__ */ jsxs("div", { className: " flex flex-col md:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsOpen(!isOpen),
              className: "text-3xl focus:outline-none",
              "aria-label": "Toggle navigation",
              "aria-expanded": isOpen,
              children: isOpen ? "✖" : "☰"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex flex-wrap justify-center gap-6", children: [
            /* @__PURE__ */ jsx("a", { href: "#home", className: linkClasses, children: "Home" }),
            /* @__PURE__ */ jsx("a", { href: "#experiences", className: linkClasses, children: "Experiences" }),
            /* @__PURE__ */ jsx("a", { href: "#projects", className: linkClasses, children: "Projects" }),
            /* @__PURE__ */ jsx("a", { href: "#contact", className: linkClasses, children: "Contact" })
          ] })
        ] }) }),
        isOpen && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4 pb-4 md:hidden", children: [
          /* @__PURE__ */ jsx("a", { href: "#home", className: linkClasses, children: "Home" }),
          /* @__PURE__ */ jsx("a", { href: "#experiences", className: linkClasses, children: "Experiences" }),
          /* @__PURE__ */ jsx("a", { href: "#projects", className: linkClasses, children: "Projects" }),
          /* @__PURE__ */ jsx("a", { href: "#contact", className: linkClasses, children: "Contact" })
        ] })
      ]
    }
  );
}
function Main() {
  return /* @__PURE__ */ jsx("div", { id: "home", className: "bg-[#D3DADC] text-black py-16 px-6 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/assets/headshot.JPG",
        alt: "Vrinda's Headshot",
        className: "w-40 h-40 md:w-60 md:h-60 object-cover rounded-md border-4 border-white shadow-md"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between w-full", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-5xl font-bold text-[#435576] mb-4 md:mb-0", children: "Vrinda Joshi" }),
        /* @__PURE__ */ jsxs("ul", { className: "flex gap-6 text-3xl md:text-4xl text-[#435576]", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/VrindaJoshi",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "GitHub",
              className: "hover:text-[#FEFAE0]",
              children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faGithub })
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.linkedin.com/in/vrindaajoshi/",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "LinkedIn",
              className: "hover:text-[#FEFAE0]",
              children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faLinkedin })
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "mailto:vrinda.joshi@uwaterloo.ca",
              "aria-label": "Email",
              className: "hover:text-[#435576]",
              children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faEnvelope })
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center mt-6 gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center border-2 border-[#435576] rounded-[10px] px-4 py-2 hover:bg-[#435576] transition-colors", children: /* @__PURE__ */ jsx("h2", { className: "text-lg md:text-xl font-semibold text-[#435576] hover:text-[#FEFAE0]", children: "Systems Design Engineering" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("h2", { className: "text-lg md:text-xl text-[#435576]", children: "@ University of Waterloo" }) })
      ] })
    ] })
  ] }) });
}
function RoleList({ articles }) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 hover", children: articles.map((role) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "p-4 text-[#FEFAE0] bg-[#435576] rounded-lg shadow-lg hover:bg-[#5d739c] transition-shadow duration-300",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-semibold text-md", children: role.title }),
          /* @__PURE__ */ jsx("span", { className: "italic text-sm opacity-80", children: role.company })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm mb-1", children: [
          /* @__PURE__ */ jsx("span", { role: "img", "aria-label": "tools", children: "🛠" }),
          " ",
          role.skills
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm opacity-80", children: role.dates })
      ]
    },
    role.id
  )) });
}
function Experiences() {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/roles").then((res) => {
      if (!res.ok) throw Error("Could not fetch roles.");
      return res.json();
    }).then((data) => {
      setArticles(data);
    }).catch((err) => {
      setError(err.message);
      console.error("Error fetching data:", err);
    });
  }, []);
  return /* @__PURE__ */ jsxs("div", { id: "experiences", className: " w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-[#D3DADC]", children: /* @__PURE__ */ jsx("img", { src: "/assets/wave.svg", alt: "Top Wave", className: "w-full rotate-180 " }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-[#435576] px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold text-[#FEFAE0] mb-10", children: "Experience" }),
      /* @__PURE__ */ jsxs("div", { className: "grid-rows-2 ", children: [
        error && /* @__PURE__ */ jsx("div", { className: "text-red-400 text-center", children: error }),
        !articles && !error && /* @__PURE__ */ jsx("div", { className: "text-[#FEFAE0] text-center ", children: "Loading..." }),
        articles && /* @__PURE__ */ jsx(RoleList, { articles })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-[#D3DADC]", children: /* @__PURE__ */ jsx("img", { src: "/assets/wave.svg", alt: "Top Wave", className: "w-full" }) })
  ] });
}
function ProjectsList({ projects }) {
  const [selectedTag, setSelectedTag] = useState(null);
  const filteredProjects = selectedTag ? projects.filter(
    (project) => project.tags.some(([tag]) => tag === selectedTag)
  ) : projects;
  return /* @__PURE__ */ jsxs("div", { children: [
    selectedTag && /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-sm", children: [
        "Filtering by: ",
        /* @__PURE__ */ jsx("strong", { children: selectedTag })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setSelectedTag(null),
          className: "text-xs px-2 py-1 bg-red-300 text-white rounded-md hover:bg-red-400",
          children: "Clear Filter"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredProjects.map((project) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "p-6 bg-[#455763] text-[#FEFAE0] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-semibold text-lg", children: project.title }),
            /* @__PURE__ */ jsx("h3", { className: "italic text-sm opacity-80", children: project.description })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm mb-2", children: [
            /* @__PURE__ */ jsx("span", { role: "img", "aria-label": "tools", children: "🛠" }),
            " ",
            project.skills
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.tags.map(([tag, color], id) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setSelectedTag(tag),
              className: "bg-white px-2 py-1 rounded-md text-xs font-medium hover:bg-black",
              style: { color },
              children: tag
            },
            id
          )) }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-4 mb-4", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: project.link,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-sm hover:text-yellow-300",
              children: "See More ↗"
            }
          ) })
        ] })
      },
      project.id
    )) })
  ] });
}
function Projects() {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/projects").then((res) => {
      if (!res.ok) throw Error("Could not fetch roles.");
      return res.json();
    }).then((data) => {
      setProjects(data);
    }).catch((err) => {
      setError(err.message);
      console.error("Error fetching data:", err);
    });
  }, []);
  return /* @__PURE__ */ jsxs("div", { id: "projects", className: " w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-[#D3DADC] px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold text-[#435576] my-10 align-right", children: "Projects" }),
      /* @__PURE__ */ jsxs("div", { className: "grid-rows-2 ", children: [
        error && /* @__PURE__ */ jsx("div", { className: "text-red-400 text-center", children: error }),
        !projects && !error && /* @__PURE__ */ jsx("div", { className: "text-[#435576] text-center", children: "Loading..." }),
        projects && /* @__PURE__ */ jsx(ProjectsList, { projects })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-[#D3DADC] mt-20", children: /* @__PURE__ */ jsx("img", { src: "/assets/wave (1).svg", alt: "Top Wave", className: "w-full" }) })
  ] });
}
function Contacts() {
  return /* @__PURE__ */ jsxs("div", { id: "contact", className: "w-full grid grid-cols-5 bg-[#FEFAE0]", children: [
    /* @__PURE__ */ jsx("div", { className: "col-span-1 flex items-end justify-end", children: /* @__PURE__ */ jsxs("div", { className: "hidden md:flex space-x-2", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/assets/flower-2.svg",
          alt: "Decorative flower",
          className: "h-40 w-auto"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/assets/flower-1.svg",
          alt: "Decorative flower",
          className: "h-40 w-auto"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-[#FEFAE0] px-4 py-12 col-span-3", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold text-[#435576] mb-4", children: "Thanks for scrolling all the way down." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl text-[#435576] mb-8", children: "Let’s make that time worth it—let’s connect!" }),
      /* @__PURE__ */ jsxs("ul", { className: "flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10 text-4xl text-[#435576]", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex flex-col items-center sm:flex-row", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "mailto:vrinda.joshi@uwaterloo.ca",
              "aria-label": "Email",
              className: "hover:text-[#3b4e2f] transition-colors text-4xl",
              children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faEnvelope })
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-sm mt-2 sm:mt-0 sm:ml-2", children: "vrinda.joshi@uwaterloo.ca" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex flex-col items-center sm:flex-row", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.linkedin.com/in/vrindaajoshi/",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "LinkedIn",
              className: "hover:text-[#3b4e2f] transition-colors text-4xl",
              children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faLinkedin })
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-sm mt-2 sm:mt-0 sm:ml-2", children: "in/vrindaajoshi" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex flex-col items-center sm:flex-row", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.github.com/vrindajoshi",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "GitHub",
              className: "hover:text-[#3b4e2f] transition-colors text-4xl",
              children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faGithub })
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-sm mt-2 sm:mt-0 sm:ml-2", children: "GitHub" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("footer", { className: "text-sm text-[#435576] pt-10", children: /* @__PURE__ */ jsx("p", { children: "© Vrinda Joshi 2025" }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "col-span-1 flex items-end justify-start", children: /* @__PURE__ */ jsxs("div", { className: "hidden md:flex space-x-2", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/assets/flower-3.svg",
          alt: "Decorative flower",
          className: "h-40 w-auto"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/assets/flower-4.svg",
          alt: "Decorative flower",
          className: "h-40 w-auto"
        }
      )
    ] }) })
  ] });
}
const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed w-8 h-8 rounded-full bg-white pointer-events-none -translate-x-1/2 -translate-y-1/2 blur-lg z-[9999]",
      style: {
        left: `${position.x}px`,
        top: `${position.y}px`
      }
    }
  );
};
function Welcome() {
  return /* @__PURE__ */ jsxs("div", { className: "base bg-white", children: [
    /* @__PURE__ */ jsx(CursorGlow, {}),
    /* @__PURE__ */ jsx(NavBar, {}),
    /* @__PURE__ */ jsx(Main, {}),
    /* @__PURE__ */ jsx(Experiences, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Contacts, {})
  ] });
}
function meta({}) {
  return [{
    title: "Vrinda Joshi"
  }, {
    name: "Vrinda's Site. Product Designer, Developer, and Innovator. Systems Design Engineering @ Univerity of Waterloo",
    content: ""
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DXOvVVzO.js", "imports": ["/assets/chunk-NL6KNZEE-Cy3YrZ3V.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-BibfA3IS.js", "imports": ["/assets/chunk-NL6KNZEE-Cy3YrZ3V.js"], "css": ["/assets/root-BXgOqO1T.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-CO50wEq5.js", "imports": ["/assets/chunk-NL6KNZEE-Cy3YrZ3V.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-86adef16.js", "version": "86adef16", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
