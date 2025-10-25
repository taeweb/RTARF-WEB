// ==========================
// 🌐 เมนูนำทาง (Navigation)
// ==========================

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

function toggleDetail(unitId) {
  const detail = document.getElementById(unitId);
  if (detail) {
    detail.classList.toggle('active');
  }
}

// ฟังก์ชันสไลด์ข่าว (ตอนนี้ยังไม่ใช้)
function initSlider() {
  const sliderContainer = document.querySelector('.slider-container');
  if (sliderContainer) {
    // สามารถเพิ่มระบบสไลด์อัตโนมัติได้ที่นี่ภายหลัง
  }
}

// เมื่อโหลด DOM เสร็จ
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  // รองรับ dropdown menu ในเมนูหลัก
  document.querySelectorAll('.nav-links > li > a').forEach(link => {
    link.addEventListener('click', (e) => {
      const dropdown = link.nextElementSibling;
      if (dropdown && dropdown.classList.contains('dropdown-menu')) {
        // สามารถเพิ่ม toggle dropdown ได้หากต้องการ
      }
    });
  });

  // เรียกแสดงข้อมูล directory เมื่อเริ่มโหลด
  render();
  initSlider();
});


// ข้อมูลตัวอย่าง — เฉพาะกรมที่ขอ
  const orgs = [
    {
      id: 1,
      name: 'United Nations(UN.)',
      short: 'สื่อสัมพันธ์ระหว่างประเทศ',
      type: 'กรม',
      region: '-',
      com:"พันเอก jhgpojh",
      tel: '<a href="https://www.roblox.com/communities/35669855/RTP-Army-Tr-ining-Education-Command#!/about">ลิ้งค์กลุ่ม</a>'  ,
      pic: '<a src="https://tr.rbxcdn.com/180DAY-13b27cf534235e7c8355c8a39ed9fb89/150/150/Image/Webp/noFilter"></a>' 
      
    
    },
    {
      id: 2,
      name: 'กองบัญชาการราชองครักษ์(นถปภ.รอ.)  ',
      short: 'ลักในการถวายอารักขา ถวายพระเกียรติ และรักษาความปลอดภัยแด่องค์พระมหากษัตริย์ สมเด็จพระราชินี พระรัชทายาท ผู้สำเร็จราชการแทนพระองค์ และพระบรมวงศานุวงศ์',
      type: 'กรม',
      region: '-',
      com:"-",
      tel: '<a href="https://www.roblox.com/communities/34955189/RTP-Royal-Guard-Headquarters#!/about">ลิ้งค์กลุ่ม</a>' ,
      pic: '<a src="https://tr.rbxcdn.com/180DAY-f3c47a68d322bfad60fd7531cfc1e1c2/150/150/Image/Webp/noFilter"></a>'  
    },
    {
      id: 3,
      name: 'กรมแพทย์ทหารบก(พบ.)',
      short: 'การให้บริการทางการแพทย์แก่กำลังพล ครอบครัว และประชาชน',
      type: 'กรม',
      region: '-',
      com:"พลโท gamegame111_22",
      tel: '<a href="https://www.roblox.com/communities/35669855/RTP-Army-Tr-ining-Education-Command#!/about">ลิ้งค์กลุ่ม</a>'  ,
      pic: '<a src="https://tr.rbxcdn.com/180DAY-e0bddc722f61dcdcef19b5dd189e4e3f/150/150/Image/Webp/noFilter"></a>' 
    },
    { 
      id: 4,
      name: 'กรมยุทธศึกษา (กยศ.)',
      short: 'การ วางแผน อำนวยการ ประสานงาน กำกับการ และดำเนินการเกี่ยวกับกิจการการศึกษา การฝึกอบรม และการพัฒนาหลักนิยม เพื่อให้กำลังพลมีความรู้ มีคุณธรรม พร้อมปฏิบัติภารกิจของกองทัพบก',
      type: 'กรม',
      region: '-',
      com:"จอมพล armarx20011 ",
      tel: '<a href="https://www.roblox.com/communities/35669855/RTP-Army-Tr-ining-Education-Command#!/about">ลิ้งค์กลุ่ม</a>'  ,
      pic: '<a src="https://tr.rbxcdn.com/180DAY-e0bddc722f61dcdcef19b5dd189e4e3f/150/150/Image/Webp/noFilter"></a>' 
      
    },
    {
      id: 5,
      name: 'กรมสารวัตรทหารบก (สห. ทบ.)',
      short: 'การรักษาความสงบเรียบร้อย วินัย และการรักษาความปลอดภัยภายในกองทัพ รวมถึงการสืบสวนสอบสวนคดีอาญาในอำนาจศาลทหาร การควบคุมการจราจรในกิจการทหาร และการถวายอารักขาบุคคลสำคัญ',
      type: 'กรม',
      region: '-',
      com:"จอมพล armarx20011 ",
      tel: '<a href="-">ลิ้งค์กลุ่ม</a>'  ,
      pic: '<a src="https://t5.rbxcdn.com/180DAY-c239841c976f825fcf18284efdd1955a"></a>'
      
    },
    {
      id: 6,
      name: 'ศูนย์การบินทหารบก (ศก.ทบ.)',
      short: 'อำนวยความสะดวกและดำเนินการฝึกศึกษาเกี่ยวกับ กิจการบินทหารบกให้กับกำลังพลของกองทัพบก และเหล่าอื่นตามที่ได้รับมอบหมาย สนับสนุนการรบเสริมกำลังภาคพื้น',
      type: 'กรม',
      region: '-',
      com:"- ",
      tel: '<a href="-">ลิ้งค์กลุ่ม</a>'  ,
      pic: '<a src="https://t5.rbxcdn.com/180DAY-c239841c976f825fcf18284efdd1955a"></a>'
    },
    {
      id: 7,
      name: 'โรงเรียนนายร้อยพระจุลจอมเกล้า (จปร.)',
      short: 'ผลิตนักเรียนนายร้อยให้เป็นนายทหารสัญญาบัตรหลักตรงตามคุณลักษณะที่กองทัพบกต้องการ เทิดทูนและดำรงไว้ซึ่ง สถาบันชาติ ศาสนา และพระมหากษัตริย์ ทำนุบำรุงศิลปวัฒนธรรมและขนบธรรมเนียมประเพณีทางทหาร สร้างองค์กรความรู้ทางวิชาการ วิชาทหาร การวิจัย และการเสริมสร้างคุณลักษณะผู้นำทางทหาร',
      type: 'กรม',
      region: '-',
      com:"-",
      tel: '<a href="-">ลิ้งค์กลุ่ม</a>'  ,
      pic: '<a src="https://t5.rbxcdn.com/180DAY-c239841c976f825fcf18284efdd1955a"></a>'
    },
    {
      id: 8,
      name: 'กรมพระธรรมนูญกองทัพบก (ธน.)',
      short: 'วางแผน อำนวยการ ประสานงาน กำกับดูแล และดำเนินการเกี่ยวกับกิจการด้านกฏหมาย ของกองทัพบกให้คำปรึกษาทางกฎหมายของกองทัพบก สืบสวนคดี ตามคำสั่ง ผู้บังคับบัญชาพิจารณาเสนอความเห็นทางกฎหมาย เกี่ยวกับวินัยทหาร การใช้กำลังทหาร และตรวจร่างสัญญาต่าง ๆ ของกองทัพบกตลอดจน',
      type: 'กรม',
      region: '-',
      com:"จอมพล armarx20011 ",
      tel: '<a href="-">ลิ้งค์กลุ่ม</a>' ,
      pic: '<a src="https://t5.rbxcdn.com/180DAY-c239841c976f825fcf18284efdd1955a"></a>'
    },
    {
      id: 9,
      name: 'กรมทหารราบที่ 1 กองพันทหารรักษาพระองค์ (ร.1 ทม.รอ.)  ',
      short: 'ลักในการถวายอารักขา ถวายพระเกียรติ และรักษาความปลอดภัยแด่องค์พระมหากษัตริย์ สมเด็จพระราชินี พระรัชทายาท ผู้สำเร็จราชการแทนพระองค์ และพระบรมวงศานุวงศ์',
      type: 'กรม',
      region: '-',
      com:"พระบาทสมเด็จ north88_88",
      tel: '<a href="https://www.roblox.com/communities/34955189/RTP-Royal-Guard-Headquarters#!/about">ลิ้งค์กลุ่ม</a>' ,
      pic: '<a src="https://tr.rbxcdn.com/180DAY-fecb91dd1174384f84f5b414954d4968/150/150/Image/Webp/noFilter"></a>'
    },
    {
      id: 10,
      name: 'กรมทหารพรานที่ 47 (ฉก.ทพ.47)',
      short: 'การ รักษาความสงบเรียบร้อยและความมั่นคงในพื้นที่รับผิดชอบ รวมถึงการ ลาดตระเวนเชิงรุก ในพื้นที่เสี่ยงเพื่อป้องปรามเหตุรุนแรง การ จัดตั้งจุดตรวจ/จุดสกัด เพื่อตรวจสอบบุคคลและยานพาหนะ',
      type: 'กรม',
      region: '-',  
      com:"-",
      tel: '<a href="https://www.roblox.com/communities/35051902/RTP-47th-Ranger-Regiment#!/about">ลิ้งค์กลุ่ม</a>' ,
      pic: '<a src="https://tr.rbxcdn.com/180DAY-ec3611c3e36e5c99e3c63444935f340a/150/150/Image/Webp/noFilter"></a>'
    },
    {
      id: 11,
      name: 'ศูนย์ปฏิบัติการต่อต้านการก่อการร้ายสากล (ศตก.)',
      short: 'ศูนย์ปฏิบัติการต่อต้านการก่อการร้ายสากล เป็นส่วนปฏิบัติการ ขึ้นตรงต่อกองบัญชาการกองทัพไทย มีหน่วยปฏิบัติการพิเศษของกองทัพไทยและสำนักงานตำรวจแห่งชาติขึ้นตรงการควบคุมด้านยุทธการ ศูนย์ปฏิบัติการต่อต้านการก่อการร้ายสากล อยู่ภายใต้การกำกับดูแลของผู้บัญชาการทหารสูงสุด',
      type: 'กรม',
      region: '-',  
      com:"-",
      tel: '<a href="">ลิ้งค์กลุ่ม</a>' ,
      pic: '<a src="https://t5.rbxcdn.com/180DAY-c239841c976f825fcf18284efdd1955a"></a>'
    },
    {
      id: 12,
      name: 'กรมการขนส่งทหารบก (ขส.ทบ.)',
      short: 'มีหน้าที่วางแผน อำนวยการ ประสานงาน แนะนำ กำกับการ ดำเนินการ วิจัยและพัฒนาเกี่ยวกับ การจัดหา การส่งกำลัง  การบริการสิ่งอุปกรณ์ขนส่ง',
      type: 'กรม',
      region: '-',  
      com:"-",
      tel: '<a href="">ลิ้งค์กลุ่ม</a>' ,
      pic: '<a src="https://t5.rbxcdn.com/180DAY-c239841c976f825fcf18284efdd1955a"></a>'
    },
    {
      id: 13,
      name: 'กรมจเรทหารบก (จร.ทบ.)',
      short: 'มีหน้าที่ ตรวจราชการ สืบสวนสอบสวน ในเรื่องเกี่ยวกับ ประสิทธิภาพ และราชการของหน่วยต่างๆ ของกองทัพบก การสืบสวนสอบสวน และพิจารณา เรื่องราวร้องทุกข์ การร้องเรียนที่เกี่ยวกับราชการ หรือทหาร หรือข้าราชการของกองทัพบก',
      type: 'กรม',
      region: '-',  
      com:"-",
      tel: '<a href="">ลิ้งค์กลุ่ม</a>' ,
      pic: '<a src="https://t5.rbxcdn.com/180DAY-c239841c976f825fcf18284efdd1955a"></a>'
    },
    {
      id: 14,
      name: 'กรมการทหารสื่อสาร (สส.)',
      short: 'วางแผน อำนวยการ ประสานงาน แนะนำ กำกับการ ดำเนินการ การบริการ ในกิจการของเหล่าทหารสื่อสาร ทั้งยังวิจัยและพัฒนาเกี่ยวกับการสื่อสาร กิจการโทรคมนาคมคอมพิวเตอร์และอิเล็กทรอนิกส์ทั้งปวง สนับสนุนระบบควบคุมบังคับบัญชาและการสื่อสารตลอดจนสนับสนุนสงครามข่าวสารของกองทัพบก',
      type: 'กรม',
      region: '-',  
      com:"-",
      tel: '<a href="">ลิ้งค์กลุ่ม</a>' ,
      pic: '<a src="https://t5.rbxcdn.com/180DAY-c239841c976f825fcf18284efdd1955a"></a>'
    },
    {
      id: 15,
      name: 'กรมสรรพาวุธทหารบก (สพ.ทบ.)',
      short: 'หน้าที่หลักของกรมสรรพาวุธคือการบริหารจัดการด้านอาวุธยุทโธปกรณ์ทั้งหมดของกองทัพ',
      type: 'กรม',
      region: '-',  
      com:"-",
      tel: '<a href="">ลิ้งค์กลุ่ม</a>' ,
      pic: '<a src="https://t5.rbxcdn.com/180DAY-c239841c976f825fcf18284efdd1955a"></a>'
    },



  ];


  let activeCat = 'all';

