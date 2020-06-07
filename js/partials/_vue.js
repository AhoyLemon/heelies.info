var app = new Vue({
  el: '#app',
  data: {
    mode: "canon",
    h1: 'It works.',
    currentBanner: '',
    banners: [
      'soaker-for-bear.png',
      'ears-4-kids.png',
      'you-are-ugly.jpg',
      'soylent.jpg',
      'shrek-yourself.jpg'
    ]
  },

  methods: {
    rotateBanner() {
      let self = this;
      console.log('rotate');
      let f = randomFrom(self.banners);

      if (f != self.currentBanner) {
        self.currentBanner = f;
      } else {
        self.rotateBanner();
      }
    },
  },

  computed: {
  },

  mounted: function() {
    let self = this;

    self.currentBanner = randomFrom(self.banners);

    window.setInterval(function(){
      self.rotateBanner();
    }, 8000);
  }

});