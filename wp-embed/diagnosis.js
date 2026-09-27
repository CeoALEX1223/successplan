(function(){
var SCRIPT_URL='https://script.google.com/macros/s/AKfycbzToU8HN-zGw3tmGfohx6s1cl0fJ92dAVT-Mr8UQE0QLOSjxgwHjR_BaWZFVeS3bUBOfA/exec';
var FIN=[
  {id:'rev',label:'연매출액'},{id:'op',label:'영업이익 (손실은 - 입력)'},{id:'debt',label:'부채총계'},{id:'eq',label:'자본총계'},
  {id:'cash',label:'현금성자산'},{id:'fixed',label:'월 고정비 (인건비·임차료 등)'},{id:'loan',label:'가지급금 잔액'},{id:'re',label:'미처분이익잉여금'}];
var AREAS=[
 {key:'tax',name:'세무회계',tier:'소의',who:'세무사 자문위원 · CFP®',qs:[
  ['가지급금·가수금 잔액이 없거나 정리 계획이 있다','가지급금 정리 계획 수립','인정이자 익금산입과 대표 상여처분 위험을 줄이는 상환·정리 순서를 설계합니다.'],
  ['최근 5년 내 놓친 세액공제·감면이 없는지 점검했다','경정청구 가능성 점검','고용증대·중소기업 특별세액감면 등 누락분을 5년 소급해 환급 여부를 확인합니다.'],
  ['법인카드·경비가 적격증빙으로 관리된다','경비 증빙 체계 정비','사적 사용 경비와 부적격 증빙을 분리해 세무조사 지적 요소를 없앱니다.'],
  ['장부·계약서가 세무조사에 대비해 정리되어 있다','세무 리스크 사전 점검','특수관계자 거래, 용역·자문 계약서의 실질을 점검합니다.']]},
 {key:'fin',name:'자금·재무구조',tier:'소의',who:'CFP®',qs:[
  ['월별 자금수지(현금흐름)를 파악하고 있다','월별 자금수지표 도입','매출 입금과 고정 지출 시점을 맞춰 자금 공백 구간을 미리 확인합니다.'],
  ['3개월 이상 고정비를 감당할 운영자금이 있다','운영 예비자금 확보','월 고정비 3개월분을 목표로 예비자금 적립 계획을 세웁니다.'],
  ['차입금 금리와 만기를 정기적으로 점검한다','차입 구조 재점검','정책자금 대환과 만기 분산으로 이자 부담을 낮춥니다.'],
  ['매출채권 회수기간을 관리한다','매출채권 회수 관리','거래처별 회수기간을 관리해 흑자도산 위험을 줄입니다.']]},
 {key:'hr',name:'인사노무',tier:'중의',who:'공인노무사 자문위원',qs:[
  ['전 직원과 서면 근로계약서를 작성했다','근로계약서 정비','미작성·필수기재사항 누락은 과태료 대상이므로 전 직원 계약서를 점검합니다.'],
  ['취업규칙·인사규정이 최신 법령에 맞다','취업규칙 개정','상시 10인 이상 사업장은 신고 의무가 있으며 개정 법령을 반영합니다.'],
  ['퇴직급여를 퇴직연금으로 사외적립하고 있다','퇴직연금 제도 도입·점검','DB·DC 선택과 부담금 손금 처리로 퇴직급여 부채와 법인세를 함께 관리합니다.'],
  ['고용 관련 지원금·세액공제를 활용하고 있다','고용지원 제도 활용','통합고용세액공제와 고용지원금 요건을 확인합니다.']]},
 {key:'ceo',name:'대표자 자산관리',tier:'중의',who:'CFP®',qs:[
  ['대표 급여·배당 비율을 세금 기준으로 설계했다','급여·배당 최적 배분','법인세·소득세·4대보험을 함께 계산해 대표 가처분소득이 가장 큰 조합을 찾습니다.'],
  ['대표 개인의 은퇴자금 목표와 준비 현황을 안다','은퇴 재무설계','국민연금·퇴직금·연금저축·IRP를 합산해 은퇴 소득 공백을 계산합니다.'],
  ['대표 유고 시 가족과 회사의 보장 규모가 적정하다','유고 리스크 보장 설계','차입금 연대보증과 상속세 재원을 기준으로 필요 보장액을 산정합니다.'],
  ['법인 자산과 개인 자산이 명확히 분리되어 있다','법인·개인 자산 분리','혼재된 자산과 비용을 정리해 가지급금 재발생을 막습니다.']]},
 {key:'law',name:'법률·지배구조',tier:'대의',who:'변호사 자문위원',qs:[
  ['정관에 임원 보수·퇴직금 규정이 정비되어 있다','정관·임원 규정 정비','임원퇴직금 한도와 지급 근거를 정관과 주총 결의로 갖춥니다.'],
  ['주주명부가 실제 소유와 일치한다','명의신탁 주식 정리','차명주식은 증여의제 과세 대상이 될 수 있어 실명 전환 방안을 검토합니다.'],
  ['주요 거래 계약서를 법률 검토 후 체결한다','계약 법률 검토 체계','주요 거래처 계약의 손해배상·해지 조항을 점검합니다.'],
  ['이사회·주주총회 의사록을 작성·보관한다','의사록 관리','배당·임원보수 결의 의사록은 세무상 손금 인정의 근거가 됩니다.']]},
 {key:'succ',name:'승계·부동산·투자',tier:'대의',who:'CFP® · 세무사 자문위원',qs:[
  ['비상장주식 가치를 최근 2년 내 평가해 보았다','비상장주식 가치 평가','상증세법상 평가로 증여·양도 시점의 세 부담을 미리 계산합니다.'],
  ['가업승계 또는 지분 이전 계획이 있다','가업승계 로드맵','가업승계 증여세 과세특례, 가업상속공제 요건을 기준으로 이전 일정을 세웁니다.'],
  ['사업용 부동산(임차·매입) 전략이 있다','사업용 부동산 전략','법인 매입과 개인 매입 후 임대 방식의 세후 효과를 비교합니다.'],
  ['법인 여유자금 운용 원칙이 있다','법인 여유자금 운용','유동성·안전성 기준으로 운용 원칙을 정하고 이익잉여금 관리와 연계합니다.']]},
 {key:'rnd',name:'R&D·인증',tier:'대의',who:'인증 전문 파트너 · 세무사 자문위원',qs:[
  ['기업부설연구소·연구개발전담부서 요건을 검토했다','연구소·전담부서 설립 검토','연구전담요원 인건비 세액공제의 전제 조건을 갖춥니다.'],
  ['연구·인력개발비 세액공제를 적용받고 있다','연구인력개발비 세액공제','중소기업은 당기 발생액 25% 공제 방식과 증가분 방식 중 유리한 쪽을 적용합니다.'],
  ['벤처·이노비즈·메인비즈 등 인증 요건을 검토했다','기업 인증 취득','인증은 정책자금 금리 우대와 조달 가점으로 이어집니다.'],
  ['정책자금·R&D 과제 지원 여부를 점검했다','정책자금·과제 매칭','업력·업종에 맞는 정책자금과 정부 R&D 과제를 찾습니다.']]}
];
var STEPS=['시작','재무지표'].concat(AREAS.map(function(a){return a.name}),['결과 받기','진단 결과']);
var CONTACT=STEPS.length-2, LAST=STEPS.length-1;
var KEY='plusone-diag-wp-v1';
var params=new URLSearchParams(location.search);
var REF=(params.get('ref')||params.get('utm_source')||'').slice(0,40);

function blank(){return {step:0,company:'',bizType:'',industry:'',fin:{},ans:{},name:'',phone:'',email:'',agree:false,sent:false,ref:REF}}
var S=blank();
try{var raw=localStorage.getItem(KEY);if(raw){var o=JSON.parse(raw);if(o&&typeof o==='object'){S=Object.assign(blank(),o);if(REF)S.ref=REF}}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}

function won(n){return Math.round(n).toLocaleString('ko-KR')+'원'}
function parseNum(s){s=String(s).trim();var neg=s.charAt(0)==='-'||s.charAt(0)==='−';var v=Number(s.replace(/[^0-9]/g,''));if(isNaN(v))v=0;return neg?-v:v}
function has(id){return S.fin[id]!==undefined&&S.fin[id]!==null&&S.fin[id]!==''}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function grade(s){return s>=75?['양호','p-good','var(--good)']:s>=50?['주의','p-warn','var(--warn)']:['위험','p-risk','var(--risk)']}
function fv(id){return Number(S.fin[id])||0}
function $(id){return document.getElementById(id)}

var root=$('pd'),main=$('pd-main'),prevBtn=$('pd-prev'),nextBtn=$('pd-next');

function scrollTop(){var y=root.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo(0,Math.max(0,y))}
function go(n){S.step=Math.max(0,Math.min(LAST,n));save();render();scrollTop()}
prevBtn.onclick=function(){go(S.step-1)};
var heroCta=$('pd-hero-cta');if(heroCta)heroCta.onclick=function(){var c=$('pd-start');if(c){var y=c.getBoundingClientRect().top+window.pageYOffset-90;window.scrollTo({top:y,behavior:'smooth'});setTimeout(function(){var i=$('pd-company');if(i)i.focus({preventScroll:true})},450)}};
var armed=false;
nextBtn.onclick=function(){
  if(S.step===CONTACT){submit();return}
  if(S.step===LAST){
    if(!armed){armed=true;nextBtn.textContent='한 번 더 누르면 새 진단을 시작합니다';setTimeout(function(){if(armed){armed=false;render()}},4000);return}
    armed=false;S=blank();save();render();scrollTop();return}
  if(S.step>=2&&S.step<CONTACT){
    var a=AREAS[S.step-2],ans=S.ans[a.key]||[],miss=-1;
    for(var i=0;i<a.qs.length;i++){if(ans[i]!==0&&ans[i]!==1&&ans[i]!==2){miss=i;break}}
    if(miss>=0){var el=main.querySelectorAll('.pd-q')[miss];el.classList.add('missing');el.scrollIntoView({block:'center',behavior:'smooth'});return}
  }
  go(S.step+1);
};

function render(){
  var st=S.step;
  var hero=$('pd-hero');if(hero)hero.hidden=st!==0;
  $('pd-stepname').textContent=st===0?'':(Math.min(st,CONTACT))+'/'+CONTACT+' · '+STEPS[st];
  $('pd-prog').style.width=(Math.min(st,CONTACT)/CONTACT*100)+'%';
  prevBtn.disabled=st===0;
  prevBtn.hidden=st===LAST||st===0;var top=root.querySelector('.pd-top');if(top)top.hidden=st===0;
  nextBtn.textContent=st===0?'5분 무료 진단 시작하기':st===CONTACT?'진단 결과 확인':st===LAST?'새 진단 시작':'다음';
  $('pd-nav').style.gridTemplateColumns=(st===LAST||st===0)?'1fr':'1fr 2fr';$('pd-nav').style.position=st===LAST?'static':'';
  if(st===0)renderCover();else if(st===1)renderFin();else if(st===CONTACT)renderContact();else if(st===LAST)renderResult();else renderArea(AREAS[st-2]);
}

function renderCover(){
  main.innerHTML='<div class="pd-screen"><section class="pd-card pd-cover" id="pd-start"><span class="pd-eyebrow">진단 시작</span>'+
   '<h2 style="font-size:22px">어느 회사를 진단할까요?</h2>'+
   '<div class="pd-fields">'+
   '<label class="pd-field">회사명<input id="pd-company" autocomplete="organization" value="'+esc(S.company)+'" placeholder="예: ○○산업㈜"></label>'+
   '<label class="pd-field">업종<input id="pd-industry" value="'+esc(S.industry)+'" placeholder="예: 제조업, 도소매업"></label></div>'+
   '<div class="pd-field">사업자 유형<div class="pd-seg" role="group" aria-label="사업자 유형">'+
   ['법인사업자','개인사업자'].map(function(t){return '<button type="button" data-b="'+t+'" aria-pressed="'+(S.bizType===t)+'">'+t+'</button>'}).join('')+'</div></div>'+
   '<p class="pd-note">입력하신 내용은 진단 결과 안내와 상담 목적으로만 사용됩니다.</p></section></div>';
  $('pd-company').oninput=function(e){S.company=e.target.value;save()};
  $('pd-industry').oninput=function(e){S.industry=e.target.value;save()};
  main.querySelectorAll('[data-b]').forEach(function(b){b.onclick=function(){S.bizType=b.dataset.b;save();main.querySelectorAll('[data-b]').forEach(function(x){x.setAttribute('aria-pressed',x===b)})}});
}

function renderFin(){
  main.innerHTML='<div class="pd-screen"><div><h2 style="font-size:24px">기본 재무지표</h2><p class="pd-lead">직전 사업연도 재무제표 기준으로 원 단위로 입력합니다. 모르는 항목은 비워 두셔도 됩니다.</p></div>'+
   '<section class="pd-card"><div class="pd-fields">'+FIN.map(function(f){var v=S.fin[f.id];
     return '<label class="pd-field pd-money">'+f.label+'<input id="pd-f-'+f.id+'" inputmode="'+(f.id==='op'?'text':'numeric')+'" autocomplete="off" value="'+(has(f.id)?Number(v).toLocaleString('ko-KR'):'')+'" placeholder="0"><span class="pd-won" id="pd-w-'+f.id+'">'+(has(f.id)?won(v):'')+'</span></label>'}).join('')+
   '</div></section></div>';
  FIN.forEach(function(f){var i=$('pd-f-'+f.id);i.oninput=function(){var t=i.value.trim();if(t===''||t==='-'){delete S.fin[f.id];$('pd-w-'+f.id).textContent='';save();return}var v=parseNum(t);S.fin[f.id]=v;i.value=v.toLocaleString('ko-KR');$('pd-w-'+f.id).textContent=won(v);save()}});
}

function renderArea(a){
  var ans=S.ans[a.key]||[];
  main.innerHTML='<div class="pd-screen"><div class="pd-area-title"><span class="pd-tier">'+a.tier+'</span><h2>'+a.name+'</h2></div>'+
   '<p class="pd-lead">해당하는 정도를 선택해 주세요.</p>'+
   a.qs.map(function(q,i){return '<section class="pd-q"><p><span class="pd-qn">'+('0'+(i+1)).slice(-2)+'</span>'+q[0]+'</p><div class="pd-opts" role="group" aria-label="'+esc(q[0])+'">'+
     [['2','예'],['1','일부'],['0','아니오']].map(function(o){return '<button type="button" data-q="'+i+'" data-v="'+o[0]+'" aria-pressed="'+(ans[i]===+o[0])+'">'+o[1]+'</button>'}).join('')+'</div></section>'}).join('')+'</div>';
  main.querySelectorAll('.pd-opts button').forEach(function(b){b.onclick=function(){
    var i=+b.dataset.q;S.ans[a.key]=S.ans[a.key]||[];S.ans[a.key][i]=+b.dataset.v;save();
    b.parentElement.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});
    b.closest('.pd-q').classList.remove('missing');}});
}

