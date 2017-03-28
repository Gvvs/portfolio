// Insert Tracking for analytics
class Track {
  constructor(selector, category, label, value) {
    this.selector = selector;
    this.category = category;
    this.label = label;
    this.value = value;

    // Keep Track's this
    const self = this;
    this.selector.on('click',function(e){
        self.onClick(this);
    });
  }
  send() {
    return ga("send", "event", this.category, this.label, this.value);
  }
  log() {
    return console.log("Send tracking " + "category:" + this.category + ", label:" + this.label + ", value:" + this.value);
  }
  onClick(selector) {
      this.label = $(selector).data("label");
      this.value = $(selector).data("value");
      this.send();
      this.log();
  }
}

// Instances of Track class
var social = new Track($("a[data-track='social']"), "Social", "", "");
var discover = new Track($("a[data-track='discover']"), "Discover", "", "");
var credits = new Track($("a[data-track='credits']"), "Credits", "", "");
var email = new Track($("a[data-track='email']"), "Email", "", "");
