const courses=[
{id:'basic',short:'Базовый',title:'Базовый курс',level:'Старт в продажах',modules:[
{title:'Вступительное слово',lessons:['Вступительное слово','Для кого предназначен данный курс','Что содержит курс и как пользоваться']},
{title:'Что такое продажи. Пять универсальных этапов продаж',lessons:['Отношение к продажам','Что такое продажи?','Пять универсальных этапов продаж #1','Пять универсальных этапов продаж #2','Принципы установления контакта','Принципы выявления потребностей клиента','Принципы презентации продукта','Принципы отработки возражений','Принципы закрытия сделки','Обобщение приведенных 5 этапов продаж']},
{title:'Что на самом деле покупают клиенты',lessons:['Что на самом деле нужно клиенту?','Как понять, что нужно каждому конкретному клиенту и дать то, что ему нужно?']},
{title:'Как взаимодействовать с клиентами, чтобы они больше покупали',lessons:['Инициативность','Установление рамки взаимодействия','Последовательность и своевременность','Понимание ценности и вера в продукт','Экспертиза в продукте']},
{title:'Заключение',lessons:['Обобщение изученных материалов. Ссылка на продвинутый курс']}]},
{id:'advanced',short:'Продвинутый',title:'Продвинутый курс',level:'Система продаж',modules:[
{title:'Что содержит курс',lessons:['Вступительное слово','Для кого предназначен данный курс','Как проходить курс и с чем вы можете столкнуться']},
{title:'Планирование продаж',lessons:['Целеполагание и планирование продаж #1','Целеполагание и планирование продаж #2','Целеполагание и планирование продаж #3']},
{title:'Воронка продаж',lessons:['Что такое воронка продаж и зачем нужна агенту?','Воронка для новых клиентов','Воронка пролонгаций','Как работать с клиентом на каждом этапе воронки','Где воронка показывает проблемы в продажах','Как внедрить воронку в ежедневную работу','Пример использования воронки','Итоги модуля и практическое задание']},
{title:'Ключевой этап взаимодействия',lessons:['Что такое ключевой этап взаимодействия с клиентом','Как готовиться к ключевому этапу взаимодействия','Как подготовить клиента к ключевому этапу взаимодействия','Встреча с презентацией расчета']},
{title:'Скрипты продаж',lessons:['Что такое скрипт продаж и зачем он нужен агенту','Скрипт первой встречи. Квалификация клиента','Чек-лист квалификации клиента','Скрипт презентации страхового продукта','Как использовать цифры и графики для повышения доверия клиента']},
{title:'Отработки возражений',lessons:['Что такое отработки возражений, зачем их использовать','Как использовать отработки возражений']},
{title:'Точки касаний',lessons:['Что такое точки касаний и как их использовать','Точки касаний после презентации расчета','Календарь мотивированных точек касаний в течение года']},
{title:'Кросс-продажи страховых продуктов',lessons:['Что такое кросс-продажи и зачем они агенту','Механика кросс-продаж. Когда и как предлагать дополнительный продукт','Речевые модули для кросс-продаж','Календарь сезонных и событийных кросс-продаж']},
{title:'Заключение',lessons:['Обобщение изученных материалов']}]},
{id:'professional',short:'Профессиональный',title:'Профессиональный курс',level:'Инструменты агента',modules:[
{title:'Что содержит курс и для кого предназначен',lessons:['Вступительное слово. Что содержит курс','Для кого предназначен данный курс']},
{title:'Нейросети для Агента',lessons:['Что такое нейросети, какие бывают и для чего они агенту','Как пользоваться нейросетью и получать качественные ответы. Промпты','Анализ документов с помощью нейросетей','Анализ конкурентных преимуществ с помощью нейросетей','Подготовка контента для социальных сетей и расшифровка сложных формулировок','Итоги модуля']},
{title:'Работа с социальными сетями и мессенджерами',lessons:['Зачем агенту социальные сети и мессенджеры','Закон о рекламе. Что важно учитывать агенту','Какие инструменты социальных сетей и мессенджеров можно использовать','Пример ведения социальных сетей Екатериной Васильевой @ctrahov_ka','Как создать публичный канал и начать публиковать истории','Контент-план для сторис и публичного канала']},
{title:'Заключение',lessons:['Обобщение изученных материалов']}]}
];
const pad=n=>String(n).padStart(2,'0');
const countLessons=c=>c.modules.reduce((sum,m)=>sum+m.lessons.length,0);
const totalLessons=courses.reduce((sum,c)=>sum+countLessons(c),0);
const lessonUrl=(c,id)=>`lesson.html?course=${c.id}&id=${id}`;
const pluralRu=(n,one,few,many)=>{const mod100=n%100,mod10=n%10;return mod100>=11&&mod100<=14?many:mod10===1?one:mod10>=2&&mod10<=4?few:many};
// Add a material only to lessons that need a downloadable file.
// Key format: "course-id:lesson-number".
const lessonMaterials={
 'basic:5:1':[{title:'Памятка по базовому курсу обучения',url:'https://drive.google.com/file/d/1xkoT4weevnNL06AuxIEWXey5YLwzKe2p/view?usp=sharing',type:'Google Drive'}],
 'advanced:3:6':[{title:'Таблица с воронкой продаж',url:'https://docs.google.com/spreadsheets/u/1/d/13OO5hYh9YJRM_SB-eYUcYtBSvi8ml4QCjxDvrYuKLkg/edit?usp=sharing',type:'Google Таблицы'}],
 'advanced:5:2':[{title:'Скрипт первой встречи',url:'https://docs.google.com/spreadsheets/d/1NUgbUfJuJWyOXyWUxA_uNaDXR9GqJmiB3IoctMIsioA/edit?gid=0#gid=0',type:'Google Таблицы'}],
 'advanced:5:3':[{title:'Чек-лист квалификации клиента',url:'https://docs.google.com/spreadsheets/d/1a-yxsDZ1WjJFJDSurvqmq7g8V8IbYHGpV3v1uIzpBHY/edit?gid=0#gid=0',type:'Google Таблицы'}],
 'advanced:5:4':[{title:'Скрипт презентации продукта',url:'https://docs.google.com/spreadsheets/d/1p84wDN3m3FYw3QW7UGqk2JdAohwBcEi8RWRMIc-XGv4/edit?gid=0#gid=0',type:'Google Таблицы'}],
 'advanced:5:5':[{title:'Примеры презентационных материалов',url:'https://drive.google.com/drive/u/2/folders/1qKAC32nmLC90QXrW4idR9b7R0mqz5FrI',type:'Google Drive'}],
 'advanced:6:2':[{title:'Примеры отработок возражений',url:'https://docs.google.com/spreadsheets/d/1Ahxv5KO_bGcqy05OvPFbpGJUqbqrKBN84suB1nyCQdg/edit?gid=0#gid=0',type:'Google Таблицы'}],
 'advanced:7:2':[{title:'Точки касаний после презентации',url:'https://docs.google.com/spreadsheets/d/1bU0qDlIFji7SGFyQw7NgJZ4dFzNOslD_xxO8ZmXGgsQ/edit?usp=sharing',type:'Google Таблицы'}],
 'advanced:7:3':[
  {title:'Точки касаний по сезонным поводам',url:'https://docs.google.com/spreadsheets/d/129pZp7T5LjhpVS5yGSsg7fiMXufYNG9K-Wv-3WDcsyE/edit?gid=0#gid=0',type:'Google Таблицы'},
  {title:'Точки касаний на основе праздников',url:'https://docs.google.com/spreadsheets/d/129pZp7T5LjhpVS5yGSsg7fiMXufYNG9K-Wv-3WDcsyE/edit?gid=1784355109#gid=1784355109',type:'Google Таблицы'},
  {title:'Дополнительные материалы',url:'https://drive.google.com/drive/u/2/folders/19D-5mUplwAQpsWrMMEkOPZXbobXAA9Ax',type:'Google Drive'}
 ],
 'advanced:8:3':[{title:'Примеры речевых модулей',url:'https://docs.google.com/spreadsheets/d/1Q7eWREeVJpgn9WhjFZFJQB3kFcCG--y_-Jo2BWj928o/edit?gid=0#gid=0',type:'Google Таблицы'}],
 'advanced:8:4':[{title:'Календарь кросс-продаж',url:'https://docs.google.com/spreadsheets/d/1DzxcSSi9VOgCw5rOBA7Oi2WIxrh1Q8I0GEF5cFAxhec/edit?gid=0#gid=0',type:'Google Таблицы'}],
 'advanced:9:1':[{title:'Памятка по продвинутому курсу',url:'https://drive.google.com/file/d/1KbCq4TpbLJ2xvgo-YG0JpYL25eSGrjoq/view?usp=sharing',type:'Google Drive'}],
 'professional:2:1':[
  {title:'Открыть DeepSeek в браузере',url:'https://chat.deepseek.com/',type:'Сайт'},
  {title:'DeepSeek для Android',url:'https://play.google.com/store/apps/details?id=com.deepseek.chat',type:'Google Play'},
  {title:'DeepSeek для iOS',url:'https://apps.apple.com/sa/app/deepseek-ai-assistant/id6737597349',type:'App Store'}
 ],
 'professional:2:2':[{title:'Таблица с промптами',url:'https://docs.google.com/spreadsheets/d/1x0nLRP4IflCWxhHcUeIrlKP8JiO9OjKLpEMT9ObBE8o/edit?gid=0#gid=0',type:'Google Таблицы'}],
 'professional:2:6':[{title:'Рабочая таблица',url:'https://docs.google.com/spreadsheets/d/1x0nLRP4IflCWxhHcUeIrlKP8JiO9OjKLpEMT9ObBE8o/edit?gid=0#gid=0',type:'Google Таблицы'}],
 'professional:3:2':[{title:'Как устроена маркировка рекламного поста и получение ERID через ОРД',url:'https://docs.google.com/document/d/1Gn1My0T3_J5gVUh7dCTpNGlc-JqUxUzCzYvp6cYoyfU/edit?usp=sharing',type:'Google Документы'}],
 'professional:3:4':[
  {title:'Публичная страница в Telegram',url:'https://t.me/ctrahov_ka',type:'Telegram'},
  {title:'Публичная страница в MAX',url:'https://max.ru/id510703111554_biz',type:'MAX'}
 ],
 'professional:3:5':[
  {title:'Как создать публичный канал в Telegram',url:'https://docs.google.com/spreadsheets/d/1pVX2ltp1tNqkpI7fuHLmcdZ7LdRUx4vPEKIfuiaMrHs/edit?gid=1739829931#gid=1739829931',type:'Google Таблицы'},
  {title:'Как создать публичный канал в MAX',url:'https://docs.google.com/spreadsheets/d/1pVX2ltp1tNqkpI7fuHLmcdZ7LdRUx4vPEKIfuiaMrHs/edit?gid=1461074798#gid=1461074798',type:'Google Таблицы'},
  {title:'Как закрепить публичный канал в профиле Telegram',url:'https://docs.google.com/spreadsheets/d/1pVX2ltp1tNqkpI7fuHLmcdZ7LdRUx4vPEKIfuiaMrHs/edit?gid=1375810585#gid=1375810585',type:'Google Таблицы'},
  {title:'Как создать сообщество в ВКонтакте',url:'https://docs.google.com/spreadsheets/d/1pVX2ltp1tNqkpI7fuHLmcdZ7LdRUx4vPEKIfuiaMrHs/edit?gid=1952999004#gid=1952999004',type:'Google Таблицы'},
  {title:'Как публиковать истории в Telegram',url:'https://docs.google.com/spreadsheets/d/1pVX2ltp1tNqkpI7fuHLmcdZ7LdRUx4vPEKIfuiaMrHs/edit?gid=0#gid=0',type:'Google Таблицы'},
  {title:'Как публиковать истории в ВКонтакте',url:'https://docs.google.com/spreadsheets/d/1pVX2ltp1tNqkpI7fuHLmcdZ7LdRUx4vPEKIfuiaMrHs/edit?gid=1694299969#gid=1694299969',type:'Google Таблицы'}
 ],
 'professional:3:6':[{title:'Пример сгенерированного контент-плана',url:'https://docs.google.com/spreadsheets/d/1x0nLRP4IflCWxhHcUeIrlKP8JiO9OjKLpEMT9ObBE8o/edit?gid=1642348607#gid=1642348607',type:'Google Таблицы'}],
 'professional:4:1':[{title:'Памятка по профессиональному курсу',url:'https://drive.google.com/file/d/1yi7p-JraC0Wv2JPb16U8GEc13vAcehO3/view?usp=sharing',type:'Google Drive'}]
};
const flattened=c=>{let n=0;return c.modules.flatMap((module,moduleIndex)=>module.lessons.map((title,lessonIndex)=>({title,module,moduleIndex,lessonIndex,id:++n})));};
const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
const renderNoteText=value=>escapeHtml(value)
 .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
 .replace(/^(Важно|Главное|Обратите внимание|Итог|Пример|Задача|Цель)(:)/i,'<strong>$1</strong>$2');