function renderContact(){
  main.innerHTML='<div class="pd-screen"><div><h2 style="font-size:24px">진단 결과 받기</h2><p class="pd-lead">결과는 바로 화면에 표시되며, 이근종 CFP®가 결과를 검토해 개선 방안을 안내해 드립니다.</p></div>'+
   '<section class="pd-card"><div class="pd-fields">'+
   '<label class="pd-field">대표자 성함 <span class="req">(필수)</span><input id="pd-name" autocomplete="name" value="'+esc(S.name)+'"></label>'+
   '<label class="pd-field">휴대폰 번호 <span class="req">(필수)</span><input id="pd-phone" type="tel" inputmode="tel" autocomplete="tel" value="'+esc(S.phone)+'" placeholder="010-0000-0000"></label>'+
   '<label class="pd-field">이메일 (선택)<input id="pd-email" type="email" autocomplete="email" value="'+esc(S.email)+'"></label></div>'+
   '<div class="pd-terms"><b>개인정보 수집·이용 안내</b><br>수집 항목: 성함, 휴대폰 번호, 이메일, 회사명, 진단 응답 내용<br>이용 목적: 진단 결과 안내 및 재무 상담 연락<br>보유 기간: 상담 종료 후 1년 또는 동의 철회 시까지<br>동의를 거부하실 수 있으며, 이 경우 진단 결과를 확인하실 수 없습니다.</div>'+
   '<label class="pd-consent"><input type="checkbox" id="pd-agree"'+(S.agree?' checked':'')+'>개인정보 수집·이용에 동의합니다. (필수)</label>'+
   '<div class="pd-error" id="pd-err" aria-live="polite"></div></section></div>';
  $('pd-name').oninput=function(e){S.name=e.target.value;save()};
  $('pd-phone').oninput=function(e){S.phone=e.target.value;save()};
  $('pd-email').oninput=function(e){S.email=e.target.value;save()};
  $('pd-agree').onchange=function(e){S.agree=e.target.checked;save()};
}

