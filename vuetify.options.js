import colors from "vuetify/es5/util/colors";
import UserIcon from "~/components/icons/UserIcon.vue";
import GroupIcon from "~/components/icons/GroupIcon.vue";
import LocationIcon from "~/components/icons/LocationIcon.vue";
import Logo from "~/components/icons/Logo.vue";

export default {
  theme: {
    light: true,
    themes: {
      light: {
        primary: "#F53838",
        accent: colors.grey.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  },
  icons: {
    values: {
      user: {
        component: UserIcon
      },
      group: {
        component: GroupIcon
      },
      location: {
        component: LocationIcon
      },
      logo: {
        component: Logo
      }
    }
  }
};
