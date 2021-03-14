(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(68),c=a.n(s),i=(a(76),a(77),a(11)),o=a.n(i),l=a(21),u=a(5),m=a(6),d=a(9),p=a(8),h=a(10),f="http://localhost:5000/api",E=function(){function e(){Object(u.a)(this,e)}return Object(m.a)(e,[{key:"api",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=f+e,c={method:t,headers:{"Content-Type":"application/json; charset=utf-8"}};if(null!==a&&(c.body=JSON.stringify(a)),n){var i=btoa("".concat(r.emailAddress,":").concat(r.password));c.headers.Authorization="Basic ".concat(i)}return fetch(s,c)}},{key:"getUser",value:function(){var e=Object(l.a)(o.a.mark(function e(t,a){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users","GET",null,!0,{emailAddress:t,password:a});case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json().then(function(e){return e}));case 7:if(401!==n.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(l.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users","POST",t);case 2:if(201!==(a=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==a.status){e.next=11;break}return e.abrupt("return",a.json().then(function(e){return e}));case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateCourse",value:function(){var e=Object(l.a)(o.a.mark(function e(t,a,n,r){var s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(a),"PUT",t,!0,{emailAddress:n,password:r});case 2:if(204!==(s=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==s.status){e.next=11;break}return e.abrupt("return",s.json().then(function(e){return e}));case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(t,a,n,r){return e.apply(this,arguments)}}()},{key:"createCourse",value:function(){var e=Object(l.a)(o.a.mark(function e(t,a,n){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses","POST",t,!0,{emailAddress:a,password:n});case 2:if(201!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==r.status){e.next=11;break}return e.abrupt("return",r.json().then(function(e){return e}));case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"deleteCourse",value:function(){var e=Object(l.a)(o.a.mark(function e(t,a,n,r){var s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(a),"DELETE",t,!0,{emailAddress:n,password:r});case 2:if(204!==(s=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==s.status){e.next=11;break}return e.abrupt("return",s.json().then(function(e){return e}));case 11:throw new Error;case 12:case"end":return e.stop()}},e,this)}));return function(t,a,n,r){return e.apply(this,arguments)}}()}]),e}(),v=a(32),b=a.n(v),g=r.a.createContext(),N=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).state={authenticatedUser:b.a.getJSON("authenticatedUser")||null},e.signIn=function(){var t=Object(l.a)(o.a.mark(function t(a,n){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.data.getUser(a,n);case 2:return null!==(r=t.sent)&&(r.password=n,e.setState(function(){return{authenticatedUser:r}}),b.a.set("authenticatedUser",JSON.stringify(r),{})),t.abrupt("return",r);case 5:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}(),e.signOut=function(){e.setState(function(){return{authenticatedUser:null}}),b.a.remove("authenticatedUser")},e.previousPage=function(){e.history.props.go(-1)},e.data=new E,e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e={authenticatedUser:this.state.authenticatedUser,data:this.data,actions:{signIn:this.signIn,signOut:this.signOut,goBack:this.previousPage}};return r.a.createElement(g.Provider,{value:e},this.props.children)}}]),t}(n.Component),w=g.Consumer;function y(e){return function(t){return r.a.createElement(g.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{context:a}))})}}var O=a(1),C=a(2),j=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.context.authenticatedUser;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"bounds"},r.a.createElement("h1",{className:"header--logo"},"Full Stack App"),r.a.createElement("nav",null,e?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Welcome, ",e.firstName,"!"),r.a.createElement(O.b,{to:"/signout"},"Sign Out")):r.a.createElement(r.a.Fragment,null,r.a.createElement(O.b,{className:"signup",to:"/signup"},"Sign Up"),r.a.createElement(O.b,{className:"signin",to:"/signin"},"Sign In")))))}}]),t}(r.a.PureComponent),x=function(){var e=Object(C.g)();console.log(e);return r.a.createElement("div",{className:"bounds"},r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",null,"Sorry! We couldn't find the page you're looking for."),r.a.createElement("div",{className:"pad-bottom"},r.a.createElement("button",{className:"button",onClick:function(){e.push("/")},type:"submit"}," Return ")))},k=a(20),A=function(e){var t=e.cancel,a=e.errors,n=e.submit,s=e.submitButtonText,c=e.elements;return r.a.createElement("div",null,r.a.createElement(S,{errors:a}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n()}},c(),r.a.createElement("div",{className:"pad-bottom"},r.a.createElement("button",{className:"button",type:"submit"},s),r.a.createElement("button",{className:"button button-secondary",onClick:function(e){e.preventDefault(),t()}},"Cancel"))))};function S(e){var t=e.errors,a=null;return t.length&&(a=r.a.createElement("div",null,r.a.createElement("h2",{className:"validation--errors--label"},"Validation errors"),r.a.createElement("div",{className:"validation-errors"},r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement("li",{key:t},e)}))))),a}var T=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",emailAddress:"",password:"",confirmPassword:"",errors:[]},a.change=function(e){var t=e.target.name,n=e.target.value;a.setState(function(){return Object(k.a)({},t,n)})},a.submit=function(){var e=a.props.context,t=a.state,n=t.firstName,r=t.lastName,s=t.emailAddress,c=t.password,i=t.confirmPassword,o={firstName:n,lastName:r,emailAddress:s,password:c,confirmPassword:i};o.password!==o.confirmPassword?a.setState({errors:["Password do not match"]}):e.data.createUser(o).then(function(t){t.message?a.setState({errors:t.message}):e.actions.signIn(s,c).then(function(){a.props.history.push("/authenticated")})}).catch(function(e){a.props.history.push("/error")})},a.cancel=function(){a.props.history.push("/")},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.firstName,n=t.lastName,s=t.emailAddress,c=t.password,i=t.confirmPassword,o=t.errors;return r.a.createElement("div",{className:"bounds"},r.a.createElement("div",{className:"grid-33 centered signin"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement(A,{cancel:this.cancel,errors:o,submit:this.submit,submitButtonText:"Sign Up",elements:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:"firstName",name:"firstName",type:"text",value:a,onChange:e.change,placeholder:"First Name"}),r.a.createElement("input",{id:"lastName",name:"lastName",type:"text",value:n,onChange:e.change,placeholder:"Last Name"}),r.a.createElement("input",{id:"emailAdress",name:"emailAddress",type:"email",value:s,onChange:e.change,placeholder:"Email Address"}),r.a.createElement("input",{id:"password",name:"password",type:"password",value:c,onChange:e.change,placeholder:"Password"}),r.a.createElement("input",{id:"confirmPassword",name:"confirmPassword",type:"password",value:i,onChange:e.change,placeholder:"Confirm Password"}))}}),r.a.createElement("p",null,"Already have a user account? ",r.a.createElement(O.b,{to:"/signin"},"Click here")," to sign in!")))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={emailAddress:"",password:"",errors:[]},a.change=function(e){var t=e.target.name,n=e.target.value;a.setState(function(){return Object(k.a)({},t,n)})},a.submit=function(){var e=a.props.context,t=(a.props.location.state||{from:{pathname:"/authenticated"}}).from,n=a.state,r=n.emailAddress,s=n.password;e.actions.signIn(r,s).then(function(e){null===e?a.setState(function(){return{errors:["Sign-in was unsuccessful"]}}):(a.props.history.push(t),console.log("SUCCESS! ".concat(r," is now signed in!")))}).catch(function(e){a.props.history.push("/error")})},a.cancel=function(){a.props.history.push("/")},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.emailAddress,n=t.password,s=t.errors;return r.a.createElement("div",{className:"bounds"},r.a.createElement("div",{className:"grid-33 centered signin"},r.a.createElement("h1",null,"Sign In"),r.a.createElement(A,{cancel:this.cancel,errors:s,submit:this.submit,submitButtonText:"Sign In",elements:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:"emailAddress",name:"emailAddress",type:"text",value:a,onChange:e.change,placeholder:"Email Address"}),r.a.createElement("input",{id:"password",name:"password",type:"password",value:n,onChange:e.change,placeholder:"Password"}))}}),r.a.createElement("p",null,"Don't have a user account? ",r.a.createElement(O.b,{to:"/signup"},"Click here")," to sign up!")))}}]),t}(n.Component),F=a(24),P=a.n(F),I=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).getData=function(){P.a.get("https://fullstackreactapp01.herokuapp.com/api/courses").then(function(e){return a.setState({data:e.data})}).catch(function(e){403===e.response.status?a.props.history.push("/forbidden"):404===e.response.status?a.props.history.push("/notfound"):(e.response.data,a.props.history.push("/error"))})},a.state={data:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.data.map(function(e){return r.a.createElement("div",{className:"grid-33",key:e.id},r.a.createElement(O.c,{className:"course--module course--link",to:"/courses/".concat(e.id)},r.a.createElement("h4",{className:"course--label"},"Course"),r.a.createElement("h3",{className:"course--title"},e.title)))});return r.a.createElement("div",{className:"bounds"},e,r.a.createElement("div",{className:"grid-33"},r.a.createElement(O.c,{className:"course--module course--add--module",to:"/courses/create"},r.a.createElement("h3",{className:"course--add--title"},r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 13 13",className:"add"},r.a.createElement("polygon",{points:"7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "})),"New Course"))))}}]),t}(n.Component),D=a(45),B=a.n(D),L=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",title:"",description:"",estimatedTime:"",materialsNeeded:"",ownerFirstName:"",ownerLastName:"",ownerEmailAddress:""},a.getCourseDetail=function(){var e=a.props.match.params.id;P.a.get("http://localhost:5000/api/courses/".concat(e)).then(function(e){a.setState({id:e.data.id,title:e.data.title,description:e.data.description,estimatedTime:e.data.estimatedTime,materialsNeeded:e.data.materialsNeeded,ownerFirstName:e.data.Owner.firstName,ownerLastName:e.data.Owner.lastName,ownerEmailAddress:e.data.Owner.emailAddress})}).catch(function(e){404===e.response.status?a.props.history.push("/notfound"):403===e.response.status?a.props.history.push("/forbidden"):a.props.history.push("/error")})},a.delete=function(){var e=a.props.context,t=e.authenticatedUser,n=t.emailAddress,r=t.password,s=a.state,c=s.id,i={id:c,title:s.title,description:s.description,estimatedTime:s.estimatedTime,materialsNeeded:s.materialsNeeded};e.data.deleteCourse(i,c,n,r).then(function(e){e.message?a.setState({errors:e.message}):(console.log("Course delete successfully"),a.props.history.push("/"))}).catch(function(e){a.props.history.push("/error")})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getCourseDetail()}},{key:"render",value:function(){var e=this.props.context,t=this.state,a=t.id,n=t.title,s=t.description,c=t.estimatedTime,i=t.materialsNeeded,o=t.ownerFirstName,l=t.ownerLastName,u=t.ownerEmailAddress;return r.a.createElement("div",null,r.a.createElement("div",{className:"actions--bar"},null!==e.authenticatedUser&&e.authenticatedUser.emailAddress===u?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bounds"},r.a.createElement("div",{className:"grid-100"},r.a.createElement("span",null,r.a.createElement(O.b,{className:"button",to:"/Courses/".concat(a,"/update")},"Update Course"),r.a.createElement("button",{className:"button",onClick:this.delete},"Delete Course")),r.a.createElement(O.b,{className:"button button-secondary",to:"/"},"Return to List")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bounds"},r.a.createElement("div",{className:"grid-100"},r.a.createElement(O.b,{className:"button button-secondary",to:"/"},"Return to List"))))),r.a.createElement("div",{className:"bounds course--detail"},r.a.createElement("div",{className:"grid-66"},r.a.createElement("div",{className:"course--header"},r.a.createElement("h4",{className:"course--label"},"Course"),r.a.createElement("h3",{className:"course--title"},n),r.a.createElement("p",null,"By ",o," ",l)),r.a.createElement("div",{className:"course--description"},r.a.createElement(B.a,null,s))),r.a.createElement("div",{className:"grid-25 grid-right"},r.a.createElement("div",{className:"course--stats"},r.a.createElement("ul",{className:"course--stats--list"},r.a.createElement("li",{className:"course--stats--list--item"},r.a.createElement("h4",null,"Estimated Time"),r.a.createElement("h3",null,c)),r.a.createElement("li",{className:"course--stats--list--item"},r.a.createElement("h4",null,"Materials Needed"),r.a.createElement("ul",null,r.a.createElement(B.a,null,i))))))))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={userId:"",title:"",description:"",estimatedTime:"",materialsNeeded:"",errors:[]},a.change=function(e){var t=e.target.name,n=e.target.value;a.setState(function(){return Object(k.a)({},t,n)})},a.submit=function(){var e=a.props.context,t=e.authenticatedUser,n=t.emailAddress,r=t.password,s=a.state,c={title:s.title,description:s.description,estimatedTime:s.estimatedTime,materialsNeeded:s.materialsNeeded,userId:t.id};e.data.createCourse(c,n,r).then(function(e){e.message?a.setState({errors:e.message}):(console.log("Course created sussessfully"),a.props.history.push("/"))}).catch(function(e){console.log(e),a.props.history.push("/error")})},a.cancel=function(){a.props.history.push("/")},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.errors,a=this.props.context.authenticatedUser;return r.a.createElement("div",{className:"bounds course--detail"},r.a.createElement("h1",null,"Create Course"),r.a.createElement(A,{cancel:this.cancel,errors:t,submit:this.submit,submitButtonText:"Create Course",elements:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"grid-66"},r.a.createElement("div",{className:"course--header"},r.a.createElement("h4",{className:"course--label"},"Course"),r.a.createElement("div",null,r.a.createElement("input",{id:"title",name:"title",type:"text",className:"input-title course--title--input",placeholder:"Course title...",value:e.title,onChange:e.change})),r.a.createElement("p",null,"By ",a.firstName," ",a.lastName)),r.a.createElement("div",{className:"course--description"},r.a.createElement("div",null,r.a.createElement("textarea",{id:"description",name:"description",className:"",value:e.description,onChange:e.change,placeholder:"Course description..."})))),r.a.createElement("div",{className:"grid-25 grid-right"},r.a.createElement("div",{className:"course--stats"},r.a.createElement("ul",{className:"course--stats--list"},r.a.createElement("li",{className:"course--stats--list--item"},r.a.createElement("h4",null,"Estimated Time"),r.a.createElement("div",null,r.a.createElement("input",{id:"estimatedTime",name:"estimatedTime",type:"text",className:"course--time--input",placeholder:"Hours",value:e.estimatedTime,onChange:e.change}))),r.a.createElement("li",{className:"course--stats--list--item"},r.a.createElement("h4",null,"Materials Needed"),r.a.createElement("div",null,r.a.createElement("textarea",{id:"materialsNeeded",name:"materialsNeeded",className:"",placeholder:"List materials...",onChange:e.change}))))))))}}))}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={courseId:"",userId:"",title:"",description:"",estimatedTime:"",materialsNeeded:"",ownerFirstName:"",ownerLastName:"",errors:[]},a.getCourseDetail=function(){var e=a.props.context.authenticatedUser.emailAddress,t=a.props.match.params.id;P.a.get("http://localhost:5000/api/courses/".concat(t)).then(function(t){t.data.Owner.emailAddress!==e?a.props.history.push("/forbidden"):a.setState({userId:t.data.Owner.id,title:t.data.title,description:t.data.description,estimatedTime:t.data.estimatedTime,materialsNeeded:t.data.materialsNeeded,ownerFirstName:t.data.Owner.firstName,ownerLastName:t.data.Owner.lastName})}).catch(function(e){404===e.response.status?a.props.history.push("/notfound"):403===e.response.status?a.props.history.push("/forbidden"):a.props.history.push("/error")})},a.change=function(e){var t=e.target.name,n=e.target.value;a.setState(function(){return Object(k.a)({},t,n)})},a.submit=function(){var e=a.props.context,t=e.authenticatedUser,n=t.emailAddress,r=t.password,s=a.state,c={userId:s.userId,title:s.title,description:s.description,estimatedTime:s.estimatedTime,materialsNeeded:s.materialsNeeded},i=a.props.match.params.id;e.data.updateCourse(c,i,n,r).then(function(e){e.message?a.setState({errors:e.message}):(console.log("Course updated sussessfully"),a.props.history.push("/"))}).catch(function(e){a.props.history.push("/error")})},a.cancel=function(){a.props.history.go(-1)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getCourseDetail()}},{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.description,s=t.estimatedTime,c=t.materialsNeeded,i=t.ownerFirstName,o=t.ownerLastName,l=t.errors;return r.a.createElement("div",{className:"bounds course--detail"},r.a.createElement("h1",null,"Update Course"),r.a.createElement("div",null,r.a.createElement(A,{cancel:this.cancel,errors:l,submit:this.submit,submitButtonText:"Update Course",elements:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"grid-66"},r.a.createElement("div",{className:"course--header"},r.a.createElement("h4",{className:"course--label"},"Course"),r.a.createElement("div",null,r.a.createElement("input",{id:"title",name:"title",type:"text",className:"input-title course--title--input",placeholder:"Course title...",value:a,onChange:e.change})),r.a.createElement("p",null,"By ",i," ",o)),r.a.createElement("div",{className:"course--description"},r.a.createElement("div",null,r.a.createElement("textarea",{id:"description",name:"description",className:"",value:n,onChange:e.change,placeholder:"Course description..."})))),r.a.createElement("div",{className:"grid-25 grid-right"},r.a.createElement("div",{className:"course--stats"},r.a.createElement("ul",{className:"course--stats--list"},r.a.createElement("li",{className:"course--stats--list--item"},r.a.createElement("h4",null,"Estimated Time"),r.a.createElement("div",null,r.a.createElement("input",{id:"estimatedTime",name:"estimatedTime",type:"text",className:"course--time--input",placeholder:"Hours",value:s,onChange:e.change}))),r.a.createElement("li",{className:"course--stats--list--item"},r.a.createElement("h4",null,"Materials Needed"),r.a.createElement("div",null,r.a.createElement("textarea",{id:"materialsNeeded",name:"materialsNeeded",className:"",placeholder:"List materials...",value:c,onChange:e.change}))))))))}})))}}]),t}(n.Component),R=function(){var e=Object(C.g)();return r.a.createElement("div",{className:"bounds"},r.a.createElement("h1",null,"Error"),r.a.createElement("p",null,"Sorry! We just encountered an unexpected error."),r.a.createElement("div",{className:"pad-bottom"},r.a.createElement("button",{className:"button",onClick:function(){e.push("/")},type:"submit"}," Return ")))},W=a(70),G=function(e){var t=e.component,a=Object(W.a)(e,["component"]);return r.a.createElement(w,null,function(e){return r.a.createElement(C.b,Object.assign({},a,{render:function(a){return e.authenticatedUser?r.a.createElement(t,a):r.a.createElement(C.a,{to:{pathname:"/signin",state:{from:a.location}}})}}))})},H=function(){var e=Object(C.g)();return r.a.createElement("div",{className:"bounds"},r.a.createElement("h1",null,"Forbidden"),r.a.createElement("p",null,"Oh oh! You can't access this page."),r.a.createElement("div",{className:"pad-bottom"},r.a.createElement("button",{className:"button",onClick:function(){e.push("/")},type:"submit"}," Return ")))},z=y(j),V=y(function(e){e.context;return r.a.createElement("div",{className:"bounds"},r.a.createElement("div",{className:"grid-100"},r.a.createElement(C.a,{to:"/"})))}),Y=y(T),q=y(U),K=y(function(e){var t=e.context;return Object(n.useEffect)(function(){return t.actions.signOut()}),r.a.createElement(C.a,{to:"/"})}),Q=y(L),X=y(M),Z=y(J);c.a.render(r.a.createElement(N,null,r.a.createElement(function(){return r.a.createElement(O.a,null,r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement(C.d,null,r.a.createElement(C.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(I,e)}}),r.a.createElement(G,{path:"/authenticated",component:V}),r.a.createElement(C.b,{path:"/signup",component:Y}),r.a.createElement(C.b,{path:"/signin",component:q}),r.a.createElement(C.b,{path:"/signout",component:K}),r.a.createElement(G,{path:"/courses/create",component:X}),r.a.createElement(C.b,{exact:!0,path:"/courses/:id",component:Q}),r.a.createElement(G,{exact:!0,path:"/courses/:id/update",component:Z}),r.a.createElement(C.b,{path:"/forbidden",component:H}),r.a.createElement(C.b,{path:"/notfound",component:x}),r.a.createElement(C.b,{path:"/error",component:R}))))},null)),document.getElementById("root"))},71:function(e,t,a){e.exports=a(178)},76:function(e,t,a){},77:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.bb0a9498.chunk.js.map