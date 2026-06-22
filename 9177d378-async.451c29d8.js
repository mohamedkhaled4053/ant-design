(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["9177d378"],{"1827d03d":function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=r("777fffbe"),n=r("f19d2b93");r("169d676f");var l=a._(r("072ab8a9"));r("2a5e301e");var o=r("a9d1a279"),d=a._(r("bb46b683"));l.default.extend(d.default);var s=()=>{let{token:e}=o.theme.useToken(),t={width:300,border:`1px solid ${e.colorBorderSecondary}`,borderRadius:e.borderRadiusLG};return(0,n.jsx)("div",{style:t,children:(0,n.jsx)(o.Calendar,{fullscreen:!1,headerRender:({value:e,type:t,onChange:r,onTypeChange:a})=>{let l=e.year(),d=e.month(),s=Array.from({length:20},(e,t)=>{let r=l-10+t;return{label:r,value:r};}),i=e.localeData().monthsShort().map((e,t)=>({label:e,value:t}));return(0,n.jsxs)("div",{style:{padding:8},children:[(0,n.jsx)(o.Typography.Title,{level:4,children:"Custom header"}),(0,n.jsxs)(o.Flex,{gap:8,children:[(0,n.jsxs)(o.Radio.Group,{size:"small",onChange:e=>a(e.target.value),value:t,children:[(0,n.jsx)(o.Radio.Button,{value:"month",children:"Month"}),(0,n.jsx)(o.Radio.Button,{value:"year",children:"Year"})]}),(0,n.jsx)(o.Select,{size:"small",popupMatchSelectWidth:!1,value:l,options:s,onChange:t=>{r(e.clone().year(t));}}),(0,n.jsx)(o.Select,{size:"small",popupMatchSelectWidth:!1,value:d,options:i,onChange:t=>{r(e.clone().month(t));}})]})]});},onPanelChange:(e,t)=>{console.log(e.format("YYYY-MM-DD"),t);}})});};},"254d5ab0":function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.d(t,"default",{enumerable:!0,get:function(){return h;}});var a=r("777fffbe"),n=r("f19d2b93");r("0f1d0b1d");var l=a._(r("5b220c3d")),o=r("a9d1a279"),d=r("3835a2b7"),s=r("c84cdf47"),i=a._(r("072ab8a9")),c=r("466fa8f0");let u=(0,d.createStyles)(({token:e,css:t,cx:r})=>{let a=t`
    color: ${e.colorTextTertiary};
    font-size: ${e.fontSizeSM}px;
  `,n=t`
    color: ${e.colorError};
    &.gray {
      opacity: 0.4;
    }
  `;return{wrapper:t`
      width: 450px;
      border: 1px solid ${e.colorBorderSecondary};
      border-radius: ${e.borderRadiusOuter};
      padding: 5px;
    `,dateCell:t`
      position: relative;
      &:before {
        content: '';
        position: absolute;
        inset-inline-start: 0;
        inset-inline-end: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        max-width: 40px;
        max-height: 40px;
        background: transparent;
        transition: background-color 300ms;
        border-radius: ${e.borderRadiusOuter}px;
        border: 1px solid transparent;
        box-sizing: border-box;
      }
      &:hover:before {
        background: ${e.controlItemBgHover};
      }
    `,today:t`
      &:before {
        border: 1px solid ${e.colorPrimary};
      }
    `,text:t`
      position: relative;
      z-index: 1;
    `,lunar:a,current:t`
      color: ${e.colorTextLightSolid};
      &:before {
        background: ${e.colorPrimary};
      }
      &:hover:before {
        background: ${e.colorPrimary};
        opacity: 0.8;
      }
      .${r(a)} {
        color: ${e.colorTextLightSolid};
        opacity: 0.9;
      }
      .${r(n)} {
        color: ${e.colorTextLightSolid};
      }
    `,monthCell:t`
      width: 120px;
      color: ${e.colorTextBase};
      border-radius: ${e.borderRadiusOuter}px;
      padding: 5px 0;
      &:hover {
        background: ${e.controlItemBgHover};
      }
    `,monthCellCurrent:t`
      color: ${e.colorTextLightSolid};
      background: ${e.colorPrimary};
      &:hover {
        background: ${e.colorPrimary};
        opacity: 0.8;
      }
    `,weekend:n};});var h=()=>{let{styles:e}=u({test:!0}),[t,r]=l.default.useState(()=>(0,i.default)()),[a,d]=l.default.useState(()=>(0,i.default)()),h=e=>{let t=c.Lunar.fromDate(new Date(e+1,0));return`${t.getYearInChinese()}\u{5E74}\u{FF08}${t.getYearInGanZhi()}${t.getYearShengXiao()}\u{5E74}\u{FF09}`;},f=(e,t)=>{let r=c.Lunar.fromDate(new Date(t.year(),e)).getMonthInChinese();return`${e+1}\u{6708}\u{FF08}${r}\u{6708}\u{FF09}`;};return(0,n.jsx)("div",{className:e.wrapper,children:(0,n.jsx)(o.Calendar,{fullCellRender:(r,o)=>{let d=c.Lunar.fromDate(r.toDate()),u=d.getDayInChinese(),h=d.getJieQi(),f=6===r.day()||0===r.day(),m=c.HolidayUtil.getHoliday(r.get("year"),r.get("month")+1,r.get("date")),b=(null==m?void 0:m.getTarget())===(null==m?void 0:m.getDay())?null==m?void 0:m.getName():void 0;if("date"===o.type)return l.default.cloneElement(o.originNode,{...o.originNode.props,className:(0,s.clsx)(e.dateCell,{[e.current]:t.isSame(r,"date"),[e.today]:r.isSame((0,i.default)(),"date")}),children:(0,n.jsxs)("div",{className:e.text,children:[(0,n.jsx)("span",{className:(0,s.clsx)({[e.weekend]:f,gray:!a.isSame(r,"month")}),children:r.get("date")}),"date"===o.type&&(0,n.jsx)("div",{className:e.lunar,children:b||h||u})]})});if("month"===o.type){let a=c.Lunar.fromDate(new Date(r.get("year"),r.get("month"))).getMonthInChinese();return(0,n.jsxs)("div",{className:(0,s.clsx)(e.monthCell,{[e.monthCellCurrent]:t.isSame(r,"month")}),children:[r.get("month")+1,"\u6708\uFF08",a,"\u6708\uFF09"]});}},fullscreen:!1,onPanelChange:(e,t)=>{console.log(e.format("YYYY-MM-DD"),t),d(e);},onSelect:e=>{r(e);},headerRender:({value:e,type:t,onChange:r,onTypeChange:a})=>{let l=[],d=e.clone(),s=e.localeData(),i=[];for(let e=0;e<12;e++)d=d.month(e),i.push(s.monthsShort(d));for(let t=0;t<12;t++)l.push({label:f(t,e),value:t});let c=e.year(),u=e.month(),m=[];for(let e=c-10;e<c+10;e+=1)m.push({label:h(e),value:e});return(0,n.jsxs)(o.Row,{justify:"end",gutter:8,style:{padding:8},children:[(0,n.jsx)(o.Col,{children:(0,n.jsx)(o.Select,{size:"small",popupMatchSelectWidth:!1,className:"my-year-select",value:c,options:m,onChange:t=>{r(e.clone().year(t));}})}),(0,n.jsx)(o.Col,{children:(0,n.jsx)(o.Select,{size:"small",popupMatchSelectWidth:!1,value:u,options:l,onChange:t=>{r(e.clone().month(t));}})}),(0,n.jsx)(o.Col,{children:(0,n.jsxs)(o.Radio.Group,{size:"small",onChange:e=>a(e.target.value),value:t,children:[(0,n.jsx)(o.Radio.Button,{value:"month",children:"\u6708"}),(0,n.jsx)(o.Radio.Button,{value:"year",children:"\u5E74"})]})})]});}})});};},"2b7fe20b":function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.d(t,"default",{enumerable:!0,get:function(){return l;}});var a=r("f19d2b93");r("437b09ed");var n=r("a9d1a279"),l=()=>(0,a.jsx)(n.Calendar,{onPanelChange:(e,t)=>{console.log(e.format("YYYY-MM-DD"),t);}});},"48b6db83":function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=r("f19d2b93");r("ef051bee");var n=r("a9d1a279");let l=(0,r("3835a2b7").createStyles)(({token:e})=>({root:{padding:10,backgroundColor:e.colorPrimaryBg}})),o={root:{borderRadius:8,width:600}},d=e=>{if(e.props.fullscreen)return{root:{border:"2px solid #BDE3C3",borderRadius:10,backgroundColor:"rgba(189,227,195, 0.3)"}};};var s=()=>{let{styles:e}=l();return(0,a.jsxs)(n.Flex,{vertical:!0,gap:"medium",children:[(0,a.jsx)(n.Calendar,{fullscreen:!1,classNames:e,styles:o}),(0,a.jsx)(n.Calendar,{classNames:e,styles:d})]});};},"65452e92":function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.d(t,"default",{enumerable:!0,get:function(){return m;}});var a=r("777fffbe"),n=r("f19d2b93");r("3e45f061");var l=a._(r("5b220c3d")),o=r("a9d1a279"),d=r("3835a2b7"),s=r("c84cdf47"),i=a._(r("072ab8a9"));let c=(0,d.createStyles)(({cssVar:e,css:t})=>{let{controlHeight:r,marginXXS:a,controlHeightSM:n,colorTextLightSolid:l,fontSizeSM:o,paddingXS:d,marginXS:s,paddingXXS:i}=e;return{itemContent:t`
      overflow: visible;
    `,cell:t`
      min-height: ${r};
    `,list:t`
      display: flex;
      flex-direction: column;
      gap: ${a};
      margin-top: ${a};
    `,bar:t`
      display: block;
      height: calc(${n} - ${a});
      overflow: hidden;
      color: ${l};
      font-size: ${o};
      white-space: nowrap;
      text-overflow: ellipsis;
    `,barStart:t`
      margin-inline-end: calc(-1 * (${d} + ${s} / 2));
      padding-inline-start: calc(${i} + ${i});
      border-start-start-radius: ${999}px;
      border-end-start-radius: ${999}px;
    `,barMiddle:t`
      margin-inline: calc(-1 * (${d} + ${s} / 2));
    `,barEnd:t`
      margin-inline-start: calc(-1 * (${d} + ${s} / 2));
      border-start-end-radius: ${999}px;
      border-end-end-radius: ${999}px;
    `,barSingle:t`
      padding-inline-start: calc(${i} + ${i});
      border-radius: ${999}px;
    `};}),u=e=>[{key:"release",title:"Release window",start:(0,i.default)("2026-01-08"),end:(0,i.default)("2026-01-10"),color:e.colorPrimary},{key:"design-review",title:"Design review",start:(0,i.default)("2026-01-14"),end:(0,i.default)("2026-01-14"),color:e.colorSuccess},{key:"maintenance",title:"Maintenance",start:(0,i.default)("2026-01-21"),end:(0,i.default)("2026-01-24"),color:e.colorWarning},{key:"bug-fix",title:"Bug fix",start:(0,i.default)("2026-01-30"),end:(0,i.default)("2026-01-31"),color:e.colorError}],h=(e,t)=>!e.isBefore(t.start,"day")&&!e.isAfter(t.end,"day"),f=(e,t)=>{let r=e.isSame(t.start,"day"),a=e.isSame(t.end,"day");return r&&a?"single":r?"start":a?"end":"middle";};var m=()=>{let{token:e}=o.theme.useToken(),{styles:t}=c(),r=l.default.useMemo(()=>u(e),[e]),a=l.default.useCallback((e,a)=>{if("date"!==a.type)return null;let l=r.filter(t=>h(e,t));return(0,n.jsx)("div",{className:t.cell,children:(0,n.jsx)("div",{className:t.list,children:l.map(r=>{let a=f(e,r),l={start:t.barStart,middle:t.barMiddle,end:t.barEnd,single:t.barSingle}[a];return(0,n.jsx)("span",{className:(0,s.clsx)(t.bar,l),style:{backgroundColor:r.color},children:"start"===a||"single"===a?r.title:null},r.key);})})});},[r,t]);return(0,n.jsx)(o.Calendar,{classNames:{itemContent:t.itemContent},defaultValue:(0,i.default)("2026-01-01"),cellRender:a});};},"8afc0b8d":function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.d(t,"default",{enumerable:!0,get:function(){return d;}});var a=r("f19d2b93");r("853ad754");var n=r("a9d1a279");let l=e=>{let t=[];switch(e.date()){case 8:t=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."}];break;case 10:t=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."},{type:"error",content:"This is error event."}];break;case 15:t=[{type:"warning",content:"This is warning event"},{type:"success",content:"This is very long usual event......"},{type:"error",content:"This is error event 1."},{type:"error",content:"This is error event 2."},{type:"error",content:"This is error event 3."},{type:"error",content:"This is error event 4."}];}return t||[];},o=e=>{if(8===e.month())return 1394;};var d=()=>{let e=e=>{let t=o(e);return t?(0,a.jsxs)("div",{className:"notes-month",children:[(0,a.jsx)("section",{children:t}),(0,a.jsx)("span",{children:"Backlog number"})]}):null;},t=e=>{let t=l(e);return(0,a.jsx)("ul",{className:"events",children:t.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(n.Badge,{status:e.type,text:e.content})},e.content))});};return(0,a.jsx)(n.Calendar,{cellRender:(r,a)=>"date"===a.type?t(r):"month"===a.type?e(r):a.originNode});};},da87304f:function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.d(t,"default",{enumerable:!0,get:function(){return l;}});var a=r("f19d2b93");r("fbf17e09");var n=r("a9d1a279"),l=()=>{let e=(e,t)=>{console.log(e.format("YYYY-MM-DD"),t);};return(0,a.jsxs)(n.ConfigProvider,{theme:{components:{Calendar:{fullBg:"red",fullPanelBg:"green",itemActiveBg:"black"}}},children:[(0,a.jsx)(n.Calendar,{onPanelChange:e}),(0,a.jsx)("br",{}),(0,a.jsx)(n.Calendar,{onPanelChange:e,fullscreen:!1})]});};},e19ebdb7:function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.d(t,"default",{enumerable:!0,get:function(){return l;}});var a=r("f19d2b93");r("20f66d77");var n=r("a9d1a279"),l=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Calendar,{fullscreen:!0,showWeek:!0}),(0,a.jsx)("br",{}),(0,a.jsx)(n.Calendar,{fullscreen:!1,showWeek:!0})]});},e8885d73:function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.d(t,"default",{enumerable:!0,get:function(){return o;}});var a=r("f19d2b93");r("fd2a6204");var n=r("a9d1a279");let l=(e,t)=>{console.log(e.format("YYYY-MM-DD"),t);};var o=()=>{let{token:e}=n.theme.useToken(),t={width:300,border:`1px solid ${e.colorBorderSecondary}`,borderRadius:e.borderRadiusLG};return(0,a.jsx)("div",{style:t,children:(0,a.jsx)(n.Calendar,{fullscreen:!1,onPanelChange:l})});};},fd9ca1e1:function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=r("777fffbe"),n=r("f19d2b93");r("a0fb7dae");var l=r("5b220c3d"),o=r("a9d1a279"),d=a._(r("072ab8a9")),s=()=>{let[e,t]=(0,l.useState)(()=>(0,d.default)("2017-01-25")),[r,a]=(0,l.useState)(()=>(0,d.default)("2017-01-25"));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Alert,{title:`You selected date: ${null==r?void 0:r.format("YYYY-MM-DD")}`}),(0,n.jsx)(o.Calendar,{value:e,onSelect:e=>{t(e),a(e);},onPanelChange:e=>{t(e);}})]});};},fda1bc14:function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.d(t,"default",{enumerable:!0,get:function(){return i;}});var a=r("777fffbe"),n=r("f19d2b93");r("b3fd8975");var l=r("a9d1a279"),o=a._(r("f4312251")),d=a._(r("23546486"));let s={cn:{root:"\u6839\u5143\u7D20\uFF0C\u5305\u542B\u65E5\u5386\u7EC4\u4EF6\u7684\u80CC\u666F\u8272\u3001\u8FB9\u6846\u3001\u5706\u89D2\u7B49\u57FA\u7840\u6837\u5F0F\u548C\u6574\u4F53\u5E03\u5C40\u7ED3\u6784",header:"\u5934\u90E8\u5143\u7D20\uFF0C\u5305\u542B\u5E74\u4EFD\u9009\u62E9\u5668\u3001\u6708\u4EFD\u9009\u62E9\u5668\u3001\u6A21\u5F0F\u5207\u6362\u5668\u7684\u5E03\u5C40\u548C\u6837\u5F0F\u63A7\u5236",body:"\u4E3B\u4F53\u5143\u7D20\uFF0C\u5305\u542B\u65E5\u5386\u8868\u683C\u7684\u5185\u8FB9\u8DDD\u3001\u5E03\u5C40\u63A7\u5236\u7B49\u6837\u5F0F\uFF0C\u7528\u4E8E\u5BB9\u7EB3\u65E5\u5386\u7F51\u683C",content:"\u5185\u5BB9\u5143\u7D20\uFF0C\u5305\u542B\u65E5\u5386\u8868\u683C\u7684\u5BBD\u5EA6\u3001\u9AD8\u5EA6\u7B49\u5C3A\u5BF8\u63A7\u5236\u548C\u8868\u683C\u6837\u5F0F",item:"\u6761\u76EE\u5143\u7D20\uFF0C\u5305\u542B\u65E5\u5386\u5355\u5143\u683C\u7684\u80CC\u666F\u8272\u3001\u8FB9\u6846\u3001\u60AC\u505C\u6001\u3001\u9009\u4E2D\u6001\u7B49\u4EA4\u4E92\u6837\u5F0F",itemContent:"\u6761\u76EE\u5185\u5BB9\u5143\u7D20\uFF0C\u5305\u542B\u65E5\u5386\u5355\u5143\u683C\u5185\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A\u57DF\u7684\u9AD8\u5EA6\u3001\u6EA2\u51FA\u7B49\u6837\u5F0F\u63A7\u5236"},en:{root:"Root element containing background, border, border-radius and overall layout structure of the calendar component",header:"Header element with layout and style control for year selector, month selector and mode switcher",body:"Body element with padding and layout control for the calendar table that contains the calendar grid",content:"Content element with width, height and table styling control for the calendar table",item:"Item element with background, border, hover state, selected state and other interactive styles for calendar cells",itemContent:"Item content element with height, overflow and other style control for custom content area inside calendar cells"}};var i=()=>{let[e]=(0,d.default)(s);return(0,n.jsx)(o.default,{componentName:"Calendar",semantics:[{name:"root",desc:e.root,version:"6.0.0"},{name:"header",desc:e.header,version:"6.0.0"},{name:"body",desc:e.body,version:"6.0.0"},{name:"content",desc:e.content,version:"6.0.0"},{name:"item",desc:e.item,version:"6.0.0"},{name:"itemContent",desc:e.itemContent,version:"6.4.0"}],children:(0,n.jsx)(l.Calendar,{})});};}}]);