const editor = new EditorJS({
    /**
     * Id of Element that should contain Editor instance
     */
    holder: "article_content",
    autofocus: true,
    tools: {
        image: {
            class: SingleGifImage,
            inlineToolbar: true,
            config: {
                placeholder: "Paste Gif URL",
            },
        },
        gif: {
            class: MultipleGifImage,
            inlineToolbar: true,
        },
    },
    onChange: async (api, event, data) => {
        let content = await editor.save();
        console.log("data", data);
        console.log("content", content);
        // let html = edjsParser.parse(content);
        // console.log(html.join(""));

        console.log("Now I know that Editor's content changed!", event);
    },
    onReady: async () => {
        console.log("editorjs is ready");
        // if (dataIsHtml) {
        //     await editor.blocks.renderFromHTML(
        //         "<p>dsadsaffdsds</p><p><i><b>sfdfds</b></i></p>"
        //     );
        // }
    },
    data: {
        time: 1552744582955,
        // blocks: [
        //     {
        //         type: "image",
        //         data: {
        //             url: "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg",
        //             caption: "Here is a caption field",
        //             withBorder: false,
        //             withBackground: false,
        //             stretched: false,
        //         },
        //     },
        // ],
        version: "2.11.10",
    },
});

const saveButton = document.getElementById("save-button");
const output = document.getElementById("output");

const customParsers = {
    customBlock: function (data, config) {
        // parsing functionality
        // the config arg is user provided config merged with default config
    },
    image: function (data, config) {
        return `<img src="${data.url}" alt="${data.caption}" >`;
    },
};

saveButton.addEventListener("click", (e) => {
    e.preventDefault();

    editor.save().then((savedData) => {
        console.log("Article data: ", savedData);

        var blocks = savedData.blocks.filter((e) => e.type != "gif");
        var data = {
            time: savedData.time,
            blocks: blocks,
            version: savedData.version,
        };

        // const edjsParser = edjsHTML({ custom: imageParser });

        // let html = edjsParser.parse(data);

        const parser = new edjsParser(undefined, customParsers);
        //  let html = edjsParser.parse(data);
        const html = parser.parse(data);
        console.log(html);

        $("#myContent").val(html);

        $("#form")[0].submit();
    });
});