function compute(){
  var areas=AREAS.map(function(a){var ans=S.ans[a.key]||[],sum=0,cnt=0,gaps=[];
    a.qs.forEach(function(q,i){var v=ans[i];if(v===0||v===1||v===2){sum+=v;cnt++;if(v<2)gaps.push({a:a,q:q,v:v})}});
    return {a:a,score:cnt?Math.round(sum/(cnt*2)*100):0,cnt:cnt,gaps:gaps}});
  var answered=areas.reduce(function(x,y){return x+y.cnt},0);
  var total=answered?Math.round(areas.reduce(function(x,y){return x+y.score},0)/areas.length):0;
  var rev=fv('rev'),op=fv('op'),debt=fv('debt'),eq=fv('eq'),cash=fv('cash'),fixed=fv('fixed'),loan=fv('loan'),re=fv('re'),ratios=[],x;
  if(rev>0&&has('op')){x=op/rev*100;ratios.push(['영업이익률',x.toFixed(1)+'%',x>=8?0:x>=3?1:2,'업종 평균과 비교'])}
  if(eq>0&&debt){x=debt/eq*100;ratios.push(['부채비율',x.toFixed(1)+'%',x<=150?0:x<=250?1:2,'200% 초과 시 금융권 심사 불리'])}
  var months=null;if(fixed){months=cash/fixed;ratios.push(['현금 버팀 개월수',months.toFixed(1)+'개월',months>=3?0:months>=1.5?1:2,'현금성자산 ÷ 월 고정비'])}
  var interest=loan*0.046;
  if(loan)ratios.push(['가지급금 인정이자(연)',won(interest),eq&&loan<=eq*0.1?1:2,'당좌대출이자율 4.6% 적용 시']);
  if(eq>0&&loan){x=loan/eq*100;ratios.push(['가지급금 / 자본총계',x.toFixed(1)+'%',x<=10?0:x<=30?1:2,'높을수록 주식가치·신용평가에 부담'])}
  if(re)ratios.push(['미처분이익잉여금',won(re),eq&&re>eq*1.2?1:0,'과다 시 주식가치 상승, 승계 비용 증가']);
  var rx=[];
  if(loan)rx.push({c:'var(--risk)',t:'가지급금 '+won(loan)+' 정리',d:'연 인정이자 '+won(interest)+'가 익금산입되고, 회수하지 않으면 대표 상여로 처분되어 소득세가 추가됩니다.',w:'세무사 자문위원 · CFP® · 소의'});
  if(months!==null&&months<3)rx.push({c:months<1.5?'var(--risk)':'var(--warn)',t:'운영 예비자금 확보',d:'현재 현금은 월 고정비 '+months.toFixed(1)+'개월분입니다. 3개월분은 '+won(fixed*3)+'입니다.',w:'CFP® · 소의'});
  var gaps=[];areas.forEach(function(r){r.gaps.forEach(function(g){g.s=r.score;gaps.push(g)})});
  gaps.sort(function(p,q){return p.v-q.v||p.s-q.s});
  gaps.forEach(function(g){if(loan&&g.a.key==='tax'&&g.q[1].indexOf('가지급금')===0)return;rx.push({c:g.v===0?'var(--risk)':'var(--warn)',t:g.q[1],d:g.q[2],w:g.a.who+' · '+g.a.tier})});
  return {areas:areas,answered:answered,total:total,ratios:ratios,rx:rx.slice(0,6)};
}

