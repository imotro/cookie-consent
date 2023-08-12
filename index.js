// Function to display cookies and localStorage items in a custom dialog
function showCookiesAndLocalStorage() {
    // Get all cookies
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    
    // Get all localStorage items
    const localStorageItems = Object.keys(localStorage);
    
    // Create a custom dialog
    const dialogContainer = document.createElement('div');
    dialogContainer.style.position = 'fixed';
    dialogContainer.style.top = '50%';
    dialogContainer.style.left = '50%';
    dialogContainer.style.height = '50%';
    dialogContainer.style.width = '50%';
    dialogContainer.style.transform = 'translate(-50%, -50%)';
    dialogContainer.style.backgroundColor = 'black';
    dialogContainer.style.padding = '20px';
    dialogContainer.style.border = '1px solid #ccc';
    dialogContainer.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
    dialogContainer.style.overflow = 'scroll';
    dialogContainer.style.opacity = '0'; // Initially hidden
    
    const dialogTitle = document.createElement('h2');
    
    const cookiesList = document.createElement('ul');
    cookiesList.innerHTML = cookies.map(cookie => {
        const [name, value] = cookie.split('=');
        return `<li><span style="color: blue;">${name}</span> :<span style="color: green;">${value}</span></li>`;
    }).join('');
    
    const localStorageList = document.createElement('ul');
    localStorageList.innerHTML = localStorageItems.map(item => `<li>${item}</li>`).join('');
    
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Allow';
    closeButton.style.padding = '10px';
    closeButton.style.background = '#222'
    closeButton.addEventListener('click', () => {
        dialogContainer.style.opacity = '0'; // Fade out
        setTimeout(() => {
            document.body.removeChild(dialogContainer);
        }, 300);
    });
    dialogContainer.appendChild(document.createElement('h3')).textContent = 'Cookies:';
    dialogContainer.appendChild(cookiesList);
    dialogContainer.appendChild(document.createElement('hr'));
    dialogContainer.appendChild(localStorageList);
    let fe = document.createElement('p')
    fe.innerHTML = 'by clicking allow, you agree to storage of these cookies on your device'
    dialogContainer.appendChild(fe);
    document.createElement('p').innerHTML = 'By clicking ok, you agree to these cookies'
    document.body.appendChild(dialogContainer);
    dialogContainer.appendChild(closeButton);
    
    // Fade in effect
    setTimeout(() => {
        dialogContainer.style.opacity = '1';
    }, 100);
}

// Check if the "allow" cookie exists
const allowCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('allow='));

// If "allow" cookie is not present, show the custom dialog
if (!allowCookie) {
    showCookiesAndLocalStorage();
}
