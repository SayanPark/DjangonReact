import{r as n,j as e,L as w,a as v}from"./index-CFKtu5GJ.js";import{M as y}from"./Moment-D6SXh_T4.js";function L(){const[l,m]=n.useState([]),[c,h]=n.useState(12),[o,x]=n.useState("");n.useEffect(()=>{(async()=>{try{const a=(await v.get("post/lists/")).data.results.filter(d=>{const r=d.status.toLowerCase(),j=d.category?.title||"";return r!=="draft"&&r!=="disabled"&&r!=="پیش‌ نویس"&&r!=="غیرفعال"&&j!=="اخبار"});m(a)}catch(s){console.error("Failed to fetch posts:",s)}})()},[]);const f=t=>{x(t.target.value)},i=[...l];o==="Newest"?i.sort((t,s)=>new Date(s.date)-new Date(t.date)):o==="Oldest"&&i.sort((t,s)=>new Date(t.date)-new Date(s.date));const g=i.slice(0,c),u=()=>{h(t=>Math.min(t+4,12))},p=c<Math.min(l.length,12);return e.jsxs("div",{className:"justify-content-center me-4",style:{direction:"rtl",textAlign:"right",marginLeft:"24px"},children:[e.jsx("div",{className:"row mb-4 me-1 md-0",children:e.jsxs("div",{className:"col-md-3",children:[e.jsx("h2",{className:"mt-4",children:"مقالات"}),e.jsx("form",{children:e.jsxs("select",{onChange:f,value:o,className:"form-select z-index-9 bg-transparent","aria-label":".form-select-sm",children:[e.jsx("option",{value:"",children:"مرتب سازی براساس"}),e.jsx("option",{value:"Newest",children:"جدیدترین"}),e.jsx("option",{value:"Oldest",children:"قدیمی‌ترین"})]})})]})}),e.jsx("div",{className:"row me-1 md-1",style:{margin:"0",padding:"0"},children:g.map(t=>e.jsx("div",{className:"col-sm-6 col-lg-3 post-title-container",style:{overflow:"hidden"},children:e.jsxs("div",{className:"card mb-4",children:[e.jsx("div",{className:"card-fold position-relative",children:e.jsx("img",{className:"card-img",style:{width:"100%",height:"160px",objectFit:"cover"},src:t.image,alt:"Card image",onError:s=>{s.target.style.display="none";const a=document.createElement("div");a.style.cssText=`
                                            width: 100%;
                                            height: 160px;
                                            background-color: #f0f0f0;
                                            border-radius: 4px;
                                            position: relative;
                                            overflow: hidden;
                                        `,a.innerHTML=`
                                            <div style="
                                                position: absolute;
                                                top: 0;
                                                left: 0;
                                                width: 100%;
                                                height: 100%;
                                                background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
                                                animation: shimmer 1.5s infinite;
                                            "></div>
                                            <style>
                                                @keyframes shimmer {
                                                    0% { transform: translateX(-100%); }
                                                    100% { transform: translateX(100%); }
                                                }
                                            </style>
                                        `,s.target.parentNode.insertBefore(a,s.target.nextSibling)}})}),e.jsxs("div",{className:"card-body px-3 pt-3",children:[e.jsx("h4",{className:"card-title",style:{overflow:"hidden",whiteSpace:"nowrap"},children:e.jsx(w,{to:`/post/${t.slug}`,className:"btn-link text-reset stretched-link fw-bold text-decoration-none post-title-text",title:t.title,children:t.title.length>18?t.title.substring(0,18)+"…":t.title})}),e.jsxs("ul",{className:"mt-3 list-style-none",style:{listStyle:"none",paddingRight:0},children:[e.jsx("li",{children:e.jsxs("a",{href:"#",className:"text-dark text-decoration-none",children:[e.jsx("i",{className:"fas fa-user"})," ",t.user?.full_name]})}),e.jsxs("li",{className:"mt-2",children:[e.jsx("i",{className:"fas fa-calendar"})," ",y(t.date)]})]})]})]})},t.id))}),p&&e.jsx("div",{className:"d-flex justify-content-center mt-3",children:e.jsx("button",{className:"btn btn-primary",onClick:u,children:"مشاهده بیشتر"})})]})}export{L as default};
