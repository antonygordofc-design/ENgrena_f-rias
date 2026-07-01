// ============================================================
// EngrenaFérias — engine completa (porte 1:1 da lógica original)
// Dados ficam salvos no localStorage do navegador.
// ============================================================

const COLABS = [
["14842", "ADENILTON RESSAI DOS SANTOS", "6/9/2026", "6/10/2025", "6/9/2026", "3/5/2026", 30, 18],
  ["10318", "ADILSON ZWARYCZ JUNIOR", "1/4/2026", "1/5/2024", "1/4/2025", "12/4/2025", 12, 18],
  ["10740", "ALESSANDRO RISSATO CARTELLI", "3/9/2026", "3/10/2024", "3/9/2025", "12/9/2025", 12, 18],
  ["14320", "ANDERSON HEITOR MACHADO DE CAMPOS", "7/16/2026", "7/17/2025", "7/16/2026", "6/16/2026", 30, 2.5],
  ["13748", "ANDRE EZEQUIEL VIER DE CAMARGO DA CRUZ", "4/5/2027", "4/6/2026", "4/5/2027", "3/5/2027", 30, 5],
  ["13960", "BRUNO DE LIMA SCHNEIDER", "10/9/2026", "10/10/2025", "10/9/2026", "6/16/2026", 30, 22.5],
  ["14317", "BRUNO SILVA FERREIRA", "7/16/2026", "7/17/2025", "7/16/2026", "2/5/2026", 30, 15.5],
  ["12428", "CASSIO AGUSTENUS FIUZA PEREIRA", "5/10/2027", "5/11/2025", "5/10/2027", "4/10/2026", 18, 12],
  ["14406", "CELSO ROLAO", "9/17/2026", "9/18/2024", "9/17/2025", "8/17/2025", 30, 2.5],
  ["13525", "DIEGO SANTOS PAIXAO", "9/19/2026", "9/20/2025", "9/19/2026", "8/19/2025", 30, 22.5],
  ["14451", "EDEMAR FRANCISCO GARDACHO", "10/6/2026", "10/7/2025", "10/6/2026", "9/5/2026", 30, 12],
  ["13553", "EDER LOPES DE CAMARGO", "10/18/2026", "10/19/2024", "10/18/2025", "9/18/2025", 30, 10],
  ["12927", "EMERSON DE BARROS MACHADO", "1/19/2027", "1/20/2025", "1/19/2026", "12/19/2026", 30, 17.5],
  ["15268", "FELIPE PELOSI JUNIOR", "5/18/2027", "5/19/2024", "5/18/2025", "4/18/2027", 30, 0],
  ["11089", "FERNANDO DOS SANTOS", "6/30/2026", "7/1/2024", "6/30/2025", "5/30/2026", 30, 2.5],
  ["13118", "FILIPE EDUARDO DE LIMA", "10/7/2026", "10/8/2025", "10/7/2025", "9/7/2026", 30, 22.5],
  ["12390", "GERMANO DE REZENDE", "2/20/2027", "2/21/2026", "2/20/2027", "1/20/2027", 30, 0],
  ["14652", "GIAN DE MELO FABRICIO", "3/4/2026", "3/5/2025", "3/4/2026", "2/4/2027", 30, 22.5],
  ["12864", "GILBERTO ALEXANDRE RAMOS", "10/9/2026", "10/9/2024", "10/8/2025", "9/8/2025", 30, 22.5],
  ["10389", "GILBERTO PORTELA PIRES", "7/1/2026", "6/30/2025", "7/1/2024", "5/30/2026", 30, 0],
  ["10051", "GILMAR FRANCISCO DOS SANTOS", "1/7/2027", "1/8/2025", "1/7/2026", "12/7/2026", 15, 0],
  ["15219", "HENRIQUE DE OLIVEIRA DE LIMA", "4/13/2027", "4/14/2025", "4/13/2026", "3/13/2027", 30, 0],
  ["15342", "ISADORA BINI MAZZUCO", "6/16/2026", "6/15/2026", null, "5/15/2026", 30, 0],
  ["13324", "JEFERSON ALVES", "3/21/2027", "3/22/2025", "3/21/2026", "2/21/2027", 30, 7.5],
  ["13552", "JEFERSON JOSE ANTUNES DAS CHAGAS", "10/18/2026", "10/19/2024", "10/18/2025", "9/18/2025", 30, 5],
  ["10760", "JOAO ILSON SPIVACOSKI", "5/9/2026", "5/10/2024", "5/9/2025", "4/9/2027", 12, 18],
  ["12088", "JOAO JOCELIM FERREIRA", "2/24/2027", "2/25/2026", "2/24/2026", "1/24/2027", 30, 20],
  ["10324", "JOELSON DE CRISTO", "2/9/2027", "2/10/2025", "2/9/2026", "1/9/2027", 12, 12.5],
  ["13369", "JOICE MARCAL", "5/5/2026", "5/6/2025", "5/5/2026", "4/5/2026", 18, 12],
  ["13591", "JONIELSON BARROS DA LUZ", "11/18/2025", "11/19/2023", "11/18/2024", "10/18/2026", 30, 17.5],
  ["10388", "JOSENEI VINICIUS SCHELUCHUHAK", "6/30/2026", "7/1/2025", "6/30/2024", "5/30/2026", 12, 18],
  ["14310", "JUNIO SILVA CREVELARO", "7/16/2026", "7/17/2025", "7/16/2026", "6/16/2026", 30, 9.5],
  ["14315", "JUNIOR HENRIQUE RIBEIRO", "7/6/2026", "7/7/2025", "7/6/2026", "6/6/2026", 18, 12],
  ["10929", "LEANDRO DIAS MENDES NASCIMENTO", "8/1/2026", "8/2/2025", "8/1/2026", "7/1/2026", 12, 18],
  ["12987", "LEANDRO DURAT OBAL", "3/29/2026", "3/30/2024", "3/29/2025", "2/28/2026", 18, 12],
  ["13750", "LUCAS DOS SANTOS", "4/5/2026", "4/6/2024", "4/5/2025", "3/5/2027", 30, 22.5],
  ["11319", "LUIZ FRANCZUK", "3/31/2026", "4/1/2024", "3/31/2025", "2/28/2026", 30, 0],
  ["10227", "LUIZ RAMOS DE LIMA", "3/4/2026", "3/5/2025", "3/4/2026", "2/4/2026", 30, 0],
  ["14336", "MAGNA CONCEICAO DE LIMA", "7/16/2026", "7/17/2025", "7/16/2026", "6/16/2026", 30, 2.5],
  ["11106", "MARCELO MACHADO", "7/9/2026", "7/10/2024", "7/9/2025", "6/9/2026", 30, 0],
  ["14244", "MARCOS BALCOTA", "5/7/2027", "5/8/2024", "5/7/2026", "4/7/2027", 30, 5],
  ["11954", "MARCOS DE AUDA", "4/13/2026", "4/14/2025", "4/13/2026", "3/14/2026", 30, 7.5],
  ["12875", "MARCOS ROBERTO MARTINS DE ALMEIDA", "10/29/2026", "10/30/2024", "10/29/2025", "9/29/2025", 18, 20],
  ["10562", "MAXIMILIANO ABRAO", "8/10/2026", "8/11/2024", "8/10/2025", "7/10/2026", 30, 20],
  ["15043", "MIGUEL EDUARDO DA SILVA MICHALCZYSZYN", "11/3/2026", "11/4/2024", "11/3/2025", "10/3/2026", 30, 20],
  ["14607", "MORONI MARGRAF LOPES", "2/5/2027", "2/6/2026", "2/5/2027", "1/5/2027", 18, 12],
  ["13661", "NATHAN SOUZA DZUBATEI", "1/19/2027", "1/20/2025", "1/19/2026", "12/19/2026", 30, 17.5],
  ["12076", "PAULO JOSNEI SCHEIFER", "11/30/2025", "12/1/2023", "11/30/2024", "10/30/2025", 15, 15],
  ["12271", "PEDRO HENRIQUE SOUTHIER", "8/31/2026", "9/1/2025", "8/31/2026", "7/31/2026", 12, 18],
  ["14889", "RAFAEL DE LIMA VITEK", "7/3/2026", "7/4/2024", "7/3/2025", "6/3/2026", 30, 0],
  ["12992", "RIVALDO VIEIRA DA SILVA", "4/21/2026", "4/22/2024", "4/21/2025", "3/21/2026", 30, 18],
  ["10772", "ROBERTO GARDIM", "6/19/2026", "6/20/2024", "6/19/2025", "5/19/2026", 30, 12],
  ["13825", "RONALDO DE JESUS DE MORAIS", "6/5/2026", "6/6/2024", "6/5/2025", "5/5/2026", 30, 12],
  ["15212", "TATIANE DOS SANTOS LIMA", "4/13/2027", "4/14/2025", "4/13/2026", "3/13/2027", 30, 7.5],
  ["11119", "TIAGO DE LIMA MARTINS", "11/19/2026", "11/20/2023", "11/19/2025", "10/19/2026", 30, 12.5],
  ["11466", "WALMIR DO ROSARIO", "9/30/2025", "10/1/2023", "9/30/2024", "8/30/2025", 30, 0],
  ["12876", "WELINTON DE ALMEIDA PEDROSO", "10/29/2026", "10/29/2025", "10/29/2026", "9/29/2026", 30, 8],
];