function cardHTML(o) {
  const colorMap = {
    'กรม': '#2f643cff',
  };
  const isImage = /https?:\/\/|<a\s+src=/.test(o.pic);
  const bg = colorMap[o.type] || '#64748b';
  const initials = o.name.split(/\s+/).map(s => s[0] || '').slice(0, 2).join('');

  return `
    <article class="card" data-type="${o.type}" data-region="${o.region}">
      <div class="logo" style="background:${bg}">
        ${
          isImage
            ? `<img src="${o.pic.replace(/<a\s+src="|"><\/a>/g, '')}" alt="${o.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`
            : initials
        }
      </div>
      <div>
        <h4>${o.name}</h4>
      </div>
      <div class="meta">
        ${o.command ? `<div>${o.command}</div>` : ''}
        <div style="margin: 2px; box-shadow: 10px">
          <a href="#" style="background-color: var(--accent-color);
            color: var(--dark-text);
            padding: 5px;
            text-decoration: none;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            transition: background-color var(--transition-speed), transform 0.2s;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 5px;
            margin-top: 15px;"
            onclick="view(${o.id}); return false">ดูรายละเอียด</a>
        </div>
      </div>
    </article>
  `;
}


  function render(){
    const q = document.getElementById('q').value.trim().toLowerCase();
    const region = document.getElementById('region').value;
    const sort = document.getElementById('sort').value;

    const allowedTypes = ['กรม','เหล่าทัพ','กฏหมาย'];

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

// =====================================
// 🔔 ระบบประกาศข่าวสาร (รองรับรูปภาพ)
// =====================================

document.addEventListener('DOMContentLoaded', () => {
  const announcements = [
    {
      text: "📢 ระบบเว็บไซต์ 'ทำงานในรั้วทหารไทย' พร้อมใช้งานแล้ว!",
      img: "https://tr.rbxcdn.com/180DAY-37dc359fedb2c80d9a30502480aab0af/150/150/Image/Webp/noFilter"
    },
    {
      text: "🔧 อยู่ระหว่างการปรับปรุงหน้า Directory หน่วยงานให้สวยงามขึ้น",
      img: ""
    },
    {
      text: "🛠️ ระบบใหม่สำหรับมือถือ — ใช้งานได้ดีขึ้น!",
      img: ""
    },
    {
      text: "🎖️ ขอบคุณทุกท่านที่สนับสนุนกองบัญชาการกองทัพไทย",
      img: ""
    },
    {
      text: "🤍 ประกาศสำนักพระราชวัง สมเด็จพระบรมราชชนนีพันปีหลวง สวรรคต ทีมคณะกรรมการบริหารและพัฒนา และ สมาชิกผู้เล่น ทำงานในรั้วตำรวจไทยน้อมส่งเสด็จสู่สวรรคาลัยถวายความอาลัยสมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวงทีมงานแมพ ทำงานในรั้วตำรวจไทยขอถวายความอาลัยอย่างสุดซึ้งด้วยความจงรักภักดี และ สำนักในพระมหากรุณาธิคุณเป็นล้นพ้นอันหาที่สุดมิได้ ข้าพเจ้าทีมงานคณะกรรมการบริหารและพัฒนาแมพทำงานในรั้วตำรวจไทย",
      img: "https://img.pptvhd36.com/thumbor/2025/10/25/news-5df345a.jpg"
    }
  ];

  let currentIndex = 0;
  const container = document.getElementById("announcementContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let autoSlide; // เก็บ interval ไว้

  if (!container) return;

  function showAnnouncement(index) {
    const item = announcements[index];
    container.style.opacity = 0;

    setTimeout(() => {
      container.innerHTML = `
        <div class="announcement-item">
          ${item.img ? `<img src="${item.img}" alt="announcement image" class="announcement-img">` : ""}
          <p class="announcement-text">${item.text}</p>
        </div>
      `;
      container.style.opacity = 1;

      // ให้กล่องใหม่มี hover / click event
      const currentItem = container.querySelector('.announcement-item');
      addHoverEffect(currentItem);
    }, 200);
  }

  // ฟังก์ชันหยุด / เล่นอัตโนมัติ
  function startAutoSlide() {
    stopAutoSlide();
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % announcements.length;
      showAnnouncement(currentIndex);
    }, 5000);
  }

  function stopAutoSlide() {
    if (autoSlide) clearInterval(autoSlide);
  }

  // ฟังก์ชันเพิ่มเอฟเฟกต์ hover / click
  function addHoverEffect(item) {
    if (!item) return;
    item.addEventListener('mouseenter', stopAutoSlide);
    item.addEventListener('mouseleave', startAutoSlide);
    item.addEventListener('click', () => {
      item.classList.toggle('active'); // คลิกค้างได้
    });
  }

  // เริ่มต้น
  showAnnouncement(currentIndex);
  startAutoSlide();

  // ปุ่มเลื่อน
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + announcements.length) % announcements.length;
      showAnnouncement(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % announcements.length;
      showAnnouncement(currentIndex);
    });
  }
});