function reportText(r){
  var L=[],lab=['양호','주의','위험'];
  L.push('[재무건강 진단지 자동 접수]');
  L.push('회사: '+(S.company||'-')+' / 업종: '+(S.industry||'-')+' / 유형: '+(S.bizType||'-'));
  if(S.ref)L.push('유입: '+S.ref);
  L.push('종합점수: '+r.total+'점 ('+(r.answered?grade(r.total)[0]:'미응답')+')');
  L.push('');L.push('■ 영역별 점수');
  r.areas.forEach(function(x){L.push('- '+x.a.name+'('+x.a.tier+'): '+(x.cnt?x.score+'점 '+grade(x.score)[0]:'미응답'))});
  var hasFin=FIN.some(function(f){return has(f.id)});
  if(hasFin){L.push('');L.push('■ 입력 금액');FIN.forEach(function(f){if(has(f.id))L.push('- '+f.label+': '+won(fv(f.id)))})}
  if(r.ratios.length){L.push('');L.push('■ 재무지표');r.ratios.forEach(function(q){L.push('- '+q[0]+': '+q[1]+' ('+lab[q[2]]+')')})}
  L.push('');L.push('■ 문항별 응답 (예2/일부1/아니오0)');
  AREAS.forEach(function(a){var ans=S.ans[a.key]||[];L.push('- '+a.name+': '+a.qs.map(function(q,i){return (ans[i]===0||ans[i]===1||ans[i]===2)?ans[i]:'-'}).join(' '))});
  if(r.rx.length){L.push('');L.push('■ 우선 처방');r.rx.forEach(function(x,i){L.push((i+1)+'. '+x.t)})}
  return L.join('\n');
}

