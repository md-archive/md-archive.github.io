  
//data reload anchors
  var dataReload = document.querySelectorAll("[data-reload]");
//Language translations fields
  var language = {
    eng: {
  English1: "Academic Studies",
  English2: "Work Experience",
  English3: "Language Skills",
  English4: "Courses and Other non-academic studies",
  English5: "Miscellaneous Knowledge and Skills",
    },
    esp:{
  Spanish1: "Formación Académica",
  Spanish2: "Experiencia Laboral",
  Spanish3: "Habilidades Lingüísticas",
  Spanish4: "Cursos y otras Formaciones no Academicas",
  Spanish5: "Conocimientos y habilidades diversos",
    },
    cat:{
  Catalan1: "Formació Acadèmica",
  Catalan2: "Experiència Laboral",
  Catalan3: "Habilitats Lingüístiques",
  Catalan4: "Cursos i Altres Formacions no Acadèmiques",
  Catalan5: "Coneixements i habilitats diversos",
    },
    rus: {
  Russian1: "Образование",
  Russian2: "Рабочий Стаж",
  Russian3: "Языковые Навыки",
  Russian4: "Курсы и другие неакадемические обучения",
  Russian5: "Разные знания и навыки",
    },
    fr: {
  French1: "Formation Académique",
  French2: "Expérience de Travail",
  French3: "Compétences linguistiques",
  French4: "Cours et autres formations non académiques",
  French5: "Connaissances et compétences diverses",
  },
    kr: {
  Korean1: "훈련",
  Korean2: "업무 경험",
  Korean3: "언어 능력",
  Korean4: "언어 능력",
  Korean5: "기타 지식과 기술",
  },
    jp: {
  Japanese1: "学術研究",
  Japanese2: "実務経験",
  Japanese3: "言語スキル",
  Japanese4: "言語能力",
  Japanese5: "その他の知識とスキル",
  },
};

//Define language via window hash
  if(window.location.hash){
    if (window.location.hash === "#esp"){
      studies.textContent = language.esp.Spanish1;
      work.textContent = language.esp.Spanish2;
      langskl.textContent = language.esp.Spanish3;
      courses.textContent = language.esp.Spanish4;
      additional.textContent = language.esp.Spanish5;

    }else if (window.location.hash === "#cat"){
      studies.textContent = language.cat.Catalan1;
      work.textContent = language.cat.Catalan2;
      langskl.textContent = language.cat.Catalan3;
      courses.textContent = language.cat.Catalan4;
      additional.textContent = language.cat.Catalan5;
    }else if (window.location.hash === "#rus"){
      studies.textContent = language.rus.Russian1;
      work.textContent = language.rus.Russian2;
      langskl.textContent = language.rus.Russian3;
      courses.textContent = language.rus.Russian4;
      additional.textContent = language.rus.Russian5;
    }else if (window.location.hash === "#fr"){
      studies.textContent = language.fr.French1;
      work.textContent = language.fr.French2;
      langskl.textContent = language.fr.French3;
      courses.textContent = language.fr.French4;
      additional.textContent = language.fr.French5;
    }else if (window.location.hash === "#kr"){
      studies.textContent = language.kr.Korean1;
      work.textContent = language.kr.Korean2;
      langskl.textContent = language.kr.Korean3;
      courses.textContent = language.kr.Korean4;
      additional.textContent = language.kr.Korean5;
    }else if (window.location.hash === "#jp"){
      studies.textContent = language.jp.Japanese1;
      work.textContent = language.jp.Japanese2;
      langskl.textContent = language.jp.Japanese3;
      courses.textContent = language.jp.Japanese4;
      additional.textContent = language.jp.Japanese5;
    }
  };