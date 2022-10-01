var MLstrings = [
	{
	English: "Academic Studies",
	Spanish: "Formación Académica",
	Catalan: "Formació Acadèmica",
	Russian: "Образование",
	French: "Formation Académique",
	Korean: "훈련",
	Japanese: "学術研究"
	},
	{
	English: "Work Experience",
	Spanish: "Experiencia Laboral",
	Catalan: "Experiència Laboral",
	Russian: "Рабочий Стаж",
	French: "Expérience de Travail",
	Korean: "업무 경험",
	Japanese: "実務経験"
	},
	{
	English: "Language Skills",
	Spanish: "Habilidades Lingüísticas",
	Catalan: "Habilitats Lingüístiques",
	Russian: "Языковые Навыки",
	French: "Compétences linguistiques",
	Korean: "언어 능력",
	Japanese: "言語スキル"
	},

    English: "Courses and Other non-academic studies",
    Spanish: "Cursos y otras Formaciones no Academicas",
	Catalan: "Cursos i Altres Formacions no Acadèmiques",
	Russian: "Курсы и другие неакадемические обучения",
	French: "Cours et autres formations non académiques",
	Korean: "언어 능력",
	Japanese: "言語能力"
},
{

    English: "Miscellaneous Knowledge and Skills",
    Spanish: "Conocimientos y habilidades diversos",
	Catalan: "Coneixements i habilitats diversos",
	Russian: "Разные знания и навыки",
	French: "Connaissances et compétences diverses",
	Korean: "기타 지식과 기술",
	Japanese: "その他の知識とスキル"	
}

];

var mlCodes = [
	{
	code: "en-UK",
	name: "English",
	},
	{
	code: "es-ESP",
	name: "Castellano",
	},
	{
	code: "es-CAT",
	name: "Catalan",
	},
	{
	code: "rus",
	name: "Russian",
	},
	{
	code: "fr",
	name: "French",
	},
	{
	code: "kr",
	name: "Korean",
	},
	{
	code: "jp",
	name: "Japanase",
	},
];

USELESS SCRIPT
<script>
  const langE1 = document.querySelector('.language_wrap');
  const link = document.querySelectorAll('option');
  const titleE1 = document.querySelector('.title_1');
  const descrE1 = document.querySelector('.description');

  link.forEach(eL =>{
    e1.addEventListener('click', () => {
      langE1.querySelector('.active').classList.remove('active');
      e1.classList.add('active');

      const attr = e1.getAttribute('language');
      titleE1.textContent = data[attr].title_1;
      descrE1.textContent = data[attr].description;
    })
  })
  var data = {
    "English":
    {
      "title_1": "Studies",
      "title_2": "Work Experience",
      "title_3": "Languages",
      "title_4": "Courses",
      "title_5": "Miscallenious",
      "description": "Hello"
    },
    "Castellano":
    {
      "title_1": "Estudios",
      "title_2": "Experiencia Laboral",
      "title_3": "Lenguas",
      "title_4": "Cursos y otras formaciones",
      "title_5": "Conocimiento Informatico",
      "description": "Hola"
    },
    "Catalan":
    {
      "title_1": "Estudis",
      "title_2": "Experiencia Laboral",
      "title_3": "Llenguas",
      "title_4": "Cursos i altres formacions",
      "title_5": "Coneixement Informatics",
      "description": "Hola"
    },
    "Russian":
    {
      "title_1": "Образование",
      "title_2": "Работа",
      "title_3": "Язвки",
      "title_4": "Курсы",
      "title_5": "Знания ИТ",
      "description": "Привет"
    },
    "Japanese":
    {
      "title_1": "Nihonhgoo",
      "title_2": "Koni",
      "title_3": "Chawa",
      "title_4": "Chawww",
      "title_5": "Mahha",
      "description":
      "Konichawa"
    } 
  }
</script>