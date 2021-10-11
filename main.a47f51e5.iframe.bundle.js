(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{41:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ACCENT})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ACCENTS})),__webpack_require__.d(__webpack_exports__,"c",(function(){return SIZE})),__webpack_require__.d(__webpack_exports__,"d",(function(){return SIZES}));__webpack_require__(115);var ACCENT={PRIMARY:"primary",SECONDARY:"secondary",SUCCESS:"success",DANGER:"danger",WARNING:"warning",INFO:"info"},ACCENTS=Object.values(ACCENT),SIZE={SMALL:"small",MEDIUM:"medium",LARGE:"large"},SIZES=Object.values(SIZE)},490:function(module,exports,__webpack_require__){__webpack_require__(491),__webpack_require__(646),__webpack_require__(647),__webpack_require__(877),__webpack_require__(878),__webpack_require__(884),__webpack_require__(885),__webpack_require__(883),__webpack_require__(879),__webpack_require__(886),__webpack_require__(880),__webpack_require__(881),__webpack_require__(882),module.exports=__webpack_require__(863)},557:function(module,exports){},647:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(354)},863:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(354).configure)([__webpack_require__(864),__webpack_require__(865)],module,!1)}).call(this,__webpack_require__(205)(module))},864:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=864},865:function(module,exports,__webpack_require__){var map={"./elements/Button.stories.jsx":887,"./fields/Select.stories.jsx":888,"./fields/TextInput.stories.jsx":889};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=865},882:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators})),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(22),__webpack_require__(5),__webpack_require__(51),__webpack_require__(433),__webpack_require__(841),__webpack_require__(47),__webpack_require__(842),__webpack_require__(843),__webpack_require__(432);var _templateObject,client_api=__webpack_require__(896),esm=__webpack_require__(4),styled_components_browser_esm=(__webpack_require__(0),__webpack_require__(56)),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),theme={appearance:{borderRadius:{small:"0.25rem",medium:"0.25rem",large:"0.375rem"}},color:{body:{background:"#f7f9fc",light:"#6c757d"},primary:{default:"#3f80ea",active:"#366dc7"},secondary:{default:"#7f838e",active:"#6c6f79"},success:{default:"#4bbf73",active:"#40a262"},danger:{default:"#d9534f",active:"#b84743"},warning:{default:"#cc8b37",active:"#ad762f"},info:{default:"#1f9bcf",active:"#1a84b0"}},padding:{button:{small:"0.375rem 0.75rem",medium:"0.5rem 1rem",large:"0.75rem 1.5rem"},input:{small:"0.375rem",medium:"0.5rem",large:"0.75rem"},layout:{tiny:"0.25rem",small:"0.5rem",medium:"1rem",large:"2rem"}},typography:{font:{default:{family:"'Poppins', sans-serif",size:"16px",weight:300}},size:{small:.875,medium:1,large:1.25}}},ThemeColorShape=prop_types_default.a.shape({default:prop_types_default.a.string,active:prop_types_default.a.string}),ThemeSizeShape=prop_types_default.a.shape({small:prop_types_default.a.string,medium:prop_types_default.a.string,large:prop_types_default.a.string});prop_types_default.a.shape({appearance:{borderRadius:ThemeSizeShape},color:{body:{background:prop_types_default.a.string,light:prop_types_default.a.string},primary:ThemeColorShape,secondary:ThemeColorShape,success:ThemeColorShape,danger:ThemeColorShape,warning:ThemeColorShape,info:ThemeColorShape},padding:{button:ThemeSizeShape,input:ThemeSizeShape,layout:{tiny:prop_types_default.a.string,small:prop_types_default.a.string,medium:prop_types_default.a.string,large:prop_types_default.a.string}},typography:{font:{default:{family:prop_types_default.a.string,size:prop_types_default.a.string,weight:prop_types_default.a.number}},size:{small:prop_types_default.a.number,medium:prop_types_default.a.number,large:prop_types_default.a.number}}}),__webpack_require__(12),__webpack_require__(844),__webpack_require__(850),__webpack_require__(856);var GlobalStyle_0=Object(styled_components_browser_esm.b)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  body {\n    font-family: ",";\n    font-size: ",";\n    font-weigth: ",";\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  ::placeholder {\n    color: ",";\n  }\n"])),(function(p){return p.theme.typography.font.default.family}),(function(p){return p.theme.typography.font.default.size}),(function(p){return p.theme.typography.font.default.weigth}),(function(p){return p.theme.color.body.light})),jsx_runtime=__webpack_require__(34),decorators=[function(Story){return Object(jsx_runtime.jsxs)(styled_components_browser_esm.a,{theme:theme,children:[Object(jsx_runtime.jsx)(GlobalStyle_0,{}),Object(jsx_runtime.jsx)(Story,{})]})}],parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},887:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Button",(function(){return Button_stories_Button}));__webpack_require__(11);var _templateObject,react=__webpack_require__(0),react_default=__webpack_require__.n(react),constants=__webpack_require__(41),prop_types=(__webpack_require__(12),__webpack_require__(22),__webpack_require__(303),__webpack_require__(5),__webpack_require__(1)),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(56),jsx_runtime=__webpack_require__(34),_excluded=["accent","children","size","type"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var StyledButton=styled_components_browser_esm.c.button(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  background-color: ",";\n  border: solid 1px ",";\n  border-radius: ",";\n  color: white;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: ","%;\n  font-weight: 400;\n  padding: ",";\n  transition-delay: 0s, 0s, 0s, 0s;\n  transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;\n  transition-property: color, background-color, border-color, box-shadow;\n  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;\n\n  :disabled {\n    opacity: 0.65;\n  }\n\n  :hover {\n    background-color: ",";\n  }\n"])),(function(p){return p.theme.color[p.accent].default}),(function(p){return p.theme.color[p.accent].default}),(function(p){return p.theme.appearance.borderRadius[p.size]}),(function(p){return Math.round(100*p.theme.typography.size[p.size])}),(function(p){return p.theme.padding.button[p.size]}),(function(p){return p.theme.color[p.accent].active})),Button_Button=react_default.a.forwardRef((function(_ref,ref){var accent=_ref.accent,children=_ref.children,size=_ref.size,type=_ref.type,props=_objectWithoutProperties(_ref,_excluded);return Object(jsx_runtime.jsx)(StyledButton,Object.assign({ref:ref,accent:accent,size:size,type:type},props,{children:children}))}));Button_Button.displayName="Button",Button_Button.defaultProps={accent:constants.a.PRIMARY,size:constants.c.MEDIUM,type:"button"},Button_Button.propTypes={accent:prop_types_default.a.oneOf(constants.b),size:prop_types_default.a.oneOf(constants.d),type:prop_types_default.a.oneOf(["button","submit","reset"])},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{accent:{defaultValue:{value:"ACCENT.PRIMARY",computed:!0},type:{name:"enum",computed:!0,value:"ACCENTS"},required:!1,description:""},size:{defaultValue:{value:"SIZE.MEDIUM",computed:!0},type:{name:"enum",computed:!0,value:"SIZES"},required:!1,description:""},type:{defaultValue:{value:"'button'",computed:!1},type:{name:"enum",value:[{value:"'button'",computed:!1},{value:"'submit'",computed:!1},{value:"'reset'",computed:!1}]},required:!1,description:""}}};var elements_Button=Button_Button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["elements/Button.jsx"]={name:"Button",docgenInfo:Button_Button.__docgenInfo,path:"elements/Button.jsx"});__webpack_exports__.default={title:"Elements/Button",component:elements_Button,argTypes:{accent:{options:constants.b,control:{type:"inline-radio"}},size:{options:constants.d,control:{type:"inline-radio"}},type:{control:{type:"inline-radio"}}},args:{accent:constants.a.PRIMARY,size:constants.c.MEDIUM,type:"button"}};var Button_stories_Button=function Button(props){return Object(jsx_runtime.jsx)(elements_Button,Object.assign({},props,{children:"Button"}))};Button_stories_Button.displayName="Button",Button_stories_Button.parameters=Object.assign({storySource:{source:"props => <SingularityButton {...props}>Button</SingularityButton>"}},Button_stories_Button.parameters),Button_stories_Button.__docgenInfo={description:"",methods:[],displayName:"Button"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/elements/Button.stories.jsx"]={name:"Button",docgenInfo:Button_stories_Button.__docgenInfo,path:"stories/elements/Button.stories.jsx"})},888:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Select",(function(){return Select_stories_Select}));__webpack_require__(11);var _templateObject,_templateObject2,_templateObject3,_templateObject4,react=__webpack_require__(0),react_default=__webpack_require__.n(react),constants=__webpack_require__(41),prop_types=(__webpack_require__(12),__webpack_require__(22),__webpack_require__(303),__webpack_require__(5),__webpack_require__(1)),prop_types_default=__webpack_require__.n(prop_types),react_select_esm=__webpack_require__(469),styled_components_browser_esm=__webpack_require__(56),jsx_runtime=__webpack_require__(34),_excluded=["className","error","helper","label","options","size"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var Label=styled_components_browser_esm.c.label(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  display: block;\n  font-size: ","%;\n  font-weight: 500;\n  padding: 0 0 "," 0;\n"])),(function(p){return Math.round(80*p.theme.typography.size[p.size])}),(function(p){return p.theme.padding.layout.tiny})),StyledSelect=Object(styled_components_browser_esm.c)(react_select_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  .Select__control {\n    border: solid 1px ",";\n    border-radius: ",";\n    font-family: inherit;\n    font-size: ","%;\n    font-weight: 400;\n    transition-delay: 0s, 0s, 0s, 0s;\n    transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;\n    transition-property: color, background-color, border-color, box-shadow;\n    transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;\n\n    :disabled {\n      opacity: 0.65;\n    }\n\n    :hover {\n      border: solid 1px ",";\n    }\n  }\n\n  .Select__value-container {\n    padding: ",";\n  }\n\n  .Select__placeholder {\n    color: ",";\n    margin: 0;\n  }\n\n  .Select__input-container {\n    margin: 0;\n    padding: 0;\n  }\n"])),(function(p){return p.hasError?p.theme.color.danger.default:p.theme.color.secondary.default}),(function(p){return p.theme.appearance.borderRadius[p.size]}),(function(p){return Math.round(100*p.theme.typography.size[p.size])}),(function(p){return p.hasError?p.theme.color.danger.active:p.theme.color.secondary.active}),(function(p){return p.theme.padding.input[p.size]}),(function(p){return p.theme.color.body.light})),Helper=styled_components_browser_esm.c.p(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  margin: 0;\n  padding: "," 0 0 0;\n"])),(function(p){return p.theme.padding.layout.tiny})),Error=styled_components_browser_esm.c.p(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  color: ",";\n  font-weight: 500;\n  margin: 0;\n  padding: "," 0 0 0;\n"])),(function(p){return p.theme.color.danger.default}),(function(p){return p.theme.padding.layout.tiny})),Select_Select=react_default.a.forwardRef((function(_ref,ref){var className=_ref.className,error=_ref.error,helper=_ref.helper,label=_ref.label,options=_ref.options,size=_ref.size,props=_objectWithoutProperties(_ref,_excluded),hasError=null!==error;return Object(jsx_runtime.jsxs)("div",{className:className,children:[label&&Object(jsx_runtime.jsx)(Label,{className:"Label",size:size,children:label}),Object(jsx_runtime.jsx)(StyledSelect,Object.assign({ref:ref,className:"Select",classNamePrefix:"Select",hasError:hasError,options:options,size:size},props)),!error&&helper&&Object(jsx_runtime.jsx)(Helper,{className:"Helper",size:size,children:helper}),error&&Object(jsx_runtime.jsx)(Error,{className:"Error",size:size,children:error})]})}));Select_Select.displayName="Select",Select_Select.defaultProps={error:null,helper:null,label:null,size:constants.c.MEDIUM},Select_Select.propTypes={error:prop_types_default.a.string,helper:prop_types_default.a.string,label:prop_types_default.a.string,options:prop_types_default.a.arrayOf(prop_types_default.a.shape({label:prop_types_default.a.string.isRequired,value:prop_types_default.a.string.isRequired})).isRequired,size:prop_types_default.a.oneOf(constants.d)},Select_Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{error:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},helper:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},label:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},size:{defaultValue:{value:"SIZE.MEDIUM",computed:!0},type:{name:"enum",computed:!0,value:"SIZES"},required:!1,description:""},options:{type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},value:{name:"string",required:!0}}}},required:!0,description:""}}};var fields_Select=Select_Select;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["fields/Select.jsx"]={name:"Select",docgenInfo:Select_Select.__docgenInfo,path:"fields/Select.jsx"});__webpack_exports__.default={title:"Fields/Select",component:fields_Select,argTypes:{size:{options:constants.d,control:{type:"inline-radio"}}},args:{size:constants.c.MEDIUM}};var Select_stories_Select=function Select(props){return Object(jsx_runtime.jsx)(fields_Select,Object.assign({options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]},props))};Select_stories_Select.displayName="Select",Select_stories_Select.parameters=Object.assign({storySource:{source:"props => (\n  <SingularitySelect\n    options={[\n      { value: 'option1', label: 'Option 1' },\n      { value: 'option2', label: 'Option 2' },\n      { value: 'option3', label: 'Option 3' },\n    ]}\n    {...props}\n  />\n)"}},Select_stories_Select.parameters),Select_stories_Select.__docgenInfo={description:"",methods:[],displayName:"Select"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/fields/Select.stories.jsx"]={name:"Select",docgenInfo:Select_stories_Select.__docgenInfo,path:"stories/fields/Select.stories.jsx"})},889:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TextInput",(function(){return TextInput_stories_TextInput}));__webpack_require__(11);var _templateObject,_templateObject2,_templateObject3,_templateObject4,react=__webpack_require__(0),react_default=__webpack_require__.n(react),constants=__webpack_require__(41),prop_types=(__webpack_require__(12),__webpack_require__(22),__webpack_require__(303),__webpack_require__(5),__webpack_require__(1)),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(56),jsx_runtime=__webpack_require__(34),_excluded=["className","error","helper","label","size"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var Label=styled_components_browser_esm.c.label(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  display: block;\n  font-size: ","%;\n  font-weight: 500;\n  padding: 0 0 "," 0;\n"])),(function(p){return Math.round(80*p.theme.typography.size[p.size])}),(function(p){return p.theme.padding.layout.tiny})),StyledInput=styled_components_browser_esm.c.input(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  border: solid 1px ",";\n  border-radius: ",";\n  font-family: inherit;\n  font-size: ","%;\n  font-weight: 400;\n  padding: ",";\n  transition-delay: 0s, 0s, 0s, 0s;\n  transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;\n  transition-property: color, background-color, border-color, box-shadow;\n  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;\n\n  :disabled {\n    opacity: 0.65;\n  }\n\n  :hover {\n    border: solid 1px ",";\n  }\n"])),(function(p){return p.hasError?p.theme.color.danger.default:p.theme.color.secondary.default}),(function(p){return p.theme.appearance.borderRadius[p.size]}),(function(p){return Math.round(100*p.theme.typography.size[p.size])}),(function(p){return p.theme.padding.input[p.size]}),(function(p){return p.hasError?p.theme.color.danger.active:p.theme.color.secondary.active})),Helper=styled_components_browser_esm.c.p(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  margin: 0;\n  padding: "," 0 0 0;\n"])),(function(p){return p.theme.padding.layout.tiny})),Error=styled_components_browser_esm.c.p(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  color: ",";\n  font-weight: 500;\n  margin: 0;\n  padding: "," 0 0 0;\n"])),(function(p){return p.theme.color.danger.default}),(function(p){return p.theme.padding.layout.tiny})),TextInput_TextInput=react_default.a.forwardRef((function(_ref,ref){var className=_ref.className,error=_ref.error,helper=_ref.helper,label=_ref.label,size=_ref.size,props=_objectWithoutProperties(_ref,_excluded),hasError=null!==error;return Object(jsx_runtime.jsxs)("div",{className:className,children:[label&&Object(jsx_runtime.jsx)(Label,{className:"Label",size:size,children:label}),Object(jsx_runtime.jsx)(StyledInput,Object.assign({ref:ref,className:"TextInput",hasError:hasError,size:size},props)),!error&&helper&&Object(jsx_runtime.jsx)(Helper,{className:"Helper",size:size,children:helper}),error&&Object(jsx_runtime.jsx)(Error,{className:"Error",size:size,children:error})]})}));TextInput_TextInput.displayName="TextInput",TextInput_TextInput.defaultProps={error:null,helper:null,label:null,size:constants.c.MEDIUM},TextInput_TextInput.propTypes={error:prop_types_default.a.string,helper:prop_types_default.a.string,label:prop_types_default.a.string,size:prop_types_default.a.oneOf(constants.d)},TextInput_TextInput.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{error:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},helper:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},label:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},size:{defaultValue:{value:"SIZE.MEDIUM",computed:!0},type:{name:"enum",computed:!0,value:"SIZES"},required:!1,description:""}}};var fields_TextInput=TextInput_TextInput;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["fields/TextInput.jsx"]={name:"TextInput",docgenInfo:TextInput_TextInput.__docgenInfo,path:"fields/TextInput.jsx"});__webpack_exports__.default={title:"Fields/Text Input",component:fields_TextInput,argTypes:{size:{options:constants.d,control:{type:"inline-radio"}}},args:{size:constants.c.MEDIUM}};var TextInput_stories_TextInput=function TextInput(props){return Object(jsx_runtime.jsx)(fields_TextInput,Object.assign({},props,{placeholder:"Text Input"}))};TextInput_stories_TextInput.displayName="TextInput",TextInput_stories_TextInput.parameters=Object.assign({storySource:{source:'props => <SingularityTextInput {...props} placeholder="Text Input" />'}},TextInput_stories_TextInput.parameters),TextInput_stories_TextInput.__docgenInfo={description:"",methods:[],displayName:"TextInput"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/fields/TextInput.stories.jsx"]={name:"TextInput",docgenInfo:TextInput_stories_TextInput.__docgenInfo,path:"stories/fields/TextInput.stories.jsx"})}},[[490,2,3]]]);