function submit(){
  var err=$('pd-err'),phone=(S.phone||'').replace(/[^0-9]/g,'');
  if(!(S.name||'').trim()){err.textContent='대표자 성함을 입력해 주세요.';$('pd-name').focus();return}
  if(phone.length<10||phone.length>11){err.textContent='휴대폰 번호를 정확히 입력해 주세요.';$('pd-phone').focus();return}
  if(!S.agree){err.textContent='개인정보 수집·이용에 동의해 주셔야 결과를 확인하실 수 있습니다.';return}
  err.textContent='';
  var r=compute();
  if(!S.sent){
    var fd=new FormData();
    fd.append('name',S.name.trim());
    fd.append('phone',S.phone.trim());
    fd.append('email',(S.email||'').trim());
    fd.append('bizType',S.bizType||'');
    fd.append('topics','재무건강 진단');
    fd.append('revenue',fv('rev')?won(fv('rev')):'');
    fd.append('message',reportText(r));
    nextBtn.disabled=true;nextBtn.textContent='결과를 준비하고 있습니다…';
    var done=false,finish=function(){if(done)return;done=true;nextBtn.disabled=false;S.sent=true;go(LAST)};
    try{fetch(SCRIPT_URL,{method:'POST',body:fd,mode:'no-cors',keepalive:true}).then(finish,finish)}catch(e){finish()}
    setTimeout(finish,6000);
    try{if(typeof window.gtag==='function')window.gtag('event','generate_lead',{lead_topics:'재무건강 진단',lead_biz_type:S.bizType||'',diag_score:r.total,diag_ref:S.ref||''})}catch(e){}
  }else go(LAST);
}

