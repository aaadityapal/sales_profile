const statuses = [
  { user: 'HighLights', images: ['https://static.wixstatic.com/media/3c0ec6_265ecbbc502b4964aeaa72f39c7c8f66~mv2.jpg', 'https://static.wixstatic.com/media/3c0ec6_0601df39183c405e9b9a61a9c37530bd~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_66300a79bf6e42cdae8744b666c3fb3c~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_e0032b37a1194859ae53df7be6d39114~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_484b2790161d4c8bae03370c1afce259~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_92d2ba84e2a14691880f93bbdd7350d4~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_ae8e0074f4c7470fb320da7ab3942bfc~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_265ea7d7bdc2416d8fdd72329eb142a5~mv2.jpeg', 'https://static.wixstatic.com/media/3c0ec6_3e15f31d2a354c25aa89739887f1a169~mv2.jpeg', 'https://static.wixstatic.com/media/3c0ec6_13cc16b5c68141998d0648cb5b73de9c~mv2.jpeg', 'https://static.wixstatic.com/media/3c0ec6_bf49d56519d9444e87aba7cb779a60e1~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_e2c68840118f4383a358645bd2d148e6~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_98b51ef9a8984212bd74ea544bd84296~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_89b2fc07858147129eb80ed8e589f465~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_aa804b62378d4423b96d05c3b2225986~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_81ab3a166caa4439bc5589e3e872777e~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_868eeb51809c4718a9b2ca46e020a6cd~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_2d8e91d7b27f497d8ef1eb7eb0fe0436~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_882ab7749a7d4ffb9d8962c422319730~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_fc698e08ffde485ba835bb8c239fb782~mv2.jpg', 'https://static.wixstatic.com/media/3c0ec6_d136734f800347ba88d7965e4c4b6831~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_9ece7a3d63cd49d0a0979163a5274927~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_6478623f56934fbd87ae0f699d68467e~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_7fc3007987264defbeaeef43d367eec2~mv2.png', 'https://static.wixstatic.com/media/3c0ec6_4cd39528fb90468bbc73412aa6d6a970~mv2.jpg', 'https://static.wixstatic.com/media/3c0ec6_efedc40c81aa4da78505bf3d71e02f89~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_e3bd579b567d47a09864f05d0d192ef4~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_b7d46440c2f043299fad55d9a4d2f357~mv2.jpg'] },
  { user: 'Residential DeSIGN', images: ['https://static.wixstatic.com/media/3c0ec6_a5721eeec36f485eb8f1ef73cebcd574~mv2.jpg', 'https://static.wixstatic.com/media/3c0ec6_17635236c7da4750bca490238c512822~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_37199e214138451a8aef67a3f04b3723~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_1b33dcbd04d54075a9e35d896fed0339~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_b19fc1fa6fa04aed987f27ec6d57db12~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_5789424500034ca097d619d42909edb0~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_5aec03bcf5524104a88d785db08fea65~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_ab6c7e756cb4438ab06028723a2a6b7e~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_db40e75ac34a4e859350d5954855c382~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_c2094702261b497d80e4c38216a7933b~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_1e3eb273c2d24502a856436a8ecb16b3~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_5d7c7c856154482abdfd118e490a1930~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_77426a47d33a43838f2d98df16396e19~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_545b2486c99145c192b8c7e16a3a1143~mv2.png','https://static.wixstatic.com/media/3c0ec6_adad07a8b81b47bc9fa50d9652811da1~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_62982be178764a57a7b4ebb545195873~mv2.jpg'] },
  { user: 'Residential INTIRIA', images: ['https://static.wixstatic.com/media/3c0ec6_265ea7d7bdc2416d8fdd72329eb142a5~mv2.jpeg', 'https://static.wixstatic.com/media/3c0ec6_3e15f31d2a354c25aa89739887f1a169~mv2.jpeg', 'https://static.wixstatic.com/media/3c0ec6_13cc16b5c68141998d0648cb5b73de9c~mv2.jpeg', 'https://static.wixstatic.com/media/3c0ec6_bf49d56519d9444e87aba7cb779a60e1~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_e2c68840118f4383a358645bd2d148e6~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_98b51ef9a8984212bd74ea544bd84296~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_89b2fc07858147129eb80ed8e589f465~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_aa804b62378d4423b96d05c3b2225986~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_81ab3a166caa4439bc5589e3e872777e~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_868eeb51809c4718a9b2ca46e020a6cd~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_2d8e91d7b27f497d8ef1eb7eb0fe0436~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_882ab7749a7d4ffb9d8962c422319730~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_5a887806bfec4df9bf9ced8e293f2ebc~mv2.jpeg'] },
  { user: 'Commercial DeSIGN', images: ['https://static.wixstatic.com/media/3c0ec6_14bf77e66381483583909dc83e150515~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_889290c874074dc9a281d1d450714477~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_7e5c8132d5d3427e89c3106ff5fe6a5e~mv2.png','https://static.wixstatic.com/media/3c0ec6_ed8d14937eae4662b28755c405f53611~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_f81a1045042947669ca252825a9641b7~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_d7cb2b6e4c9c4cf88590d43c632ce307~mv2.png','https://static.wixstatic.com/media/3c0ec6_ca667f7494014e83bd7f56ba133ebe68~mv2.png','https://static.wixstatic.com/media/3c0ec6_84a68f86020140d6ab20a9aa0a911727~mv2.jpg',] },
  { user: 'Commercial INTIRIA', images: ['https://static.wixstatic.com/media/3c0ec6_e7dba3cc57824c7b80ecea1ec60e3d79~mv2.jpeg', 'https://static.wixstatic.com/media/3c0ec6_e8ea6428fb0848d79b95b83e28a7939c~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_b3fa3568bdbf4ebe8b15043a8a6eeca3~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_53d6931432da4245a2bc1bd49e4960c7~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_f9dc753894c7445dbaed2016018a524d~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_7562a6b10e48491b9cea1bd7e287f325~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_4cd39528fb90468bbc73412aa6d6a970~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_09104c0f219b4a17a4059768a83f672f~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_96a7e857af2246dcb441ced42c5ac491~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_24e7c51b2a7e4af8930660869eb4b574~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_99119fbcf4334c999cb233994c7310fb~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_6e4d339a135249e89a77347a7abec01a~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_afc1cac24d7a45218c8a02cba7597da8~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_1c0873cd4296400591377aa242fa6ab7~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_642f044b39d349dab5a9fd1db66403e6~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_48276434b2ed4938b0ce70ce8b660250~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_987f9850260746f282aa7510ba8fa16d~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_802143c915714526a1cea20b97fea2a0~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_d090e7f225144802af5353066bdb3d61~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_0e7e5832e0304d5ea63cd3eb00f0a527~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_740eb221f0c9448baeab8d509599e563~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_80a261b7f0234939a694807bbda1ee9f~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_a42aa19179644d73ac0127ca3f7a7fae~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_e2ff231e61124048bf75332a675152c3~mv2.png'] },
  { user: 'Showrooms DeSIGN & INTIRIA', images: ['https://static.wixstatic.com/media/3c0ec6_7fc3007987264defbeaeef43d367eec2~mv2.png', 'https://static.wixstatic.com/media/3c0ec6_4cd39528fb90468bbc73412aa6d6a970~mv2.jpg', 'https://static.wixstatic.com/media/3c0ec6_efedc40c81aa4da78505bf3d71e02f89~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_e3bd579b567d47a09864f05d0d192ef4~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_b7d46440c2f043299fad55d9a4d2f357~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_eb666370f5cc47e5add6be77d3345b88~mv2.jpg'] },
  { user: 'Marriage Home DeSIGN', images: ['https://static.wixstatic.com/media/3c0ec6_265ecbbc502b4964aeaa72f39c7c8f66~mv2.jpg', 'https://static.wixstatic.com/media/3c0ec6_0601df39183c405e9b9a61a9c37530bd~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_66300a79bf6e42cdae8744b666c3fb3c~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_e0032b37a1194859ae53df7be6d39114~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_484b2790161d4c8bae03370c1afce259~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_92d2ba84e2a14691880f93bbdd7350d4~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_ae8e0074f4c7470fb320da7ab3942bfc~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_09403455db7b467da82d9a4f86c0b97d~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_2284bfb08bb045c08d4d0fdb3d68e963~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_f340cd5421924df7bad7b12cbefcbeda~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_473ec5e1799c49c4a60bb3b3ca293c6e~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_754cbbcd544040c28ac98ab7c47233a1~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_ad17ac19d55143a291913ca9eed02591~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_0a2e3058988642af807c0e6fa86caf41~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_3cf3cd9e80a84d4bbaa14d801ad8661d~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_f4cbd73ef2264d3fb72b28d6522e08d1~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_7ab584105e7b47a09051bb1806c35d94~mv2.png'] },
  { user: 'Marriage Home INTIRIA', images: ['https://static.wixstatic.com/media/3c0ec6_ef2fbe3b854343da91f687cd8cbd3588~mv2.jpeg', 'https://static.wixstatic.com/media/3c0ec6_27d0f670d4f045f282527d0337a6da84~mv2.jpeg', 'https://static.wixstatic.com/media/3c0ec6_1ea1989c00ee482b817f0e50c65525ff~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_85ac86c2f8354f50b4bd8cd8ae5efbaa~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_0f5bcea5d6614a3faf96247721b3f84e~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_8801744e4df148209d5efd58905be3be~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_aa4d0f4870a34bb8a4f53e33c059aadb~mv2.jpeg'] },
  { user: 'Industrial DeSIGN', images: ['https://static.wixstatic.com/media/3c0ec6_9b7c266559ed4a9f847395e7e932db44~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_60ac01d593964371b6bfdb4a39d7b086~mv2.jpg'] },
  { user: 'Industrial INTIRIA', images: ['https://static.wixstatic.com/media/3c0ec6_e7d73946f7b24c7c84e81ddc196d7a01~mv2.jpg', 'https://static.wixstatic.com/media/3c0ec6_fd73c9a9f67e45e1974eee59747d4111~mv2.jpg'] },
  { user: 'FarmHouse DeSIGN', images: ['https://static.wixstatic.com/media/3c0ec6_0cbdfea0c827435389ff8f403d0eadab~mv2.jpeg', 'https://static.wixstatic.com/media/3c0ec6_f57294deed464081be5920f0a17eb1df~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_2be88ba97686426188d59651955308e8~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_8d4e610726b244de8bfe7a0a96ef6508~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_6c0bdfd8ecca43f28a2a3d822a0c6c88~mv2.jpeg','https://static.wixstatic.com/media/3c0ec6_d228e5046c644fd38379ff8e203b5b1d~mv2.png','https://static.wixstatic.com/media/3c0ec6_4e49d06edd964eeda4cd97d66cf60f64~mv2.png','https://static.wixstatic.com/media/3c0ec6_5076be284c3e48bda90cd2284406a772~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_2e931e2b9eef489f98b1113eaecbc83d~mv2.png'] },
  { user: 'GroupHousing DeSIGN', images: ['https://static.wixstatic.com/media/3c0ec6_fc698e08ffde485ba835bb8c239fb782~mv2.jpg', 'https://static.wixstatic.com/media/3c0ec6_d136734f800347ba88d7965e4c4b6831~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_9ece7a3d63cd49d0a0979163a5274927~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_6478623f56934fbd87ae0f699d68467e~mv2.jpg'] },
  { user: 'Hospital DeSIGN', images: ['https://static.wixstatic.com/media/3c0ec6_446a7f475b1440ea97b868b20805fb25~mv2.jpeg', 'https://static.wixstatic.com/media/3c0ec6_79b488e8d01a48e8aace306a723f0c12~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_b906d4fc9c604ea881f684362d3fa03b~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_a1354519fecd431bbc91a90aac8d7e86~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_d4e9212427774f57841b780ed24d7d0e~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_96e4f9465a3c4431819e185044dd5fa9~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_153dcd718fa34fda89cf456bcd1ac304~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_9bfdda96c4de4cd1b63caaa17485745a~mv2.jpg'] },
  { user: 'Institutional DeSIGN', images: ['https://static.wixstatic.com/media/3c0ec6_63527482665f427fa1cec8175ef1afdd~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_32d6a97f06544cf2b80a49a28ffd358b~mv2.jpg','https://static.wixstatic.com/media/3c0ec6_a08f25b347e840e49fa3b7332711e5db~mv2.jpg'] },
  { user: 'Miscellaneous DeSIGN & INTIRIA', images: ['https://static.wixstatic.com/media/3c0ec6_9db5f3efd1104405b553708eda183da4~mv2.jpg', 'https://static.wixstatic.com/media/3c0ec6_17fd15c50ad343da9aeac3d1ad292edb~mv2.jpg'] },
];

