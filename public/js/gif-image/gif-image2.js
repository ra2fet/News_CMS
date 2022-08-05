class MultipleGifImage {
    /**
     * Our tool should be placed at the Toolbox, so describe an icon and title
     */
    static get toolbox() {
        return {
            title: "Multiple GIF",
            icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
        };
    }

    /**
     * Allow render Image Blocks by pasting HTML tags, files and URLs
     */
    static get pasteConfig() {
        return {
            tags: ["GIF"],
            files: {
                mimeTypes: ["gif/*"],
                extensions: ["gif", "jpg", "png"], // You can specify extensions instead of mime-types
            },
            patterns: {
                image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i,
            },
        };
    }

    /**
     * Automatic sanitize config
     * @see {@link https://editorjs.io/sanitize-saved-data}
     */
    static get sanitize() {
        return {
            url: {},
            caption: {
                b: true,
                a: {
                    href: true,
                },
                i: true,
            },
        };
    }

    /**
     * Tool class constructor
     * @param {ImageToolData} data — previously saved data
     * @param {object} api — Editor.js Core API {@link  https://editorjs.io/api}
     * @param {ImageToolConfig} config — custom config that we provide to our tool's user
     */
    constructor({ data, api, config }) {
        this.api = api;
        this.config = config || {};
        this.data = {
            url: data.url || "",
            caption: data.caption || "",
            withBorder: data.withBorder !== undefined ? data.withBorder : false,
            withBackground:
                data.withBackground !== undefined ? data.withBackground : false,
            stretched: data.stretched !== undefined ? data.stretched : false,
        };

        this.wrapper = undefined;
        this.settings = [
            {
                name: "withBorder",
                icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>`,
            },
            {
                name: "stretched",
                icon: `<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>`,
            },
            {
                name: "withBackground",
                icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>`,
            },
        ];
    }

    /**
     * Return a Tool's UI
     * @return {HTMLElement}
     */
    render() {
        // alert("hello, world");
        var context = this;
        this.wrapper = document.createElement("div");

        this._openGifBox();
        $.ajax({
            url: "http://localhost:3000/trending",
            type: "GET",
            dataType: "json",
            data: {
                limit: 8,
            },
            success: function (data, status) {
                var htmlData = "";

                // Gif Grid Section

                htmlData += "<div id='results' class='row'>";
                htmlData += "<h5 class='text-primary pb-3'>Trending Gifs</h5>";
                console.log(data);

                data.forEach((e) => {
                    htmlData +=
                        "<div style='cursor:pointer' onclick='itemFunc(event)'  class='col-3  text-center '>";
                    htmlData +=
                        "<img  class='img-fluid h-50 w-50' src='" +
                        e.gif +
                        "' >";
                    htmlData += "<p class='text-truncate'>" + e.title + "</p>";
                    htmlData += "</div>";
                });

                htmlData += "</div>";

                // See More
                htmlData += " <div id='load-more-section' class='text-center'>";
                htmlData +=
                    " <button id='load-more-btn' onclick='load_more_trending(1,8)' class='btn btn-secondary'> See More";
                htmlData += "<i class='fa fa-angle-down mx-1'></i>";
                htmlData += "</button>";
                htmlData += "</div>";

                // console.log("data", data[0].title);
                console.log(htmlData);

                $("#myModal").find(".modal-body")[0].innerHTML = htmlData;

                $("#myModal").appendTo("body").modal("toggle");

                console.log("Data: " + data + ", Status: " + status);
            },
            error: function (data) {
                console.log("Error: " + data);
            },
        });
        console.log("toggle");

        return this.wrapper;
    }

    /**
     * @private
     * Create image with caption field
     * @param {string} url — image source
     * @param {string} captionText — caption value
     */
    _openGifBox() {
        var html = '<div id="myModal" class="modal" tabindex="-1">';
        html += '<div class="modal-dialog modal-xl"">';
        html += '<div class="modal-content">';
        html += '<div class="modal-header">';
        html += '<h5 class="modal-title">Gif Popup</h5>';

        html +=
            ' <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
        html += " </div>";

        // Search Section
        html += "<div id='search-section' class='mx-3 mt-2' >";
        html += '<form action="" class="">';
        html += ' <div class="input-group mb-3">';
        html +=
            '<input id="searchInput" type="text" class="form-control form-control-md" placeholder="Search Here">';
        html +=
            '<button type="button" onclick="search()" id="searchGif" class="input-group-text btn-success"><i class="bi bi-search me-2"></i> Search</button>';
        html += "</div>";
        html += "</form>";
        html += "</div>";
        // End Search Section

        html += '<div class="modal-body">';

        // html += "<p>Modal body text goes here.</p>";
        html += " </div>";
        html += '<div class="modal-footer">';
        html +=
            '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>';
        html +=
            '  <button id="submitGif" onclick="saveGIF(event)" type="button" class="btn btn-primary">Insert</button>';
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";

        this.wrapper.innerHTML = html;
    }
    _createImage(url, captionText) {
        const image = document.createElement("img");
        const caption = document.createElement("div");

        image.src = url;
        caption.contentEditable = true;
        caption.innerHTML = captionText || "";

        this.wrapper.innerHTML = "";
        this.wrapper.appendChild(image);
        this.wrapper.appendChild(caption);

        this._acceptTuneView();
    }

    /**
     * Extract data from the UI
     * @param {HTMLElement} blockContent — element returned by render method
     * @return {SimpleImageData}
     */
    save(blockContent) {
        // const image = blockContent.querySelectorAll("img");
        // const caption = blockContent.querySelectorAll("[contenteditable]");
        // console.log(image);
        // return Object.assign(this.data, {
        //     url: image.src,
        //     caption: caption.innerHTML || "",
        // });
    }

    /**
     * Skip empty blocks
     * @see {@link https://editorjs.io/saved-data-validation}
     * @param {ImageToolConfig} savedData
     * @return {boolean}
     */
    // validate(savedData) {
    //     if (!savedData.url.trim()) {
    //         return false;
    //     }

    //     return true;
    // }

    /**
     * Making a Block settings: 'add border', 'add background', 'stretch to full width'
     * @see https://editorjs.io/making-a-block-settings — tutorial
     * @see https://editorjs.io/tools-api#rendersettings - API method description
     * @return {HTMLDivElement}
     */
    renderSettings() {
        const wrapper = document.createElement("div");

        this.settings.forEach((tune) => {
            let button = document.createElement("div");

            button.classList.add(this.api.styles.settingsButton);
            button.classList.toggle(
                this.api.styles.settingsButtonActive,
                this.data[tune.name]
            );
            button.innerHTML = tune.icon;
            wrapper.appendChild(button);

            button.addEventListener("click", () => {
                this._toggleTune(tune.name);
                button.classList.toggle(this.api.styles.settingsButtonActive);
            });
        });

        return wrapper;
    }

    /**
     * @private
     * Click on the Settings Button
     * @param {string} tune — tune name from this.settings
     */
    _toggleTune(tune) {
        this.data[tune] = !this.data[tune];
        this._acceptTuneView();
    }

    /**
     * Add specified class corresponds with activated tunes
     * @private
     */
    _acceptTuneView() {
        this.settings.forEach((tune) => {
            this.wrapper.classList.toggle(tune.name, !!this.data[tune.name]);

            if (tune.name === "stretched") {
                this.api.blocks.stretchBlock(
                    this.api.blocks.getCurrentBlockIndex(),
                    !!this.data.stretched
                );
            }
        });
    }

    /**
     * Handle paste event
     * @see https://editorjs.io/tools-api#onpaste - API description
     * @param {CustomEvent }event
     */
    onPaste(event) {
        switch (event.type) {
            case "tag":
                const imgTag = event.detail.data;
                this._createImage(imgTag.src);
                break;
            case "file":
                /* We need to read file here as base64 string */
                const file = event.detail.file;
                const reader = new FileReader();

                reader.onload = (loadEvent) => {
                    this._createImage(loadEvent.target.result);
                };

                reader.readAsDataURL(file);
                break;
            case "pattern":
                const src = event.detail.data;

                this._createImage(src);
                break;
        }
    }
}
