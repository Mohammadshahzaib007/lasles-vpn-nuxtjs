<template>
  <v-footer padless app height="563.12px" absolute>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-img
            :src="require('@/assets/images/logo.png')"
            width="9.3125rem"
            height="2.2644rem"
          />
          <p
            class="mt-5 mb-7"
            style="font-weight: 400; color: #4F5665;  max-width: 21.25rem;"
          >
            <b>LaslesVPN</b> is a private virtual network that has unique
            features and has high security.
          </p>

          <v-sheet color="#F5F5F5" class="mb-7">
            <v-icon color="primary" size="33.6px" class="mr-5"
              >mdi-facebook</v-icon
            ><v-icon color="primary" size="33.6px" class="mr-5"
              >mdi-twitter</v-icon
            >
            <v-icon color="primary" size="33.6px" class="mr-5"
              >mdi-instagram</v-icon
            >
          </v-sheet>
          <p style="font-weight: 400; color: #AFB5C0;">©2020Lasles<b>VPN</b></p>
        </v-col>

        <v-col
          cols="2"
          v-for="footerLink in footerLinks"
          :key="footerLink.heading"
        >
          <v-list dense color="transparent" class="px-0 py-0 mx-0 my-0">
            <v-subheader
              class="px-0 py-0 mx-0 my-0"
              style="color: #0B132A; font-size: 1.125rem; font-weight: 500; line-height: 30px"
              >{{ footerLink.heading }}
            </v-subheader>

            <v-list-item-title
              v-for="(link, i) in footerLink.links"
              :key="i"
              style="color: #4F5665; font-weight: 400; margin: 0; padding: 0; cursor: pointer"
              class="mb-2 mt-5"
            >
              {{ link }}
            </v-list-item-title>
          </v-list>
        </v-col>
        <v-col cols="2"></v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: [
        {
          heading: "Product",
          links: [
            "Download",
            "Pricing",
            "Locations",
            "Server",
            "Countries",
            "Blog"
          ]
        },
        {
          heading: "Engage",
          links: [
            "LaslesVPN ?",
            "FAQ",
            "Tutorials",
            "About Us",
            "Privacy Policy",
            "Terms of Service"
          ]
        },
        {
          heading: "Earn Money",
          links: ["Affiliate", "Become Partner"]
        }
      ]
    };
  }
};
</script>

<style></style>
