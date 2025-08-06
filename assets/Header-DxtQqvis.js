import{r as n,q as M,e as z,f as L,j as e,L as t,a as b,t as S}from"./index-DkZJF8Bt.js";const E="/assets/logo-removebg-preview-CazftZ_M.webp";function U(){const[d,g]=n.useState(!1),[x,f]=n.useState([]),[j,u]=n.useState(!0),[c,w]=n.useState(""),[v,m]=n.useState(!1),i=M(a=>a.isLoggedIn)(),h=z(),N=L();n.useEffect(()=>{let a;return d&&(a=setTimeout(()=>{g(!1),h("/")},1500)),()=>clearTimeout(a)},[d]),n.useEffect(()=>{(async()=>{try{u(!0);const o=await b.get("post/category/list/");f(o.data)}catch(o){console.error("Failed to fetch categories:",o)}finally{u(!1)}})()},[]);const y=()=>{S(!1),g(!0)},p=async()=>{if(!i){m(!1);return}try{const o=(await b.get("contact-message/list/")).data.some(l=>!l.responded);m(o)}catch(a){console.error("Failed to fetch contact messages:",a)}};return n.useEffect(()=>{p();const a=()=>{if(!i){m(!1);return}p()};return window.addEventListener("contactMessagesUpdated",a),()=>{window.removeEventListener("contactMessagesUpdated",a)}},[i]),n.useEffect(()=>{p()},[N]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
            `}),e.jsx("header",{className:"navbar-dark navbar-sticky header-static",style:{backgroundColor:"#887298"},children:e.jsx("nav",{className:"navbar navbar-expand-lg",children:e.jsxs("div",{className:"container",style:{direction:"rtl"},children:[e.jsxs("button",{className:"navbar-toggler ms-auto",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:[e.jsx("span",{className:"h6 d-none d-sm-inline-block text-white",children:"منو"}),e.jsx("span",{className:"navbar-toggler-icon"})]}),e.jsx(t,{className:"navbar-brand",to:"/",children:e.jsx("img",{className:"navbar-brand-item dark-mode-item",src:E,style:{width:"50px"},alt:"logo"})}),e.jsxs("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[e.jsx("div",{className:"nav mt-3 mt-lg-0 px-4 flex-nowrap align-items-center",children:e.jsx("div",{className:"nav-item w-100",children:e.jsxs("form",{className:"rounded position-relative",onSubmit:a=>{a.preventDefault(),c.trim()!==""&&h(`/search/${encodeURIComponent(c.trim())}`)},children:[e.jsx("input",{className:"form-control pe-5 text-end",type:"search",placeholder:"جستجو کنید","aria-label":"Search",value:c,onChange:a=>w(a.target.value),style:{border:"none",boxShadow:"none",backgroundColor:"#665672",color:"white"}}),e.jsx("button",{type:"submit",className:"btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y",children:e.jsx("i",{className:"bi bi-search fs-5",children:" "})})]})})}),e.jsxs("ul",{className:"navbar-nav navbar-nav-scroll ms-auto",children:[e.jsx("li",{className:"nav-item",children:e.jsx(t,{className:"nav-link",to:"/",children:"خانه"})}),e.jsx("li",{className:"nav-item",children:e.jsx(t,{className:"nav-link",to:"/all-posts",children:"مقالات"})}),e.jsx("li",{className:"nav-item",children:e.jsx(t,{className:"nav-link",to:"/news",children:"اخبار"})}),e.jsxs("li",{className:"nav-item dropdown",style:{direction:"rtl"},children:[e.jsx("button",{className:"nav-link dropdown-toggle btn btn-link",type:"button",style:{direction:"rtl"},id:"departmentsMenu","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"دپارتمان‌ها"}),j?e.jsx("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"departmentsMenu",style:{direction:"rtl",textAlign:"right",marginTop:0},children:e.jsx("li",{className:"dropdown-item text-center",children:"در حال بارگذاری..."})}):(()=>{const a=["bi bi-globe-central-south-asia","fas fa-utensils","fas fa-tractor","fas fa-tshirt","fas fa-fan","fas fa-wine-glass","fas fa-building","fas fa-plus-square","fas fa-users"],l=x.filter(s=>s.title!=="اخبار").map((s,r)=>({to:`/category/${s.slug}/`,icon:a[r]||"fas fa-folder",label:s.title})),k=l.slice(0,5),C=l.slice(5);return e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end dropdown-menu-columns","aria-labelledby":"departmentsMenu",style:{direction:"rtl",textAlign:"right"},"aria-expanded":"false",children:[e.jsx(e.Fragment,{children:k.map((s,r)=>e.jsx("li",{children:e.jsxs(t,{className:"dropdown-item",to:s.to,"aria-current":"false","aria-disabled":"false",children:[e.jsx("i",{className:s.icon})," ",s.label]})},r))}),e.jsx(e.Fragment,{children:C.map((s,r)=>e.jsx("li",{children:e.jsxs(t,{className:"dropdown-item",to:s.to,"aria-current":"false","aria-disabled":"false",children:[e.jsx("i",{className:s.icon})," ",s.label]})},r))})]})})()]}),e.jsxs("li",{className:"nav-item dropdown",style:{direction:"rtl"},children:[e.jsx("a",{className:"nav-link dropdown-toggle",href:"#",id:"pagesMenu","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"آشنایی با ما"}),e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"pagesMenu",style:{direction:"rtl",textAlign:"right"},children:[e.jsx("li",{children:e.jsxs(t,{className:"dropdown-item",to:"/about/",children:[e.jsx("i",{className:"bi bi-person-lines-fill"})," درباره ما"]})}),e.jsx("li",{children:e.jsxs(t,{className:"dropdown-item",to:"/contact/",children:[e.jsx("i",{className:"bi bi-telephone-fill"})," تماس با ما"]})})]})]})]}),e.jsx("ul",{className:"navbar-nav navbar-nav-scroll me-auto",children:e.jsx("div",{className:"nav-item nav-item-left",children:i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"d-flex flex-column flex-sm-row align-items-start align-items-sm-center",style:{gap:"0.5rem"},children:[e.jsxs("div",{className:"nav-item dropdown ms-2 mb-2 mb-sm-0",children:[e.jsxs("button",{className:"btn btn-primary dropdown-toggle",id:"dashboardMenu","data-bs-toggle":"dropdown","aria-expanded":"false",type:"button",style:{direction:"rtl"},children:["داشبورد ",e.jsx("i",{className:"bi bi-person-fill"})]}),e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"dashboardMenu",style:{direction:"rtl",textAlign:"right"},children:[e.jsx("li",{children:e.jsxs(t,{className:"dropdown-item",to:"/dashboard/",children:[e.jsx("i",{className:"bi bi-person-workspace"})," میزکار",v&&e.jsx("span",{className:"badge bg-success rounded-circle ms-2 me-1",style:{width:"8px",height:"8px",display:"inline-block",padding:0,borderRadius:"50%"}})]})}),e.jsx("li",{children:e.jsxs(t,{className:"dropdown-item",to:"/profile/",children:[e.jsx("i",{className:"bi bi-person-circle"})," پروفایل"]})})]})]}),e.jsx("div",{children:e.jsxs("button",{onClick:y,className:"btn btn-danger ms-2 logout-button",children:["خروج ",e.jsx("i",{className:"fas fa-sign-out-alt"})]})})]})}):e.jsxs(t,{to:"/login/",className:"btn btn-success ms-2",href:"dashboard.html",style:{backgroundColor:"#609f63",border:"None"},children:["ورود ",e.jsx("i",{className:"fas fa-sign-in-alt"})]})})})]})]})})}),d&&e.jsx("div",{className:"logout-popup-overlay",children:e.jsxs("div",{className:"logout-popup-content card shadow p-4",style:{maxWidth:"400px",textAlign:"center",direction:"rtl",position:"relative"},children:[e.jsx("h1",{className:"mb-1 fw-bold",children:"شما خارج شدید"}),e.jsx("span",{children:"از بازدید شما از وبسایت متشکریم، هر زمان بازگردید!"}),e.jsx("div",{className:"progress-bar"})]})})]})}export{U as default};
