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

    this.clickedStackNumber = -1;
    this.bindEventHandlers();
    this.setupTowers();
  };

  View.prototype.setupTowers = function () {
    this.render();
  };

  View.prototype.render = function () {
    var i = 0;
    var $stacks = this.$el.find('.hanoi-disks');
    var view = this;

    this.game.towers.forEach( function (tower) {
      var towerReversed = tower.slice();
      towerReversed.reverse();

      towerReversed.forEach(function (disk) {
        $stacks.eq(i).append(view.disks[disk]);
      });

      i++;
    });
  };
}());
