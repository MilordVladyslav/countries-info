<template>
  <div id="app">
    <div class="wrapper map-wrapper">
      <div class="map" id="container"></div>
    </div>
    <div class="credits">
      <a href="https://restcountries.eu/" target="blank">Countries data by "REST Countries" API</a>
      <a href="http://datamaps.github.io/">interactive map by "DataMaps"</a>
      <a href="https://vuejs.org/">Vue.js</a>
      <a href="https://github.com/MilordVladyslav">MilordVladyslav</a>
    </div>
    <Modal :open="popup" :countryInfo="countryInfo"></Modal>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import { mapGetters, mapActions } from 'vuex';
import Slick from 'vue-slick';
import Datamap from 'datamaps';
import '../node_modules/slick-carousel/slick/slick.css';
import './styles/index.scss';
import Modal from './components/Modal'
export default {
  name: 'App',
  data() {
    return {
      open:false,
      slickOptions: {
        slidesToShow: 5,
        centerMode: true,
        infinite: true,
        draggable: true,
        centerPadding: '0px',
        swipeToSlide: true
      }
    }
  },
  computed: {
    ...mapGetters([
      'popup',
      'countryInfo'
    ])
  },
  mounted: function () {
    var map = new Datamap({
      element: document.getElementById('container'),
      fills: {
        defaultFill: 'rgba(65,184,131)',
      },
      geographyConfig: {
        highlightFillColor: '#35495e',
        highlightBorderColor: 'rgba(255,105,111, 1)',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 1
      }
    });
    let datahover = document.getElementsByClassName('datamaps-hoverover');
    let countries = document.getElementsByClassName("datamaps-subunit");
    for (let i = 0; i< countries.length; i++) {
      countries[i].addEventListener('click', () => {
        console.log(datahover[0].innerText)
        this.open = true
        this.$store.dispatch('getCountryInfo', datahover[0].innerText)
        this.$store.dispatch('togglePopupAction')
      })
    }

    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        console.log('hello there')
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  },
  methods: {
    submitForm(evt) {
      evt.preventDefault()
      console.log('hello there')
    }
  },
  components: {
    Slick,
    Modal
  }
}
</script>

