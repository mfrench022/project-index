let gridButton = document.querySelector('.filter-bar button')
let projectsDiv = document.querySelector('.projects')
let gridLabel = gridButton.querySelector('h3')

function toggleGridView() {
	projectsDiv.classList.toggle('project-grid')

	if (gridLabel.textContent === 'off') {
		gridLabel.textContent = 'on'
	} else {
		gridLabel.textContent = 'off'
	}
}

gridButton.addEventListener('click', toggleGridView)