const PROGRAMACOES = [
["14842", "9/8/2025", 30],
  ["10318", "7/7/2025", 12],
  ["10318", "12/10/2025", 18],
  ["10740", "7/14/2025", 12],
  ["10740", "1/5/2026", 18],
  ["14320", "12/8/2025", 30],
  ["13748", "9/8/2025", 8],
  ["13748", "12/22/2025", 12],
  ["14317", "10/13/2025", 25],
  ["12428", "9/29/2025", 18],
  ["14406", "4/1/2026", 30],
  ["13525", "9/1/2025", 9],
  ["14451", "7/14/2025", 18],
  ["13553", "11/10/2026", 30],
  ["12927", "1/26/2026", 30],
  ["11089", "11/3/2025", 30],
  ["14652", "9/1/2025", 30],
  ["10389", "11/24/2025", 30],
  ["13552", "7/31/2025", 15],
  ["13552", "12/22/2025", 15],
  ["10760", "7/7/2025", 12],
  ["12088", "7/20/2026", 30],
  ["10324", "12/1/2025", 30],
  ["13369", "9/29/2025", 18],
  ["13591", "9/8/2025", 12],
  ["10388", "1/12/2026", 18],
  ["14315", "11/17/2025", 18],
  ["10929", "7/7/2025", 12],
  ["12987", "7/7/2025", 18],
];

// ---------- helpers de data ----------
const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);
function md(s){ if(!s) return null; const [m,d,y]=s.split("/"); return `${y}-${String(m).padStart(2,"0")}-${String(d).padStart(2,"0")}`; }
function addDaysIso(iso,n){ const d=new Date(iso+"T00:00:00"); d.setDate(d.getDate()+n); return d.toISOString().slice(0,10); }
function ddmmyyyyToIso(s){ const [d,m,y]=s.split("/"); return `${y}-${String(m).padStart(2,"0")}-${String(d).padStart(2,"0")}`; }
function normalizeName(s){ return s.trim().toUpperCase().replace(/\s+/g," "); }
const MESES=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
const DOW=["dom","seg","ter","qua","qui","sex","sáb"];
function fmtLong(iso){ if(!iso) return "—"; const d=new Date(iso+"T00:00:00"); return `${String(d.getDate()).padStart(2,"0")} de ${MESES[d.getMonth()]} de ${d.getFullYear()}`; }
function fmtShort(iso){ if(!iso) return "—"; const d=new Date(iso+"T00:00:00"); return `${String(d.getDate()).padStart(2,"0")}/${String(d.getMonth()+1).padStart(2,"0")}/${d.getFullYear()}`; }
function fmtTs(iso){ const d=new Date(iso); return `${String(d.getDate()).padStart(2,"0")}/${String(d.getMonth()+1).padStart(2,"0")}/${d.getFullYear()} ${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`; }
function diffDays(a,b){ if(!a||!b) return 0; const d1=new Date(a+"T00:00:00"), d2=new Date(b+"T00:00:00"); return Math.max(0, Math.floor((d2-d1)/86400000)+1); }
function overlaps(aS,aE,bS,bE){ return !(aE<bS || bE<aS); }
function escapeHtml(s){ return (s||"").replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c])); }

// ---------- seed ----------
function buildSeed(){
  const collaborators=[]; const byMat=new Map();
  for(const r of COLABS){
    const [mat,nome,term,aqIni,aqFim,lim,dias,saldo]=r;
    const c={ id:uid(), matricula:mat, nomeCompleto:nome, cpf:"000.000.000-00", turno:null, supervisor:null,
      diasDisponiveis:dias+saldo, diasAbono:0,
      periodoAquisitivoInicio:md(aqIni), periodoAquisitivoTermino:md(aqFim),
      dataTerminoConcessao:md(term), periodoVencimento:md(term), limiteSaida:md(lim) };
    collaborators.push(c); byMat.set(mat,c);
  }
  const scheduled=[];
  for(const [mat,ini,dias] of PROGRAMACOES){
    const c=byMat.get(mat); if(!c) continue;
    const iniIso=md(ini);
    scheduled.push({ id:uid(), collaboratorId:c.id, dataInicio:iniIso, dataFim:addDaysIso(iniIso,dias-1), dias, tipo:"Individual", origem:"importado" });
  }
  return {collaborators,scheduled};
}

const initialAdmins=[
  {username:"Adilson", password:"@adimin@", mustChange:true},
  {username:"Junio", password:"@adimin@", mustChange:true},
  {username:"ADMant", password:"ADMant", mustChange:false},
];

function buildInitial(){
  const {collaborators,scheduled}=buildSeed();
  return { collaborators, scheduled, requests:[], events:[], admins:JSON.parse(JSON.stringify(initialAdmins)), session:null, seeded:true };
}

// ---------- store (persist em localStorage) ----------
const STORAGE_KEY="engrenaferias-html-v3";
let STATE = loadState();

function loadState(){
  try{
    const raw=localStorage.getItem(STORAGE_KEY);
    if(!raw) return buildInitial();
    const parsed=JSON.parse(raw);
    if(!parsed || !parsed.seeded || !parsed.collaborators?.length || !parsed.admins?.length) return buildInitial();
    return parsed;
  }catch(e){ return buildInitial(); }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE)); }

