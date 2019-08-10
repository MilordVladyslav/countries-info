<template>
  <div :class="{'modal-wrapper': true, 'open': open}">
    <div :class="{'modal-body': true, 'modal-body-open': open}">
      <div class="modal-body-header">
        <p>Country information</p>
        <div class="menu-wrapper">
          <div class="menu__item--hamburger menu-item-open" tabIndex="1" @click="close">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
    </div>
    <div class="modal-content">
      <div class="flag">
        <img :src="countryInfo.flag">
      </div>
      <div class="modal-country-description">
        <p class="name">{{countryInfo.name}}</p>
        <div class="details">
          <div class="column">
            <p>population: {{countryInfo.population}}</p>
            <p>timezones:
              <ul>
                <li v-for = "timezone in countryInfo.timezones" :key="timezone">
                  {{timezone}}
                </li>
              </ul>
            </p>
            <p>Calling codes:
              <ul>
                <li v-for = "callCode in countryInfo.callingCodes" :key="callCode">
                  {{callCode}}
                </li>
              </ul>
            </p>
            <p>Currencies:
              <ul>
                <li v-for = "(value, name) in countryInfo.currencies" :key="name">
                  <ul v-for = "(objValue, objName) in value" :key="objName">
                    {{objName}}: {{objValue}}
                  </ul>
                </li>
              </ul>
            </p>
          </div>
          <div class="column">
            <p>Borders:
              <ul>
                <li v-for="border in countryInfo.borders" :key="border">
                  {{border}}
                </li>
              </ul>
            </p>
            <p>Top level domain:
              <ul>
                <li v-for="topLevelDomain in countryInfo.topLevelDomain" :key="topLevelDomain">
                  {{topLevelDomain}}
                </li>
              </ul>
            </p>
            <p>Alpha2Code:
              {{countryInfo.alpha2Code}}
            </p>
            <p>Alpha3Code:
              {{countryInfo.alpha3Code}}
            </p>
          </div>
        </div>
        <div class="more-info"><a :href="`https://www.google.com/search?q=${countryInfo.name}`" target="blank">more info...</a></div>
      </div>
    </div>

  </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'Modal',
  props: ['open', 'countryInfo'],
  methods: {
    close () {
      this.$store.dispatch('togglePopupAction')
    }
  }
}
</script>