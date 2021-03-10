const I18N_KEYS = {
  SEARCH: "SEARCH",
  ADD_MOVIE: "+ ADD MOVIE",
  FIND_YOUR_MOVIE: "FIND YOUR MOVIE",
  WHAT_DO_YOU_WANT_TO_WATCH: "WHAT DO YOU WANT TO WATCH",
  TITLE: "TITLE",
  RELEASE_DATE: "RELEASE DATE",
  MOVIE_URL: "MOVIE URL",
  GENRE: "GENRE",
  OVERVIEW: "OVERVIEW",
  RUNTIME: "RUNTIME",
  RESET: "RESET",
  SUBMIT: "SUBMIT",
  SELECT_DATE: " SELECT DATE",
  CLOSE_MODAL: "CLOSE MODAL",
};

const I18N_LANGUAGES = { RU: "RU", EN: "EN" };

const TRANSLATIONS = {
  [I18N_LANGUAGES.RU]: {
    [I18N_KEYS.SEARCH]: "поиск",
    [I18N_KEYS.ADD_MOVIE]: "Добавить фильм",
    [I18N_KEYS.FIND_YOUR_MOVIE]: "Найдите свой фильм",
    [I18N_KEYS.WHAT_DO_YOU_WANT_TO_WATCH]: "Что вы хотите смотреть",
    [I18N_KEYS.TITLE]: "заглавие",
    [I18N_KEYS.RELEASE_DATE]: "Дата выхода",
    [I18N_KEYS.MOVIE_URL]: "URL фильма",
    [I18N_KEYS.GENRE]: "жанр",
    [I18N_KEYS.OVERVIEW]: "обзор",
    [I18N_KEYS.RUNTIME]: "время выполнения",
    [I18N_KEYS.RESET]: "перезагрузить",
    [I18N_KEYS.SUBMIT]: "Разместить",
    [I18N_KEYS.SELECT_DATE]: "выберите дату",
    [I18N_KEYS.CLOSE_MODAL]: "Закрыть модальное окно",
  },

  [I18N_LANGUAGES.EN]: {
    [I18N_KEYS.SEARCH]: "Search",
    [I18N_KEYS.ADD_MOVIE]: "Add Movie",
    [I18N_KEYS.FIND_YOUR_MOVIE]: "Find Your Movie",
    [I18N_KEYS.WHAT_DO_YOU_WANT_TO_WATCH]: "What Do You Want To Watch",
    [I18N_KEYS.TITLE]: "Title",
    [I18N_KEYS.RELEASE_DATE]: "Release Date",
    [I18N_KEYS.MOVIE_URL]: "Movie URL",
    [I18N_KEYS.GENRE]: "Genre",
    [I18N_KEYS.OVERVIEW]: "Overview",
    [I18N_KEYS.RUNTIME]: "Runtime",
    [I18N_KEYS.RESET]: "Reset",
    [I18N_KEYS.SUBMIT]: "Submit",
    [I18N_KEYS.SELECT_DATE]: "Select Date",
    [I18N_KEYS.CLOSE_MODAL]: "Close Modal",
  },
};

export { I18N_KEYS, TRANSLATIONS, I18N_LANGUAGES };
