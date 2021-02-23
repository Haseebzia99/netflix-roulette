const I18N_KEYS = {
  SEARCH: "SEARCH",
  ADD_MOVIE: "+ ADD MOVIE",
  FIND_YOUR_MOVIE: "FIND YOUR MOVIE",
  WHAT_DO_YOU_WANT_TO_WATCH: "WHAT DO YOU WANT TO WATCH"
};

const I18N_LANGUAGES = { RU: "RU", EN: "EN" };

const TRANSLATIONS = {
  [I18N_LANGUAGES.RU]: {
    [I18N_KEYS.SEARCH]: "поиск",
    [I18N_KEYS.ADD_MOVIE]: "Добавить фильм",
    [I18N_KEYS.FIND_YOUR_MOVIE]: "Найдите свой фильм",
    [I18N_KEYS.WHAT_DO_YOU_WANT_TO_WATCH]: "Что вы хотите смотреть",    
  },

  [I18N_LANGUAGES.EN]: {
    [I18N_KEYS.SEARCH]: "Search",
    [I18N_KEYS.ADD_MOVIE]: "Add Movie",
    [I18N_KEYS.FIND_YOUR_MOVIE]: "Find Your Movie",
    [I18N_KEYS.WHAT_DO_YOU_WANT_TO_WATCH]: "What Do You Want To Watch"
  },
};

export { I18N_KEYS, TRANSLATIONS, I18N_LANGUAGES };
