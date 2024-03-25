class CustomNavbar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
        }

        .fab-wrapper {
          position: fixed;
          bottom: 3rem;
          right: 3rem;
        }

        .fab-checkbox {
          display: none;
        }

        .fab {
          position: absolute;
          bottom: -1rem;
          right: -1rem;
          width: 4rem;
          height: 4rem;
          background: #d20404;
          border-radius: 50%;
          background: #911d1d;
          box-shadow: 0px 5px 20px #590808;
          transition: all 0.3s ease;
          z-index: 1;
          border-bottom-right-radius: 6px;
          border: 1px solid #df0707;
        }

        .fab:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .fab-checkbox:checked~.fab:before {
          width: 90%;
          height: 90%;
          left: 5%;
          top: 5%;
          background-color: rgba(255, 255, 255, 0.2);
        }

        .fab:hover {
          background: #ff0000;
          box-shadow: 0px 5px 20px 5px #6f0606;
        }

        .fab-dots {
          position: absolute;
          height: 8px;
          width: 8px;
          background-color: white;
          border-radius: 50%;
          top: 50%;
          transform: translateX(0%) translateY(-50%) rotate(0deg);
          opacity: 1;
          animation: blink 3s ease infinite;
          transition: all 0.3s ease;
        }

        .fab-dots-1 {
          left: 15px;
          animation-delay: 0s;
        }

        .fab-dots-2 {
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          animation-delay: 0.4s;
        }

        .fab-dots-3 {
          right: 15px;
          animation-delay: 0.8s;
        }

        .fab-checkbox:checked~.fab .fab-dots {
          height: 6px;
        }

        .fab .fab-dots-2 {
          transform: translateX(-50%) translateY(-50%) rotate(0deg);
        }

        .fab-checkbox:checked~.fab .fab-dots-1 {
          width: 32px;
          border-radius: 10px;
          left: 50%;
          transform: translateX(-50%) translateY(-50%) rotate(45deg);
        }

        .fab-checkbox:checked~.fab .fab-dots-3 {
          width: 32px;
          border-radius: 10px;
          right: 50%;
          transform: translateX(50%) translateY(-50%) rotate(-45deg);
        }

        @keyframes blink {
          50% {
            opacity: 0.25;
          }
        }

        .fab-checkbox:checked~.fab .fab-dots {
          animation: none;
        }

        .fab-wheel {
          position: absolute;
          bottom: 0;
          right: 0;
          border: 1px solid #;
          width: 10rem;
          height: 10rem;
          transition: all 0.3s ease;
          transform-origin: bottom right;
          transform: scale(0);
        }

        .fab-checkbox:checked~.fab-wheel {
          transform: scale(1);
        }

        .fab-action {
          position: absolute;
          background: #ed0c0c;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: White;
          box-shadow: #510b0b;
          transition: all 1s ease;
          opacity: 0;
        }

        .fab-checkbox:checked~.fab-wheel .fab-action {
          opacity: 1;
        }

        .fab-action:hover {
          background-color: #ff3d3d;
        }

        .fab-wheel .fab-action-1 {
          right: -1rem;
          top: 0;
        }

        .fab-wheel .fab-action-2 {
          right: 3.4rem;
          top: 0.5rem;
        }

        .fab-wheel .fab-action-3 {
          left: 0.5rem;
          bottom: 3.4rem;
        }

        .fab-wheel .fab-action-4 {
          left: 0;
          bottom: -1rem;
        }

        .nav-icons {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin: 10px;
          box-shadow: 0px 0px 10px #000000;
        }
        ${this.getStyles()}
      </style>
      <div class="fab-wrapper">
        <input id="fabCheckbox" type="checkbox" class="fab-checkbox" />
        <label class="fab" for="fabCheckbox">
          <span class="fab-dots fab-dots-1"></span>
          <span class="fab-dots fab-dots-2"></span>
          <span class="fab-dots fab-dots-3"></span>
        </label>
        <div class="fab-wheel">
          <a class="fab-action fab-action-1" href="/">
            <i class="fas balss"></i>
            <img class="nav-icons" src="/assets/home-icon.jpg"></img>
          </a>
          <a class="fab-action fab-action-2" href="/games/pages/index.html">
            <i class="fas wieners"></i>
            <img class="nav-icons" src="/assets/game-icon.jpg"></img>
          </a>
          <a class="fab-action fab-action-3" href="/info+about/index.html">
            <i class="fas cumsock"></i>
            <img class="nav-icons" src="/assets/about-icon.png"></img>
          </a>
        </div>
      </div>
    `;
  }

  getStyles() {
    return `
      /* Add the provided CSS styles here */
      /* Place the original CSS code within this string */
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);


function loadWebsites() {
    var website1 = document.getElementById("website1").value;
    var website2 = document.getElementById("website2").value;

    if (!website1.startsWith('http://') && !website1.startsWith('https://')) {
        website1 = 'https://' + website1;
    }
    if (!website2.startsWith('http://') && !website2.startsWith('https://')) {
        website2 = 'https://' + website2;
    }

    document.getElementById("iframe1").src = website1;
    document.getElementById("iframe2").src = website2;
}