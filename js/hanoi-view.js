(function() {
  'use strict';
  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }

  var View = Hanoi.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.disks = {
      3: $('<li class="big"></li>'),
      2: $('<li class="med"></li>'),
      1: $('<li class="small"></li>')
    };
  };

  View.prototype.setupTowers = function () {

    var $firstStack = this.$el.find('.hanoi-stack').eq(0);
    var $firstDisks = $firstStack.find('.hanoi-disks')
    var $largeDisk = $('<li></li>');
    $largeDisk.addClass('big');
    var $mediumDisk = $('<li></li>');
    $mediumDisk.addClass('med');
    var $smallDisk = $('<li></li>');
    $smallDisk.addClass('small');
    $firstDisks.append($smallDisk, $mediumDisk, $largeDisk);

  };

}());
