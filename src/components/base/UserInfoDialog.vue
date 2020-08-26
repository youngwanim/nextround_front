<template>
  <v-row justify="left">
   <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
     <template v-slot:activator="{ on, attrs }">
       <v-btn
         text
         v-bind="attrs"
         v-on="on"
       >
         USER INFO.
       </v-btn>
     </template>
     <v-card>
       <v-toolbar dark color="primary">
         <v-btn icon dark @click="dialog = false">
           <v-icon>mdi-close</v-icon>
         </v-btn>
         <v-toolbar-title>User Info. Setting</v-toolbar-title>
         <v-spacer></v-spacer>
         <v-toolbar-items>
           <v-btn dark text @click="dialog = false">Save</v-btn>
         </v-toolbar-items>
       </v-toolbar>
       <v-list three-line subheader>
         <v-subheader>User Controls</v-subheader>
         <v-list-item>
           <v-list-item-content>
             <v-list-item-title>Content filtering</v-list-item-title>
             <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
           </v-list-item-content>
         </v-list-item>
         <v-list-item>
           <v-list-item-content>
             <v-list-item-title>Password</v-list-item-title>
             <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
           </v-list-item-content>
         </v-list-item>
       </v-list>
       <v-divider></v-divider>
       <v-list three-line subheader>
         <v-subheader>General</v-subheader>
         <v-list-item>
           <v-list-item-action>
             <v-checkbox v-model="notifications"></v-checkbox>
           </v-list-item-action>
           <v-list-item-content>
             <v-list-item-title>Notifications</v-list-item-title>
             <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
           </v-list-item-content>
         </v-list-item>
       </v-list>
     </v-card>
   </v-dialog>
 </v-row>
</template>

<script>
  export default {
    name: 'BaseUserInfoDialog',

    inheritAttrs: false,

    props: {
      image_url: [Array, String],
      title: String,
      sub_title: String,
      description: String,
      order_forward: Boolean,
    },
    data() {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
    computed: {

    },
    methods: {
    }
  }
</script>