const renderNoteContent=paragraphs=>{
 const blocks=[];
 const flushLines=lines=>{
  let list=null;
  const flushList=()=>{if(!list)return;const tag=list.type==='ol'?'ol':'ul';blocks.push(`<${tag}>${list.items.map(item=>`<li>${renderNoteText(item.replace(/[;.]$/,''))}</li>`).join('')}</${tag}>`);list=null;};
  lines.forEach(raw=>{
   const line=raw.trim();if(!line){flushList();return;}
   const bullet=line.match(/^[—–-]\s+(.+)/);const numbered=line.match(/^\d+[.)]\s+(.+)/);
   if(bullet||numbered){const type=numbered?'ol':'ul';if(list&&list.type!==type)flushList();if(!list)list={type,items:[]};list.items.push((bullet||numbered)[1]);return;}
   flushList();
   if(/^[«“]/.test(line)&&/[»”]$/.test(line)) blocks.push(`<blockquote>${renderNoteText(line)}</blockquote>`);
   else if(line.length<90&&/:$/.test(line)) blocks.push(`<h3>${renderNoteText(line.slice(0,-1))}</h3>`);
   else blocks.push(`<p>${renderNoteText(line)}</p>`);
  });
  flushList();
 };
 paragraphs.forEach(text=>flushLines(String(text).split(/\u2028/)));
 return blocks.join('');
};