const Store = {
  loginColaborador(matricula, nome, cpf){
    const m=(matricula||"").trim(); const n=normalizeName(nome||""); const c=(cpf||"").trim();
    if(!m||!n||!c) return {ok:false,error:"Preencha todos os campos."};
    if(n.split(" ").length<2) return {ok:false,error:"Informe o NOME COMPLETO."};
    let found=STATE.collaborators.find(x=>x.matricula===m && normalizeName(x.nomeCompleto)===n);
    if(found){
      if(found.cpf!=="000.000.000-00" && found.cpf!==c) return {ok:false,error:"CPF não confere com o cadastro."};
      if(found.cpf==="000.000.000-00"){ Store.updateCollaborator(found.id,{cpf:c}); }
    } else {
      return {ok:false,error:"Matrícula ou nome não encontrado no cadastro."};
    }
    STATE.session={type:"colaborador", collaboratorId:found.id};
    saveState();
    return {ok:true,id:found.id};
  },
  loginAdmin(username,password){
    const u=STATE.admins.find(a=>a.username.toLowerCase()===(username||"").trim().toLowerCase());
    if(!u) return {ok:false,error:"Usuário não encontrado."};
    if(u.password!==password) return {ok:false,error:"Senha incorreta."};
    STATE.session={type:"admin", username:u.username};
    saveState();
    return {ok:true};
  },
  logout(){ STATE.session=null; saveState(); },
  changeAdminPassword(username,newPassword){
    STATE.admins=STATE.admins.map(a=> a.username===username ? {...a,password:newPassword,mustChange:false} : a);
    saveState();
  },
  upsertCollaborator(c){
    const existing=STATE.collaborators.find(x=>x.matricula===c.matricula);
    if(existing){ Store.updateCollaborator(existing.id,c); return STATE.collaborators.find(x=>x.id===existing.id); }
    const today=new Date().toISOString().slice(0,10);
    const novo={ id:uid(), matricula:c.matricula, nomeCompleto:c.nomeCompleto, cpf:c.cpf,
      turno:c.turno??null, supervisor:c.supervisor??null,
      diasDisponiveis:c.diasDisponiveis??30, diasAbono:c.diasAbono??0,
      periodoAquisitivoInicio:c.periodoAquisitivoInicio??today, periodoAquisitivoTermino:c.periodoAquisitivoTermino??null,
      dataTerminoConcessao:c.dataTerminoConcessao??addDaysIso(today,365), periodoVencimento:c.periodoVencimento??addDaysIso(today,365),
      limiteSaida:c.limiteSaida??null };
    STATE.collaborators.push(novo); saveState(); return novo;
  },
  updateCollaborator(id,patch){
    STATE.collaborators=STATE.collaborators.map(c=> c.id===id ? {...c,...patch} : c);
    saveState();
  },
  createRequest(r){
    const req={...r, id:uid(), status:"em_aberto", createdAt:new Date().toISOString(), seen:false};
    STATE.requests.push(req); saveState(); return req;
  },
  decideRequest(id,status){
    const req=STATE.requests.find(r=>r.id===id); if(!req) return;
    STATE.requests=STATE.requests.map(r=> r.id===id ? {...r,status,decidedAt:new Date().toISOString(),seen:false} : r);
    if(status==="aprovada"){
      Store.addScheduled({ collaboratorId:req.collaboratorId, dataInicio:req.dataInicio, dataFim:req.dataFim, dias:req.dias, tipo:"Individual", origem:"aprovado" });
    }
    saveState();
  },
  markRequestSeen(id){ STATE.requests=STATE.requests.map(r=> r.id===id ? {...r,seen:true} : r); saveState(); },
  addScheduled(sv){ STATE.scheduled.push({...sv,id:uid()}); saveState(); },
  removeScheduled(id){ STATE.scheduled=STATE.scheduled.filter(x=>x.id!==id); saveState(); },
  addEvent(e){ STATE.events.push({...e,id:uid()}); saveState(); },
  removeEvent(id){ STATE.events=STATE.events.filter(x=>x.id!==id); saveState(); },
  importVacations(rows){
    let added=0, createdCollaborators=0, mat=2000+STATE.collaborators.length;
    for(const row of rows){
      if(!row.nome || !row.inicio || !row.dias) continue;
      const nomeNorm=normalizeName(row.nome);
      let col=STATE.collaborators.find(c=>normalizeName(c.nomeCompleto)===nomeNorm);
      if(!col){
        col=Store.upsertCollaborator({ matricula:String(mat++), nomeCompleto:row.nome.trim(), cpf:"000.000.000-00",
          diasDisponiveis:row.dias+(row.abono??0), diasAbono:row.abono??0 });
        createdCollaborators++;
      }
      let inicioIso=row.inicio;
      if(inicioIso.includes("/")) inicioIso=ddmmyyyyToIso(inicioIso);
      Store.addScheduled({ collaboratorId:col.id, dataInicio:inicioIso, dataFim:addDaysIso(inicioIso,row.dias-1), dias:row.dias, tipo:row.tipo??"Individual", origem:"importado" });
      added++;
    }
    saveState();
    return {added,createdCollaborators};
  },
  getCollaborator(id){ return STATE.collaborators.find(c=>c.id===id); },
  resetAll(){ STATE=buildInitial(); saveState(); }
};

function findShiftConflict(collaboratorId, dataInicio, dataFim){
  const me=STATE.collaborators.find(c=>c.id===collaboratorId);
  if(!me || !me.turno) return null;
  for(const sv of STATE.scheduled){
    if(sv.collaboratorId===collaboratorId) continue;
    const other=STATE.collaborators.find(c=>c.id===sv.collaboratorId);
    if(!other || other.turno!==me.turno) continue;
    if(overlaps(dataInicio,dataFim,sv.dataInicio,sv.dataFim)) return {collaborator:other, scheduled:sv};
  }
  return null;
}


// ============================================================
// UI / Router / Render de telas
// ============================================================

function toast(msg, type, desc){
  const wrap=document.getElementById("toastWrap");
  const el=document.createElement("div");
  el.className="toast "+(type||"");
  el.innerHTML = `<b>${escapeHtml(msg)}</b>${desc?`<span>${escapeHtml(desc)}</span>`:""}`;
  wrap.appendChild(el);
  requestAnimationFrame(()=>el.classList.add("show"));
  setTimeout(()=>{ el.classList.remove("show"); setTimeout(()=>el.remove(),300); }, 5000);
}

function nav(path, replace){
  if(replace) location.replace("#"+path); else location.hash=path;
}

function requireColaborador(){
  if(!STATE.session || STATE.session.type!=="colaborador"){ nav("login/colaborador", true); return null; }
  return Store.getCollaborator(STATE.session.collaboratorId);
}
function requireAdmin(){
  if(!STATE.session || STATE.session.type!=="admin"){ nav("login/admin", true); return null; }
  return STATE.session;
}

function doLogout(){ Store.logout(); nav("",true); render(); }

function updateHeader(){
  const rl=document.getElementById("rightLabel");
  const lo=document.getElementById("logoutBtn");
  if(STATE.session?.type==="colaborador"){
    const c=Store.getCollaborator(STATE.session.collaboratorId);
    rl.textContent = c ? `Colaborador: ${c.nomeCompleto}` : "";
    rl.style.display="inline"; lo.style.display="inline-flex";
  } else if(STATE.session?.type==="admin"){
    rl.textContent = `Administrador: ${STATE.session.username}`;
    rl.style.display="inline"; lo.style.display="inline-flex";
  } else {
    rl.style.display="none"; lo.style.display="none";
  }
}

// ---------------- calendário custom (substitui DayPicker) ----------------
function buildMonthGrid(year, month){
  const first = new Date(year, month, 1);
  const startDow = first.getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const cells=[];
  for(let i=0;i<startDow;i++) cells.push(null);
  for(let d=1; d<=daysInMonth; d++) cells.push(new Date(year,month,d));
  return cells;
}
function isoOf(date){ return date.toISOString===undefined ? "" : `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`; }

function renderTwoMonthCalendar(opts){
  // opts: {baseDate, classify(iso) => array of class names}
  const base = opts.baseDate || new Date();
  let html = `<div class="cal-wrap">`;
  for(let off=0; off<2; off++){
    const d = new Date(base.getFullYear(), base.getMonth()+off, 1);
    const y=d.getFullYear(), m=d.getMonth();
    const cells = buildMonthGrid(y,m);
    html += `<div class="cal-month"><div class="cal-month-title">${MESES[m]} de ${y}</div><div class="cal-grid">`;
    DOW.forEach(x=> html += `<div class="cal-dow">${x}</div>`);
    cells.forEach(date=>{
      if(!date){ html += `<div class="cal-day empty"></div>`; return; }
      const iso = isoOf(date);
      const cls = opts.classify ? opts.classify(iso) : [];
      html += `<div class="cal-day ${cls.join(" ")}">${date.getDate()}</div>`;
    });
    html += `</div></div>`;
  }
  html += `</div>`;
  return html;
}

function eachDayIso(start,end){
  const out=[]; const s=new Date(start+"T00:00:00"); const e=new Date(end+"T00:00:00");
  for(let d=new Date(s); d<=e; d.setDate(d.getDate()+1)) out.push(isoOf(d));
  return out;
}

// ================= PAGES =================

