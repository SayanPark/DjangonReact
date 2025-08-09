import{r as d,q as _,t as $,v as G,e as q,f as B,j as e,L as b,a as I,w as H}from"./index-B54xnYFg.js";const W=(a,s,n,i)=>{const u=[n,{code:s,...i||{}}];if(a?.services?.logger?.forward)return a.services.logger.forward(u,"warn","react-i18next::",!0);v(u[0])&&(u[0]=`react-i18next:: ${u[0]}`),a?.services?.logger?.warn?a.services.logger.warn(...u):console?.warn&&console.warn(...u)},R={},z=(a,s,n,i)=>{v(n)&&R[n]||(v(n)&&(R[n]=new Date),W(a,s,n,i))},U=(a,s)=>()=>{if(a.isInitialized)s();else{const n=()=>{setTimeout(()=>{a.off("initialized",n)},0),s()};a.on("initialized",n)}},E=(a,s,n)=>{a.loadNamespaces(s,U(a,n))},A=(a,s,n,i)=>{if(v(n)&&(n=[n]),a.options.preload&&a.options.preload.indexOf(s)>-1)return E(a,n,i);n.forEach(u=>{a.options.ns.indexOf(u)<0&&a.options.ns.push(u)}),a.loadLanguages(s,U(a,i))},Y=(a,s,n={})=>!s.languages||!s.languages.length?(z(s,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:s.languages}),!0):s.hasLoadedNamespace(a,{lng:n.lng,precheck:(i,u)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!u(i.isLanguageChangingTo,a))return!1}}),v=a=>typeof a=="string",D=a=>typeof a=="object"&&a!==null,J=d.createContext();class K{constructor(){this.usedNamespaces={}}addUsedNamespaces(s){s.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const X=(a,s)=>{const n=d.useRef();return d.useEffect(()=>{n.current=a},[a,s]),n.current},F=(a,s,n,i)=>a.getFixedT(s,n,i),Z=(a,s,n,i)=>d.useCallback(F(a,s,n,i),[a,s,n,i]),Q=(a,s={})=>{const{i18n:n}=s,{i18n:i,defaultNS:u}=d.useContext(J)||{},t=n||i||_();if(t&&!t.reportNamespaces&&(t.reportNamespaces=new K),!t){z(t,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const c=(m,g)=>v(g)?g:D(g)&&v(g.defaultValue)?g.defaultValue:Array.isArray(m)?m[m.length-1]:m,o=[c,{},!1];return o.t=c,o.i18n={},o.ready=!1,o}t.options.react?.wait&&z(t,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const x={...$(),...t.options.react,...s},{useSuspense:L,keyPrefix:k}=x;let l=u||t.options?.defaultNS;l=v(l)?[l]:l||["translation"],t.reportNamespaces.addUsedNamespaces?.(l);const w=(t.isInitialized||t.initializedStoreOnce)&&l.every(c=>Y(c,t,x)),y=Z(t,s.lng||null,x.nsMode==="fallback"?l:l[0],k),S=()=>y,C=()=>F(t,s.lng||null,x.nsMode==="fallback"?l:l[0],k),[r,N]=d.useState(S);let f=l.join();s.lng&&(f=`${s.lng}${f}`);const M=X(f),h=d.useRef(!0);d.useEffect(()=>{const{bindI18n:c,bindI18nStore:o}=x;h.current=!0,!w&&!L&&(s.lng?A(t,s.lng,l,()=>{h.current&&N(C)}):E(t,l,()=>{h.current&&N(C)})),w&&M&&M!==f&&h.current&&N(C);const m=()=>{h.current&&N(C)};return c&&t?.on(c,m),o&&t?.store.on(o,m),()=>{h.current=!1,t&&c&&c?.split(" ").forEach(g=>t.off(g,m)),o&&t&&o.split(" ").forEach(g=>t.store.off(g,m))}},[t,f]),d.useEffect(()=>{h.current&&w&&N(S)},[t,k,w]);const j=[r,t,w];if(j.t=r,j.i18n=t,j.ready=w,w||!w&&!L)return j;throw new Promise(c=>{s.lng?A(t,s.lng,l,()=>c()):E(t,l,()=>c())})},V="/assets/logo-removebg-preview-CazftZ_M.webp";function ae(){const[a,s]=d.useState(!1),[n,i]=d.useState([]),[u,t]=d.useState(!0),[x,L]=d.useState(""),[k,l]=d.useState(!1),y=G(o=>o.isLoggedIn)(),S=q(),C=B(),{t:r,i18n:N}=Q(),[f,M]=d.useState(N.language),h=o=>{N.changeLanguage(o),M(o)};d.useEffect(()=>{let o;return a&&(o=setTimeout(()=>{s(!1),S("/")},1500)),()=>clearTimeout(o)},[a]),d.useEffect(()=>{(async()=>{try{t(!0);const m=await I.get("post/category/list/");i(m.data)}catch(m){console.error("Failed to fetch categories:",m)}finally{t(!1)}})()},[]);const j=()=>{H(!1),s(!0)},c=async()=>{if(!y){l(!1);return}try{const m=(await I.get("contact-message/list/")).data.some(g=>!g.responded);l(m)}catch(o){console.error("Failed to fetch contact messages:",o)}};return d.useEffect(()=>{c();const o=()=>{if(!y){l(!1);return}c()};return window.addEventListener("contactMessagesUpdated",o),()=>{window.removeEventListener("contactMessagesUpdated",o)}},[y]),d.useEffect(()=>{c()},[C]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
            `}),e.jsx("header",{className:"navbar-dark navbar-sticky header-static",style:{backgroundColor:"#887298"},children:e.jsx("nav",{className:"navbar navbar-expand-lg",children:e.jsxs("div",{className:"container",style:{direction:"rtl"},children:[e.jsxs("button",{className:"navbar-toggler ms-auto",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:[e.jsx("span",{className:"h6 d-none d-sm-inline-block text-white",children:f==="fa"?"منو":f==="en"?"Menu":"القائمة"}),e.jsx("span",{className:"navbar-toggler-icon"})]}),e.jsx(b,{className:"navbar-brand",to:"/",children:e.jsx("img",{className:"navbar-brand-item dark-mode-item",src:V,style:{width:"50px"},alt:"logo"})}),e.jsxs("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[e.jsx("div",{className:"nav mt-3 mt-lg-0 px-4 flex-nowrap align-items-center",children:e.jsx("div",{className:"nav-item w-100",children:e.jsxs("form",{className:"rounded position-relative",onSubmit:o=>{o.preventDefault(),x.trim()!==""&&S(`/search/${encodeURIComponent(x.trim())}`)},children:[e.jsx("input",{className:"form-control pe-5 text-end",type:"search",placeholder:r("nav.search"),"aria-label":"Search",value:x,onChange:o=>L(o.target.value),style:{border:"none",boxShadow:"none",backgroundColor:"#665672",color:"white"}}),e.jsx("button",{type:"submit",className:"btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y",children:e.jsx("i",{className:"bi bi-search fs-5",children:" "})})]})})}),e.jsxs("ul",{className:"navbar-nav navbar-nav-scroll ms-auto",children:[e.jsx("li",{className:"nav-item",children:e.jsx(b,{className:"nav-link",to:"/",children:r("nav.home")})}),e.jsx("li",{className:"nav-item",children:e.jsx(b,{className:"nav-link",to:"/all-posts",children:r("nav.articles")})}),e.jsx("li",{className:"nav-item",children:e.jsx(b,{className:"nav-link",to:"/news",children:r("nav.news")})}),e.jsxs("li",{className:"nav-item dropdown",style:{direction:"rtl"},children:[e.jsx("button",{className:"nav-link dropdown-toggle btn btn-link",type:"button",style:{direction:"rtl"},id:"departmentsMenu","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:r("nav.departments")}),u?e.jsx("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"departmentsMenu",style:{direction:"rtl",textAlign:"right",marginTop:0},children:e.jsx("li",{className:"dropdown-item text-center",children:r("loading")})}):(()=>{const o=["bi bi-globe-central-south-asia","fas fa-utensils","fas fa-tractor","fas fa-tshirt","fas fa-fan","fas fa-wine-glass","fas fa-building","fas fa-plus-square","fas fa-users"],g=n.filter(p=>p.title!=="اخبار").map((p,T)=>({to:`/category/${p.slug}/`,icon:o[T]||"fas fa-folder",label:r(p.title)||p.title})),O=g.slice(0,5),P=g.slice(5);return e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end dropdown-menu-columns","aria-labelledby":"departmentsMenu",style:{direction:"rtl",textAlign:"right"},"aria-expanded":"false",children:[e.jsx(e.Fragment,{children:O.map((p,T)=>e.jsx("li",{children:e.jsxs(b,{className:"dropdown-item",to:p.to,"aria-current":"false","aria-disabled":"false",children:[e.jsx("i",{className:p.icon})," ",p.label]})},T))}),e.jsx(e.Fragment,{children:P.map((p,T)=>e.jsx("li",{children:e.jsxs(b,{className:"dropdown-item",to:p.to,"aria-current":"false","aria-disabled":"false",children:[e.jsx("i",{className:p.icon})," ",p.label]})},T))})]})})()]}),e.jsxs("li",{className:"nav-item dropdown",style:{direction:"rtl"},children:[e.jsx("a",{className:"nav-link dropdown-toggle",href:"#",id:"pagesMenu","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:r("about")}),e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"pagesMenu",style:{direction:"rtl",textAlign:"right"},children:[e.jsx("li",{children:e.jsxs(b,{className:"dropdown-item",to:"/about/",children:[e.jsx("i",{className:"bi bi-person-lines-fill"})," ",r("aboutUs")]})}),e.jsx("li",{children:e.jsxs(b,{className:"dropdown-item",to:"/contact/",children:[e.jsx("i",{className:"bi bi-telephone-fill"})," ",r("contactUs")]})})]})]}),e.jsxs("li",{className:"nav-item dropdown",style:{direction:"rtl"},children:[e.jsx("a",{className:"nav-link dropdown-toggle",href:"#",id:"languageMenu","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:e.jsx("i",{className:"bi bi-globe"})}),e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"languageMenu",style:{direction:"rtl",textAlign:"right"},children:[e.jsx("li",{children:e.jsx("a",{className:"dropdown-item",href:"#",onClick:()=>h("fa"),children:r("languages.persian")})}),e.jsx("li",{children:e.jsx("a",{className:"dropdown-item",href:"#",onClick:()=>h("en"),children:r("languages.english")})}),e.jsx("li",{children:e.jsx("a",{className:"dropdown-item",href:"#",onClick:()=>h("ar"),children:r("languages.arabic")})})]})]})]}),e.jsx("ul",{className:"navbar-nav navbar-nav-scroll me-auto",children:e.jsx("div",{className:"nav-item nav-item-left",children:y?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"d-flex flex-column flex-sm-row align-items-start align-items-sm-center",style:{gap:"0.5rem"},children:[e.jsxs("div",{className:"nav-item dropdown ms-2 mb-2 mb-sm-0",children:[e.jsxs("button",{className:"btn btn-primary dropdown-toggle",id:"dashboardMenu","data-bs-toggle":"dropdown","aria-expanded":"false",type:"button",style:{direction:"rtl"},children:[r("dashboard")," ",e.jsx("i",{className:"bi bi-person-fill"})]}),e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"dashboardMenu",style:{direction:"rtl",textAlign:"right"},children:[e.jsx("li",{children:e.jsxs(b,{className:"dropdown-item",to:"/dashboard/",children:[e.jsx("i",{className:"bi bi-person-workspace"})," ",r("workspace"),k&&e.jsx("span",{className:"badge bg-success rounded-circle ms-2 me-1",style:{width:"8px",height:"8px",display:"inline-block",padding:0,borderRadius:"50%"}})]})}),e.jsx("li",{children:e.jsxs(b,{className:"dropdown-item",to:"/profile/",children:[e.jsx("i",{className:"bi bi-person-circle"})," ",r("profile")]})})]})]}),e.jsx("div",{children:e.jsxs("button",{onClick:j,className:"btn btn-danger ms-2 logout-button",children:[r("logout")," ",e.jsx("i",{className:"fas fa-sign-out-alt"})]})})]})}):e.jsxs(b,{to:"/login/",className:"btn btn-success ms-2",href:"dashboard.html",style:{backgroundColor:"#609f63",border:"None"},children:[r("login")," ",e.jsx("i",{className:"fas fa-sign-in-alt"})]})})})]})]})})}),a&&e.jsx("div",{className:"logout-popup-overlay",children:e.jsxs("div",{className:"logout-popup-content card shadow p-4",style:{maxWidth:"400px",textAlign:"center",direction:"rtl",position:"relative"},children:[e.jsx("h1",{className:"mb-1 fw-bold",children:f==="fa"?"شما خارج شدید":f==="en"?"You have been logged out":"تم تسجيل الخروج"}),e.jsx("span",{children:f==="fa"?"از بازدید شما از وبسایت متشکریم، هر زمان بازگردید!":f==="en"?"Thank you for visiting our website, come back anytime!":"شكراً لزيارتك لموقعنا، عد في أي وقت!"}),e.jsx("div",{className:"progress-bar"})]})})]})}export{ae as default};
