class ImageContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div class="image-container-main" style="display: flex;justify-content: center;align-items: center;margin: 0px auto;">
                <div class="image-container" style="display: flex;justify-content: center;align-items: center;margin: 0px auto;">
                    <img src="./image/Leaf-Right.svg" style="max-width:100%;height: auto;transform: scalex(-1)">
                    <a href="http://google.com" style="display:inline-block" target="_blank" rel="noopener noreferrer">
                        <img src="./image/NBC-Logo.svg" style="max-width:100%;height: auto;">
                    </a>
                    <a href="http://google.com" style="display:inline-block" target="_blank" rel="noopener noreferrer">
                        <img src="./image/CBS-Logo.svg" style="max-width:100%;height: auto;">
                    </a>
                    <a href="http://google.com"  style="display:inline-block" target="_blank" rel="noopener noreferrer">
                        <img src="./image/ABC-Logo.svg" style="max-width:100%;height: auto;">
                    </a>
                    <a href="http://google.com"  style="display:inline-block" target="_blank" rel="noopener noreferrer">
                        <img src="./image/FOX-Logo.svg" style="max-width:100%;height: auto;">
                    </a>
                    <a href="http://google.com" style="display:inline-block" target="_blank" rel="noopener noreferrer">
                        <img src="./image/AP-Logo.svg" style="max-width:100%;height: auto;">
                    </a>
                    <img src="./image/Leaf-Left.svg" style="max-width:100%;height: auto;">
                </div>
            </div>
        `;
    }
}

window.customElements.define('image-container', ImageContainer);