(this.webpackJsonpwwww=this.webpackJsonpwwww||[]).push([[0],{59:function(e,t,a){e.exports=a(70)},64:function(e,t,a){},65:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),s=a.n(i),o=(a(64),a(31)),c=a(14),l=a(15),m=a(17),u=a(16),h=(a(65),a(110)),d=a(106),p=a(71),g=a(114),y=a(30),f=a.n(y),v=a(40),E=a.n(v),w=a(115),S=a(113),C=a(49),N=a.n(C),k=a(48),b=a.n(k),j=a(111),O=a(116),I=a(112),G=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"start-options"},r.a.createElement(d.a,{container:!0,direction:"column",spacing:5,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,{onClick:this.props.handleNewGame,variant:"contained",color:"primary",size:"large"},"Start New Game")),r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,{onClick:this.props.handleJoinGame,variant:"contained",color:"primary",size:"large"},"Join Game"))))}}]),a}(r.a.Component),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={sentences:[],intervalID:null,codeWasValid:!1,showAuthors:!1,currentSentence:0},n}return Object(l.a)(a,[{key:"makeSentencePapers",value:function(){var e,t=Array(),a=Object(o.a)(this.state.sentences);try{for(a.s();!(e=a.n()).done;){var n=e.value,i=void 0;i=this.state.showAuthors?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"single-response"},r.a.createElement(p.a,{variant:"h5",align:"center"},n.who.response),r.a.createElement(w.a,{variant:"outlined",size:"small",label:n.who.name,color:"primary"})),r.a.createElement("div",{className:"single-response"},r.a.createElement(p.a,{variant:"h5",align:"center"},n.what.response),r.a.createElement(w.a,{variant:"outlined",size:"small",label:n.what.name,color:"primary"})),r.a.createElement("div",{className:"single-response"},r.a.createElement(p.a,{variant:"h5",align:"center"},n.where.response),r.a.createElement(w.a,{variant:"outlined",size:"small",label:n.where.name,color:"primary"})),r.a.createElement("div",{className:"single-response"},r.a.createElement(p.a,{variant:"h5",align:"center"},n.why.response),r.a.createElement(w.a,{variant:"outlined",size:"small",label:n.why.name,color:"primary"}))):r.a.createElement("div",{className:"single-response"},r.a.createElement(p.a,{variant:"h5",align:"center"},n.who.response.trim()+" "+n.what.response.trim()+" "+n.where.response.trim()+" "+n.why.response.trim())),t.push(i)}}catch(s){a.e(s)}finally{a.f()}return t}},{key:"componentDidMount",value:function(){this.getData()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.state.intervalID)}},{key:"getData",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"get-game-state",code:this.props.gameCode})};console.log("request sent from ViewSentences/getData"),fetch("https://us-central1-to-do-list-266601.cloudfunctions.net/wwww",t).then((function(e){return e.json()})).then((function(t){if(t.codeWasValid)if(e.setState({codeWasValid:!0}),"sentences-created"==t.gameState.gameStage)e.setState({sentences:t.gameState.sentences,isLoaded:!0}),clearTimeout(e.state.intervalID);else{var a=setTimeout(e.getData.bind(e),4e3);e.setState({intervalID:a})}else e.setState({codeWasValid:!1})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"handleSwitch",value:function(){this.setState({showAuthors:!this.state.showAuthors})}},{key:"navigate",value:function(e){var t=(this.state.currentSentence+e)%this.state.sentences.length;this.setState({currentSentence:t})}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement("div",null,"Error: ",this.state.error.message):this.state.isLoaded?this.state.codeWasValid?r.a.createElement("div",{className:"prompt-text"},r.a.createElement("div",{className:"show-authors"},r.a.createElement(j.a,{control:r.a.createElement(O.a,{checked:this.state.showAuthors,onChange:function(){return e.handleSwitch()},color:"primary"}),label:"Show Authors"})),r.a.createElement("div",{className:"sentence"},r.a.createElement("div",{className:"sentence-inside"},this.makeSentencePapers()[this.state.currentSentence])),r.a.createElement("div",{className:"last-sentence"},r.a.createElement(I.a,{color:"primary",onClick:function(){return e.navigate(e.state.sentences.length-1)}},r.a.createElement(E.a,null))),r.a.createElement("div",{className:"next-sentence"},r.a.createElement(I.a,{color:"primary",onClick:function(){return e.navigate(1)}},r.a.createElement(f.a,null)))):void 0:r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={players:[],isLoaded:!1,codeWasValid:!1,intervalID:null},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.state.intervalID)}},{key:"getSentences",value:function(){clearTimeout(this.state.intervalID),this.props.getSentences()}},{key:"getData",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"get-game-state",code:this.props.gameCode})};console.log("request sent from FinishedResponses/getData"),fetch("https://us-central1-to-do-list-266601.cloudfunctions.net/wwww",t).then((function(e){return e.json()})).then((function(t){if(t.codeWasValid)if("all-players-waiting"==t.gameState.gameStage||"sentences-created"==t.gameState.gameStage)e.getSentences();else{var a=setTimeout(e.getData.bind(e),4e3);e.setState({players:t.gameState.players,intervalID:a}),e.state.isLoaded||e.setState({isLoaded:!0,codeWasValid:!0})}else e.setState({codeWasValid:!1})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"createPlayers",value:function(){var e,t=Array(),a=Object(o.a)(this.state.players);try{for(a.s();!(e=a.n()).done;){var n=e.value,i=void 0;i=n.doneWithQuestions?r.a.createElement(b.a,null):r.a.createElement(N.a,null),t.push(r.a.createElement(d.a,{item:!0},r.a.createElement(w.a,{icon:i,label:n.name,color:"primary"})))}}catch(s){a.e(s)}finally{a.f()}return t}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement("div",null,"Error: ",this.state.error.message):this.state.isLoaded?this.state.codeWasValid?r.a.createElement("div",{className:"prompt-text"},r.a.createElement(d.a,{container:!0,direction:"column",spacing:5,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{variant:"h4",align:"center"},"Waiting for all players to finish")),r.a.createElement(d.a,{item:!0},r.a.createElement(d.a,{container:!0,direction:"row",spacing:2,justify:"center",alignItems:"center"},this.createPlayers())))):r.a.createElement("div",{className:"prompt-text"},r.a.createElement(d.a,{container:!0,direction:"column",spacing:4,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{variant:"h5",align:"center"},"looks like your game no longer exists")),r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,{onClick:function(){return e.props.enterNewCode()},variant:"contained",color:"primary"},"Enter Another Code")))):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component),T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={response:{name:e.name,who:"",what:"",where:"",why:""},currentQuestion:"who"},n}return Object(l.a)(a,[{key:"handleResponseChange",value:function(e){var t={name:this.props.name,who:this.state.response.who,what:this.state.response.what,where:this.state.response.where,why:this.state.response.why};"who"==this.state.currentQuestion?t.who=e.target.value:"what"==this.state.currentQuestion?t.what=e.target.value:"where"==this.state.currentQuestion?t.where=e.target.value:"why"==this.state.currentQuestion&&(t.why=e.target.value),this.setState({response:t})}},{key:"handleNext",value:function(){"who"==this.state.currentQuestion?this.setState({currentQuestion:"what"}):"what"==this.state.currentQuestion?this.setState({currentQuestion:"where"}):"where"==this.state.currentQuestion?this.setState({currentQuestion:"why"}):"why"==this.state.currentQuestion&&this.props.sendResponse(this.state.response)}},{key:"render",value:function(){var e,t,a,n,i=this;return"who"==this.state.currentQuestion?(n=this.state.response.who,e="WHO",t="enter any person or animal etc",a=" eg. 'Obama' or 'Obama's dog, Bo'",r.a.createElement("div",null)):"what"==this.state.currentQuestion?(n=this.state.response.what,e="WHAT",t="enter an action",a=" eg. 'went for a bike ride' or 'slept'",r.a.createElement(p.a,{variant:"body1"},"tip: if you want to write something like 'went to HER appartment', you could enter 'went to THEIR appartment' instead to make the final sentence make more sense. (they / them / their / theirs / themself)")):"where"==this.state.currentQuestion?(n=this.state.response.where,e="WHERE",t="enter where, when or how the thing happened ",a=" eg. 'on their birthday' or 'with Batman'",r.a.createElement(p.a,{variant:"body1"},"tip: if you want to write something like 'with HIS uncle', you could enter 'with THEIR uncle' instead to make the final sentence make more sense. (they / them / their / theirs / themself)")):"why"==this.state.currentQuestion&&(n=this.state.response.why,e="WHY",t="enter an explanation or other clause",a=" eg. 'because they wanted to.' or 'in order to protect baby yoda.'",r.a.createElement(p.a,{variant:"body1"},"tip: if you want to write something like 'because SHE WAS sad', you could enter 'because THEY WERE sad' instead to make the final sentence make more sense. (they / them / their / theirs / themself)")),r.a.createElement("div",{className:"prompt-text"},r.a.createElement(d.a,{container:!0,direction:"column",spacing:5,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(d.a,{container:!0,direction:"column",spacing:1,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{variant:"h3",align:"center"},e)),r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{variant:"body2",align:"center"},t)),r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{variant:"body1",align:"center"},a)))),r.a.createElement(d.a,{item:!0},r.a.createElement(g.a,{id:"standard-basic",label:e,multiline:!0,onChange:function(e){return i.handleResponseChange(e)},value:n})),r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,{onClick:function(){return i.handleNext()},variant:"contained",color:"primary",endIcon:r.a.createElement(f.a,null)},"Next"))))}}]),a}(r.a.Component),W=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,players:[],codeWasValid:!1,intervalID:null},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.gameJoined?this.getData():this.joinGame()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.state.intervalID)}},{key:"joinGame",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"enter-waiting-room",name:this.props.name,code:this.props.gameCode})};console.log("request sent from PlayerWaitingRoom/joinGame"),fetch("https://us-central1-to-do-list-266601.cloudfunctions.net/wwww",t).then((function(e){return e.json()})).then((function(t){t.codeWasValid?(e.props.joinGame(t.playerId),e.setState({isLoaded:!0,players:t.gameState.players,codeWasValid:!0}),e.getPlayerData()):e.props.noGameFound()}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"goToResponses",value:function(){clearTimeout(this.state.intervalID),this.props.goToResponses()}},{key:"getPlayerData",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"get-game-state",code:this.props.gameCode})};console.log("request sent from PlayerWaitingRoom/getPlayerData"),fetch("https://us-central1-to-do-list-266601.cloudfunctions.net/wwww",t).then((function(e){return e.json()})).then((function(t){if(t.codeWasValid){var a=setTimeout(e.getPlayerData.bind(e),4e3);e.setState({players:t.gameState.players,intervalID:a}),"in-progress"==t.gameState.gameStage&&e.goToResponses()}else e.setState({codeWasValid:!1})}),(function(t){e.setState({error:t})}))}},{key:"createPlayers",value:function(){var e,t=Array(),a=Object(o.a)(this.state.players);try{for(a.s();!(e=a.n()).done;){var n=e.value;"1"==n.id?t.push(r.a.createElement(d.a,{item:!0},r.a.createElement(S.a,{badgeContent:"Host",color:"secondary"},r.a.createElement(w.a,{label:n.name,color:"primary"})))):t.push(r.a.createElement(d.a,{item:!0},r.a.createElement(w.a,{label:n.name,color:"primary"})))}}catch(i){a.e(i)}finally{a.f()}return t}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement("div",null,"Error: ",this.state.error.message):this.state.isLoaded?this.state.codeWasValid?r.a.createElement("div",{className:"prompt-text"},r.a.createElement(d.a,{container:!0,direction:"column",spacing:5,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{variant:"h4",align:"center"},"You're in the waiting room!")),r.a.createElement(d.a,{item:!0},r.a.createElement(d.a,{container:!0,direction:"column",spacing:2,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{variant:"subtitle1",align:"center"},"players:")),r.a.createElement(d.a,{item:!0},r.a.createElement(d.a,{container:!0,direction:"row",spacing:2,justify:"center",alignItems:"center"},this.createPlayers())))),r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{variant:"h5",align:"center"},"game: "+this.props.gameCode)))):r.a.createElement("div",{className:"prompt-text"},r.a.createElement(d.a,{container:!0,direction:"column",spacing:4,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{variant:"h5",align:"center"},"That game no longer exists (the host could have lost connection)")),r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,{onClick:function(){return e.props.enterNewCode()},variant:"contained",color:"primary"},"Enter Another Code")))):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component),P=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,players:Array(),code:"",callCounter:0,codeExpired:!1,intervalID:null},n}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){clearTimeout(this.state.intervalID)}},{key:"componentDidMount",value:function(){this.props.gameCreated?this.getData():this.createWaitingRoom()}},{key:"createWaitingRoom",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"create-waiting-room",name:this.props.name})};console.log("request sent from HostWaitingRoom/createWaitingRoom"),fetch("https://us-central1-to-do-list-266601.cloudfunctions.net/wwww",t).then((function(e){return e.json()})).then((function(t){e.props.createGame(t.gameState,t.playerId);var a=setTimeout(e.getData.bind(e),4e3);e.setState({isLoaded:!0,code:t.gameState.code,players:t.gameState.players,intervalID:a})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"getData",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"get-game-state",code:this.state.code})};console.log("request sent from HostWaitingRoom/getData"),fetch("https://us-central1-to-do-list-266601.cloudfunctions.net/wwww",t).then((function(e){return e.json()})).then((function(t){if(e.setState({players:t.gameState.players,callCounter:e.state.callCounter+1}),e.state.callCounter<600){var a=setTimeout(e.getData.bind(e),4e3);e.setState({intervalID:a})}else e.setState({codeExpired:!0}),e.props.endGame()}),(function(t){e.setState({error:t})}))}},{key:"newCode",value:function(){this.setState({codeExpired:!1,callCounter:0,isLoaded:!1}),this.createWaitingRoom()}},{key:"createPlayers",value:function(){var e,t=Array(),a=Object(o.a)(this.state.players);try{for(a.s();!(e=a.n()).done;){var n=e.value;"1"==n.id?t.push(r.a.createElement(d.a,{item:!0},r.a.createElement(S.a,{badgeContent:"Host",color:"secondary"},r.a.createElement(w.a,{label:n.name,color:"primary"})))):t.push(r.a.createElement(d.a,{item:!0},r.a.createElement(w.a,{label:n.name,color:"primary"})))}}catch(i){a.e(i)}finally{a.f()}return t}},{key:"startGame",value:function(){clearTimeout(this.state.intervalID),this.props.startGame()}},{key:"render",value:function(){var e,t=this;return this.state.error?r.a.createElement("div",null,"Error: ",this.state.error.message):this.state.isLoaded?this.state.codeExpired?r.a.createElement("div",{className:"prompt-text"},r.a.createElement(d.a,{container:!0,direction:"column",spacing:5,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{variant:"h5",align:"center"},"Your game code has expired")),r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,{onClick:function(){return t.newCode()},variant:"contained",color:"primary"},"Get New Code")))):(e=this.state.players.length>1?r.a.createElement(h.a,{onClick:function(){return t.startGame()},variant:"contained",color:"primary"},"Start Game"):r.a.createElement(h.a,{disabled:!0,onClick:function(){return t.startGame()},variant:"contained",color:"primary"},"Start Game"),r.a.createElement("div",{className:"prompt-text"},r.a.createElement(d.a,{container:!0,direction:"column",spacing:4,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(d.a,{container:!0,direction:"column",spacing:1,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{variant:"h5",align:"center"},"Your Game Code is:")),r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{variant:"h3",align:"center"},this.state.code)))),r.a.createElement(d.a,{item:!0},r.a.createElement(d.a,{container:!0,direction:"column",spacing:2,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{variant:"subtitle1",align:"center"},"players:")),r.a.createElement(d.a,{item:!0},r.a.createElement(d.a,{container:!0,direction:"row",spacing:2,justify:"center",alignItems:"center"},this.createPlayers())))),r.a.createElement(d.a,{item:!0},e)))):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component),R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n,r;return Object(c.a)(this,a),n=t.call(this,e),r=e.invalid?"Sorry "+e.playerName+", the code you entered is invalid.":"How's it goin "+e.playerName+", Enter your game's 4 letter code",n.state={code:"",message:r},e.handleCodeChange(""),n}return Object(l.a)(a,[{key:"handleCodeChange",value:function(e){var t=String(e.target.value);(t=t.toUpperCase()).length>4&&(t=t.slice(0,4)),this.setState({code:t}),this.props.handleCodeChange(t)}},{key:"render",value:function(){var e,t=this;return e=this.props.invalid?r.a.createElement(g.a,{error:!0,id:"standard-basic",label:"invalid code",onChange:function(e){return t.handleCodeChange(e)},value:this.state.code}):r.a.createElement(g.a,{id:"standard-basic",label:"code",onChange:function(e){return t.handleCodeChange(e)},value:this.state.code}),r.a.createElement("div",{className:"enter-game-code"},r.a.createElement(d.a,{container:!0,direction:"column",spacing:5,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement("div",{className:"prompt-text"},r.a.createElement(p.a,{variant:"h5",align:"center"},this.state.message))),r.a.createElement(d.a,{item:!0},e),r.a.createElement(d.a,{item:!0},r.a.createElement(d.a,{container:!0,direction:"row",spacing:7,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,{onClick:this.props.handleBack,variant:"contained",color:"primary",startIcon:r.a.createElement(E.a,null)},"Back")),r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,{onClick:this.props.handleNext,variant:"contained",color:"primary",endIcon:r.a.createElement(f.a,null)},"Next"))))))}}]),a}(r.a.Component),J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:""},e.handleNameChange(""),n}return Object(l.a)(a,[{key:"handleNameChange",value:function(e){this.setState({name:e.target.value}),this.props.handleNameChange(e.target.value)}},{key:"render",value:function(){var e,t=this;return e=this.props.invalid?r.a.createElement(g.a,{error:!0,id:"standard-basic",label:"name is required",onChange:function(e){return t.handleNameChange(e)},value:this.state.name}):r.a.createElement(g.a,{id:"standard-basic",label:"Enter Your Name",onChange:function(e){return t.handleNameChange(e)},value:this.state.name}),r.a.createElement("div",{className:"enter-host-name"},r.a.createElement(d.a,{container:!0,direction:"column",spacing:5,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement("div",{className:"prompt-text"},r.a.createElement(p.a,{variant:"h5",align:"center"},this.props.message))),r.a.createElement(d.a,{item:!0},e),r.a.createElement(d.a,{item:!0},r.a.createElement(d.a,{container:!0,direction:"row",spacing:7,justify:"center",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,{onClick:this.props.handleBack,variant:"contained",color:"primary",startIcon:r.a.createElement(E.a,null)},"Back")),r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,{onClick:this.props.handleNext,variant:"contained",color:"primary",endIcon:r.a.createElement(f.a,null)},"Next"))))))}}]),a}(r.a.Component),H=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onUnload=function(e){n.state.playerIsHost&&n.state.gameCreated?n.endGame():!n.state.playerIsHost&&n.state.gameJoined&&n.leaveGame()},n.state={gameState:"start-options",playerName:"",gameCode:"",playerIsHost:!1,gameCreated:!1,gameJoined:!1,playerID:0,newComponentIsVisible:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.onUnload)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.onUnload)}},{key:"handleNewGame",value:function(){this.setState({gameState:"enter-host-name",playerIsHost:!0})}},{key:"handleJoinGame",value:function(){this.setState({gameState:"enter-player-name",playerIsHost:!1})}},{key:"handleEnterNameBack",value:function(){this.setState({gameState:"start-options"})}},{key:"handleHostNameNext",value:function(){""!=this.state.playerName?this.setState({gameState:"host-waiting-room"}):this.setState({gameState:"invalid-host-name"})}},{key:"handlePlayerNameNext",value:function(){""!=this.state.playerName?this.setState({gameState:"enter-game-code"}):this.setState({gameState:"invalid-player-name"})}},{key:"handleEnterCodeBack",value:function(){this.setState({gameState:"enter-player-name"})}},{key:"handleEnterCodeNext",value:function(){4==this.state.gameCode.length?this.setState({gameState:"player-waiting-room"}):this.setState({gameState:"invalid-code"})}},{key:"handleNameChange",value:function(e){this.setState({playerName:e})}},{key:"handleCodeChange",value:function(e){this.setState({gameCode:e})}},{key:"joinGame",value:function(e){this.setState({playerID:e,gameJoined:!0}),console.log(this.state.playerID)}},{key:"enterNewCode",value:function(){this.setState({playerID:0,gameJoined:!1,gameCode:"",gameState:"enter-game-code"})}},{key:"createGame",value:function(e,t){this.setState({gameCode:e.code,playerID:t,gameCreated:!0})}},{key:"beginResponses",value:function(){this.setState({gameState:"enter-responses"})}},{key:"startGame",value:function(){this.setState({gameState:"enter-responses"});var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"start-game",code:this.state.gameCode})};console.log("request sent from Game/startGame"),fetch("https://us-central1-to-do-list-266601.cloudfunctions.net/wwww",e).then((function(e){return e.json()})).then((function(e){}),(function(e){}))}},{key:"sendResponse",value:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"post-response",playerId:this.state.playerID,response:e,code:this.state.gameCode,name:this.state.playerName})};console.log("request sent from Game/sendResponse"),fetch("https://us-central1-to-do-list-266601.cloudfunctions.net/wwww",t).then((function(e){return e.json()})).then((function(e){}),(function(e){})),this.setState({gameState:"finished-responses"})}},{key:"getSentences",value:function(){if(this.state.playerIsHost){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"create-sentences",code:this.state.gameCode})};console.log("request sent from Game/getSentences"),fetch("https://us-central1-to-do-list-266601.cloudfunctions.net/wwww",e).then((function(e){return e.json()})).then((function(e){}),(function(e){}))}this.setState({gameState:"view-sentences"})}},{key:"endGame",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"end-game",code:this.state.gameCode})};console.log("request sent from Game/endGame"),fetch("https://us-central1-to-do-list-266601.cloudfunctions.net/wwww",t).then((function(e){return e.json()})).then((function(t){e.setState({gameCreated:!1,gameCode:""})}),(function(e){}))}},{key:"leaveGame",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"leave-game",code:this.state.gameCode,playerId:this.state.playerID})};console.log("request sent from Game/endGame"),fetch("https://us-central1-to-do-list-266601.cloudfunctions.net/wwww",t).then((function(e){return e.json()})).then((function(t){e.setState({gameJoined:!1,gameCode:""})}),(function(e){}))}},{key:"render",value:function(){var e=this;return"start-options"==this.state.gameState?r.a.createElement(G,{handleNewGame:function(){return e.handleNewGame()},handleJoinGame:function(){return e.handleJoinGame()}}):"enter-host-name"==this.state.gameState?r.a.createElement(J,{message:"You're the game host!",invalid:!1,handleBack:function(){return e.handleEnterNameBack()},handleNext:function(){return e.handleHostNameNext()},handleNameChange:function(t){return e.handleNameChange(t)}}):"enter-player-name"==this.state.gameState?r.a.createElement(J,{message:"Enter whatever you want really",invalid:!1,handleBack:function(){return e.handleEnterNameBack()},handleNext:function(){return e.handlePlayerNameNext()},handleNameChange:function(t){return e.handleNameChange(t)}}):"enter-game-code"==this.state.gameState?r.a.createElement(R,{playerName:this.state.playerName,invalid:!1,handleBack:function(){return e.handleEnterCodeBack()},handleNext:function(){return e.handleEnterCodeNext()},handleCodeChange:function(t){return e.handleCodeChange(t)}}):"invalid-player-name"==this.state.gameState?r.a.createElement(J,{message:"You can type literally anything except for that.",invalid:!0,handleBack:function(){return e.handleEnterNameBack()},handleNext:function(){return e.handlePlayerNameNext()},handleNameChange:function(t){return e.handleNameChange(t)}}):"invalid-code"==this.state.gameState?r.a.createElement(R,{playerName:this.state.playerName,invalid:!0,handleBack:function(){return e.handleEnterCodeBack()},handleNext:function(){return e.handleEnterCodeNext()},handleCodeChange:function(t){return e.handleCodeChange(t)}}):"invalid-host-name"==this.state.gameState?r.a.createElement(J,{message:"You have to have a name",invalid:!0,handleBack:function(){return e.handleEnterNameBack()},handleNext:function(){return e.handleHostNameNext()},handleNameChange:function(t){return e.handleNameChange(t)}}):"host-waiting-room"==this.state.gameState?r.a.createElement(P,{gameCreated:this.state.gameCreated,name:this.state.playerName,createGame:function(t,a){return e.createGame(t,a)},endGame:function(){return e.endGame()},newCode:function(){return e.handleHostNameNext()},startGame:function(){return e.startGame()}}):"player-waiting-room"==this.state.gameState?r.a.createElement(W,{gameCode:this.state.gameCode,name:this.state.playerName,gameJoined:this.state.gameJoined,joinGame:function(t){return e.joinGame(t)},noGameFound:function(){return e.setState({gameState:"invalid-code"})},goToResponses:function(){return e.beginResponses()},enterNewCode:function(){return e.enterNewCode()}}):"enter-responses"==this.state.gameState?r.a.createElement(T,{name:this.state.playerName,sendResponse:function(t){return e.sendResponse(t)}}):"finished-responses"==this.state.gameState?r.a.createElement(x,{gameCode:this.state.gameCode,getSentences:function(){return e.getSentences()},enterNewCode:function(){return e.enterNewCode()}}):"view-sentences"==this.state.gameState?r.a.createElement(D,{gameCode:this.state.gameCode}):void 0}}]),a}(r.a.Component);var L=function(){return r.a.createElement("div",{className:"whole-window"},r.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.9cfb15e3.chunk.js.map