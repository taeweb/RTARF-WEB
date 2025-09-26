  // ข้อมูลตัวอย่าง — เฉพาะกรมที่ขอ
  const orgs = [
    {
      id: 1,
      name: 'กองบัญชาการกองทัพไทย(บก.ทท.)',
      short: 'มีหน้าที่คุม 2 เหล่าทัพ 1.ทัพบก 2.ทัพเรือ ให้ปฏิบัติหน้าที่และตรวจสอบความถูกต้องและให้นโยบายการปฏิบัติงานเพื่อกระจายอำนาจและอำนวยการทุกกรมของเหล่าทัพ',
      type: 'ส่วนบัญชาการ',
      region: 'https://discord.gg/wJDwTCpsc6',
      command: 'ทสส.พล.อ.SWAnstav1 (รักษาการ)',
      tel: '<a rel="stylesheet"href="index1.html">เว็บไซท์</a>' 
    
    },
    {
      id: 2,
      name: 'กฏหมายร่วมทุกแมพ',
      division: 'สำนักงานคณะกรรมการวิสามัญ',
      type: 'ส่วนบัญชาการ',
      region: 'https://discord.gg/WEWq9KBHrV',
      law: '- <a href="https://docs.google.com/document/d/1YTbDhevwW2plvSldzSFGKsmlvpj5Pcr1hZ9hK3UhYR8">กฏหมายข้าราชการ(ทุกแมพ)</a>' 

    },
    {
      id: 3,
      name: 'กองทัพบก(ทบ.)',
      short: 'การเตรียมกำลังทางบกเพื่อรักษาความสงบในราชอาณาจักร รวมถึงการพิทักษ์สถาบันพระมหากษัตริย์ การรักษาความมั่นคงภายในและการรักษาความสงบเรียบร้อย, การพัฒนาประเทศและช่วยเหลือประชาชน,การสนับสนุนนโยบายของรัฐบาล ',
      type: 'ส่วนบัญชาการ',
      region: 'https://discord.gg/wJDwTCpsc6',
      command: 'พล.อ.armarx20011 (รักษาการ)',
      tel: '<a href="https://www.roblox.com/th/games/84295262296015/Working-in-the-Thai-military-fence">แมพทบ.</a>'  
    },
    { 
      id: 4,
      name: 'กรมยุทธศึกษา(กยศ.)',
      short: 'การ วางแผน อำนวยการ ประสานงาน กำกับการ และดำเนินการเกี่ยวกับกิจการการศึกษา การฝึกอบรม และการพัฒนาหลักนิยม เพื่อให้กำลังพลมีความรู้ มีคุณธรรม พร้อมปฏิบัติภารกิจของกองทัพบก',
      type: 'ส่วนฝึกศึกษาและหลักนิยม',
      region: '-',
      com:"พล.อ.armarx20011 ",
      tel: '<a href="-">ลิ้งค์กลุ่ม</a>'  
      
    },
    {
      id: 5,
      name: 'กรมสารวัตรทหารบก',
      short: 'การรักษาความสงบเรียบร้อย วินัย และการรักษาความปลอดภัยภายในกองทัพ รวมถึงการสืบสวนสอบสวนคดีอาญาในอำนาจศาลทหาร การควบคุมการจราจรในกิจการทหาร และการถวายอารักขาบุคคลสำคัญ',
      type: 'ส่วนบัญชาการ',
      region: '-',
      com:"พล.อ.armarx20011 ",
      tel: '<a href="-">ลิ้งค์กลุ่ม</a>'  
      
    },
    {
      id: 6,
      name: 'ศูนย์การบินทหารบก(ศกทบ.)',
      short: 'อำนวยความสะดวกและดำเนินการฝึกศึกษาเกี่ยวกับ กิจการบินทหารบกให้กับกำลังพลของกองทัพบก และเหล่าอื่นตามที่ได้รับมอบหมาย สนับสนุนการรบเสริมกำลังภาคพื้น',
      type: 'กรม',
      region: '-',
      com:"- ",
      tel: '<a href="-">ลิ้งค์กลุ่ม</a>'  
      
    },
    {
      id: 7,
      name: 'โรงเรียนนายร้อยพระจุลจอมเกล้า(จปร.)',
      short: 'ผลิตนักเรียนนายร้อยให้เป็นนายทหารสัญญาบัตรหลักตรงตามคุณลักษณะที่กองทัพบกต้องการ เทิดทูนและดำรงไว้ซึ่ง สถาบันชาติ ศาสนา และพระมหากษัตริย์ ทำนุบำรุงศิลปวัฒนธรรมและขนบธรรมเนียมประเพณีทางทหาร สร้างองค์กรความรู้ทางวิชาการ วิชาทหาร การวิจัย และการเสริมสร้างคุณลักษณะผู้นำทางทหาร',
      type: 'ส่วนฝึกศึกษาและหลักนิยม',
      region: '-',
      com:"-",
      tel: '<a href="-">ลิ้งค์กลุ่ม</a>'  
      
    },
    {
      id: 8,
      name: 'พระธรรมนูญกองทัพบก(พนทบ.)',
      short: 'วางแผน อำนวยการ ประสานงาน กำกับดูแล และดำเนินการเกี่ยวกับกิจการด้านกฏหมาย ของกองทัพบกให้คำปรึกษาทางกฎหมายของกองทัพบก สืบสวนคดี ตามคำสั่ง ผู้บังคับบัญชาพิจารณาเสนอความเห็นทางกฎหมาย เกี่ยวกับวินัยทหาร การใช้กำลังทหาร และตรวจร่างสัญญาต่าง ๆ ของกองทัพบกตลอดจน',
      type: 'ส่วนบัญชาการ',
      region: '-',
      com:"พล.อ.armarx20011 ",
      tel: '<a href="-">ลิ้งค์กลุ่ม</a>' 
    },
    {
      id: 8,
      name: 'กรมทหารราบที่ 21 รักษาพระองค์',
      short: 'มีภารกิจหลักคือการปฏิบัติการทางทหาร รักษาพระองค์ถวายความปลอดภัยแด่สถาบันพระมหากษัตริย์ และช่วยเหลือประชาชนในภาวะภัยพิบัติ เป็นหน่วยรบที่มีบทบาทสำคัญในการตอบสนองสถานการณ์ฉุกเฉิน ',
      type: 'ส่วนบัญชาการ',
      region: '-',
      com:"-",
      tel: '<a href="-">ลิ้งค์กลุ่ม</a>' 
    },

  ];


  let activeCat = 'all';

