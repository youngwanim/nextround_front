<template>
  <!-- <v-app id="inspire"> -->
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card flat>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="ID"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  >
                    <v-btn class="mb-1" slot="append"  color="primary">중복확인</v-btn>
                  </v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    id="re_password"
                    label="Retype Password"
                    name="repassword"
                    prepend-icon="mdi-minus"
                    type="re_password"
                  ></v-text-field>
                  <v-text-field
                    id="cname"
                    label="Corporation Name"
                    name="cname"
                    prepend-icon="mdi-office-building"
                    type="cname"
                  ></v-text-field>
                  <v-text-field
                    id="address"
                    label="Address"
                    name="address"
                    prepend-icon="mdi-google-maps"
                    type="address"
                  ></v-text-field>
                  <v-text-field
                    id="email"
                    label="E-mail"
                    name="email"
                    prepend-icon="mdi-email"
                    type="email"
                  ></v-text-field>
                  <v-text-field
                    id="mdn"
                    label="Mobile Phone Number"
                    name="mdn"
                    prepend-icon="mdi-cellphone"
                    type="mdn"
                  >
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">등록하기</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  <!-- </v-app> -->
</template>

<script>
  export default {
    props: {
      source: String,
    },
  }
</script>
