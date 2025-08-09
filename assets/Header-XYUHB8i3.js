import{r,q as z,e as A,f as E,j as e,L as o,a as j,t as I}from"./index-CKEMhG-j.js";const P={fa:{home:"خانه",articles:"مقالات",news:"اخبار",departments:"دپارتمان‌ها",about:"درباره ما",contact:"تماس با ما",language:"زبان",search:"جستجو کنید",dashboard:"داشبورد",profile:"پروفایل",workspace:"میزکار",login:"ورود",logout:"خروج",loading:"در حال بارگذاری...",aboutUs:"درباره ما",contactUs:"تماس با ما",اخبار:"اخبار","صنایع خلاق":"صنایع خلاق","بین الملل":"بین الملل","رسالت اجتماعی":"رسالت اجتماعی","مد و پوشاک":"مد و پوشاک",سلامت:"سلامت","صنایع غذایی":"صنایع غذایی",readMore:"ادامه مطلب",search:"جستجو",noResults:"نتیجه‌ای یافت نشد",error:"خطا در بارگذاری",retry:"تلاش مجدد",save:"ذخیره",cancel:"لغو",delete:"حذف",edit:"ویرایش",add:"افزودن",submit:"ارسال",close:"بستن",confirm:"تایید",back:"بازگشت",next:"بعدی",previous:"قبلی",persian:"فارسی",english:"English",arabic:"العربية"},en:{home:"Home",articles:"Articles",news:"News",departments:"Departments",about:"About Us",contact:"Contact Us",language:"Language",search:"Search...",dashboard:"Dashboard",profile:"Profile",workspace:"Workspace",login:"Login",logout:"Logout",loading:"Loading...",aboutUs:"About Us",contactUs:"Contact Us",اخبار:"News","صنایع خلاق":"Creative Industries","بین الملل":"International","رسالت اجتماعی":"Social Responsibility","مد و پوشاک":"Fashion & Clothing",سلامت:"Health","صنایع غذایی":"Food Industry",readMore:"Read More",search:"Search",noResults:"No results found",error:"Error loading",retry:"Retry",save:"Save",cancel:"Cancel",delete:"Delete",edit:"Edit",add:"Add",submit:"Submit",close:"Close",confirm:"Confirm",back:"Back",next:"Next",previous:"Previous",persian:"Persian",english:"English",arabic:"Arabic"},ar:{home:"الرئيسية",articles:"المقالات",news:"الأخبار",departments:"الأقسام",about:"من نحن",contact:"اتصل بنا",language:"اللغة",search:"ابحث...",dashboard:"لوحة التحكم",profile:"الملف الشخصي",workspace:"مساحة العمل",login:"تسجيل الدخول",logout:"تسجيل الخروج",loading:"جاري التحميل...",aboutUs:"من نحن",contactUs:"اتصل بنا",اخبار:"الأخبار","صنایع خلاق":"الصناعات الإبداعية","بین الملل":"الدولية","رسالت اجتماعی":"المسؤولية الاجتماعية","مد و پوشاک":"الموضة والملابس",سلامت:"الصحة","صنایع غذایی":"الصناعات الغذائية",readMore:"اقرأ المزيد",search:"بحث",noResults:"لم يتم العثور على نتائج",error:"خطأ في التحميل",retry:"إعادة المحاولة",save:"حفظ",cancel:"إلغاء",delete:"حذف",edit:"تعديل",add:"إضافة",submit:"إرسال",close:"إغلاق",confirm:"تأكيد",back:"رجوع",next:"التالي",previous:"السابق",persian:"الفارسية",english:"الإنجليزية",arabic:"العربية"}};let u="fa";const F=()=>{const i=new URLSearchParams(window.location.search).get("lang");i&&["fa","en","ar"].includes(i)&&(u=i)},s=t=>P[u][t]||t,T=t=>{if(["fa","en","ar"].includes(t)){u=t;const i=new URL(window.location);i.searchParams.set("lang",t),window.history.replaceState({},"",i),window.location.reload()}},D=()=>u;F();const H="/assets/logo-removebg-preview-CazftZ_M.webp";function W(){const[t,i]=r.useState(!1),[v,N]=r.useState([]),[y,x]=r.useState(!0),[g,k]=r.useState(""),[C,h]=r.useState(!1),m=z(a=>a.isLoggedIn)(),w=A(),L=E(),[l,M]=r.useState(D()),b=a=>{T(a),M(a)};r.useEffect(()=>{let a;return t&&(a=setTimeout(()=>{i(!1),w("/")},1500)),()=>clearTimeout(a)},[t]),r.useEffect(()=>{(async()=>{try{x(!0);const d=await j.get("post/category/list/");N(d.data)}catch(d){console.error("Failed to fetch categories:",d)}finally{x(!1)}})()},[]);const U=()=>{I(!1),i(!0)},f=async()=>{if(!m){h(!1);return}try{const d=(await j.get("contact-message/list/")).data.some(p=>!p.responded);h(d)}catch(a){console.error("Failed to fetch contact messages:",a)}};return r.useEffect(()=>{f();const a=()=>{if(!m){h(!1);return}f()};return window.addEventListener("contactMessagesUpdated",a),()=>{window.removeEventListener("contactMessagesUpdated",a)}},[m]),r.useEffect(()=>{f()},[L]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
            `}),e.jsx("header",{className:"navbar-dark navbar-sticky header-static",style:{backgroundColor:"#887298"},children:e.jsx("nav",{className:"navbar navbar-expand-lg",children:e.jsxs("div",{className:"container",style:{direction:"rtl"},children:[e.jsxs("button",{className:"navbar-toggler ms-auto",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:[e.jsx("span",{className:"h6 d-none d-sm-inline-block text-white",children:l==="fa"?"منو":l==="en"?"Menu":"القائمة"}),e.jsx("span",{className:"navbar-toggler-icon"})]}),e.jsx(o,{className:"navbar-brand",to:"/",children:e.jsx("img",{className:"navbar-brand-item dark-mode-item",src:H,style:{width:"50px"},alt:"logo"})}),e.jsxs("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[e.jsx("div",{className:"nav mt-3 mt-lg-0 px-4 flex-nowrap align-items-center",children:e.jsx("div",{className:"nav-item w-100",children:e.jsxs("form",{className:"rounded position-relative",onSubmit:a=>{a.preventDefault(),g.trim()!==""&&w(`/search/${encodeURIComponent(g.trim())}`)},children:[e.jsx("input",{className:"form-control pe-5 text-end",type:"search",placeholder:s("search"),"aria-label":"Search",value:g,onChange:a=>k(a.target.value),style:{border:"none",boxShadow:"none",backgroundColor:"#665672",color:"white"}}),e.jsx("button",{type:"submit",className:"btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y",children:e.jsx("i",{className:"bi bi-search fs-5",children:" "})})]})})}),e.jsxs("ul",{className:"navbar-nav navbar-nav-scroll ms-auto",children:[e.jsx("li",{className:"nav-item",children:e.jsx(o,{className:"nav-link",to:"/",children:s("home")})}),e.jsx("li",{className:"nav-item",children:e.jsx(o,{className:"nav-link",to:"/all-posts",children:s("articles")})}),e.jsx("li",{className:"nav-item",children:e.jsx(o,{className:"nav-link",to:"/news",children:s("news")})}),e.jsxs("li",{className:"nav-item dropdown",style:{direction:"rtl"},children:[e.jsx("button",{className:"nav-link dropdown-toggle btn btn-link",type:"button",style:{direction:"rtl"},id:"departmentsMenu","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:s("departments")}),y?e.jsx("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"departmentsMenu",style:{direction:"rtl",textAlign:"right",marginTop:0},children:e.jsx("li",{className:"dropdown-item text-center",children:s("loading")})}):(()=>{const a=["bi bi-globe-central-south-asia","fas fa-utensils","fas fa-tractor","fas fa-tshirt","fas fa-fan","fas fa-wine-glass","fas fa-building","fas fa-plus-square","fas fa-users"],p=v.filter(n=>n.title!=="اخبار").map((n,c)=>({to:`/category/${n.slug}/`,icon:a[c]||"fas fa-folder",label:s(n.title)||n.title})),S=p.slice(0,5),R=p.slice(5);return e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end dropdown-menu-columns","aria-labelledby":"departmentsMenu",style:{direction:"rtl",textAlign:"right"},"aria-expanded":"false",children:[e.jsx(e.Fragment,{children:S.map((n,c)=>e.jsx("li",{children:e.jsxs(o,{className:"dropdown-item",to:n.to,"aria-current":"false","aria-disabled":"false",children:[e.jsx("i",{className:n.icon})," ",n.label]})},c))}),e.jsx(e.Fragment,{children:R.map((n,c)=>e.jsx("li",{children:e.jsxs(o,{className:"dropdown-item",to:n.to,"aria-current":"false","aria-disabled":"false",children:[e.jsx("i",{className:n.icon})," ",n.label]})},c))})]})})()]}),e.jsxs("li",{className:"nav-item dropdown",style:{direction:"rtl"},children:[e.jsx("a",{className:"nav-link dropdown-toggle",href:"#",id:"pagesMenu","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:s("about")}),e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"pagesMenu",style:{direction:"rtl",textAlign:"right"},children:[e.jsx("li",{children:e.jsxs(o,{className:"dropdown-item",to:"/about/",children:[e.jsx("i",{className:"bi bi-person-lines-fill"})," ",s("aboutUs")]})}),e.jsx("li",{children:e.jsxs(o,{className:"dropdown-item",to:"/contact/",children:[e.jsx("i",{className:"bi bi-telephone-fill"})," ",s("contactUs")]})})]})]}),e.jsxs("li",{className:"nav-item dropdown",style:{direction:"rtl"},children:[e.jsx("a",{className:"nav-link dropdown-toggle",href:"#",id:"languageMenu","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:e.jsx("i",{className:"bi bi-globe"})}),e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"languageMenu",style:{direction:"rtl",textAlign:"right"},children:[e.jsx("li",{children:e.jsx("a",{className:"dropdown-item",href:"#",onClick:()=>b("fa"),children:s("persian")})}),e.jsx("li",{children:e.jsx("a",{className:"dropdown-item",href:"#",onClick:()=>b("en"),children:s("english")})}),e.jsx("li",{children:e.jsx("a",{className:"dropdown-item",href:"#",onClick:()=>b("ar"),children:s("arabic")})})]})]})]}),e.jsx("ul",{className:"navbar-nav navbar-nav-scroll me-auto",children:e.jsx("div",{className:"nav-item nav-item-left",children:m?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"d-flex flex-column flex-sm-row align-items-start align-items-sm-center",style:{gap:"0.5rem"},children:[e.jsxs("div",{className:"nav-item dropdown ms-2 mb-2 mb-sm-0",children:[e.jsxs("button",{className:"btn btn-primary dropdown-toggle",id:"dashboardMenu","data-bs-toggle":"dropdown","aria-expanded":"false",type:"button",style:{direction:"rtl"},children:[s("dashboard")," ",e.jsx("i",{className:"bi bi-person-fill"})]}),e.jsxs("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"dashboardMenu",style:{direction:"rtl",textAlign:"right"},children:[e.jsx("li",{children:e.jsxs(o,{className:"dropdown-item",to:"/dashboard/",children:[e.jsx("i",{className:"bi bi-person-workspace"})," ",s("workspace"),C&&e.jsx("span",{className:"badge bg-success rounded-circle ms-2 me-1",style:{width:"8px",height:"8px",display:"inline-block",padding:0,borderRadius:"50%"}})]})}),e.jsx("li",{children:e.jsxs(o,{className:"dropdown-item",to:"/profile/",children:[e.jsx("i",{className:"bi bi-person-circle"})," ",s("profile")]})})]})]}),e.jsx("div",{children:e.jsxs("button",{onClick:U,className:"btn btn-danger ms-2 logout-button",children:[s("logout")," ",e.jsx("i",{className:"fas fa-sign-out-alt"})]})})]})}):e.jsxs(o,{to:"/login/",className:"btn btn-success ms-2",href:"dashboard.html",style:{backgroundColor:"#609f63",border:"None"},children:[s("login")," ",e.jsx("i",{className:"fas fa-sign-in-alt"})]})})})]})]})})}),t&&e.jsx("div",{className:"logout-popup-overlay",children:e.jsxs("div",{className:"logout-popup-content card shadow p-4",style:{maxWidth:"400px",textAlign:"center",direction:"rtl",position:"relative"},children:[e.jsx("h1",{className:"mb-1 fw-bold",children:l==="fa"?"شما خارج شدید":l==="en"?"You have been logged out":"تم تسجيل الخروج"}),e.jsx("span",{children:l==="fa"?"از بازدید شما از وبسایت متشکریم، هر زمان بازگردید!":l==="en"?"Thank you for visiting our website, come back anytime!":"شكراً لزيارتك لموقعنا، عد في أي وقت!"}),e.jsx("div",{className:"progress-bar"})]})})]})}export{W as default};
