const langEl = document.querySelector('.lanpole');
		const link = document.querySelectorAll('#rus, #eng, #ara');
		const aboutEl = document.querySelector('.about_menu');
		const servicesEl = document.querySelector('.services_menu');
		const sharesEl = document.querySelector('.shares_menu');
		const contactsEl = document.querySelector('.contacts_menu');
		const vstup_logoEl = document.querySelector('.vstup_text');
		const vstup_logoaEl = document.querySelector('.vstup_texta');
		const vstup_sloganEl = document.querySelector('.vstup_slogan');
		const zayvkaEl = document.querySelector('.zayvka');
		const about_text_zagEl = document.querySelector('.about_text_zag');
		const about_text_zagaEl = document.querySelector('.about_text_zaga');
		const about_text_under_zagEl = document.querySelector('.about_text_under_zag');
		const about_z1El = document.querySelector('.about_z1');
		const about_t1El = document.querySelector('.about_t1');
		const about_z2El = document.querySelector('.about_z2');
		const about_t2El = document.querySelector('.about_t2');
		const about_z3El = document.querySelector('.about_z3');
		const about_t3El = document.querySelector('.about_t3');
		const why_zagEl = document.querySelector('.why_zag');
		const why_zagaEl = document.querySelector('.why_zaga');
		const why_point1El = document.querySelector('.why_point1');
		const why_point2El = document.querySelector('.why_point2');
		const why_point3El = document.querySelector('.why_point3');
		const why_point4El = document.querySelector('.why_point4');
		const why_point5El = document.querySelector('.why_point5');
		const why_point6El = document.querySelector('.why_point6');
		const why_point7El = document.querySelector('.why_point7');
		const why_point8El = document.querySelector('.why_point8');
		const services_zagEl = document.querySelector('.services_zag');
		const services_zagaEl = document.querySelector('.services_zaga');
		const services_vod1El = document.querySelector('.services_vod1');
		const services_vod2El = document.querySelector('.services_vod2');
		const services_vod3El = document.querySelector('.services_vod3');
		const tb1El = document.querySelector('.tb1');
		const tb2El = document.querySelector('.tb2');
		const tb3El = document.querySelector('.tb3');
		const services_z1El = document.querySelector('.services_z1');
		const services_z2El = document.querySelector('.services_z2');
		const services_z3El = document.querySelector('.services_z3');
		const services_t1El = document.querySelector('.services_t1');
		const services_t2El = document.querySelector('.services_t2');
		const services_t3El = document.querySelector('.services_t3');
		const shares_zagEl = document.querySelector('.shares_zag');
		const shares_zagaEl = document.querySelector('.shares_zaga');
		const shares_t1El = document.querySelector('.shares_t1');
		const shares_t2El = document.querySelector('.shares_t2');
		const how_work_zagEl = document.querySelector('.how_work_zag');
		const how_work_zagaEl = document.querySelector('.how_work_zaga');
		const how_text1El = document.querySelector('.how_text1');
		const how_text2El = document.querySelector('.how_text2');
		const how_text3El = document.querySelector('.how_text3');
		const how_text4El = document.querySelector('.how_text4');
		const contact_zagEl = document.querySelector('.contact_zag');
		const contact_zagaEl = document.querySelector('.contact_zaga');
		const zayvka1El = document.querySelector('.zayvka1');
		const under_zayvkaEl = document.querySelector('.under_zayvka');
		const registerbtnEl = document.querySelector('.registerbtn');
		const conEl = document.querySelector('.con');
		const confEl = document.querySelector('.conf');
		const timeEl = document.querySelector('.time');
		const politEl = document.querySelector('.polit');
		const politaEl = document.querySelector('.polita');
		const navigaciaEl = document.querySelector('.navigacia');
		const nav_aboutEl = document.querySelector('.nav_about');
		const nav_servicesEl = document.querySelector('.nav_services');
		const nav_sharesEl = document.querySelector('.nav_shares');
		const nav_contactsEl = document.querySelector('.nav_contacts');
		const f_zag_contsEl = document.querySelector('.f_zag_conts');
		const f_zag_menEl = document.querySelector('.f_zag_men');
		const nav_endEl = document.querySelector('.nav_end');


		const namevvodEl = document.getElementById("namevvod");
		const phonevvodEl = document.getElementById("phonevvod");

	link.forEach(el => {
		el.addEventListener('click', () => {
			langEl.querySelector('.active').classList.remove('active');
			el.classList.add('active');


				const attr = el.getAttribute('language');

				aboutEl.textContent = data[attr].about_menu;
				servicesEl.textContent = data[attr].services_menu;
				sharesEl.textContent = data[attr].shares_menu;
				contactsEl.textContent = data[attr].contacts_menu;
				vstup_logoEl.textContent = data[attr].vstup_text;
				vstup_logoaEl.textContent = data[attr].vstup_texta;
				vstup_sloganEl.textContent = data[attr].vstup_slogan;
				zayvkaEl.textContent = data[attr].zayvka;
				about_text_zagEl.textContent = data[attr].about_text_zag;
				about_text_zagaEl.textContent = data[attr].about_text_zaga;
				about_text_under_zagEl.textContent = data[attr].about_text_under_zag;
				about_z1El.textContent = data[attr].about_z1;
				about_t1El.textContent = data[attr].about_t1;
				about_z2El.textContent = data[attr].about_z2;
				about_t2El.textContent = data[attr].about_t2;
				about_z3El.textContent = data[attr].about_z3;
				about_t3El.textContent = data[attr].about_t3;
				why_zagEl.textContent = data[attr].why_zag;
				why_zagaEl.textContent = data[attr].why_zaga;
				why_point1El.textContent = data[attr].why_point1;
				why_point2El.textContent = data[attr].why_point2;
				why_point3El.textContent = data[attr].why_point3;
				why_point4El.textContent = data[attr].why_point4;
				why_point5El.textContent = data[attr].why_point5;
				why_point6El.textContent = data[attr].why_point6;
				why_point7El.textContent = data[attr].why_point7;
				why_point8El.textContent = data[attr].why_point8;
				services_zagEl.textContent = data[attr].services_zag;
				services_zagaEl.textContent = data[attr].services_zaga;
				services_vod1El.textContent = data[attr].services_vod1;
				services_vod2El.textContent = data[attr].services_vod2;
				services_vod3El.textContent = data[attr].services_vod3;
				tb1El.textContent = data[attr].tb1;
				tb2El.textContent = data[attr].tb2;
				tb3El.textContent = data[attr].tb3;
				services_z1El.textContent = data[attr].services_z1;
				services_z2El.textContent = data[attr].services_z2;
				services_z3El.textContent = data[attr].services_z3;
				services_t1El.textContent = data[attr].services_t1;
				services_t2El.textContent = data[attr].services_t2;
				services_t3El.textContent = data[attr].services_t3;
				shares_zagEl.textContent = data[attr].shares_zag;
				shares_zagaEl.textContent = data[attr].shares_zaga;
				shares_t1El.textContent = data[attr].shares_t1;
				shares_t2El.textContent = data[attr].shares_t2;
				how_work_zagEl.textContent = data[attr].how_work_zag;
				how_work_zagaEl.textContent = data[attr].how_work_zaga;
				how_text1El.textContent = data[attr].how_text1;
				how_text2El.textContent = data[attr].how_text2;
				how_text3El.textContent = data[attr].how_text3;
				how_text4El.textContent = data[attr].how_text4;
				contact_zagEl.textContent = data[attr].contact_zag;
				contact_zagaEl.textContent = data[attr].contact_zaga;
				zayvka1El.textContent = data[attr].zayvka1;
				under_zayvkaEl.textContent = data[attr].under_zayvka;
				registerbtnEl.textContent = data[attr].registerbtn;
				conEl.textContent = data[attr].con;
				confEl.textContent = data[attr].conf;
				timeEl.textContent = data[attr].time;
				politEl.textContent = data[attr].polit;
				politaEl.textContent = data[attr].polita;
				navigaciaEl.textContent = data[attr].navigacia;
				nav_aboutEl.textContent = data[attr].nav_about;
				nav_servicesEl.textContent = data[attr].nav_services;
				nav_sharesEl.textContent = data[attr].nav_shares;
				nav_contactsEl.textContent = data[attr].nav_contacts;
				f_zag_contsEl.textContent = data[attr].f_zag_conts;
				f_zag_menEl.textContent = data[attr].f_zag_men;
				nav_endEl.textContent = data[attr].nav_end;
			

				namevvodEl.setAttribute("placeholder", data[attr].namevvod);
				phonevvodEl.setAttribute("placeholder", data[attr].phonevvod);
			});
		});

