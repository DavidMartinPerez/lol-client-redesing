var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,r=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,o=(e,o)=>{for(var i in o||(o={}))t.call(o,i)&&r(e,i,o[i]);if(n)for(var i of n(o))l.call(o,i)&&r(e,i,o[i]);return e};import{q as i,D as a,a as c}from"./vendor.1a784e0e.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const l=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,o)=>{const i=new URL(e,l);if(self[t].moduleMap[i])return n(self[t].moduleMap[i]);const a=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){o(new Error(`Failed to import: ${e}`)),r(c)},onload(){n(self[t].moduleMap[i]),r(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");const s="#116677",m=i.circle`
    position: relative;
    img {
        position: relative;
        height: 50px;
        width: 50px;
        background-size: cover;
        border-radius: 50%;
        opacity: ${e=>e.status?"1":"0.2"};
    }
    &:after {
        position: absolute;
        top: 0px;
        right: 0px;
        content: "";
        display: block;
        width: 14px;
        height: 14px;
        background-color: ${e=>e.status?"#4ee818":"#e6000044"};
        border-radius: 50%;
    }
`;function p({img:e,name:t,online:n}){return a.createElement(m,{status:n},a.createElement("img",{src:e,alt:t}))}function u(e){return a.createElement("svg",o({height:48,viewBox:"0 0 21 21",width:48,xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{d:"M11 16.517c4.418 0 8-3.026 8-6.758C19 6.026 15.418 3 11 3S3 6.026 3 9.759c0 1.457.546 2.807 1.475 3.91L3.5 18.25l3.916-2.447a9.181 9.181 0 003.584.714z",stroke:e.fill,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M10.999 11c.5 0 1-.5 1-1s-.5-1-1-1S10 9.5 10 10s.499 1 .999 1zm-4 0c.5 0 1-.5 1-1s-.5-1-1-1S6 9.5 6 10s.499 1 .999 1zm8 0c.5 0 1.001-.5 1.001-1s-.5-1-1-1-1 .5-1 1 .5 1 1 1z",fill:e.fill})))}const d=i.div`
    display: flex;
    flex-direction: column;
    justify-content: ${e=>e.justifyContent};
    align-items: center;
    > * {
        margin-top: ${e=>e.margin}px;
        cursor: pointer;
    }
`;d.defaultProps={margin:0,justifyContent:"flex-start"};const f=i.section`
    display: grid;
    grid-template-rows: 50px 1fr 50px;
    background-color: ${"#060607"}88;
`,h="https://static.wikia.nocookie.net/leagueoflegends/images/8/8e/Pretty_Kitty_Rengar_profileicon.png",g=!0,w="Pepe",x="https://static.wikia.nocookie.net/leagueoflegends/images/8/8e/Pretty_Kitty_Rengar_profileicon.png",v=!1,E="Tresh";function b(){return a.createElement(f,null,a.createElement(d,null,a.createElement(p,{name:w,img:"https://www.mobafire.com/images/avatars/yuumi-classic.png",online:g})),a.createElement(d,{margin:20,justifyContent:"center"},a.createElement(p,{name:w,img:h,online:g}),a.createElement(p,{name:w,img:h,online:g}),a.createElement(p,{name:E,img:x,online:v}),a.createElement(p,{name:E,img:x,online:v})),a.createElement(d,null,a.createElement(u,{fill:"#fff"})))}const y=i.button`
    background-color: ${s};
    border-radius: 50px;
    border: none;
    box-shadow: 0px 7px 17px 1px ${s};
    color: ${"#fff"};
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    height: 50px;
    outline: none;
    padding: 5px;
    transform: scale(.9);
    transition: 0.2s;
    width: 150px;
    &:hover {
        transform: scale(1);
        box-shadow: 0px 2px 20px 1px ${s};
        font-size: 20px;
    }
`;function z(){return a.createElement(y,null,"INICIAR")}const k=i.div`
    overflow: hidden;
    padding-bottom: 400px;
    width: 600px;
    position: relative;
    height: 0;

    iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }
`,j=({embedId:e})=>a.createElement(k,null,a.createElement("iframe",{width:"670",height:"377",src:`https://www.youtube.com/embed/${e}`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})),L=i.section`
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,$=i.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`,M=i.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,C=i.div`
    > * {
        position: relative;
        color: ${"#fff"};
        display: inline;
    }
    > *:before {
        content:'';
        display: block;
        position: absolute;
        top: 5px;
        left: -20px;
        width: 14px;
        height: 14px;
        background-color: ${e=>{var t;return null!=(t=e.color)?t:"red"}};
        box-shadow: 0px 1px 13px 3px ${e=>{var t;return null!=(t=e.color)?t:"red"}};
        border-radius: 50%;
    }
`,R=i.article`
    color: ${"#fff"};
    > * {
        margin: 0px;
        text-transform: uppercase;
    }
    h2{
        font-size: 5rem;
        display: inline;
        line-height: 4rem;
    }
    h5 {
        font-size: 28px;
        color: ${"#c99101"}
    }
    p {
        padding-top: 2rem;
        font-size: 0.9rem;
        color: ${"#99999B"}
    }
`,B=i.div`
    display: flex;
`,_=i.div`
    padding-left: 30px;
    p{ margin: 0px; }
    p:first-child {
        font-size:2rem;
        color: ${"#fff"}
    }
    p:last-child {
        font-size:1.5rem;
        color: ${"#C1C0B7"}
    }
`,A=[{color:"#c99101",value:3200},{color:s,value:3200}];function O(){return a.createElement(L,null,a.createElement($,null,a.createElement(z,null),a.createElement(B,null,a.createElement(M,null,A.map((({value:e,color:t})=>a.createElement(C,{key:t,color:t}," ",a.createElement("p",null,e)," ")))),a.createElement(_,null,a.createElement("p",null,"xDeivi"),a.createElement("p",null,"Nivel: 105")))),a.createElement(R,null,a.createElement("h5",null,"lol pls"),a.createElement("h2",null,"Estado del juego ",a.createElement("br",null),"y el cliente"),a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nobis quasi, necessitatibus aut ",a.createElement("br",null)," eaque dolor illum? Corporis labore voluptas ullam asperiores"),a.createElement(j,{embedId:"Zasx9hjo4WY"})))}function P(e){return a.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:50,height:50},e),a.createElement("path",{d:"M11 3a1 1 0 00-.8 1.6L13 8.334v2.787l-.059-.078C8.118 14.693 5 20.489 5 27c0 6.249 2.876 11.834 7.373 15.502L10.199 45.4A1 1 0 0011 47h28a1 1 0 00.768-.36l5-6A1 1 0 0044 39h-3.016A19.907 19.907 0 0045 27c0-11.033-8.967-20-20-20-.336 0-.669.01-1 .025V4a1 1 0 00-1-1H11zm2 2h9v35a1 1 0 001 1h18.865l-3.334 4H13l1.8-2.4a1 1 0 00.2-.6V8a1 1 0 00-.2-.6L13 5zm12 4c9.953 0 18 8.047 18 18 0 4.62-1.746 8.814-4.602 12h-2.826C38.898 36.067 41 31.776 41 27c0-8.824-7.176-16-16-16-.336 0-.669.013-1 .033v-1.98c.333-.019.662-.053 1-.053zm0 4c7.744 0 14 6.256 14 14 0 5.006-2.619 9.384-6.559 11.861a1 1 0 00-.002.002c-.074.047-.152.092-.228.137H24V13.037c.33-.023.663-.037 1-.037zm-12 .592v2.845A15.936 15.936 0 009 27c0 4.047 1.517 7.743 4 10.563v2.851A17.94 17.94 0 017 27c0-5.336 2.32-10.113 6-13.408zm0 6.215v14.386A13.907 13.907 0 0111 27c0-2.637.736-5.091 2-7.193z"}))}function V(e){return a.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:48,height:48},e),a.createElement("path",{d:"M23.951 4a1.5 1.5 0 00-.879.322L8.86 15.52A7.504 7.504 0 006 21.41V40.5C6 41.864 7.136 43 8.5 43h10c1.364 0 2.5-1.136 2.5-2.5v-10c0-.295.205-.5.5-.5h5c.295 0 .5.205.5.5v10c0 1.364 1.136 2.5 2.5 2.5h10c1.364 0 2.5-1.136 2.5-2.5V21.41a7.504 7.504 0 00-2.86-5.89L24.929 4.322A1.5 1.5 0 0023.95 4zM24 7.41l13.285 10.467A4.494 4.494 0 0139 21.41V40h-9v-9.5c0-1.915-1.585-3.5-3.5-3.5h-5c-1.915 0-3.5 1.585-3.5 3.5V40H9V21.41c0-1.38.63-2.679 1.715-3.533L24 7.41z"}))}function I(e){return a.createElement("svg",o({height:48,viewBox:"0 0 21 21",width:48,xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("g",{fill:"none",fillRule:"evenodd",stroke:e.fill,strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("path",{d:"M4.5 10.5h12v5a2 2 0 01-2 2h-8a2 2 0 01-2-2zM10.5 7.5v10"}),a.createElement("path",{d:"M7.5 7.5h3v-2c0-1.5-2.219-1.781-3-1s-.781 2.219 0 3zm6 0h-3v-2c0-1.5 2.219-1.781 3-1 .781.781.781 2.219 0 3zm-9 0h12a1 1 0 011 1v1a1 1 0 01-1 1h-12a1 1 0 01-1-1v-1a1 1 0 011-1z"})))}function S(e){return a.createElement("svg",o({height:48,viewBox:"0 0 21 21",width:48,xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("g",{fill:"none",fillRule:"evenodd",stroke:e.fill,strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("path",{d:"M7.5 3.5h6a1 1 0 011 1v5a4 4 0 11-8 0v-5a1 1 0 011-1zM10.5 13.5v3M7.5 16.5h6a1 1 0 010 2h-6a1 1 0 010-2zm7-11h2a1 1 0 011 1v1a2 2 0 01-2 2h-1zm-8 0h-2a1 1 0 00-1 1v1a2 2 0 002 2h1z"})))}function U(e){return a.createElement("svg",o({height:48,viewBox:"0 0 21 21",width:48,xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("g",{fill:"none",fillRule:"evenodd",stroke:e.fill,strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("path",{d:"M6.426 4.503L14.52 4.5a1 1 0 01.997.92l.894 10.999a1 1 0 01-.916 1.078l-.08.003H5.58a1 1 0 01-1-1l.003-.077.846-10.997a1 1 0 01.997-.923z"}),a.createElement("path",{d:"M13.5 8.5v.645c0 1.105-1.895 1.355-3 1.355s-3-.395-3-1.5v-.5"})))}const H=i.aside`
    display: grid;
    grid-template-rows: 120px 1fr 50px;
    background-color: ${"#060607"}66;
`;function q(){return a.createElement(H,null,a.createElement(d,null,a.createElement(P,{fill:"#fff"})),a.createElement(d,{margin:20,justifyContent:"center"},a.createElement(V,{fill:"#fff"}),a.createElement(I,{fill:"#fff"}),a.createElement(S,{fill:"#fff"})),a.createElement(d,null,a.createElement(U,{fill:"#fff"})))}const F=i.section`
    background-image: url('https://www.pixel4k.com/wp-content/uploads/2019/11/yorick-lol-splash-art-league-of-legends_1574100321.jpg');
    background-size: cover;
    height: calc(100%);
    width: 100%;
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    z-index: 1;

    > * {
        padding: 50px 0px;
        height: calc(100% - 100px);
    }
`;function D(){return a.createElement(F,null,a.createElement(q,null),a.createElement(O,null),a.createElement(b,null))}c.render(a.createElement(a.StrictMode,null,a.createElement(D,null)),document.getElementById("root"));
