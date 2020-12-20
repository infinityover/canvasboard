declare var $: any;

export class AddBottomComponent {

  constructor() {

  }

    // Bottom HTML Tag
    addBottomTagHTMLCode(uid) {

      $(`#cb-buttons-${uid}`).append(`
          <!-- bottom -->
            <div class="tool box5 m-1" title="Add Card Bottom">
              <button class="btn btn-light" id="add-new-box-${uid}">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-down" fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1
                    .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" />
                </svg>
              </button>
            </div>
      `);
    }

    // Bottom HTML Tag Click Action
    addBottomTagClickFunction = (uid, addBlockEditor) => {
      //  Adding the click action of the below button
      $(`#add-new-box-${uid}`).click(() => {
        addBlockEditor(uid, 1);
      });
    }

    // Adding Bottom
    addBottomTagToolBox = (uid, addAfterBlockEditor) => {
     addAfterBlockEditor(uid, 1);
    }

}