const statusContainer = document.getElementById('statusContainer');
const statusViewer = document.getElementById('statusViewer');
const statusContent = document.getElementById('statusContent');
const closeButton = document.getElementById('closeButton');
const leftClickArea = document.getElementById('leftClickArea');
const rightClickArea = document.getElementById('rightClickArea');
const statusBar = document.getElementById('statusBar');

let currentUserIndex = 0;
let currentImageIndex = 0;
let statusInterval;
const STATUS_DURATION = 5000; // 5 seconds per status

statuses.forEach((status, index) => {
    const statusItemContainer = document.createElement('div');
    statusItemContainer.className = 'status-item-container';
    statusItemContainer.style.display = 'flex';
    statusItemContainer.style.flexDirection = 'column';
    statusItemContainer.style.alignItems = 'center';

    const statusItem = document.createElement('div');
    statusItem.className = 'status-item';
    statusItem.style.backgroundImage = `url(${status.images[0]})`;
    statusItem.title = status.user;
    statusItem.addEventListener('click', () => showStatus(index, 0));

    const userName = document.createElement('div');
    userName.className = 'user-name';
    userName.textContent = status.user;
    userName.style.textAlign = 'center';
    userName.style.fontWeight = 'bold';
    userName.style.padding = '5px';
    userName.style.fontSize = '12px';
    userName.style.color = '#333';

    const statusCaption = document.createElement('div');
    statusCaption.className = 'status-caption';
    
    // Update these styles for the caption
    statusCaption.style.textAlign = 'center';
    statusCaption.style.padding = '3px';
    statusCaption.style.fontSize = '12px';
    statusCaption.style.color = '#666';
    statusCaption.style.marginTop = '2px';

    statusItemContainer.appendChild(statusItem);
    statusItemContainer.appendChild(userName);
    statusItemContainer.appendChild(statusCaption);
    statusContainer.appendChild(statusItemContainer);
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

function createStatusBar() {
  statusBar.innerHTML = '';
  const currentStatus = statuses[currentUserIndex];
  currentStatus.images.forEach((_, index) => {
      const segment = document.createElement('div');
      segment.className = 'status-segment';
      const innerSegment = document.createElement('div');
      innerSegment.className = 'status-segment-inner';
      segment.appendChild(innerSegment);
      statusBar.appendChild(segment);
  });
}

function startStatusProgress() {
  clearInterval(statusInterval);
  updateStatusBarProgress(0);
  
  let startTime = Date.now();
  statusInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed / STATUS_DURATION) * 100;
      
      if (progress >= 100) {
          clearInterval(statusInterval);
          nextStatus();
      } else {
          updateStatusBarProgress(progress);
      }
  }, 100);
}

