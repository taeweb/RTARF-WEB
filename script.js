  // ข้อมูลตัวอย่าง — เฉพาะกรมที่ขอ
  const orgs = [
    {
      id: 1,
      name: 'กองบัญชาการกองทัพไทย',
      short: 'RTARF|บก.ทท',
      type: 'ส่วนบัญชาการ',
      region: 'https://discord.gg/gpTnuBve',
      tel: '<a rel="stylesheet"href="index1.html">เว็บไซท์</a>' 

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

        <div class="logo" style="background:${bg}">${initials}  </div>
        <div>
          <h4>${o.name}</h4>
          <p>${o.short}</p>
        </div>
        <div class="meta">
          <div>${o.tel}</div> 
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
    if(sort === 'region') list.sort((a,b)=>a.link.localeCompare(b.region,'th'));

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

  function view(id){
    const o = orgs.find(x=>x.id===id);
    if(!o) return alert('ไม่พบข้อมูล');
    alert(`${o.name}\n${o.short}\nประเภท: ${o.type}\nลิ้งค์ดิส: ${o.region}\nลิ้งค์เว็บ: ${o.tel}`);
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
    <h3>${o.name}</h3>
    <p><b>ชื่อย่อ:</b> ${o.short}</p>
    <p><b>ประเภท:</b> ${o.type}</p>
    <p><b>ลิ้งค์ Discord:</b> <a href="${o.region}" target="_blank">${o.region}</a></p>
    <p><b>เว็บไซต์:</b> ${o.tel}</p>
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

