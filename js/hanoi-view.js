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

  View.prototype.bindEventHandlers = function () {
    var $stacks = this.$el.find('.hanoi-stack');
    var view = this;

    $stacks.on("click", function (event) {
      if (view.clickedStackNumber >= 0) {
        if (!view.game.move(view.clickedStackNumber, $stacks.index(this))) {
          alert("Not a valid move!");
        }

        view.clickedStackNumber = -1;
      } else {
        view.clickedStackNumber = $stacks.index(this);
      }

      view.render();
      view.gameOver();
    });

  };

  View.prototype.gameOver = function () {
    if (this.game.isWon()) {
      var $verdict = $('<h2 class="verdict">You won!</h2>');
      this.$el.append($verdict);
      var $stacks = this.$el.find('.hanoi-stack');
      $stacks.off();
    }
  }
}());