function radarSVG(areas){
  var cx=180,cy=150,R=100,n=areas.length,s='';
  function pt(i,r){var a=-Math.PI/2+i*2*Math.PI/n;return [cx+r*Math.cos(a),cy+r*Math.sin(a)]}
  [25,50,75,100].forEach(function(l){s+='<polygon class="g" points="'+areas.map(function(_,i){return pt(i,R*l/100).join(',')}).join(' ')+'"/>'});
  areas.forEach(function(x,i){var p=pt(i,R);s+='<line class="g" x1="'+cx+'" y1="'+cy+'" x2="'+p[0]+'" y2="'+p[1]+'"/>';
    var q=pt(i,R+20),anc=Math.abs(q[0]-cx)<8?'middle':q[0]>cx?'start':'end';
    s+='<text x="'+q[0].toFixed(1)+'" y="'+(q[1]+4).toFixed(1)+'" text-anchor="'+anc+'">'+x.a.name+'</text>'});
  s+='<polygon class="shape" points="'+areas.map(function(x,i){return pt(i,R*x.score/100).join(',')}).join(' ')+'"/>';
  areas.forEach(function(x,i){var p=pt(i,R*x.score/100);s+='<circle class="dot" cx="'+p[0]+'" cy="'+p[1]+'" r="3.5"/>'});
  return '<svg class="pd-radar" viewBox="-45 0 450 300" role="img" aria-label="영역별 점수 방사형 차트">'+s+'</svg>';
}

