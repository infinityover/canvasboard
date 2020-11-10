declare var $: any;

export class AddEmbedComponent {
  constructor() { }

  addEmbedTagHTMLCode = (uid) => {
    $(`#cb-buttons-${uid}`).append(`
    <!-- Embed -->
    <div class="tool box4 m-1" title="Embed link">
      <button class="btn btn-light" id="add-embed-box2-${uid}">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-code-square" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0
                  0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path fill-rule="evenodd"
                  d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.
                  708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .
                  708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
              </svg>
      </button>
    </div>
    `);
  }

  addEmbedTagClickFunction = (uid) => {

  }

  addEmbedToolBox = (uid, url: string, youtubeURL: string) => {
    if (url !== '') {
      $(`#cb-box-2-${uid} .cb-box-3`).css('display', 'none');
      $(`#cb-box-2-${uid}`).css('display', 'flex').css('justify-content', 'center').append(`
    <!-- Embed iframe -->
    <embed src="${url}" width="100%" height="600" frameborder="0" allowfullscreen/>
    `);
    } else if (youtubeURL !== '') {

      $(`#cb-box-2-${uid} .cb-box-3`).css('display', 'none');
      $(`#cb-box-2-${uid}`).css('display', 'flex').css('justify-content', 'center').append(`
    <!-- Embed iframe -->
    <embed src="${youtubeURL.replace(/watch\?v=/gi, 'embed/')}" width="100%" height="600" frameborder="0" allowfullscreen/>
    `);
    }
  }
}