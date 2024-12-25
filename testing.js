const statuses = [
    { user: 'User 1', images: ['https://picsum.photos/400/800?random=1', 'https://picsum.photos/400/800?random=2', 'https://picsum.photos/400/800?random=3'] },
    { user: 'User 2', images: ['https://picsum.photos/400/800?random=4', 'https://picsum.photos/400/800?random=5'] },
    { user: 'User 3', images: ['https://picsum.photos/400/800?random=6', 'https://picsum.photos/400/800?random=7', 'https://picsum.photos/400/800?random=8', 'https://picsum.photos/400/800?random=9'] },
    { user: 'User 4', images: ['https://picsum.photos/400/800?random=10'] },
    { user: 'User 5', images: ['https://picsum.photos/400/800?random=11', 'https://picsum.photos/400/800?random=12'] },
    { user: 'User 6', images: ['https://picsum.photos/400/800?random=13', 'https://picsum.photos/400/800?random=14', 'https://picsum.photos/400/800?random=15'] },
    { user: 'User 7', images: ['https://picsum.photos/400/800?random=16', 'https://picsum.photos/400/800?random=17'] },
    { user: 'User 8', images: ['https://picsum.photos/400/800?random=18', 'https://picsum.photos/400/800?random=19', 'https://picsum.photos/400/800?random=20'] },
    { user: 'User 9', images: ['https://picsum.photos/400/800?random=21'] },
    { user: 'User 10', images: ['https://picsum.photos/400/800?random=22', 'https://picsum.photos/400/800?random=23'] },
    { user: 'User 11', images: ['https://picsum.photos/400/800?random=24', 'https://picsum.photos/400/800?random=25', 'https://picsum.photos/400/800?random=26'] },
    { user: 'User 12', images: ['https://picsum.photos/400/800?random=27', 'https://picsum.photos/400/800?random=28'] },
    { user: 'User 13', images: ['https://picsum.photos/400/800?random=29', 'https://picsum.photos/400/800?random=30', 'https://picsum.photos/400/800?random=31'] },
    { user: 'User 14', images: ['https://picsum.photos/400/800?random=32'] },
    { user: 'User 15', images: ['https://picsum.photos/400/800?random=33', 'https://picsum.photos/400/800?random=34', 'https://picsum.photos/400/800?random=35'] },
];

const statusContainer = document.getElementById('statusContainer');
const statusViewer = document.getElementById('statusViewer');
const statusContent = document.getElementById('statusContent');
const leftClickArea = document.getElementById('leftClickArea');
const rightClickArea = document.getElementById('rightClickArea');
const closeButton = document.getElementById('closeButton');
const statusBar = document.getElementById('statusBar');
let statusInterval;
const STATUS_DURATION = 5000; // 5 seconds per status

let currentUserIndex = 0;
let currentImageIndex = 0;

statuses.forEach((status, index) => {
    const statusItem = document.createElement('div');
    statusItem.className = 'status-item';
    statusItem.style.backgroundImage = `url(${status.images[0]})`;
    statusItem.title = status.user;
    statusItem.addEventListener('click', () => showStatus(index, 0));
    statusContainer.appendChild(statusItem);
});

function showStatus(userIndex, imageIndex) {
    currentUserIndex = userIndex;
    currentImageIndex = imageIndex;
    updateStatusContent();
    createStatusBar();
    statusViewer.style.display = 'flex';
    startStatusProgress();
}

function closeStatus() {
    statusViewer.style.display = 'none';
    clearInterval(statusInterval);
}

closeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    closeStatus();
});

function updateStatusContent() {
    const currentStatus = statuses[currentUserIndex];
    statusContent.src = currentStatus.images[currentImageIndex];
}

leftClickArea.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateStatusContent();
        startStatusProgress();
    }
});

rightClickArea.addEventListener('click', (e) => {
    e.stopPropagation();
    const currentStatus = statuses[currentUserIndex];
    if (currentImageIndex < currentStatus.images.length - 1) {
        currentImageIndex++;
        updateStatusContent();
        startStatusProgress();
    } else if (currentUserIndex < statuses.length - 1) {
        currentUserIndex++;
        currentImageIndex = 0;
        updateStatusContent();
        startStatusProgress();
    } else {
        closeStatus();
    }
});

function startStatusProgress() {
    clearInterval(statusInterval);
    statusInterval = setInterval(() => {
        rightClickArea.click();
    }, STATUS_DURATION);
}

function createStatusBar() {
    statusBar.innerHTML = '';
    const currentStatus = statuses[currentUserIndex];
    currentStatus.images.forEach((image, index) => {
        const segment = document.createElement('div');
        segment.className = 'status-segment';
        const segmentInner = document.createElement('div');
        segmentInner.className = 'status-segment-inner';
        if (index < currentImageIndex) {
            segmentInner.style.width = '100%';
        }
        segment.appendChild(segmentInner);
        statusBar.appendChild(segment);
    });
    updateStatusBar();
}

function updateStatusBar() {
    const segments = document.querySelectorAll('.status-segment-inner');
    let progress = 0;
    clearInterval(statusInterval);
    statusInterval = setInterval(() => {
        if (progress < 100) {
            progress += 1;
            segments[currentImageIndex].style.width = `${progress}%`;
        } else {
            rightClickArea.click();
        }
    }, STATUS_DURATION / 100);
}