function updateStatusBarProgress(progress) {
  const segments = statusBar.children;
  for (let i = 0; i < segments.length; i++) {
      const innerSegment = segments[i].children[0];
      if (i < currentImageIndex) {
          innerSegment.style.width = '100%';
      } else if (i === currentImageIndex) {
          innerSegment.style.width = `${progress}%`;
      } else {
          innerSegment.style.width = '0';
      }
  }
}

function nextStatus() {
  const currentStatus = statuses[currentUserIndex];
  if (currentImageIndex < currentStatus.images.length - 1) {
      currentImageIndex++;
      updateStatusContent();
      startStatusProgress();
  } else {
      closeStatus();
  }
}

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
  nextStatus();
});

closeButton.addEventListener('click', (e) => {
  e.stopPropagation();
  closeStatus();
});

statusViewer.addEventListener('click', (e) => {
  if (e.target === statusViewer) {
      closeStatus();
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("uniqueToggleBtn");
  const galleryContainer = document.querySelector(".unique-gallery-container");
  const images = document.querySelectorAll(".image-slide");

  // Set smooth scrolling by default
  galleryContainer.style.scrollBehavior = "smooth";

  // Toggle visibility of the gallery container
  toggleButton.addEventListener("click", () => {
    galleryContainer.style.display = galleryContainer.style.display === "block" ? "none" : "block";
  });

  // Improved drag event handling for both touch and mouse
  let isDragging = false;
  let startX = 0, scrollLeft = 0;

  // Function to start dragging
  const startDrag = (event) => {
    isDragging = true;
    startX = event.pageX || event.touches[0].pageX; // Use pageX for mouse and touches[0] for touch events
    scrollLeft = galleryContainer.scrollLeft;
    galleryContainer.style.scrollBehavior = "auto"; // Temporarily disable smooth scroll while dragging
    galleryContainer.classList.add("dragging"); // Add dragging class to avoid unwanted CSS transitions
  };

  // Function to handle dragging movement
  const moveDrag = (event) => {
    if (!isDragging) return; // Exit if not dragging
    const x = event.pageX || event.touches[0].pageX;
    const walk = (x - startX); // Calculate the distance moved
    galleryContainer.scrollLeft = scrollLeft - walk; // Adjust scroll position
  };

  // Function to stop dragging
  const endDrag = () => {
    isDragging = false;
    galleryContainer.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling
    galleryContainer.classList.remove("dragging"); // Remove dragging class
  };

  // Mouse events for desktop
  galleryContainer.addEventListener("mousedown", startDrag);
  galleryContainer.addEventListener("mousemove", moveDrag);
  galleryContainer.addEventListener("mouseleave", endDrag);
  galleryContainer.addEventListener("mouseup", endDrag);

  // Touch events for mobile with passive listeners
  galleryContainer.addEventListener("touchstart", startDrag, { passive: true });
  galleryContainer.addEventListener("touchmove", moveDrag, { passive: true });
  galleryContainer.addEventListener("touchend", endDrag);

  // Image click event to open the link in an iframe
  images.forEach(image => {
    image.addEventListener("click", () => {
      const link = image.getAttribute("data-link");
      const websiteContainer = document.querySelector(".unique-website-container");
      const iframe = document.getElementById("iframeContent");
      iframe.src = link; // Set the iframe source to the link
      websiteContainer.style.display = "block"; // Show the website container
    });
  });

  // Close button to hide the website container
  const closeButton = document.querySelector(".close-btn");
  closeButton.addEventListener("click", () => {
    const websiteContainer = document.querySelector(".unique-website-container");
    websiteContainer.style.display = "none"; // Hide the website container
  });
});



document.getElementById("toggleUniqueBtn").addEventListener("click", function() {
  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.style.display = optionsContainer.style.display === "flex" ? "none" : "flex";
});

document.querySelectorAll(".dropdown-toggle").forEach(button => {
  button.addEventListener("click", function() {
      const dropdown = this.nextElementSibling;
      
      // Close all other dropdowns
      document.querySelectorAll(".dropdown-content").forEach(content => {
          if (content !== dropdown) {
              content.style.display = "none";
              const siblingButton = content.previousElementSibling;
              siblingButton.innerHTML = siblingButton.innerHTML.replace('▲', '▼');
          }
      });
      
      // Toggle the clicked dropdown
      if (dropdown.style.display === "block") {
          dropdown.style.display = "none";
          this.innerHTML = this.innerHTML.replace('▲', '▼');
      } else {
          dropdown.style.display = "block";
          this.innerHTML = this.innerHTML.replace('▼', '▲');
      }
  });
});

function openContainer(url) {
  document.getElementById("iframeContainer").src = url;
  document.getElementById("fullScreenContainer").style.display = "flex";
}

function closeContainer() {
  document.getElementById("fullScreenContainer").style.display = "none";
  document.getElementById("iframeContainer").src = "";
}


function runNumbers() {
  var numbers = [0, 0, 0, 0, 0];
  var stops = [105, 70, 24, 15, 10];
  var intervals = [];

  function updateNumber(index) {
      intervals[index] = setInterval(function() {
          document.getElementById("number-" + index).innerText = numbers[index];
          if (numbers[index] >= stops[index]) {
              clearInterval(intervals[index]);
              document.getElementById("number-" + index).innerText += "+";
          } else {
              numbers[index] += 1;
          }
      }, 50);
  }

  for (var i = 0; i < numbers.length; i++) {
      updateNumber(i);
  }
}

//offer section

const banner = document.getElementById('offerBanner');

let startX, scrollLeft, isDown = false;

banner.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - banner.offsetLeft;
    scrollLeft = banner.scrollLeft;
    banner.style.cursor = 'grabbing';
});

