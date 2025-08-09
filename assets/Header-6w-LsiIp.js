import{r as l,q as _,t as $,v as G,e as q,f as B,j as e,L as h,a as I,w as H}from"./index-CWCvjR9F.js";const W=(a,s,n,r)=>{const m=[n,{code:s,...r||{}}];if(a?.services?.logger?.forward)return a.services.logger.forward(m,"warn","react-i18next::",!0);y(m[0])&&(m[0]=`react-i18next:: ${m[0]}`),a?.services?.logger?.warn?a.services.logger.warn(...m):console?.warn&&console.warn(...m)},R={},z=(a,s,n,r)=>{y(n)&&R[n]||(y(n)&&(R[n]=new Date),W(a,s,n,r))},A=(a,s)=>()=>{if(a.isInitialized)s();else{const n=()=>{setTimeout(()=>{a.off("initialized",n)},0),s()};a.on("initialized",n)}},E=(a,s,n)=>{a.loadNamespaces(s,A(a,n))},U=(a,s,n,r)=>{if(y(n)&&(n=[n]),a.options.preload&&a.options.preload.indexOf(s)>-1)return E(a,n,r);n.forEach(m=>{a.options.ns.indexOf(m)<0&&a.options.ns.push(m)}),a.loadLanguages(s,A(a,r))},Y=(a,s,n={})=>!s.languages||!s.languages.length?(z(s,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:s.languages}),!0):s.hasLoadedNamespace(a,{lng:n.lng,precheck:(r,m)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!m(r.isLanguageChangingTo,a))return!1}}),y=a=>typeof a=="string",D=a=>typeof a=="object"&&a!==null,J=l.createContext();class K{constructor(){this.usedNamespaces={}}addUsedNamespaces(s){s.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const X=(a,s)=>{const n=l.useRef();return l.useEffect(()=>{n.current=a},[a,s]),n.current},F=(a,s,n,r)=>a.getFixedT(s,n,r),Z=(a,s,n,r)=>l.useCallback(F(a,s,n,r),[a,s,n,r]),Q=(a,s={})=>{const{i18n:n}=s,{i18n:r,defaultNS:m}=l.useContext(J)||{},t=n||r||_();if(t&&!t.reportNamespaces&&(t.reportNamespaces=new K),!t){z(t,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const c=(i,u)=>y(u)?u:D(u)&&y(u.defaultValue)?u.defaultValue:Array.isArray(i)?i[i.length-1]:i,o=[c,{},!1];return o.t=c,o.i18n={},o.ready=!1,o}t.options.react?.wait&&z(t,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const w={...$(),...t.options.react,...s},{useSuspense:C,keyPrefix:N}=w;let d=m||t.options?.defaultNS;d=y(d)?[d]:d||["translation"],t.reportNamespaces.addUsedNamespaces?.(d);const b=(t.isInitialized||t.initializedStoreOnce)&&d.every(c=>Y(c,t,w)),k=Z(t,s.lng||null,w.nsMode==="fallback"?d:d[0],N),M=()=>k,x=()=>F(t,s.lng||null,w.nsMode==="fallback"?d:d[0],N),[S,v]=l.useState(M);let p=d.join();s.lng&&(p=`${s.lng}${p}`);const L=X(p),f=l.useRef(!0);l.useEffect(()=>{const{bindI18n:c,bindI18nStore:o}=w;f.current=!0,!b&&!C&&(s.lng?U(t,s.lng,d,()=>{f.current&&v(x)}):E(t,d,()=>{f.current&&v(x)})),b&&L&&L!==p&&f.current&&v(x);const i=()=>{f.current&&v(x)};return c&&t?.on(c,i),o&&t?.store.on(o,i),()=>{f.current=!1,t&&c&&c?.split(" ").forEach(u=>t.off(u,i)),o&&t&&o.split(" ").forEach(u=>t.store.off(u,i))}},[t,p]),l.useEffect(()=>{f.current&&b&&v(M)},[t,N,b]);const j=[S,t,b];if(j.t=S,j.i18n=t,j.ready=b,b||!b&&!C)return j;throw new Promise(c=>{s.lng?U(t,s.lng,d,()=>c()):E(t,d,()=>c())})},V="/assets/logo-removebg-preview-CazftZ_M.webp";function ae(){const{t:a,i18n:s}=Q(),[n,r]=l.useState(!1),[m,t]=l.useState([]),[w,C]=l.useState(!0),[N,d]=l.useState(""),[b,k]=l.useState(!1),x=G(o=>o.isLoggedIn)(),S=q(),v=B(),[p,L]=l.useState(s.language),f=o=>{s.changeLanguage(o),L(o);const i=new URL(window.location);i.searchParams.set("lang",o),window.history.replaceState({},"",i)};l.useEffect(()=>{let o;return n&&(o=setTimeout(()=>{r(!1),S("/")},1500)),()=>clearTimeout(o)},[n]),l.useEffect(()=>{(async()=>{try{C(!0);const i=await I.get("post/category/list/");t(i.data)}catch(i){console.error("Failed to fetch categories:",i)}finally{C(!1)}})()},[]);const j=()=>{H(!1),r(!0)},c=async()=>{if(!x){k(!1);return}try{const i=(await I.get("contact-message/list/")).data.some(u=>!u.responded);k(i)}catch(o){console.error("Failed to fetch contact messages:",o)}};return l.useEffect(()=>{c();const o=()=>{if(!x){k(!1);return}c()};return window.addEventListener("contactMessagesUpdated",o),()=>{window.removeEventListener("contactMessagesUpdated",o)}},[x]),l.useEffect(()=>{c()},[v]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
                @keyframes fadeIn {from { opacity: 0; } to { opacity: 1; }}
                @keyframes progressBar {from { width: 0%; } to { width: 100%; }}
                .logout-popup-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(0,0,0,0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1050;
                    animation: fadeIn 0.3s ease forwards;
                }
                .progress-bar {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 4px;
                    background-color: #0d6efd;
                    animation: progressBar 1.5s linear forwards;
                }
                .logout-popup-content {
                    position: relative;
                }
                input::placeholder {
                    color: white !important;
                    opacity: 0.5 !important;
                }
                button.btn.bg-transparent.border-0.px-2.py-0.position-absolute.top-50.end-0.translate-middle-y {
                    color: white;
                }
                @media (max-width: 575px) {
                    .logout-button {
                        padding-left: 27px !important;
                        padding-right: 27px !important;
                    }
                }
                @media (min-width: 992px) and (max-width: 1199px) {
                    /* Keep logo size same */
                    .navbar-brand-item {
                        width: 50px !important;
                    }
                    /* Reduce size of nav links */
                    .nav-link {
                        font-size: 0.85rem;
                        padding: 0.25rem 0.5rem;
                    }
                    /* Reduce size of buttons */
                    .btn {
                        font-size: 0.85rem;
                        padding: 0.25rem 0.5rem;
                    }
                    /* Reduce size of form input */
                    .form-control {
                        font-size: 0.85rem;
                        padding: 0.25rem 0.5rem;
                    }
                    /* Reduce size of dropdown menu items */
                    .dropdown-menu .dropdown-item {
                        font-size: 0.85rem;
                        padding: 0.25rem 0.5rem;
                    }
                    /* Reduce size of navbar-toggler text */
                    .navbar-toggler .h6 {
                        font-size: 0.85rem;
                    }
                }
                @media (max-width: 991px) {
                    ul {
                        padding-right: 0 !important;
                    }
                }
                /* Make font size a little smaller for departments dropdown menu */
                .dropdown-menu.dropdown-menu-end.dropdown-menu-columns {
                    font-size: 0.85rem;
                }
            `}),e.jsx("header",{className:"navbar-dark navbar-sticky header-static",style:{backgroundColor:"#887298"},children:e.jsx("nav",{className:"navbar navbar-expand-lg",children:e.jsxs("div",{className:"container",style:{direction:"rtl"},children:[e.jsxs("button",{className:"navbar-toggler ms-auto",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:[e.jsx("span",{className:"h6 d-none d-sm-inline-block text-white",children:p==="fa"?"منو":p==="en"?"Menu":"القائمة"}),e.jsx("span",{className:"navbar-toggler-icon"})]}),e.jsx(h,{className:"navbar-brand",to:"/",children:e.jsx("img",{className:"navbar-brand-item dark-mode-item",src:V,style:{width:"50px"},alt:"logo"})}),e.jsxs("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[e.jsx("div",{className:"nav mt-3 mt-lg-0 px-4 flex-nowrap align-items-center",children:e.jsx("div",{className:"nav-item w-100",children:e.jsxs("form",{className:"rounded position-relative",onSubmit:o=>{o.preventDefault(),N.trim()!==""&&S(`/search/${encodeURIComponent(N.trim())}`)},children:[e.jsx("input",{className:"form-control pe-5 text-end",type:"search",placeholder:a("search"),"aria-label":"Search",value:N,onChange:o=>d(o.target.value),style:{border:"none",boxShadow:"none",backgroundColor:"#665672",color:"white"}}),e.jsx("button",{type:"submit",className:"btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y",children:e.jsx("i",{className:"bi bi-search fs-5",children:" "})})]})})}),e.jsxs("ul",{className:"navbar-nav navbar-nav-scroll ms-auto",children:[e.jsx("li",{className:"nav-item",children:e.jsx(h,{className:"nav-link",to:"/",children:a("nav.home")})}),e.jsx("li",{className:"nav-item",children:e.jsx(h,{className:"nav-link",to:"/all-posts",children:a("nav.articles")})}),e.jsx("li",{className:"nav-item",children:e.jsx(h,{className:"nav-link",to:"/news",children:a("nav.news")})}),e.jsxs("li",{className:"nav-item dropdown",style:{direction:"rtl"},children:[e.jsx("button",{className:"nav-link dropdown-toggle btn btn-link",type:"button",style:{direction:"rtl"},id:"departmentsMenu","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:a("nav.departments")}),w?e.jsx("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"departmentsMenu",style:{direction:"rtl",textAlign:"right",marginTop:0},children:e.jsx("li",{className:"dropdown-item text-center",children:a("loading")})}):(()=>{const o=["bi bi-globe-central-south-asia","fas fa-utensils","fas fa-tractor","fas fa-tshirt","fas fa-fan","fas fa-wine-glass","fas fa-building","fas fa-plus-square","fas fa-users"],u=m.filter(g=>g.title!=="اخبار").map((g,T)=>({to:`/category/${g.slug}/`,icon:o[T]||"fas fa-folder",label:a(g.title)||g.title})),O=u.slice(0,5),P=u.slice(5);return e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end dropdown-menu-columns","aria-labelledby":"departmentsMenu",style:{direction:"rtl",textAlign:"right"},"aria-expanded":"false",children:[e.jsx(e.Fragment,{children:O.map((g,T)=>e.jsx("li",{children:e.jsxs(h,{className:"dropdown-item",to:g.to,"aria-current":"false","aria-disabled":"false",children:[e.jsx("i",{className:g.icon})," ",g.label]})},T))}),e.jsx(e.Fragment,{children:P.map((g,T)=>e.jsx("li",{children:e.jsxs(h,{className:"dropdown-item",to:g.to,"aria-current":"false","aria-disabled":"false",children:[e.jsx("i",{className:g.icon})," ",g.label]})},T))})]})})()]}),e.jsxs("li",{className:"nav-item dropdown",style:{direction:"rtl"},children:[e.jsx("a",{className:"nav-link dropdown-toggle",href:"#",id:"pagesMenu","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:a("nav.about")}),e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"pagesMenu",style:{direction:"rtl",textAlign:"right"},children:[e.jsx("li",{children:e.jsxs(h,{className:"dropdown-item",to:"/about/",children:[e.jsx("i",{className:"bi bi-person-lines-fill"})," ",a("nav.aboutUs")]})}),e.jsx("li",{children:e.jsxs(h,{className:"dropdown-item",to:"/contact/",children:[e.jsx("i",{className:"bi bi-telephone-fill"})," ",a("nav.contactUs")]})})]})]}),e.jsxs("li",{className:"nav-item dropdown",style:{direction:"rtl"},children:[e.jsx("a",{className:"nav-link dropdown-toggle",href:"#",id:"languageMenu","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:e.jsx("i",{className:"bi bi-globe"})}),e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"languageMenu",style:{direction:"rtl",textAlign:"right"},children:[e.jsx("li",{children:e.jsx("a",{className:"dropdown-item",href:"#",onClick:()=>f("fa"),children:a("languages.persian")})}),e.jsx("li",{children:e.jsx("a",{className:"dropdown-item",href:"#",onClick:()=>f("en"),children:a("languages.english")})}),e.jsx("li",{children:e.jsx("a",{className:"dropdown-item",href:"#",onClick:()=>f("ar"),children:a("languages.arabic")})})]})]})]}),e.jsx("ul",{className:"navbar-nav navbar-nav-scroll me-auto",children:e.jsx("div",{className:"nav-item nav-item-left",children:x?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"d-flex flex-column flex-sm-row align-items-start align-items-sm-center",style:{gap:"0.5rem"},children:[e.jsxs("div",{className:"nav-item dropdown ms-2 mb-2 mb-sm-0",children:[e.jsxs("button",{className:"btn btn-primary dropdown-toggle",id:"dashboardMenu","data-bs-toggle":"dropdown","aria-expanded":"false",type:"button",style:{direction:"rtl"},children:[a("dashboard")," ",e.jsx("i",{className:"bi bi-person-fill"})]}),e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"dashboardMenu",style:{direction:"rtl",textAlign:"right"},children:[e.jsx("li",{children:e.jsxs(h,{className:"dropdown-item",to:"/dashboard/",children:[e.jsx("i",{className:"bi bi-person-workspace"})," ",a("workspace"),b&&e.jsx("span",{className:"badge bg-success rounded-circle ms-2 me-1",style:{width:"8px",height:"8px",display:"inline-block",padding:0,borderRadius:"50%"}})]})}),e.jsx("li",{children:e.jsxs(h,{className:"dropdown-item",to:"/profile/",children:[e.jsx("i",{className:"bi bi-person-circle"})," ",a("profile")]})})]})]}),e.jsx("div",{children:e.jsxs("button",{onClick:j,className:"btn btn-danger ms-2 logout-button",children:[a("logout")," ",e.jsx("i",{className:"fas fa-sign-out-alt"})]})})]})}):e.jsxs(h,{to:"/login/",className:"btn btn-success ms-2",href:"dashboard.html",style:{backgroundColor:"#609f63",border:"None"},children:[a("login")," ",e.jsx("i",{className:"fas fa-sign-in-alt"})]})})})]})]})})}),n&&e.jsx("div",{className:"logout-popup-overlay",children:e.jsxs("div",{className:"logout-popup-content card shadow p-4",style:{maxWidth:"400px",textAlign:"center",direction:"rtl",position:"relative"},children:[e.jsx("h1",{className:"mb-1 fw-bold",children:p==="fa"?"شما خارج شدید":p==="en"?"You have been logged out":"تم تسجيل الخروج"}),e.jsx("span",{children:p==="fa"?"از بازدید شما از وبسایت متشکریم، هر زمان بازگردید!":p==="en"?"Thank you for visiting our website, come back anytime!":"شكراً لزيارتك لموقعنا، عد في أي وقت!"}),e.jsx("div",{className:"progress-bar"})]})})]})}export{ae as default};