function cardHTML(o){
  const colorMap = {
    'กรม':'#0b67ff',
    'ส่วนบัญชาการ':'#004403ff',
    'ส่วนฝึกศึกษาและหลักนิยม':'#10b981'
  };
  const bg = colorMap[o.type] || '#64748b';
  const initials = o.name.split(/\s+/).map(s=>s[0]||'').slice(0,2).join('');
  return `
    <article class="card" data-type="${o.type}" data-region="${o.region}">
      <div class="logo" style="background:${bg}">${initials}</div>
      <div>
        <h4>${o.name}</h4>
      </div>
      <div class="meta">
        <div>${o.tel || ''}</div>
        ${o.command ? `<div>${o.command}</div>` : ''}
        <div style="margin-top:10px"><a href="#" onclick="view(${o.id});return false">ดูรายละเอียด</a></div>
      </div>
    </article>
  `;
}


  function render(){
    const q = document.getElementById('q').value.trim().toLowerCase();
    const region = document.getElementById('region').value;
    const sort = document.getElementById('sort').value;

    const allowedTypes = ['กรม','ส่วนบัญชาการ','ส่วนฝึกศึกษาและหลักนิยม'];

    let list = orgs.filter(o=>{
      if(!allowedTypes.includes(o.type)) return false;
      if(activeCat !== 'all' && o.type !== activeCat) return false;
      if(region !== 'all' && o.region !== region) return false;
      if(!q) return true;
      return (o.name + ' ' + o.short + ' ' + o.tel).toLowerCase().includes(q);
    });

    if(sort === 'name') list.sort((a,b)=>a.name.localeCompare(b.name,'th'));
    if(sort === 'region') list.sort((a,b)=>a.region.localeCompare(b.region,'th'));
  

    const grid = document.getElementById('grid');
    grid.innerHTML = list.map(cardHTML).join('');
    document.getElementById('empty').style.display = list.length ? 'none' : 'block';
  }

  function selectCat(ev){
    document.querySelectorAll('#cats button').forEach(b=>b.classList.remove('active'));
    ev.currentTarget.classList.add('active');
    activeCat = ev.currentTarget.dataset.cat === 'all' ? 'all' : ev.currentTarget.dataset.cat;
    render();
  }

  function resetFilters(){
    document.getElementById('q').value = '';
    document.getElementById('region').value = 'all';
    document.getElementById('sort').value = 'name';
    document.querySelectorAll('#cats button').forEach(b=>b.classList.remove('active'));
    document.querySelector('#cats button[data-cat="all"]').classList.add('active');
    activeCat = 'all';
    render();
  }

 

  function initSidebarButtons(){
    const catWrap = document.getElementById('cats');
    catWrap.innerHTML = `
      <li><button class="active" data-cat="all" onclick="selectCat(event)">ทั้งหมด</button></li>
      <li><button data-cat="กรม" onclick="selectCat(event)">กรม</button></li>
      <li><button data-cat="ส่วนบัญชาการ" onclick="selectCat(event)">ส่วนบัญชาการ</button></li>
      <li><button data-cat="ส่วนฝึกศึกษาและหลักนิยม" onclick="selectCat(event)">ส่วนฝึกศึกษาและหลักนิยม</button></li>
    `;
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    initSidebarButtons();
    render();
  });
function view(id){
  const o = orgs.find(x=>x.id===id);
  if(!o) return alert('ไม่พบข้อมูล');

  const body = `
    <h3>${o.name || ''}</h3>
    ${o.short ? `<p><b>หน้าที่:</b> ${o.short}</p>` : ''}
    ${o.type ? `<p><b>ประเภท:</b> ${o.type}</p>` : ''}
    ${o.region ? `<p><b>ลิ้งค์ Discord:</b> <a href="${o.region}" target="_blank">${o.region}</a></p>` : ''}
    ${o.tel ? `<p><b>ลิ้งค์อื่นๆ:</b> ${o.tel}</p>` : ''}
    ${o.law ? `<p><b>กฏหมาย:</b> ${o.law}</p>` : ''}
    ${o.division ? `<p><b>ร่างโดย:</b> ${o.division}</p>` : ''}
    ${o.com ? `<p><b>เจ้ากรม Overseer:</b> ${o.com}</p>` : ''}
    ${o.command ? `<p><b>ผบ. commissioner general:</b> ${o.command}</p>` : ''}
  `;

  document.getElementById('detailBody').innerHTML = body;
  document.getElementById('detailModal').style.display = 'block';
}


function closeModal(){
  document.getElementById('detailModal').style.display = 'none';
}

// ปิด modal เมื่อคลิกนอกกรอบ
window.onclick = function(event){
  const modal = document.getElementById('detailModal');
  if(event.target === modal){
    modal.style.display = 'none';
  }
}