function pageHome(){
  return `
  <section class="hero">
    <div class="eyebrow"><i data-lucide="cog" style="width:12px;height:12px;"></i> Setor de Manutenção</div>
    <h1><span class="text-gradient-orange">EngrenaFérias</span></h1>
    <p>Planeje, solicite e aprove as férias da equipe com a precisão de uma engrenagem bem ajustada.</p>
  </section>
  <div class="grid3" style="margin-bottom:48px;">
    <div class="card metal-plate action-card">
      <div class="icon primary"><i data-lucide="hard-hat" style="width:40px;height:40px;"></i></div>
      <h3>Sou Colaborador</h3>
      <p>Acesse com sua matrícula, nome completo e CPF para ver e solicitar suas férias.</p>
      <a class="btn btn-default btn-full" onclick="nav('login/colaborador')">Acessar</a>
    </div>
    <div class="card metal-plate action-card">
      <div class="icon"><i data-lucide="shield" style="width:40px;height:40px;"></i></div>
      <h3>Sou Administrador</h3>
      <p>Acesso restrito aos supervisores responsáveis pela aprovação de férias.</p>
      <a class="btn btn-outline btn-full" onclick="nav('login/admin')">Acessar</a>
    </div>
    <div class="card metal-plate action-card">
      <div class="icon"><i data-lucide="book-open" style="width:40px;height:40px;"></i></div>
      <h3>Guia de Uso</h3>
      <p>Entenda como usar cada tela do sistema, passo a passo.</p>
      <a class="btn btn-outline btn-full" onclick="nav('guia')">Acessar</a>
    </div>
  </div>`;
}

function pageLoginColaborador(){
  return `
  <div class="login-wrap">
    <div class="card metal-plate login-card container-sm">
      <div class="login-head"><i data-lucide="hard-hat"></i><h1>Acesso do Colaborador</h1></div>
      <form id="formLoginColab">
        <div class="field"><label for="mat">Matrícula</label><input id="mat" required></div>
        <div class="field"><label for="nomeC">Nome completo</label><input id="nomeC" placeholder="Ex.: João Ilson Spivacoski" required></div>
        <div class="field"><label for="cpfC">CPF</label><input id="cpfC" placeholder="000.000.000-00" required></div>
        <button type="submit" class="btn btn-default btn-full">Entrar</button>
        <p class="helptext">Use a matrícula e o NOME COMPLETO cadastrados pelo RH. No primeiro acesso, o CPF informado fica salvo.</p>
        <div class="center"><a class="link-accent" onclick="nav('')">Voltar</a></div>
      </form>
    </div>
  </div>`;
}
function afterLoginColaborador(){
  document.getElementById("formLoginColab").addEventListener("submit", e=>{
    e.preventDefault();
    const r = Store.loginColaborador(document.getElementById("mat").value, document.getElementById("nomeC").value, document.getElementById("cpfC").value);
    if(!r.ok){ toast(r.error,"error"); return; }
    toast("Bem-vindo(a)!");
    nav("colaborador");
  });
}

function pageLoginAdmin(){
  return `
  <div class="login-wrap">
    <div class="card metal-plate login-card container-sm">
      <div class="login-head"><i data-lucide="shield"></i><h1>Acesso do Administrador</h1></div>
      <form id="formLoginAdmin">
        <div class="field"><label for="userA">Usuário</label><input id="userA" required></div>
        <div class="field"><label for="passA">Senha</label><input id="passA" type="password" required></div>
        <button type="submit" class="btn btn-default btn-full">Entrar</button>
        <div class="center" style="margin-top:12px;"><a class="link-accent" onclick="nav('')">Voltar</a></div>
      </form>
    </div>
  </div>`;
}
function afterLoginAdmin(){
  document.getElementById("formLoginAdmin").addEventListener("submit", e=>{
    e.preventDefault();
    const username=document.getElementById("userA").value;
    const r = Store.loginAdmin(username, document.getElementById("passA").value);
    if(!r.ok){ toast(r.error,"error"); return; }
    const u=STATE.admins.find(a=>a.username.toLowerCase()===username.trim().toLowerCase());
    if(u?.mustChange){ toast("Por favor, defina uma nova senha.","info"); nav("admin/senha"); }
    else { toast("Bem-vindo(a)!"); nav("admin"); }
  });
}

function pageGuia(){
  const Section=(title,body)=>`<div class="card metal-plate section-card"><h2>${title}</h2><div class="body">${body}</div></div>`;
  return `
  <div class="container-md" style="padding:40px 0;width:100%;">
    <div class="page-head-row">
      <h1 class="dash-title" style="margin:0;">Guia de Uso</h1>
      <a class="btn btn-outline" onclick="nav('')"><i data-lucide="home"></i>Voltar ao início</a>
    </div>
    ${Section("1. Acessando o sistema", `
      <p>Na tela inicial, escolha <b>Sou Colaborador</b> ou <b>Sou Administrador</b>.</p>
      <p><b>Colaborador:</b> informe sua matrícula, <b>NOME COMPLETO</b> e CPF. No primeiro acesso, o CPF informado fica salvo.</p>
      <p><b>Administrador:</b> apenas usuários autorizados (Adilson, Junio, ADMant) podem entrar.</p>`)}
    ${Section("2. Área do Colaborador", `
      <p><b>Tempo de Férias Disponível:</b> período aquisitivo, concessão e limite para saída, em calendário.</p>
      <p><b>Dias Disponíveis:</b> calendário com seus dias e os da equipe.</p>
      <p><b>Solicitar Férias:</b> envie um pedido de férias ao seu supervisor.</p>
      <p><b>Histórico:</b> acompanhe o status das suas solicitações.</p>`)}
    ${Section("3. Área do Administrador", `
      <p><b>Programadas:</b> lista de férias aprovadas/agendadas, com opção de remover.</p>
      <p><b>Calendário:</b> visão geral da equipe + cadastro de datas importantes/paradas de manutenção.</p>
      <p><b>Solicitações:</b> aprove ou rejeite pedidos pendentes para o seu setor.</p>
      <p><b>Manutenção</b> (somente ADMant): importar planilha, gerenciar colaboradores e resetar a base.</p>`)}
  </div>`;
}

// ---------- COLABORADOR ----------
function colaboradorWrap(inner){
  return `<div style="padding:32px 0;width:100%;">
    <button class="back-btn" onclick="history.back()"><i data-lucide="arrow-left" style="width:14px;height:14px;"></i>Voltar</button>
    ${inner}
  </div>`;
}

function pageColaboradorHome(){
  return colaboradorWrap(`
  <h1 class="dash-title">O que você quer fazer?</h1>
  <div class="grid4">
    <div class="card metal-plate action-card"><i data-lucide="clock" style="width:32px;height:32px;color:var(--primary);"></i>
      <h3 style="font-size:1.1rem;">Tempo de Férias Disponível</h3><p>Período aquisitivo, concessão e limite para saída.</p>
      <a class="btn btn-default btn-full" onclick="nav('colaborador/tempo')">Abrir</a></div>
    <div class="card metal-plate action-card"><i data-lucide="calendar" style="width:32px;height:32px;color:var(--accent);"></i>
      <h3 style="font-size:1.1rem;">Dias Disponíveis</h3><p>Calendário com dias livres e ocupados.</p>
      <a class="btn btn-default btn-full" onclick="nav('colaborador/dias')">Abrir</a></div>
    <div class="card metal-plate action-card"><i data-lucide="file-plus" style="width:32px;height:32px;color:var(--primary);"></i>
      <h3 style="font-size:1.1rem;">Solicitar Férias</h3><p>Envie sua solicitação para o supervisor.</p>
      <a class="btn btn-default btn-full" onclick="nav('colaborador/solicitar')">Abrir</a></div>
    <div class="card metal-plate action-card"><i data-lucide="history" style="width:32px;height:32px;color:var(--accent);"></i>
      <h3 style="font-size:1.1rem;">Histórico de Solicitações</h3><p>Veja todas as suas solicitações enviadas.</p>
      <a class="btn btn-default btn-full" onclick="nav('colaborador/historico')">Abrir</a></div>
  </div>`);
}