function renderResult(){
  var r=compute(),tg=r.answered?grade(r.total):['미응답','p-none'],lab=['양호','주의','위험'],cls=['p-good','p-warn','p-risk'];
  main.innerHTML='<div class="pd-screen">'+
   '<div class="pd-done">'+esc(S.name||'대표')+'님, 진단이 접수되었습니다. 이근종 CFP®가 결과를 검토한 뒤 '+esc(S.phone||'')+'로 연락드리겠습니다.</div>'+
   '<section class="pd-card"><span class="pd-eyebrow">'+esc(S.company||'우리 회사')+' · 진단 결과</span>'+
   '<div class="pd-total"><span class="pd-big">'+r.total+'</span><span class="pd-of">/ 100점</span><span class="pd-pill '+tg[1]+'">'+tg[0]+'</span></div>'+
   '<div class="pd-res-grid">'+radarSVG(r.areas)+'<div class="pd-bars">'+r.areas.map(function(x){var g=grade(x.score);return '<div class="pd-bar"><span>'+x.a.name+'</span><div class="pd-track"><div class="pd-fill" style="width:'+x.score+'%;background:'+g[2]+'"></div></div><span class="pd-s">'+x.score+'</span></div>'}).join('')+'</div></div></section>'+
   (r.ratios.length?'<section class="pd-card"><h3 style="font-size:19px">재무지표 분석</h3><div class="pd-ratios">'+r.ratios.map(function(q){return '<div class="pd-ratio"><span class="k">'+q[0]+'</span><span class="v">'+q[1]+'</span><span class="pd-pill '+cls[q[2]]+'">'+lab[q[2]]+'</span><span class="n">'+q[3]+'</span></div>'}).join('')+'</div></section>':'')+
   '<section class="pd-card"><h3 style="font-size:19px">우선 처방</h3><ul class="pd-rx">'+(r.rx.map(function(i){return '<li><span style="background:'+i.c+'"></span><div><div class="t">'+i.t+'</div><div class="d">'+i.d+'</div><div class="who">'+i.w+'</div></div></li>'}).join('')||'<li><span style="background:var(--grid)"></span><div class="d">모든 항목이 양호합니다.</div></li>')+'</ul></section>'+
   '<section class="pd-card"><h3 style="font-size:19px">더 빠른 상담을 원하시면</h3><div class="pd-actions">'+
   '<a class="pd-btn primary" href="http://pf.kakao.com/_VHesX" target="_blank" rel="noopener">카카오톡 상담<small>플러스원자문그룹 채널</small></a>'+
   '<a class="pd-btn" href="tel:010-5170-8020">전화 상담<small>010-5170-8020</small></a></div>'+
   '<p class="pd-note">이 진단지는 자가 점검용 참고 자료이며 개별 세무·법률 판단을 대신하지 않습니다. 세무 신고 대리와 법률 자문은 플러스원자문그룹 자문위원(세무사·변호사·공인노무사)이 각 자격에 따라 수행합니다.</p></section>'+
   byline()+'</div>';
}

function byline(){return '<div class="pd-byline"><b>이근종 CFP®</b> | 플러스원자문그룹 대표. 25년 동안 법인·개인사업자 재무관리를 실무로 다뤘으며, 사업자 재무진단·경영자 자산관리·가업승계 재무설계를 담당합니다.</div>'}

render();
})();
