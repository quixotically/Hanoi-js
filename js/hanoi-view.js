(function() {
  'use strict';
  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }

  var View = Hanoi.View = function (game, $el) {

    this.game = game;
    this.$el = $el;

  };

  View.prototype.setupTowers = function () {
    
  };

}());