function pageColaboradorTempo(){
  const collab=requireColaborador(); if(!collab) return "";
  const scheduled=STATE.scheduled.filter(x=>x.collaboratorId===collab.id);
  const conflicts=scheduled.map(sv=>findShiftConflict(collab.id, sv.dataInicio, sv.dataFim)).filter(Boolean);

  const classify = (iso)=>{
    const cls=[];
    if(collab.periodoAquisitivoInicio===iso) cls.push("aq-ini");
    if(collab.periodoAquisitivoTermino===iso) cls.push("aq-fim");
    if(collab.dataTerminoConcessao===iso) cls.push("term-conc");
    if(collab.limiteSaida===iso) cls.push("lim-saida");
    return cls;
  };
  const base = collab.periodoAquisitivoInicio ? new Date(collab.periodoAquisitivoInicio+"T00:00:00") : new Date();

  return colaboradorWrap(`
  <div class="space-y">
  <h1 class="dash-title" style="margin-bottom:0;">Tempo de Férias Disponível</h1>

  <div class="card metal-plate" style="padding:24px;">
    <div class="cardgrid-info">
      <div class="info-block"><span class="lbl"><i data-lucide="clock"></i>Início Período Aquisitivo</span><span class="val">${fmtLong(collab.periodoAquisitivoInicio)}</span></div>
      <div class="info-block"><span class="lbl"><i data-lucide="calendar-range"></i>Término Período Aquisitivo</span><span class="val">${fmtLong(collab.periodoAquisitivoTermino)}</span></div>
      <div class="info-block"><span class="lbl"><i data-lucide="calendar-clock"></i>Data Término de Concessão</span><span class="val">${fmtLong(collab.dataTerminoConcessao)}</span></div>
      <div class="info-block"><span class="lbl"><i data-lucide="calendar-x"></i>Limite para Saída</span><span class="val">${fmtLong(collab.limiteSaida)}</span></div>
    </div>
  </div>

  <div class="card metal-plate" style="padding:24px;">
    <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:4px;">Saldo</h2>
    <p class="small muted">Você tem <span style="color:var(--primary);font-weight:700;">${collab.diasDisponiveis} dias</span> de férias disponíveis.</p>
  </div>

  <div class="card metal-plate" style="padding:24px;">
    <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:12px;">Calendário dos seus períodos</h2>
    ${renderTwoMonthCalendar({baseDate:base, classify})}
    <div class="legend">
      <span><span class="dot" style="background:var(--accent);"></span>Início Aquisitivo</span>
      <span><span class="dot" style="background:rgba(109,143,174,.7);"></span>Término Aquisitivo</span>
      <span><span class="dot" style="background:var(--destructive);"></span>Término de Concessão</span>
      <span><span class="dot" style="background:var(--primary);"></span>Limite para Saída</span>
    </div>
  </div>

  ${!collab.turno ? `<div class="alert"><i data-lucide="alert-triangle"></i><div><b class="alert-title">Turno não cadastrado</b><div class="alert-desc">Seu turno ainda não está cadastrado pelo administrador. O alerta de conflito por turno ficará indisponível até que isso seja feito.</div></div></div>` : ""}

  ${conflicts.length>0 ? `<div class="alert destructive"><i data-lucide="alert-triangle"></i><div><b class="alert-title">Conflito de turno detectado</b><div class="alert-desc">${conflicts.map(c=>`<div>Já há um colaborador do seu turno (${escapeHtml(c.collaborator.nomeCompleto)}) com férias de ${fmtLong(c.scheduled.dataInicio)} a ${fmtLong(c.scheduled.dataFim)}.</div>`).join("")}</div></div></div>` : ""}

  <div class="card metal-plate" style="padding:24px;">
    <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:12px;">Suas férias programadas</h2>
    ${scheduled.length===0 ? `<p class="small muted">Nenhuma programação ainda.</p>` : `<ul class="req-list">${scheduled.map(s=>`<li class="req-item"><span>${fmtLong(s.dataInicio)} → ${fmtLong(s.dataFim)}</span><span style="color:var(--primary);font-weight:600;">${s.dias} dias · ${s.tipo}</span></li>`).join("")}</ul>`}
  </div>
  </div>`);
}

function pageColaboradorDias(){
  const collab=requireColaborador(); if(!collab) return "";
  const scheduled=STATE.scheduled.filter(x=>x.collaboratorId===collab.id);
  const others=STATE.scheduled.filter(x=>x.collaboratorId!==collab.id);

  const myDays=new Set(); scheduled.forEach(s=>eachDayIso(s.dataInicio,s.dataFim).forEach(d=>myDays.add(d)));
  const otherDays=new Set(); others.forEach(s=>eachDayIso(s.dataInicio,s.dataFim).forEach(d=>otherDays.add(d)));
  const eventDays=new Set(); STATE.events.forEach(e=>eachDayIso(e.dataInicio,e.dataFim).forEach(d=>eventDays.add(d)));

  const classify=(iso)=>{
    const cls=[];
    if(myDays.has(iso)) cls.push("mine");
    else if(otherDays.has(iso)) cls.push("others");
    if(eventDays.has(iso)) cls.push("event");
    return cls;
  };

  return colaboradorWrap(`
  <div class="space-y">
  <h1 class="dash-title" style="margin-bottom:0;">Dias Disponíveis</h1>
  <div class="card metal-plate" style="padding:24px;">
    ${renderTwoMonthCalendar({classify})}
    <div class="legend">
      <span><span class="dot" style="background:var(--primary);"></span>Suas férias</span>
      <span><span class="dot" style="background:rgba(109,143,174,.4);"></span>Férias de outros colaboradores</span>
      <span><span class="dot" style="background:rgba(199,92,78,.45);"></span>Datas importantes / Paradas</span>
      <span><span class="dot" style="border:1px solid var(--border);background:transparent;"></span>Disponível</span>
    </div>
  </div>
  <div class="grid2">
    <div class="card metal-plate" style="padding:24px;">
      <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:12px;">Suas férias</h2>
      ${scheduled.length===0 ? `<p class="small muted">Você não possui férias programadas no momento.</p>` :
        `<ul class="req-list">${scheduled.map(s=>`<li class="req-item"><span>${fmtShort(s.dataInicio)} → ${fmtShort(s.dataFim)}</span><span style="color:var(--primary);font-weight:600;">${s.dias} dias</span></li>`).join("")}</ul>`}
    </div>
    <div class="card metal-plate" style="padding:24px;">
      <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:12px;">Períodos já ocupados pela equipe</h2>
      ${others.length===0 ? `<p class="small muted">Nenhum período ocupado.</p>` :
        `<ul class="req-list" style="max-height:256px;overflow:auto;">${others.slice(0,30).map(s=>`<li class="small muted">${fmtShort(s.dataInicio)} → ${fmtShort(s.dataFim)} (${s.dias}d)</li>`).join("")}</ul>`}
    </div>
  </div>
  </div>`);
}

