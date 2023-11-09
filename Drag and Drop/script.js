let lists = document.getElementsByClassName("taskList");
let done = document.getElementById("done");
let inProgress = document.getElementById("inProgress");

for (taskList of lists) {
	taskList.addEventListener("dragstart", function (e) {
		let selected = e.target;

		done.addEventListener("dragover", function (e) {
			e.preventDefault();
		});

		done.addEventListener("drop", function () {
			done.appendChild(selected);
			selected = null;
		});
		inProgress.addEventListener("dragover", function (e) {
			e.preventDefault();
		});

		inProgress.addEventListener("drop", function () {
			if (selected != null) {
				inProgress.appendChild(selected);
			}
			selected = null;
		});
	});
}