if(document.body.dataset.page==='catalog'){
 const nav=document.getElementById('course-nav');
 nav.innerHTML=`<div class="eyebrow">Три курса</div>${courses.map((c,i)=>`<a href="#course-${c.id}"><span>${pad(i+1)}</span>${c.short}</a>`).join('')}<div class="side-note"><strong>${totalLessons} уроков</strong>18 модулей<br>от базовых навыков до профессиональных инструментов</div>`;
 document.getElementById('modules').innerHTML=courses.map((c,ci)=>{let n=0;const lessonCount=countLessons(c);return `<section class="course-section" id="course-${c.id}"><div class="course-title"><div><span class="course-index">Курс ${pad(ci+1)}</span><h2>${c.title}</h2><p>${c.level} · ${c.modules.length} ${pluralRu(c.modules.length,'модуль','модуля','модулей')} · ${lessonCount} ${pluralRu(lessonCount,'урок','урока','уроков')}</p></div><a class="btn secondary" href="${lessonUrl(c,1)}">Начать курс ↗</a></div>${c.modules.map((m,mi)=>`<section class="module" id="${c.id}-module-${mi+1}"><div class="modulehead"><span class="badge">${pad(mi+1)}</span><div><h3>${m.title}</h3><p>Модуль ${mi+1} · ${m.lessons.length} ${pluralRu(m.lessons.length,'урок','урока','уроков')}</p></div></div>${m.lessons.map((title,li)=>{n++;return `<a class="lesson-row" href="${lessonUrl(c,n)}"><span class="num">${pad(n)}</span><span class="row-title">${title}<small>Урок ${li+1} · Модуль ${mi+1}</small></span><span class="row-arrow">↗</span></a>`;}).join('')}</section>`).join('')}</section>`;}).join('')+'<p class="catalog-note">Выберите уровень подготовки и проходите уроки последовательно внутри курса.</p>';
}