function pageColaboradorSolicitar(){
  const collab=requireColaborador(); if(!collab) return "";
  return colaboradorWrap(`
  <div class="space-y">
  <h1 class="dash-title" style="margin-bottom:0;">Solicitar Férias</h1>
  <div id="conflictBox"></div>
  <div class="card metal-plate" style="padding:24px;">
    <form id="formSolicitar">
      <div class="row">
        <div><label for="ini">Data de início</label><input id="ini" type="date" required></div>
        <div><label for="fimD">Data de fim</label><input id="fimD" type="date" required></div>
      </div>
      <div class="row">
        <div><label for="diasQ">Quantidade de dias</label><input id="diasQ" type="number" min="1"><p class="fieldhint" id="calcHint">Calculado: 0 dias</p></div>
        <div><label for="supSel">Supervisor responsável</label>
          <select id="supSel"><option value="Adilson">Adilson</option><option value="Junio">Junio</option></select>
        </div>
      </div>
      <div class="field"><label for="obsT">Observações</label><textarea id="obsT" rows="3"></textarea></div>
      <button type="submit" class="btn btn-default btn-full">Solicitar</button>
    </form>
  </div>
  </div>`);
}
function afterColaboradorSolicitar(collabId){
  const ini=document.getElementById("ini"), fim=document.getElementById("fimD"), diasQ=document.getElementById("diasQ"), hint=document.getElementById("calcHint"), box=document.getElementById("conflictBox");
  function recalc(){
    const d=diffDays(ini.value, fim.value);
    hint.textContent=`Calculado: ${d} dias`;
    if(!diasQ.value) diasQ.placeholder=String(d);
    if(ini.value && fim.value){
      const conflict=findShiftConflict(collabId, ini.value, fim.value);
      box.innerHTML = conflict ? `<div class="alert destructive" style="margin-bottom:16px;"><i data-lucide="alert-triangle"></i><div><b class="alert-title">Conflito de turno</b><div class="alert-desc">Já há um colaborador do seu turno (${escapeHtml(conflict.collaborator.nomeCompleto)}) com férias entre ${conflict.scheduled.dataInicio} e ${conflict.scheduled.dataFim}. Recomendamos escolher outro período.</div></div></div>` : "";
      lucide.createIcons();
    }
  }
  ini.addEventListener("change",recalc); fim.addEventListener("change",recalc);
  document.getElementById("formSolicitar").addEventListener("submit", e=>{
    e.preventDefault();
    if(!ini.value || !fim.value){ toast("Informe as datas.","error"); return; }
    if(ini.value > fim.value){ toast("A data de início precisa ser anterior à data de fim.","error"); return; }
    const d = Number(diasQ.value) || diffDays(ini.value, fim.value);
    const sup=document.getElementById("supSel").value;
    Store.createRequest({ collaboratorId:collabId, dataInicio:ini.value, dataFim:fim.value, dias:d, observacoes:document.getElementById("obsT").value, supervisor:sup });
    toast("Solicitação enviada!", null, `Status: em aberto · aguardando aprovação de ${sup}.`);
    nav("colaborador");
  });
}

function pageColaboradorHistorico(){
  const collab=requireColaborador(); if(!collab) return "";
  const requests=STATE.requests.filter(r=>r.collaboratorId===collab.id).slice().sort((a,b)=>b.createdAt.localeCompare(a.createdAt));
  const badge=(status)=>{
    if(status==="aprovada") return `<span class="badge badge-default">Aprovada</span>`;
    if(status==="rejeitada") return `<span class="badge badge-destructive">Rejeitada</span>`;
    return `<span class="badge badge-secondary">Em aberto</span>`;
  };
  return colaboradorWrap(`
  <div class="space-y">
  <h1 class="dash-title" style="margin-bottom:0;">Histórico de Solicitações</h1>
  <div class="card metal-plate" style="padding:24px;">
    ${requests.length===0 ? `<p class="small muted">Você ainda não enviou nenhuma solicitação de férias.</p>` : `
    <ul class="req-list">
    ${requests.map(r=>`
      <li class="req-item" style="align-items:flex-start;">
        <div>
          <div style="font-weight:600;">${fmtShort(r.dataInicio)} → ${fmtShort(r.dataFim)} · ${r.dias} dias</div>
          <div class="small muted">Enviada em ${fmtTs(r.createdAt)} · Supervisor: ${r.supervisor}${r.decidedAt ? ` · Decidida em ${fmtTs(r.decidedAt)}` : ""}</div>
          ${r.observacoes ? `<div class="small italic muted" style="margin-top:4px;">"${escapeHtml(r.observacoes)}"</div>` : ""}
        </div>
        <div>${badge(r.status)}</div>
      </li>`).join("")}
    </ul>`}
  </div>
  </div>`);
}

// ---------- ADMIN ----------
function adminWrap(active, inner){
  const session=STATE.session;
  const isADMant = session?.username==="ADMant";
  const tabs=[
    ["admin","Início"],["admin/programadas","Programadas"],["admin/calendario","Calendário"],
    ["admin/solicitacoes","Solicitações"],["admin/senha","Senha"]
  ];
  if(isADMant) tabs.push(["admin/manutencao","Manutenção"]);
  return `<div style="padding:32px 0;width:100%;">
    <button class="back-btn" onclick="history.back()"><i data-lucide="arrow-left" style="width:14px;height:14px;"></i>Voltar</button>
    <div class="admin-nav">
      ${tabs.map(([p,l])=>`<a class="btn btn-ghost btn-sm ${active===p?'active-tab':''}" onclick="nav('${p}')">${l}</a>`).join("")}
    </div>
    ${inner}
  </div>`;
}

function pageAdminHome(){
  const session=requireAdmin(); if(!session) return "";
  const minhas=STATE.requests.filter(r=>r.status==="em_aberto" && (session.username==="ADMant" || r.supervisor===session.username));
  return adminWrap("admin", `
  <h1 class="dash-title">Painel do Administrador</h1>
  <div class="grid3">
    <div class="card metal-plate action-card"><i data-lucide="calendar-check" style="width:32px;height:32px;color:var(--primary);"></i>
      <h3 style="font-size:1.1rem;">Férias Programadas</h3><p>Lista de férias aprovadas / agendadas.</p>
      <a class="btn btn-default btn-full" onclick="nav('admin/programadas')">Abrir</a></div>
    <div class="card metal-plate action-card"><i data-lucide="calendar" style="width:32px;height:32px;color:var(--accent);"></i>
      <h3 style="font-size:1.1rem;">Dias Disponíveis</h3><p>Calendário editável da equipe.</p>
      <a class="btn btn-default btn-full" onclick="nav('admin/calendario')">Abrir</a></div>
    <div class="card metal-plate action-card">${minhas.length>0?`<span class="tile-badge">${minhas.length}</span>`:""}<i data-lucide="clipboard-list" style="width:32px;height:32px;color:var(--primary);"></i>
      <h3 style="font-size:1.1rem;">Férias Solicitadas</h3><p>${minhas.length} pendente(s) para você.</p>
      <a class="btn btn-default btn-full" onclick="nav('admin/solicitacoes')">Abrir</a></div>
  </div>`);
}

function pageAdminProgramadas(){
  const session=requireAdmin(); if(!session) return "";
  const sorted=[...STATE.scheduled].sort((a,b)=>a.dataInicio.localeCompare(b.dataInicio));
  return adminWrap("admin/programadas", `
  <h1 class="dash-title">Férias Programadas</h1>
  <div class="card metal-plate table-wrap" style="padding:16px;">
    <table>
      <thead><tr><th>Colaborador</th><th>Início</th><th>Fim</th><th>Dias</th><th>Tipo</th><th>Origem</th><th></th></tr></thead>
      <tbody>
      ${sorted.length===0 ? `<tr><td colspan="7" class="center muted" style="padding:24px;">Nenhuma férias programada.</td></tr>` :
      sorted.map(s=>{
        const c=STATE.collaborators.find(x=>x.id===s.collaboratorId);
        return `<tr><td>${escapeHtml(c?.nomeCompleto??"—")}</td><td>${fmtShort(s.dataInicio)}</td><td>${fmtShort(s.dataFim)}</td><td>${s.dias}</td><td>${s.tipo}</td><td class="small muted">${s.origem}</td>
        <td><button class="btn btn-ghost btn-sm" onclick="removeScheduledUI('${s.id}')"><i data-lucide="trash-2" style="width:16px;height:16px;"></i></button></td></tr>`;
      }).join("")}
      </tbody>
    </table>
  </div>`);
}
function removeScheduledUI(id){ Store.removeScheduled(id); toast("Removido."); render(); }

