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

		const t1El = document.querySelector('.t1');
		const t2El = document.querySelector('.t2');
		const t3El = document.querySelector('.t3');
		const t4El = document.querySelector('.t4');
		const t5El = document.querySelector('.t5');
		const t6El = document.querySelector('.t6');
		const t7El = document.querySelector('.t7');
		const t8El = document.querySelector('.t8');
		
		const t21El = document.querySelector('.t21');
		const t22El = document.querySelector('.t22');
		const t23El = document.querySelector('.t23');
		const t24El = document.querySelector('.t24');
		const t25El = document.querySelector('.t25');
		const t26El = document.querySelector('.t26');
		const t27El = document.querySelector('.t27');

		const t31El = document.querySelector('.t31');
		const t32El = document.querySelector('.t32');
		const t33El = document.querySelector('.t33');
		const t34El = document.querySelector('.t34');

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

				t1El.textContent = data[attr].t1;
				t2El.textContent = data[attr].t2;
				t3El.textContent = data[attr].t3;
				t4El.textContent = data[attr].t4;
				t5El.textContent = data[attr].t5;
				t6El.textContent = data[attr].t6;
				t7El.textContent = data[attr].t7;
				t8El.textContent = data[attr].t8;
				
				t21El.textContent = data[attr].t21;
				t22El.textContent = data[attr].t22;
				t23El.textContent = data[attr].t23;
				t24El.textContent = data[attr].t24;
				t25El.textContent = data[attr].t25;
				t26El.textContent = data[attr].t26;
				t27El.textContent = data[attr].t27;
				
				t31El.textContent = data[attr].t31;
				t32El.textContent = data[attr].t32;
				t33El.textContent = data[attr].t33;
				t34El.textContent = data[attr].t34;
			
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
		"t1": "نحن نوفر وننظم مايخصك لكل المراحل الإدارية والتنظيمية ",
		"t2": "نقدم كل الأستشارات التى تخص سفرك ودخولك وإقامتك في دولة بيلاروسية.",
		"t3": "سنقوم  بالإشراف على دراستك وإقامتك طيلة مدة الدراسة ",
		"t4": "سنقوم بإجراء المراسلات للتأكيد على حجز المباني الدراسية المختارة  لدراستك ",
		"t5": "سنعلمك بأماكن المباني الخاصة بالدراسة التخصصية المختارة  من طرفكم ",
		"t6": "سنساعدك على إيجاد الدورة الدراسية التى ترغبها ومكانها",
		"t7": "سنساعدك على العثور على المبنى الخاص بإقامتك طيلة فترة الدراسة ",
		"t8": "",
		"t21": "نحن نوفر وننظم مايخصك لكل المراحل الإدارية والتنظيمية ",
		"t22": "نقدم كل الأستشارات التى تخص سفرك ودخولك وإقامتك في دولة بيلاروسية ",
		"t23": "سنقوم  بالإشراف على دراستك وإقامتك طيلة مدة الدراسة ",
		"t24": "سنقوم بإجراء المراسلات للتأكيد على حجز المباني الدراسية المختارة  لدراستك ",
		"t25": "سنعلمك بأماكن المباني الخاصة بالدراسة التخصصية المختارة  من طرفكم  ",
		"t26": "سنساعدك على إيجاد الدورة الدراسية المنتقى ومكانها ",
		"t27": "سنساعدك على العثور على المبنى الخاص بإقامتك طيلة فترة الدراسة و نساعدك في الحصول على العلاج الأفضل والمناسب لحالتك ",
		"t31": "نقدم لك الإستشارات في كل مواضيع الأعمال التي تختارونها في المجالات التجارية المختلفة داخل بيلاروسية.",
		"t32": "نساعدك في إختيار الهيئات والشركات لإجراء التعاقدات وتبادل المصالح والتعاون ",
		"t33": "نوفر لك إستشاريين وخبراء عرب يتقنون اللغة المحلية لمساعدتكم لإجراء الإتفاقيات المطلوبة ",
		"t34": "سنقوم بإجراء جولات سياحية للأماكن الجميلة والجذابة وسنعرض عليكم جولات مختلفة للصيد البري والبحري و و و وغيرها من عروض سياحية ممتعة ",
		"shares_zag": "الإمتيازات المقدمة من طرفنا",
		"shares_zaga": "الإمتيازات المقدمة من طرفنا",
		"shares_t1": "عند التقدم للدراسة في الجامعات والمعاهد بجمهورية  بيلاروسية عن طريق وكالتنا ، ستقوم وكالتنا بإجراء التخفيضات المتحصلة عليها من مختلف الجامعات والمعاهد داخل  بيلاروسية .",
		"shares_t2": "عندما يتم من طرفكم تقديم طلبات خدمة لوكالتنا ومع زيادة المتقدمين من طرفكم كلما زادت التخفيضات من قبل وكالتنا .",
		"how_work_zag": "كيفية الإتصال و العمل معكم",
		"how_work_zaga": "كيفية الإتصال و العمل معكم",
		"how_text1": "تقوموا بمراسلتنا أو الأتصال بنا .",
		"how_text2": "في ظرف ثلاثة أيام وبعد دراسة طلبكم يقوم القائم بالأعمال بالأتصال بكم .",
		"how_text3": "يقوم القائم بالأعمال من طرفنا بتقديم الأستشارة اللازمة لكم .",
		"how_text4": "ثم يتم تحديد نوع الخدمات اللازم تقديمها لكم .",
		"contact_zag": "  معلومات لتواصل",
		"contact_zaga": "  معلومات لتواصل",
		"zayvka1": "تقديم طلب",
		"under_zayvka": "املأ النموذج وسنتصل بك قريبًا",
		"registerbtn": "إرسال",
		"con": "أوافق على معالجة ",
		"conf": "البيانات شخصية  ",
		"time": "كل يوم ما عدا عطلات نهاية الأسبوع",
		"polit": "	سياسة خاصة",
		"polita": "اتفاقية معالجة البيانات الشخصية",
		"navigacia": "نقطة مرجعية",
		"nav_about": "نبده عن الوكاله",
		"nav_services": "دماتنا التي نقدمها",
		"nav_shares": "الإمتيازات المقدمة من طرفنا ",
		"nav_contacts": "مالمعلومات لتواصل",
		"f_zag_conts": "معلومات لتواصل",
		"f_zag_men": "وقت العمل",
		"nav_end": "بدون فواصل وأيام عطلة نحن مثل ماك داك",
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
		"about_text_under_zag": "Агентство предоставляющее услуги в помощи по поступлению в университеты Республики Беларусь абитуриентам Арабских и других стран, а так же услуги в сфере здравохронения (Лечение и оздоровления в санаториях) и в сфере бизнес-туризма.",
		"about_z1": "Почему мы?",
		"about_t1": "Мы поможем с подбором учреждения, специальность которая соответствует вашим запросам, финансовым возможностям и целям, поможем с подачей документов на поступление (оформление студенческой визы) незнание русского языка, не станет барьерОм !",
		"about_z2": "Кто наши клиенты?",
		"about_t2": "Лица заинтересованные в обучении, получении хорошего образования (высшее / средне-специальное / повышение квалификации / курсы/ и др.) в одном из учреждений Республики Беларусь. Лица заинтересованные в прохождении курса лечения или оздоровления в санаториях. Лица заинтересованные в бизнесе, сотрудничестве с частными и государственными предприятиями в Республике Беларусь.",
		"about_z3": "C чего начать?",
		"about_t3": "Начните с подачи заявки на странице ниже, в разделе ПУТЬ КЛИЕНТА более подробно.",
		"why_zag": "Почему Беларусь?",
		"why_zaga": "Почему Беларусь?",
		"why_point1": "Доступные и очень конкретные цены на высшее и средне-специальное образование, а так же на  оздоровление и лечение.",
		"why_point2": "Актуальное и востребованное образование.",
		"why_point3": "Большое количество учреждений образования и большой аспект специальностей.",
		"why_point4": "Большое количество оздоровительных центров и санаториев.",
		"why_point5": "Доступные цены на жилье и пропитание, Беларусь гордиться продукцией собственного производства.",
		"why_point6": "Большое количество заводов и предприятия в различных отраслях с конкурентными ценами",
		"why_point7": "Развитая инфраструктура. ",
		"why_point8": "Красивая природа, города и достопримечательности.",
		"services_zag": "Услуги",
		"services_zaga": "Услуги",
		"services_vod1": "В Беларуси обучают и готовят специалистов с высокими навыками и знаниями в сферах: IT, медицины, геологии, а так же в области исследовании нефти, газа и многое другое.",
		"services_vod2": "В Беларуси работают высококвалифицированные врачи в различных сферах медицины: стоматологии, нейрохирургии, хирургии и онкология и в других областях.",
		"services_vod3": "В Республике Беларусь, большая часть продукции питания, натуральная и СОБСТВЕННОГО ПРОИЗВОДСТВА, а также широкий ассортимент мебели, текстиля, электроники и многое другое.",
		"tb1": "подробнее",
		"tb2": "подробнее",
		"tb3": "подробнее",
		"services_z1": "Образование",
		"services_z2": "Здравохронение",
		"services_z3": "Бизнес-туризм",
		"t1": "Полностью осуществим все этапы административно-организационной работы за Вас",
		"t2": "Дадим полную консультацию по въезду и пребыванию в стране",
		"t3": "Будем курировать Вас до адаптации с момента вашего прибытия в страну",
		"t4": "Поддержка связи в течение всего времени прибывания в стране в случаи возникновения каких-либо вопросов",
		"t5": "Проведем всю переписку с выбранным учреждением образования",
		"t6": "Предоставим всю информацию об учреждении и выбранном курсе (буклеты, видеофильмы, фото)",
		"t7": "Поможем подобрать интересующий вас образовательный курс",
		"t8": "Поможем подобрать жильё в городе вашего обучения",
		"t21": "Полностью осуществим все этапы административно-организационной работы за Вас",
		"t22": "Дадим полную консультацию по въезду и пребыванию в стране",
		"t23": "Будем курировать Вас до адаптации с момента вашего прибытия в страну",
		"t24": "Поддержка связи в течение всего времени прибывания в стране в случаи возникновения каких-либо вопросов",
		"t25": "Поможем подобрать оптимальный курс лечения исходя из ваших финансовых возможностей",
		"t26": "",
		"t27": "",
		"t31": "Проконсультируем Вас по всем деловым темам по вашему выбору в различных областях бизнеса в Беларуси.",
		"t32": "Предоставим информацию об организациях и компаниях для удобства определения с выбором и заключения контрактов, обмена интересами и сотрудничества.",
		"t33": "Предоставим арабских консультантов и экспертов, которые владеют местным языком, чтобы помочь вам перевести и оформить необходимые договора и соглашения.",
		"t34": "",
		"shares_zag": "Акции",
		"shares_zaga": "Акции",
		"shares_t1": "при поступлении в учреждения образования г.Гомеля, скидка 20% на все услуги нашего агентство",
		"shares_t2": "При поступлении в различные образовательные центры Республики Беларуси, наше агентство для первых клиентов, будет предоставлять скидки в зависимости от ОЦ в который хотите поступить и предоставляемых ими скидками",
		"how_work_zag": "Путь клиента",
		"how_work_zaga": "Путь клиента",
		"how_text1": "Оставьте заявку на сайте или по телефону",
		"how_text2": "Наш специалист свяжется с вами в ближайшее время",
		"how_text3": "Проведение бесплатной консультации от нашего специалиста",
		"how_text4": "Определения подходящих вам вида услуг",
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
		"about_menu": "ABOUT US",
		"services_menu": "SERVICES",
		"shares_menu": "PROMOTIONS",
		"contacts_menu": "CONTACTS",
		"vstup_text": "Arabsko-Beloruskoe Agenstvo",
		"vstup_texta": "Arabsko-Beloruskoe Agenstvo",
		"vstup_slogan": "An Agency geared towards Education, Business and Health Tourisim in the Republic of Belarus for education, business-travel, healthrvice in Belarus",
		"zayvka": "leave inquiry",
		"about_text_zag": "About US ",
		"about_text_zaga": "About US ",
		"about_text_under_zag": "We are an agency that provides services and assists potential applicants from Arab and other countries who are interested in universities in the Republic of Belarus, health and wellness or business travel.",
		"about_z1": "WHY US? ",
		"about_t1": "We will assist in finding an educational institute and guide you in choosing a major that will align with your financial expectations and goals. Our services include assisting you in the admission process (filling out and submitting required documents) as well as any visa requirements.  ",
		"about_z2": "WHO ARE OUR CLIENTS? ",
		"about_t2": "Individuals who are interested in a country well known for its strong educational system (bachelor, graduate programs, continuing education) and much more Individuals who are interested in improving their health and wellbeing Individuals who are interested in business partnerships with private or governmental institution in the Republic of Belarus",
		"about_z3": "Don’t know where to start?",
		"about_t3": "You can start by submitting an inquiry at the link below.",
		"why_zag": "WHY BELARUS?",
		"why_zaga": "WHY BELARUS?",
		"why_point1": "Affordable higher education and wellness programs High demand and transferable education specialties",
		"why_point2": "Many universities offering a large variety of specialties",
		"why_point3": "Many health centers and spas (sanatoriums)",
		"why_point4": "Affordable housing and groceries. Belarus proudly offers much local produce",
		"why_point5": "Large number of factories and enterprises in many industries",
		"why_point6": "Lower cost manufacturing options",
		"why_point7": "Developed infrastructure",
		"why_point8": "Beautiful nature, clean cities with many attractions",
		"services_zag": "SERVICES",
		"services_zaga": "SERVICES",
		"services_vod1": "In the Republic of Belarus students have access to leading disciplines: IT, Medical, Geology, oil and gas, research, etc",
		"services_vod2": "Belarus has highly qualified health institutions that provide world class services in Dentistry, Neurosurgery, Oncology and other specialties.",
		"services_vod3": "Most of the produce in the Republic of Belarus is grown locally.  There is a large variety of furniture, textile, electronics and much more",
		"tb1": "more",
		"tb2": "more",
		"tb3": "more",
		"services_z1": "Education",
		"services_z2": "Health and Wellness",
		"services_z3": "BUSINESS TOURISM",
		"t1": "Will provide full support upon entry into the country",
		"t2": "Will provide administrative support at all stages",
		"t3": "Will be beside you until fully comfortable in the country ",
		"t4": "Will help to find housing in any part of the country",
		"t5": "Available to support your entire stay in the country and to answer question you may have",
		"t6": "Will provide information on schools in Belarus as well as majors of interests (flyers, videos, pictures)",
		"t7": "Will conduct full correspondence with your chosen educational institute",
		"t8": "Will guide you in choosing courses that fit your needs",
		"t21": "Will support with administrative aspects",
		"t22": "Will provide full support upon entry into the country",
		"t23": "Will be beside your side until you are fully comfortable in the country",
		"t24": "Fully support your entire presence in the country with any question you might have at any time",
		"t25": "Will help to find wellness program that fit your budget",
		
		"t26": "",
		"t27": "",
		
		"t31": "We will consult with you in your area of interest",
		"t32": "Will provide information about the industry that you are interested in exploring and help you to establish relationships with local vendors and in signing contracts",
		"t33": "Arabic-Russian consultants will be working with you to help translate and finalize business partnerships/contracts.",
		"t34": "Will take you to explore the local attractions, nature, fishing, hunting or other interest that you might have",
		"shares_zag": "PROMOTIONS",
		"shares_zaga": "PROMOTIONS",
		"shares_t1": "You will receive additional discounts from our agency if you recommend our services to others",
		"shares_t2": "First time applicants will receive additional discounts",
		"how_work_zag": "Customer path",
		"how_work_zaga": "Customer path",
		"how_text1": "Leave your inquiry on the website or provide a phone number",
		"how_text2": "Our specialists will contact you based on the order your inquiry was received",
		"how_text3": "Free consultation will be provided by our highly qualified consultants",
		"how_text4": "Tailor services based on your needs.",
		"contact_zag": "Point of Contact",
		"contact_zaga": "Point of Contact",
		"zayvka1": "Leave your inquiry",
		"under_zayvka": "Fill out the application and we will get in touch with you",
		"registerbtn": "send",
		"con": "I agree to the processing of ",
		"conf": "personal data",
		"time": "daily, except weekends",
		"polit": "privacy policy",
		"polita": "personal data processing agreement",
		"navigacia": "navigation",
		"nav_about": "about us",
		"nav_services": "services",
		"nav_shares": "promotions",
		"nav_contacts": "point of contacts",
		"f_zag_conts": "contacts",
		"f_zag_men": "working hours",
		"nav_end": "daily, except weekends",
		"namevvod": "name",
		"phonevvod": "phone"
	}
}