if(document.body.dataset.page==='lesson'){
 const params=new URLSearchParams(location.search);const course=courses.find(c=>c.id===params.get('course'))||courses[0];const lessons=flattened(course);const requested=Number(params.get('id')||1);const id=Number.isInteger(requested)&&requested>=1&&requested<=lessons.length?requested:1;const current=lessons[id-1];const moduleLessons=lessons.filter(x=>x.moduleIndex===current.moduleIndex);const contentKey=`${course.id}:${current.moduleIndex+1}:${current.lessonIndex+1}`;const materials=lessonMaterials[contentKey]||[];const video=courseContent.videos[contentKey];const note=courseContent.notes[contentKey];const previousUrl=id>1?lessonUrl(course,id-1):`catalog.html#course-${course.id}`;const nextUrl=id<lessons.length?lessonUrl(course,id+1):`catalog.html#course-${course.id}`;const isBasicCompletion=course.id==='basic'&&id===lessons.length;const isAdvancedCompletion=course.id==='advanced'&&id===lessons.length;const bottomNextUrl=isBasicCompletion?lessonUrl(courses.find(c=>c.id==='advanced'),1):isAdvancedCompletion?lessonUrl(courses.find(c=>c.id==='professional'),1):nextUrl;const bottomNextLabel=isBasicCompletion?'Перейти к продвинутому курсу':isAdvancedCompletion?'Перейти к профессиональному курсу':(id<lessons.length?'Следующий урок':'Завершить курс');document.title=`${current.title} — ${course.title}`;
 const videoMarkup=video?`<div class="lesson-video-frame"><iframe src="${video.embed_url}" title="${escapeHtml(video.title)}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`:`<div class="video video-missing"><span class="video-label">АСТРО-ВОЛГА / ${course.title.toUpperCase()}</span><h2>${current.title}</h2><span class="video-no">${pad(id)}</span><p>Видео для этого урока пока не добавлено</p></div>`;
 const noteMarkup=note&&note.paragraphs.length?renderNoteContent(note.paragraphs):`<p>Конспект для этого урока будет добавлен после подготовки материала.</p>`;
 document.getElementById('main').innerHTML=`<div class="crumbs"><a href="index.html">Главная</a><span>/</span><a href="catalog.html">Программа</a><span>/</span><a href="catalog.html#course-${course.id}">${course.title}</a><span>/</span><a href="catalog.html#${course.id}-module-${current.moduleIndex+1}">Модуль ${pad(current.moduleIndex+1)}</a></div><nav class="lesson-topnav" aria-label="Переходы между уроками"><a href="${previousUrl}"><span aria-hidden="true">←</span> ${id>1?'Предыдущий урок':'К программе'}</a><span class="topnav-count">${pad(id)} / ${lessons.length}</span><a href="${nextUrl}">${id<lessons.length?'Следующий урок':'К программе'} <span aria-hidden="true">→</span></a></nav><div class="lesson-head"><div class="eyebrow"><span class="dot"></span>${course.title} · Модуль ${pad(current.moduleIndex+1)}</div><h1>${current.title}</h1><div class="lesson-meta"><span>Урок ${pad(id)} из ${lessons.length}</span><span>Модуль ${current.moduleIndex+1}: ${current.module.title}</span></div></div><div class="lesson-layout"><div class="lesson-main">${videoMarkup}<details class="lesson-notes"><summary><span class="notes-action"><span class="notes-expand">Развернуть конспект</span><span class="notes-collapse">Свернуть конспект</span></span><strong>Урок ${id}. ${escapeHtml(current.title)}</strong><span class="notes-chevron" aria-hidden="true">↓</span></summary><article><section id="summary"><h2>${escapeHtml(note?.heading||current.title)}</h2>${noteMarkup}</section></article></details><div class="lesson-bottom"><a class="textlink" href="catalog.html#course-${course.id}">← К программе курса</a><a class="btn" href="${bottomNextUrl}">${bottomNextLabel} <span class="arr">→</span></a></div></div><aside class="lesson-aside"><div class="sidebar"><div class="eyebrow">В этом модуле</div>${moduleLessons.map(x=>`<a class="${x.id===id?'current':''}" ${x.id===id?'aria-current="page"':''} href="${lessonUrl(course,x.id)}"><span>${pad(x.id)}</span>${x.title}</a>`).join('')}<a href="catalog.html#course-${course.id}">Вся программа курса <span>↗</span></a></div>${materials.length?`<div class="download-card" id="material"><div class="file-label">↓ Материалы к уроку</div><h3>${materials.length===1?'Дополнительный материал':'Полезные ссылки'}</h3><div class="material-links">${materials.map(item=>`<a href="${item.url}" target="_blank" rel="noopener noreferrer"><span>${escapeHtml(item.title)}<small>${escapeHtml(item.type)}</small></span><span class="arr">↗</span></a>`).join('')}</div></div>`:''}</aside></div>`;
}