function pageAdminCalendario(){
  const session=requireAdmin(); if(!session) return "";
  const myDays=new Set(); STATE.scheduled.forEach(s=>eachDayIso(s.dataInicio,s.dataFim).forEach(d=>myDays.add(d)));
  const eventDays=new Set(); STATE.events.forEach(e=>eachDayIso(e.dataInicio,e.dataFim).forEach(d=>eventDays.add(d)));
  const classify=(iso)=>{ const cls=[]; if(myDays.has(iso)) cls.push("others"); if(eventDays.has(iso)) cls.push("event"); return cls; };
  return adminWrap("admin/calendario", `
  <h1 class="dash-title">Calendário</h1>
  <div class="card metal-plate" style="padding:24px;">
    ${renderTwoMonthCalendar({classify})}
    <div class="legend">
      <span><span class="dot" style="background:var(--primary);"></span>Suas férias</span>
      <span><span class="dot" style="background:rgba(109,143,174,.4);"></span>Férias de outros colaboradores</span>
      <span><span class="dot" style="background:rgba(199,92,78,.45);"></span>Datas importantes / Paradas</span>
    </div>
  </div>

  <div class="card metal-plate" style="padding:24px;margin-top:16px;">
    <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:16px;">Adicionar data importante</h2>
    <form id="formEvento">
      <div class="row">
        <div><label>Título</label><input id="evTitulo"></div>
        <div><label>Tipo</label><select id="evTipo"><option value="parada_manutencao">Parada de Manutenção</option><option value="importante">Data importante</option></select></div>
      </div>
      <div class="row">
        <div><label>Início</label><input id="evIni" type="date"></div>
        <div><label>Fim</label><input id="evFim" type="date"></div>
      </div>
      <div class="field"><label>Descrição</label><input id="evDesc"></div>
      <button type="submit" class="btn btn-default btn-full">Adicionar</button>
    </form>
  </div>

  <div class="card metal-plate" style="padding:24px;margin-top:16px;">
    <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:12px;">Datas cadastradas</h2>
    ${STATE.events.length===0 ? `<p class="small muted">Nenhuma.</p>` : `<ul class="req-list">${STATE.events.map(e=>`
      <li class="req-item"><div><div style="font-weight:600;">${escapeHtml(e.titulo)}</div><div class="small muted">${e.dataInicio} → ${e.dataFim} · ${e.tipo}</div></div>
      <button class="btn btn-ghost btn-sm" onclick="removeEventUI('${e.id}')"><i data-lucide="trash-2" style="width:16px;height:16px;"></i></button></li>`).join("")}</ul>`}
  </div>`);
}
function removeEventUI(id){ Store.removeEvent(id); toast("Removido."); render(); }
function afterAdminCalendario(){
  document.getElementById("formEvento").addEventListener("submit", e=>{
    e.preventDefault();
    const titulo=document.getElementById("evTitulo").value, ini=document.getElementById("evIni").value, fim=document.getElementById("evFim").value;
    if(!titulo || !ini || !fim){ toast("Preencha título e datas.","error"); return; }
    Store.addEvent({ titulo, descricao:document.getElementById("evDesc").value, dataInicio:ini, dataFim:fim, tipo:document.getElementById("evTipo").value });
    toast("Data importante adicionada!");
    render();
  });
}

function pageAdminSolicitacoes(){
  const session=requireAdmin(); if(!session) return "";
  const list=STATE.requests.filter(r=> session.username==="ADMant" || r.supervisor===session.username).sort((a,b)=>b.createdAt.localeCompare(a.createdAt));
  return adminWrap("admin/solicitacoes", `
  <h1 class="dash-title">Férias Solicitadas</h1>
  ${list.length===0 ? `<div class="card metal-plate center muted" style="padding:24px;">Nenhuma solicitação.</div>` : ""}
  <div class="space-y-sm">
  ${list.map(r=>{
    const c=STATE.collaborators.find(x=>x.id===r.collaboratorId);
    const badgeClass = r.status==="em_aberto"?"badge-default":r.status==="aprovada"?"badge-secondary":"badge-destructive";
    return `<div class="card metal-plate" style="padding:20px;">
      <div class="flex justify-between flex-wrap gap2" style="align-items:flex-start;">
        <div>
          <div class="flex items-center gap2" style="flex-wrap:wrap;">
            <h3 style="font-size:1.1rem;font-weight:700;">${escapeHtml(c?.nomeCompleto??"—")}</h3>
            <span class="badge ${badgeClass}">${r.status}</span>
            <span class="small muted">para ${r.supervisor}</span>
          </div>
          <p style="font-size:.9rem;margin:4px 0;"><b>${r.dataInicio}</b> → <b>${r.dataFim}</b> · ${r.dias} dias</p>
          ${r.observacoes?`<p class="small muted">"${escapeHtml(r.observacoes)}"</p>`:""}
        </div>
        ${r.status==="em_aberto" ? `<div class="flex gap2">
          <button class="btn btn-default btn-sm" onclick="decideUI('${r.id}','aprovada')"><i data-lucide="check" style="width:16px;height:16px;"></i>Aprovar</button>
          <button class="btn btn-outline btn-sm" onclick="decideUI('${r.id}','rejeitada')"><i data-lucide="x" style="width:16px;height:16px;"></i>Rejeitar</button>
        </div>` : ""}
      </div>
    </div>`;
  }).join("")}
  </div>`);
}
function decideUI(id,status){ Store.decideRequest(id,status); toast(status==="aprovada"?"Aprovada.":"Rejeitada."); render(); }

function pageAdminSenha(){
  const session=requireAdmin(); if(!session) return "";
  return adminWrap("admin/senha", `
  <div class="container-sm" style="padding:0;margin:0;max-width:420px;">
  <h1 class="dash-title">Trocar Senha</h1>
  <div class="card metal-plate" style="padding:24px;">
    <form id="formSenha">
      <div class="field"><label>Nova senha</label><input id="novaSenha" type="password"></div>
      <div class="field"><label>Confirmar nova senha</label><input id="confSenha" type="password"></div>
      <button type="submit" class="btn btn-default btn-full">Atualizar</button>
    </form>
  </div></div>`);
}
function afterAdminSenha(username){
  document.getElementById("formSenha").addEventListener("submit", e=>{
    e.preventDefault();
    const nova=document.getElementById("novaSenha").value, conf=document.getElementById("confSenha").value;
    if(nova.length<4){ toast("Senha muito curta.","error"); return; }
    if(nova!==conf){ toast("As senhas não conferem.","error"); return; }
    Store.changeAdminPassword(username, nova);
    toast("Senha atualizada!");
    nav("admin");
  });
}

