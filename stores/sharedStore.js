/*##########[ IMPORTS ]##########*/
import { defineStore } from "pinia";
import images from "~/core/AssetsManager";
import routeManager from "~/core/RoutesManager";
import AssetsManager from "~/core/AssetsManager";
import { useDisplay } from "vuetify";
import { useNotification } from "@kyvg/vue3-notification";
import RoutesManager from "~/core/RoutesManager";

// const { t } = useI18n();

export const useSharedStore = defineStore("shared", () => {
  /*##########[ DEFINES ]##########*/
  const display = useDisplay();
  const { notify } = useNotification();
  const router = useRouter();

  /*##########[ STATE ]##########*/
  const notifications = ref([]);
  const navLinks = ref([
    { path: RoutesManager.home, title: "home" },
    { path: RoutesManager.games, title: "games" },
    { path: RoutesManager.aboutUs, title: "about_us" },
    { path: RoutesManager.contactUs, title: "contact_us" },
  ]);
  const connectionInfo = [
    {
      icon: "mdi mdi-map-marker",
      title: "address",
      text: "71-75 Shelton Street, Covent Garden, London, United Kingdom",
    },

    {
      icon: "mdi mdi-map-marker",
      title: "address",
      text: "uilding 11, Level 7, Bay Square, Business Bay, Dubai.",
    },

    {
      icon: "mdi mdi-rocket-launch",
      title: "wechat_id",
      text: "Game-ox",
    },
    {
      icon: "mdi mdi-phone",
      title: "whats_app",
      text: "⁦+1(323)9165549⁩",
    },
    {
      icon: "mdi mdi-email-open",
      title: "email",
      text: "info@game-ox.com",
    },
  ];
  const footerLinks = {
    products: {
      name: "products",
      links: [
        { path: RoutesManager.singleGame + "lot", name: "fruits_guess" },
        { path: RoutesManager.singleGame + "lot2", name: "foods_guess" },
        { path: RoutesManager.singleGame + "lot6", name: "dragon_vs_tiger" },
        { path: RoutesManager.singleGame + "lot7", name: "fish" },
      ],
    },
    helps: {
      name: "need_help",
      links: [
        { path: RoutesManager.contactUs, name: "contact_us" },
        { path: RoutesManager.aboutUs, name: "about_us" },
        { path: RoutesManager.games, name: "games" },
      ],
    },
  };
  const socialMediaLinks = [
    {
      name: "facebook",
      icon: "mdi mdi-alpha-f",
      href: "https://www.facebook.com",
    },
    {
      name: "twitter",
      icon: "mdi-twitter",
      href: "https://www.twitter.com",
    },
    {
      name: "pinterest",
      icon: " mdi-pinterest",
      href: "https://www.pinterest..com",
    },
    {
      name: "linkedin",
      icon: " mdi-linkedin",
      href: "https://www.linkedin.com",
    },
  ];
  const games = ref([
    {
      id: "lot",
      name: "Fruits Guess !",
      description:
        "Bet on the correct fruits and you will win twice as much. Depending on each type of fruit chosen, you can bet on up to 6 fruits..",
      lang: "EN, AR",
      category: "fruits",
      platforms: "Android, IOS",
      is_interactive: "Interactive Game",
      avatar_path: AssetsManager.games.lot.avatar_path,
      banner_path: AssetsManager.games.lot.banner_path,
      images: AssetsManager.games.lot.images,
    },

    {
      id: "lot2",
      name: "Foods Guess !",
      description:
        "Bet on the correct fruits and you will win twice as much. Depending on each type of fruit chosen, you can bet on up to 6 fruits.",
      lang: "EN, AR",
      category: "wheels",
      platforms: "Android, IOS",
      is_interactive: "Interactive Game",
      avatar_path: AssetsManager.games.lot2.avatar_path,
      banner_path: AssetsManager.games.lot2.banner_path,
      images: AssetsManager.games.lot2.images,
    },
    {
      id: "lot3",
      name: "Greedy Box !",
      description:
        "Bet on the correct fruits and you will win twice as much. Depending on each type of fruit chosen, you can bet on up to 6 fruits.",
      lang: "EN, AR",
      category: "wars",
      platforms: "Android, IOS",
      is_interactive: "Interactive Game",
      avatar_path: AssetsManager.games.lot3.avatar_path,
      banner_path: AssetsManager.games.lot3.banner_path,
      images: AssetsManager.games.lot3.images
    },
    {
      id: "lot4",
      name: "kitty cat !",
      description:
        "Bet on the correct fruits and you will win twice as much. Depending on each type of fruit chosen, you can bet on up to 6 fruits.",
      lang: "EN, AR",
      category: "wheels",
      platforms: "Android, IOS",
      is_interactive: "Interactive Game",
      avatar_path: AssetsManager.games.lot4.avatar_path,
      banner_path: AssetsManager.games.lot4.banner_path,
      images: AssetsManager.games.lot4.images,
    },
    {
      id: "bar7",
      name: "Bar 7 !",
      description:
        "Bet on the correct fruits and you will win twice as much. Depending on each type of fruit chosen, you can bet on up to 6 fruits.",
      lang: "EN, AR",
      category: "wheels",
      platforms: "Android, IOS",
      is_interactive: "Interactive Game",
      avatar_path: AssetsManager.games.bar7.avatar_path,
      banner_path: AssetsManager.games.bar7.banner_path,
      images: AssetsManager.games.bar7.images,
    },
    {
      id: "dragon_tiger",
      name: "Dragon Vs Tigger !",
      description:
        '" Dragon Tiger " fight against evil forces-from the early Hong Kong underworld forces to gangs in Asia and even around the world. The " Dragon Tiger " game will focus on dealing with the two major East Asian gangsters - the Japanese Rakshasa and the Korean White Lotus.',
      lang: "EN, AR",
      category: "cards",
      platforms: "Android, IOS",
      is_interactive: "Interactive Game",
      avatar_path: AssetsManager.games.dragon_tiger.avatar_path,
      banner_path: AssetsManager.games.dragon_tiger.banner_path,
      images: AssetsManager.games.dragon_tiger.images,
    },

    {
      id: "fish",
      name: "Fish !",
      description:
        '"Fishing Master" is a casual competitive game with the theme of deep-sea hunting. It has won the love of players for its simple and easy fishing gameplay. There are many multiples of fish for players to catch in the game. At the same time, there is a JACKPOT letter collection game in the game. After collecting 7 English letters, the free fishing mode will start.',
      lang: "EN, AR",
      category: "wars",
      platforms: "Android, IOS",
      is_interactive: "Interactive Game",
      avatar_path: AssetsManager.games.fish.avatar_path,
      banner_path: AssetsManager.games.fish.banner_path,
      images: AssetsManager.games.fish.images,
    },
    {
      id: "lot7",
      name: "Arabian Truntable!",
      description:
        '"Compete with players remote island winner takes showdown known issue.',
      lang: "EN, AR",
      category: "wars",
      platforms: "Android, IOS",
      is_interactive: "Interactive Game",
      avatar_path: AssetsManager.games.lot7.avatar_path,
      banner_path: AssetsManager.games.lot7.banner_path,
      images: AssetsManager.games.lot7.images,
    },
    {
      id: "lot8",
      name: "Luck 77 !",
      description:
        '"Compete with players remote island winner takes showdown known issue.',
      lang: "EN, AR",
      category: "wars",
      platforms: "Android, IOS",
      is_interactive: "Interactive Game",
      avatar_path: AssetsManager.games.lot8.avatar_path,
      banner_path: AssetsManager.games.lot8.banner_path,
      images: AssetsManager.games.lot8.images,
    },
    {
      id: "ludo",
      name: "ludo game !",
      description:
        '"Compete with players remote island winner takes showdown known issue.',
      lang: "EN, AR",
      category: "wars",
      platforms: "Android, IOS",
      is_interactive: "Interactive Game",
      avatar_path: AssetsManager.games.ludo.avatar_path,
      banner_path: AssetsManager.games.ludo.banner_path,
      images: AssetsManager.games.ludo.images,
    },
    {
      id: "sun_show",
      name: "Sun Show !",
      description:
        '"Compete with players remote island winner takes showdown known issue.',
      lang: "EN, AR",
      category: "wars",
      platforms: "Android, IOS",
      is_interactive: "Interactive Game",
      avatar_path: AssetsManager.games.sun_show.avatar_path,
      banner_path: AssetsManager.games.sun_show.banner_path,
      images: AssetsManager.games.sun_show.images,
    },
  ]);

  const featuredGames = [
    AssetsManager.featured_game_1,
    AssetsManager.featured_game_2,
    AssetsManager.featured_game_3,
    AssetsManager.featured_game_4,
    AssetsManager.featured_game_5,
    AssetsManager.featured_game_6,
  ];
  const loading = ref([]);

  // const lang = [
  //   { prefix: "en", name: "English" },
  //   { prefix: "ar", name: "العربية" },
  //   { prefix: "fr", name: "France" },
  // ];
  /*##########[ COMPUTED ]##########*/

  /*##########[ MUTATIONS ]##########*/
  const LOADING_START = (payload) => {
    loading.value.push(payload);
  };
  const LOADING_STOP = (payload) => {
    loading.value.splice(loading.value.indexOf(payload), 1);
  };
  const ErrorHandler = (name, error) => {


    if (!!error.data.error) {
      const err = error.data.error;
      if (err.status_code == 401) {
        // router.push(routeManager.login);
        // return;
      }
      notify({
        type: "error",
        title: "Failed",
        text: err.message,
      });
    }
  };
  const SET_NOTIFICATION = (payload) => {
    notifications.value = payload;
  };
  const RESET_NOTIFICATION = () => {
    notifications.value = [];
  };
  const ADD_NOTIFICATION = (payload) => {
    notify({
      type: "info",
      title: payload.title,
      text: payload.body,
    });
    notifications.value.push(payload);
  };
  const REMOVE_NOTIFICATION = (index) => {
    notifications.value.splice(index, 1);
  };

  /*##########[ ACTIONS ]##########*/
  const getNotifications = async () => {
    useAppFetch()
      .getNotifications()
      .then((response) => {
        SET_NOTIFICATION(response.data);
      })
      .catch((error) => {
        ErrorHandler("notifications error ", error);
        console.log("get notification error ", error.message);
      });
  };

  /*##########[ RETURNS ]##########*/
  return {
    navLinks,
    // isMobile,
    // lang,
    games,
    featuredGames,
    loading,
    notifications,
    connectionInfo,
    footerLinks,
    socialMediaLinks,
    SET_NOTIFICATION,
    ADD_NOTIFICATION,
    REMOVE_NOTIFICATION,
    RESET_NOTIFICATION,
    LOADING_START,
    LOADING_STOP,
    ErrorHandler,
    getNotifications,
  };
});
