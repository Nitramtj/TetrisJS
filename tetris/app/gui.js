define(function() {
	var GUI = function(element) {
		this.element = document.getElementById(element);		
	};

	GUI.prototype.pause = function(callback) {
		var self = this;
		var div = document.createElement('div');
		div.className = 'gui-background';

		var button = document.createElement('input');
		button.type = 'button';
		button.value = 'Resume';
		button.className = 'tetris-button';
		button.id = 'pause-button';

		button.onclick = function() {
			div.parentNode.removeChild(div);
			callback();
		}

		div.appendChild(button);
		this.element.parentNode.appendChild(div);

		this.background_div = div;
	};

	GUI.prototype.clear = function() {
		this.background_div.parentNode.removeChild(this.background_div);
		delete this.background_div;
	}

	GUI.prototype.showStart = function(callback) {
		var self = this;
		var div = document.createElement('div');
		div.className = 'gui-background';

		var button = document.createElement('input');
		button.type = 'button';
		button.value = 'Start';
		button.className = 'tetris-button';
		button.id = 'start-button';

		button.onclick = function() {
			self.clear();
			callback();
		}

		var title = document.createElement('h1');
		title.id = 'tetris-title';
		title.innerHTML = 'Tetrominos!';

		div.appendChild(title);
		div.appendChild(button);
		this.element.parentNode.appendChild(div);

		var info = document.createElement('p');
		info.id = 'tetris-start-notes';
		info.innerHTML = 'Move - Arrow Keys<br>Pause - p<br>Drop - Space';

		div.appendChild(title);
		div.appendChild(button);
		div.appendChild(info);
		this.element.parentNode.appendChild(div);

		this.background_div = div;
	}

	return GUI;
});