function pageAdminManutencao(){
  const session=requireAdmin(); if(!session) return "";
  if(session.username!=="ADMant"){ nav("admin",true); return ""; }
  return adminWrap("admin/manutencao", `
  <h1 class="dash-title">Manutenção do Sistema</h1>

  <div class="card metal-plate" style="padding:24px;margin-bottom:16px;">
    <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:8px;">Importar planilha de férias</h2>
    <p class="small muted" style="margin-bottom:12px;">Formato esperado (cabeçalhos): <b>Colaborador, Início das Férias, Dias de Férias, Dias de Abono, Tipo</b>. Aceita .xlsx e .csv.</p>
    <input type="file" id="fileImport" accept=".xlsx,.xls,.csv">
    <div id="previewBox"></div>
  </div>

  <div class="card metal-plate" style="padding:24px;margin-bottom:16px;">
    <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:12px;">Gerenciar colaboradores</h2>
    <form id="formCollab" class="row" style="align-items:flex-end;margin-bottom:16px;">
      <div><label>Matrícula</label><input id="cMat"></div>
      <div><label>Nome completo</label><input id="cNome"></div>
      <div><label>CPF</label><input id="cCpf"></div>
      <div style="flex:0;"><button type="submit" class="btn btn-default">Adicionar</button></div>
    </form>
    <div class="table-wrap" style="max-height:420px;overflow-y:auto;">
      <table>
        <thead><tr><th>Matrícula</th><th>Nome</th><th>Turno</th><th>Supervisor</th></tr></thead>
        <tbody>
        ${STATE.collaborators.map(c=>`
          <tr>
            <td>${c.matricula}</td><td>${escapeHtml(c.nomeCompleto)}</td>
            <td><select onchange="updTurnoUI('${c.id}',this.value)">
              <option value="" ${!c.turno?'selected':''}>—</option>
              <option value="1" ${c.turno==="1"?'selected':''}>1º</option>
              <option value="2" ${c.turno==="2"?'selected':''}>2º</option>
              <option value="3" ${c.turno==="3"?'selected':''}>3º</option>
            </select></td>
            <td><select onchange="updSupervisorUI('${c.id}',this.value)">
              <option value="" ${!c.supervisor?'selected':''}>—</option>
              <option value="Adilson" ${c.supervisor==="Adilson"?'selected':''}>Adilson</option>
              <option value="Junio" ${c.supervisor==="Junio"?'selected':''}>Junio</option>
            </select></td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>
  </div>

  <div class="card metal-plate" style="padding:24px;">
    <h2 style="font-size:1.25rem;font-weight:700;color:var(--destructive);margin-bottom:8px;">Zona de risco</h2>
    <p class="small muted" style="margin-bottom:12px;">Recriar a base com os dados iniciais (apaga tudo).</p>
    <button class="btn btn-destructive" onclick="resetAllUI()">Resetar base</button>
  </div>`);
}
function updTurnoUI(id,v){ Store.updateCollaborator(id,{turno:v||null}); }
function updSupervisorUI(id,v){ Store.updateCollaborator(id,{supervisor:v||null}); }
function resetAllUI(){ if(confirm("Tem certeza? Isso apaga todos os dados e recria a base inicial.")){ Store.resetAll(); toast("Base recriada."); nav("admin/manutencao",true); render(); } }

let __preview=[];
function afterAdminManutencao(){
  document.getElementById("formCollab").addEventListener("submit", e=>{
    e.preventDefault();
    const mat=document.getElementById("cMat").value, nome=document.getElementById("cNome").value, cpf=document.getElementById("cCpf").value;
    if(!mat||!nome) return;
    Store.upsertCollaborator({ matricula:mat, nomeCompleto:nome, cpf: cpf || "000.000.000-00" });
    toast("Colaborador cadastrado.");
    render();
  });
  document.getElementById("fileImport").addEventListener("change", async (e)=>{
    const f=e.target.files?.[0]; if(!f) return;
    const buf=await f.arrayBuffer();
    const wb=XLSX.read(buf,{type:"array",cellDates:true});
    const ws=wb.Sheets[wb.SheetNames[0]];
    const json=XLSX.utils.sheet_to_json(ws,{defval:""});
    const get=(row,...keys)=>{ for(const k of keys){ for(const real of Object.keys(row)){ if(real.toLowerCase().trim()===k.toLowerCase()) return row[real]; } } return ""; };
    const mapped=json.map(row=>{
      const inicioRaw=get(row,"Início das Férias","Inicio das Ferias","Início","Data Início","Inicio");
      let inicio="";
      if(inicioRaw instanceof Date) inicio=inicioRaw.toISOString().slice(0,10);
      else if(typeof inicioRaw==="string" && inicioRaw.includes("/")){ const [d,m,y]=inicioRaw.split("/"); inicio=`${y}-${String(m).padStart(2,"0")}-${String(d).padStart(2,"0")}`; }
      else if(typeof inicioRaw==="string") inicio=inicioRaw;
      return { nome:String(get(row,"Colaborador","Nome","Funcionário")).trim(), inicio, dias:Number(get(row,"Dias de Férias","Dias","Dias de Ferias"))||0, abono:Number(get(row,"Dias de Abono","Abono"))||0, tipo: String(get(row,"Tipo","Individual/Coletiva"))||"Individual" };
    }).filter(r=>r.nome && r.inicio && r.dias);
    __preview=mapped;
    const box=document.getElementById("previewBox");
    box.innerHTML = mapped.length===0 ? `<p class="small muted" style="margin-top:8px;">Nenhuma linha válida encontrada.</p>` : `
      <div class="table-wrap" style="max-height:256px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;margin-top:12px;">
        <table><thead><tr><th>Colaborador</th><th>Início</th><th>Dias</th><th>Tipo</th></tr></thead>
        <tbody>${mapped.map(p=>`<tr><td>${escapeHtml(p.nome)}</td><td>${p.inicio}</td><td>${p.dias}</td><td>${p.tipo}</td></tr>`).join("")}</tbody></table>
      </div>
      <button class="btn btn-default btn-full" style="margin-top:12px;" onclick="confirmImportUI()">Confirmar importação (${mapped.length})</button>`;
    toast(`${mapped.length} linhas carregadas. Confira e confirme.`, "info");
  });
}
function confirmImportUI(){
  const r=Store.importVacations(__preview);
  toast("Importação concluída", null, `${r.added} férias, ${r.createdCollaborators} novos colaboradores.`);
  __preview=[];
  render();
}

// ================= ROUTER =================
function currentPath(){ return (location.hash||"#").slice(1).replace(/^\//,""); }

function checkColaboradorNotifications(){
  if(STATE.session?.type!=="colaborador") return;
  const cid=STATE.session.collaboratorId;
  STATE.requests.filter(r=>r.collaboratorId===cid && r.status==="aprovada" && !r.seen).forEach(r=>{
    toast("Suas férias foram CONFIRMADAS!", null, `Período: ${r.dataInicio} a ${r.dataFim} (${r.dias} dias)`);
    Store.markRequestSeen(r.id);
  });
  STATE.requests.filter(r=>r.collaboratorId===cid && r.status==="rejeitada" && !r.seen).forEach(r=>{
    toast("Solicitação rejeitada", "error", `Período: ${r.dataInicio} a ${r.dataFim}`);
    Store.markRequestSeen(r.id);
  });
}

function render(){
  const path=currentPath();
  const main=document.getElementById("mainContainer");
  let html="";
  let after=null;

  if(path==="" ) html=pageHome();
  else if(path==="login/colaborador"){ html=pageLoginColaborador(); after=afterLoginColaborador; }
  else if(path==="login/admin"){ html=pageLoginAdmin(); after=afterLoginAdmin; }
  else if(path==="guia") html=pageGuia();
  else if(path==="colaborador"){ if(!requireColaborador()) return; checkColaboradorNotifications(); html=pageColaboradorHome(); }
  else if(path==="colaborador/tempo") html=pageColaboradorTempo();
  else if(path==="colaborador/dias") html=pageColaboradorDias();
  else if(path==="colaborador/solicitar"){ const c=requireColaborador(); if(!c) return; html=pageColaboradorSolicitar(); after=()=>afterColaboradorSolicitar(c.id); }
  else if(path==="colaborador/historico") html=pageColaboradorHistorico();
  else if(path==="admin"){ if(!requireAdmin()) return; html=pageAdminHome(); }
  else if(path==="admin/programadas") html=pageAdminProgramadas();
  else if(path==="admin/calendario"){ html=pageAdminCalendario(); after=afterAdminCalendario; }
  else if(path==="admin/solicitacoes") html=pageAdminSolicitacoes();
  else if(path==="admin/senha"){ const s=requireAdmin(); if(!s) return; html=pageAdminSenha(); after=()=>afterAdminSenha(s.username); }
  else if(path==="admin/manutencao"){ html=pageAdminManutencao(); after=afterAdminManutencao; }
  else { html=pageHome(); }

  main.innerHTML = html;
  updateHeader();
  lucide.createIcons();
  if(after) after();
  window.scrollTo(0,0);
}

// -----------------banco de dados---------------------
const firebaseConfig = {
  apiKey: "AIzaSyCQ-wEckwV9AJ4dpV6TWD_p3E4BBRKRVc0",
  authDomain: "engrena-ferias.firebaseapp.com",
  projectId: "engrena-ferias",
  storageBucket: "engrena-ferias.firebasestorage.app",
  messagingSenderId: "738439878786",
  appId: "1:738439878786:web:a68991b186debb2f277c9b"
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", ()=>{ lucide.createIcons(); render(); });
/*
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
feito por antony
*/