var data = {
	"arabski":
	{
		"about_menu": "نبده عن الوكاله ", 
		"services_menu": "دماتنا التي نقدمها ",
		"shares_menu": "الإمتيازات المقدمة من طرفنا ",
		"contacts_menu": "معلومات لتواصل  ",
		"vstup_text": "وكالة لتوصيل العرب مع بيلاروسيا ",
		"vstup_texta": "وكالة لتوصيل العرب مع بيلاروسيا ",
		"vstup_slogan": "للتعليم والعلاج الصحي والطبيعي وا لسياحة وأعمال التجارة في بيلاروسية ",
		"zayvka": "تارك طلب  ",
		"about_text_zag": "نبده عن الوكاله ",
		"about_text_zaga": "نبده عن الوكاله ",
		"about_text_under_zag": "الوكاله القائمة بالخدمات للطلبة المتقدمين للدراسة بالجامعات البيلاروسية أو للذين يرغبون في العلاج الصحي والطبيعي والسياحة وأعمال التجارة من العالم العربي أو الدول الأخرى  ",
		"about_z1": "لماذا نحن ؟ ",
		"about_t1": "نحن سنقدم لك المساعدة للعثور على الجامعة أو المعهد والتخصص المطلوب الذي ترغبه وتريد التقدم والتسجيل فيه ، حسب متطلباتك وإمكانياتك المادية ، وكذلك سنقوم بالمساعدة بالتقدم والحصول على القبول ثم في الحصول على التأشيرة الدراسية.عدم معرفة اللغة الروسية لن تكون لك حاجز وعائق للتقدم بطلبك ! ",
		"about_z2": "من هم زبائننا ؟",
		"about_t2": " من يرغب في الحصول على التعليم ( المتوسط ، العالي ، رفع الكفائة ، دراسات عليا ، دورات بتخصصات خاصة وما إلى ذلك ) . من يرغب بالعلاج الصحي في مختلف التخصصات ، ومن يرغب أيضا في الحصول على علاج طبيعي بالمراكز المختلفة والمتخصصة ، وكذلك من يرغب في الحصول على منتجعات إستجمام أومنتجعات سياحية . 	من يرغب في الحصول على مشاركة أو وكالة تجارية أو على التجارة وشراء المنتجات والسلع البيلاروسية ",
		"about_z3": "لاتعلم من أين وكيف تبدأ ؟",
		"about_t3": "إبدأ في الإتصال بنا عن طريق العنوان المدون أسفل الصفحة وحاول تقديم طلبك موضحا فيه الخدمة أو الإستشارة التي ترغب في معرفتها وسنقدم الخدمة المناسبة مع النصيحة الإستشارية وطبعا مع الإجابة على كل أسألتكم من عملأنا مجاناً ",
		"why_zag": "لماذا بيلاروسية؟ ",
		"why_zaga": "لماذا بيلاروسية؟ ",
		"why_point1": "أولاً لأن أسعار الدراسة في المعاهد بجميع أنواع التخصصات والمسويات  	( المتوسطة ، العليا ، تحضير دراسات ) وكذلك المستشفيات العلاجية والمناجع العلاجية والسياحية مناسبة وتحت المراقبة الحكومية ",
		"why_point2": "التعليم فعلي ومطلوب شعبيا وعالمياً ",
		"why_point3": "عدد كثير ومتوفر من مباني ذات الإمكانيات المتعددة ذات أطياف تخصصية ",
		"why_point4": "عدد كبير من المباني الخاصة بالمستشفيات والمصحات الخاصة بالعلاج الطبيعي وكذلك دور الإستجمام والراحة وكذلك السياحية الخاصة بالسواح ",
		"why_point5": "رخص عامة أسعار السلع التموينية الغدائية  وذلك لكثرة وتوفر الإنتاج المحلي وكذلك رخص أسعار إيجار الفنادق والشقق  ",
		"why_point6": "وبدون منافسة الدولة الأولى في أوروبا من حيث  ",
		"why_point7": "بُنية تحتية حديثة ومتكاملة ",
		"why_point8": "طبيعة خلابه وجميلة ومدن أيضاً جميلة بعوامل جذابة ",
		"services_zag": "خدماتنا التي نقدمها",
		"services_zaga": "خدماتنا التي نقدمها",
		"services_vod1": "بيلاروسية تقوم بتعليم وتجهيز  متخصصين ذوي إمكانيات ومهارات جيده في مجالات الأي تي تقنية المعلومات ، الطب ، الجيولوجيا وكذلك في مجالي التنقيب عن النفط والغاز ",
		"services_vod2": "في بيلاروسية يوجد أطباء ذوي مهارات عالية في طب الأسنان وجراحة المخ والأعصاب ،  وطب الأورام وجراحتها .... وغيره ",
		"services_vod3": "في جمهورية بيلاروسية السلع التموينية والغدائية محلية الصنع متوفرة وذات طابع طبيعي ، وكذلك يتوفر فيها خيار واسع من الأثاث والأنسجة والألكترونيات المتنوعة وغيرها...",
		"tb1": "المزيد ",
		"tb2": "المزيد ",
		"tb3": "المزيد ",
		"services_z1": "في مجال التعليم ",
		"services_z2": "في مجال الصحة العلاجية ",
		"services_z3": "لرجال الأعمال والسياحة ",
		"services_t1": "",
		"services_t2": "",
		"services_t3": "",
		"shares_zag": "",
		"shares_zaga": "",
		"shares_t1": "",
		"shares_t2": "",
		"how_work_zag": "",
		"how_work_zaga": "",
		"how_text1": "",
		"how_text2": "",
		"how_text3": "",
		"how_text4": "",
		"contact_zag": "",
		"contact_zaga": "",
		"zayvka1": "",
		"under_zayvka": "",
		"registerbtn": "",
		"con": "",
		"conf": "",
		"time": "",
		"polit": "",
		"polita": "",
		"navigacia": "",
		"nav_about": "",
		"nav_services": "",
		"nav_shares": "",
		"nav_contacts": "",
		"f_zag_conts": "",
		"f_zag_men": "",
		"nav_end": "",
		"namevvod": "الاسم ",
		"phonevvod": "رقم الهاتف   "
	},
	"russian":
	{
		"about_menu": "О НАС",
		"services_menu": "УСЛУГИ",
		"shares_menu": "АКЦИИ",
		"contacts_menu": "КОНТАКТЫ",
		"vstup_text": "Арабско-Белоруское Агенство",
		"vstup_texta": "Арабско-Белоруское Агенство",
		"vstup_slogan": "Агентство по образованию и оздоравлению в Беларусии",
		"zayvka": "Оставить заявку",
		"about_text_zag": "О НАС",
		"about_text_zaga": "О НАС",
		"about_text_under_zag": "Агентство предоставляющее услуги в помощи по поступлению в университеты Республики Беларусь абитуриентам	Арабских и других стран, а так же услуги в сфере здравохронения Лечение и оздоровления в санаториях.",
		"about_z1": "Почему мы?",
		"about_t1": "Мы поможем с подбором учреждения, специальности которая соответствует вашим запросам, финансовым возможностям и целям, поможем с подачей документов на поступление (оформление студенческой визы) Не знание языка, не станет барьером!",
		"about_z2": "Кто наши клиенты?",
		"about_t2": "Лица заинтересованные в обучении, получении образования (высшее / средне-специальное / повышение квалификации / курсы/ и др.) в одном из учреждений Республики Беларусь. Лица заинтересованные в прохождении курса лечения или оздоровления в санаториях.",
		"about_z3": "C чего начать?",
		"about_t3": "Начните с подачи заявки на странице ниже, наш специалист бесплатно проконсультирует, и определит какие наши услуги подойдут вам, а так же ответит на интересующие вопросы.",
		"why_zag": "Почему Беларусь?",
		"why_zaga": "Почему Беларусь?",
		"why_point1": "Доступные и очень конкретные цены на высшее и средне-специальное образование, а так же на   оздоровление и лечение.",
		"why_point2": " Актульное и востребованное образование.",
		"why_point3": " Большое количество учреждений образования и большой аспект специальностей.",
		"why_point4": " Большое количество оздоровительных центров и санаториев.",
		"why_point5": " Доступные цены на жилье и пропитание, Беларусь гордится продукцией собственного производства.",
		"why_point6": " Не остается не замеченным факт того, что Беларусь гордится прадукцией собственного производства.",
		"why_point7": " Развивается инфраструктура.",
		"why_point8": " Красивая природа, города и достопримечательности.",
		"services_zag": "Услуги",
		"services_zaga": "Услуги",
		"services_vod1": "Не переведено",
		"services_vod2": "Не переведено",
		"services_vod3": "Не переведено",
		"tb1": "подробнее",
		"tb2": "подробнее",
		"tb3": "подробнее",
		"services_z1": "Образование",
		"services_z2": "Здравохронение",
		"services_z3": "Бизнес-туризм",
		"services_t1": "Полностью осуществим все этапы административно-организационной работы за Вас Дадим полную консультацию по въезду и пребыванию в стране Будем курировать Вас в течение всего времени Вашего пребывания в Беларусии Проведем всю переписку с выбранным учреждением образования Предоставим всю информацию об учреждении и выбранном курсе (буклеты, видеофильмы, фото) Поможем подобрать инетересующий вас образовательный курс. Поможем подобрать жильё в городе вашего обучения",
		"services_t2": "Осуществим все этапы административно-организационной работы за Вас Дадим полную консультацию по въезду и пребыванию в стране Будем курировать Вас в течение всего времени Вашего пребывания в Беларусии Поможем подобрать наиболее оптимальный курс лечения исходя из ваших финансовых возможностей",
		"services_t3": "Экскурсии для прибывающих в Беларусии иностранцев: Проконсультируем в интересующих вас вопросах в сфере туризма Поможем подобрать подходящий для вас тур по Беларуским городам и достопремечательностям По необходимости предоставление арабско-язычного экскурсовода (от n-го количество арабско-говорящих)",
		"shares_zag": "Акции",
		"shares_zaga": "Акции",
		"shares_t1": "при поступлении в учреждения образования г.Гомеля, скидка 20% на все услуги нашего агентство",
		"shares_t2": "поступлние группой, скидка до 30% на группу в зависимости от количество поступающих абитуриентов.",
		"how_work_zag": "Путь клиента",
		"how_work_zaga": "Путь клиента",
		"how_text1": "Оставьте заявку на сайте или по телефону",
		"how_text2": "Наш специалист свяжется с вами в ближайшие 3 дня",
		"how_text3": "Провидение бесплатной консультации от специалиста",
		"how_text4": "Определение подходящего вам вида услуг",
		"contact_zag": "Наши контакты",
		"contact_zaga": "Наши контакты",
		"zayvka1": "Оставить заявку",
		"under_zayvka": "Заполните форму, и мы свяжемся с вами в ближайшее время",
		"registerbtn": "Отправить",
		"con": "Даю согласие на обраотку",
		"conf": "персональных данных",
		"time": "ежедневно, кроме выходных",
		"polit": "Политика конфиденциальности",
		"polita": "соглашение на обработку персональных данных",
		"navigacia": "Навигация",
		"nav_about": "О нас",
		"nav_services": "Услуги",
		"nav_shares": "Акции",
		"nav_contacts": "Контакты",
		"f_zag_conts": "Контакты",
		"f_zag_men": "Время работы",
		"nav_end": "ежедневно, кроме выходных",	
		"namevvod": "имя",
		"phonevvod": "телефон"	
	},
	"english":
	{
		"about_menu": "ABOUT",
		"services_menu": "SERVICES",
		"shares_menu": "SHARES",
		"contacts_menu": "CONTACTS",
		"vstup_text": "Arabsko-Beloruskoe Agenstvo",
		"vstup_texta": "Arabsko-Beloruskoe Agenstvo",
		"vstup_slogan": "Агентство по образованию и оздоравлению в Беларусии",
		"zayvka": "Оставить заявку",
		"about_text_zag": "ABOUT",
		"about_text_zaga": "ABOUT",
		"about_text_under_zag": "Агентство предоставляющее услуги в помощи по поступлению в университеты Республики Беларусь абитуриентам	Арабских и других стран, а так же услуги в сфере здравохронения Лечение и оздоровления в санаториях.",
		"about_z1": "Почему мы?",
		"about_t1": "Мы поможем с подбором учреждения, специальности которая соответствует вашим запросам, финансовым возможностям и целям, поможем с подачей документов на поступление (оформление студенческой визы) Не знание языка, не станет барьером!",
		"about_z2": "Кто наши клиенты?",
		"about_t2": "Лица заинтересованные в обучении, получении образования (высшее / средне-специальное / повышение квалификации / курсы/ и др.) в одном из учреждений Республики Беларусь. Лица заинтересованные в прохождении курса лечения или оздоровления в санаториях.",
		"about_z3": "C чего начать?",
		"about_t3": "Начните с подачи заявки на странице ниже, наш специалист бесплатно проконсультирует, и определит какие наши услуги подойдут вам, а так же ответит на интересующие вопросы.",
		"why_zag": "Почему Беларусь?",
		"why_zaga": "Почему Беларусь?",
		"why_point1": "Доступные и очень конкретные цены на высшее и средне-специальное образование, а так же на   оздоровление и лечение.",
		"why_point2": " Актульное и востребованное образование.",
		"why_point3": " Большое количество учреждений образования и большой аспект специальностей.",
		"why_point4": " Большое количество оздоровительных центров и санаториев.",
		"why_point5": " Доступные цены на жилье и пропитание, Беларусь гордится продукцией собственного производства.",
		"why_point6": " Не остается не замеченным факт того, что Беларусь гордится прадукцией собственного производства.",
		"why_point7": " Развивается инфраструктура.",
		"why_point8": " Красивая природа, города и достопримечательности.",
		"services_zag": "Услуги",
		"services_zaga": "Услуги",
		"services_vod1": "Не переведено",
		"services_vod2": "Не переведено",
		"services_vod3": "Не переведено",
		"tb1": "подробнее",
		"tb2": "подробнее",
		"tb3": "подробнее",
		"services_z1": "Образование",
		"services_z2": "Здравохронение",
		"services_z3": "Развлечения",
		"services_t1": "",
		"services_t2": "",
		"services_t3": "",
		"shares_zag": "",
		"shares_zaga": "",
		"shares_t1": "",
		"shares_t2": "",
		"how_work_zag": "",
		"how_work_zaga": "",
		"how_text1": "",
		"how_text2": "",
		"how_text3": "",
		"how_text4": "",
		"contact_zag": "",
		"contact_zaga": "",
		"zayvka1": "",
		"under_zayvka": "",
		"registerbtn": "",
		"con": "",
		"conf": "",
		"time": "",
		"polit": "",
		"polita": "",
		"navigacia": "",
		"nav_about": "",
		"nav_services": "",
		"nav_shares": "",
		"nav_contacts": "",
		"f_zag_conts": "",
		"f_zag_men": "",
		"nav_end": "",
		"namevvod": "name",
		"phonevvod": "phone"
	}
}