banner.addEventListener('mouseleave', () => {
    isDown = false;
});

banner.addEventListener('mouseup', () => {
    isDown = false;
    banner.style.cursor = 'grab';
});

banner.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - banner.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    banner.scrollLeft = scrollLeft - walk;
});

// Touch event handling
banner.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - banner.offsetLeft;
    scrollLeft = banner.scrollLeft;
    isDown = true;
});

banner.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - banner.offsetLeft;
    const walk = (x - startX) * 2;
    banner.scrollLeft = scrollLeft - walk;
});

banner.addEventListener('touchend', () => {
    isDown = false;
});




//Footer Section
document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById("currentYear");
  yearSpan.textContent = new Date().getFullYear();
});

document.addEventListener('DOMContentLoaded', function() {
    const offerBanner = document.querySelector('.offer-banner');
    let isDown = false;
    let startX;
    let scrollLeft;

    offerBanner.addEventListener('mousedown', (e) => {
        isDown = true;
        offerBanner.classList.add('active');
        startX = e.pageX - offerBanner.offsetLeft;
        scrollLeft = offerBanner.scrollLeft;
    });

    offerBanner.addEventListener('mouseleave', () => {
        isDown = false;
        offerBanner.classList.remove('active');
    });

    offerBanner.addEventListener('mouseup', () => {
        isDown = false;
        offerBanner.classList.remove('active');
    });

    offerBanner.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - offerBanner.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed
        offerBanner.scrollLeft = scrollLeft - walk;
    });

    // For touch devices
    offerBanner.addEventListener('touchstart', (e) => {
        isDown = true;
        offerBanner.classList.add('active');
        startX = e.touches[0].pageX - offerBanner.offsetLeft;
        scrollLeft = offerBanner.scrollLeft;
    });

    offerBanner.addEventListener('touchend', () => {
        isDown = false;
        offerBanner.classList.remove('active');
    });

    offerBanner.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - offerBanner.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed
        offerBanner.scrollLeft = scrollLeft - walk;
    });
});